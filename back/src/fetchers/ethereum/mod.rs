mod error;

use self::error::*;
use clients::EthereumClient;
use clients::EthereumClientError;
use diesel::pg::PgConnection;
use environment::Environment;
use failure::Fail;
use futures::future;
use futures::future::Either;
use futures::prelude::*;
use futures::stream;
use futures_cpupool::CpuPool;
use repos::{ReposError, TransactionsRepo, TransactionsRepoImpl};
use std::cmp::min;
use std::sync::Arc;
use std::sync::Mutex;
use std::time::Duration;
use tokio::timer::Interval;
use types::{Connection, DbPool};

#[derive(Clone)]
pub struct EthereumFetcher {
    busy: Arc<Mutex<bool>>,
    duration: Duration,
    db_pool: DbPool,
    client: Arc<EthereumClient>,
    blocks_per_fetch: i64,
    thread_pool: Arc<CpuPool>,
    storiqa_genesis_block: i64,
}

impl EthereumFetcher {
    pub fn new(env: Environment) -> Self {
        let duration = Duration::from_secs(env.config.ethereum.fetcher_tick_seconds as u64);
        let thread_pool = CpuPool::new(env.config.fetcher.thread_count as usize);
        EthereumFetcher {
            busy: Arc::new(Mutex::new(false)),
            duration,
            db_pool: env.db_pool.clone(),
            client: env.ethereum_client.clone(),
            blocks_per_fetch: env.config.ethereum.blocks_per_fetch,
            thread_pool: Arc::new(thread_pool),
            storiqa_genesis_block: env.config.ethereum.storiqa_genesis_block,
        }
    }

    pub fn start(self) -> impl Stream<Item = (), Error = Error> {
        info!("Ethereum fetcher started.");
        let interval =
            Interval::new_interval(self.duration).map_err(|e| e.context(ErrorKind::Timer).into());

        interval.and_then(move |_| {
            let busy = *self
                .busy
                .lock()
                .expect("Ethereum fetcher: poisoned mutex at fetch step");
            match busy {
                true => {
                    warn!("Ethereum fetcher: tried to ping ethereum fetcher, but it was busy");
                    Either::A(future::ok(()))
                }
                false => Either::B(self.make_step()),
            }
        })
    }

    fn make_step(&self) -> impl Future<Item = (), Error = Error> {
        {
            let mut busy = self
                .busy
                .lock()
                .expect("Ethereum fetcher: poisoned mutex at fetch step");
            *busy = true;
        }
        let blocks_per_fetch = self.blocks_per_fetch;
        let self1 = self.clone();
        let self2 = self.clone();
        let self3 = self.clone();
        let self4 = self.clone();
        self.use_transactions_repo(|repo| repo.max_block())
            .and_then(move |maybe_max_block| {
                // refetch last block in case data was corrupted
                let from = maybe_max_block.unwrap_or(self1.storiqa_genesis_block);
                self1.use_ethereum_client(move |client| {
                    client
                        .fetch_current_block_number()
                        .map(move |to| (from, to))
                })
            })
            .and_then(move |(from_min, to_max)| {
                let mut jobs: Vec<(i64, i64)> = Vec::new();
                let mut from = from_min;
                while from <= to_max {
                    let to = min(from + blocks_per_fetch, to_max);
                    jobs.push((from, to));
                    from += to - from + 1;
                }
                let stream = stream::iter_ok(jobs)
                    .and_then(move |(from, to)| {
                        info!(
                            "Ethereum client: Fetching transactions for blocks `{}` - `{}`",
                            from, to
                        );
                        self2.use_ethereum_client(move |client| {
                            client.fetch_transactions(Some(from), Some(to))
                        })
                    })
                    .and_then(move |transactions| {
                        debug!(
                            "Ethereum client: Received `{}` transactions",
                            transactions.len()
                        );
                        self3.use_transactions_repo(move |repo| repo.insert(transactions))
                    });
                stream.for_each(|_| Ok(()))
            })
            .then(move |res| {
                let mut busy = self4
                    .busy
                    .lock()
                    .expect("Ethereum fetcher: poisoned mutex at fetch step");
                *busy = false;
                res
            })
    }

    fn use_ethereum_client<F, T, U>(&self, f: F) -> impl Future<Item = T, Error = Error>
    where
        T: Send + 'static,
        F: FnOnce(Arc<EthereumClient>) -> U + Send + 'static,
        U: IntoFuture<Item = T, Error = EthereumClientError>,
    {
        f(self.client.clone())
            .into_future()
            .map_err(|e| e.context(ErrorKind::EthereumClient).into())
    }

    fn use_transactions_repo<F, T>(&self, f: F) -> impl Future<Item = T, Error = Error>
    where
        T: Send + 'static,
        F: FnOnce(TransactionsRepoImpl<PgConnection>) -> Result<T, ReposError> + Send + 'static,
    {
        let self_clone = self.clone();
        self.thread_pool.spawn_fn(move || {
            self_clone.get_connection_blocking().and_then(|conn| {
                let repo = TransactionsRepoImpl::new(&*conn);
                f(repo).map_err(|e| e.context(ErrorKind::TransactionsRepo).into())
            })
        })
    }

    fn get_connection_blocking(&self) -> impl Future<Item = Connection, Error = Error> {
        future::result(self.db_pool.get())
            .map_err(|e| e.context(ErrorKind::DatabaseConnection).into())
    }
}
