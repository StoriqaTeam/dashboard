mod error;

use clients::EthereumClient;
use environment::Environment;
use failure::Fail;
use futures::future;
use futures::future::Either;
use futures::prelude::*;
use futures::stream;
use repos::{TransactionsRepo, TransactionsRepoImpl, ReposErrorKind};
use std::cmp::{max, min};
use std::sync::Arc;
use std::sync::Mutex;
use std::time::Duration;
use tokio::timer::Interval;
use types::{DbPool, Connection};
use self::error::*;
use futures_cpupool::CpuPool;
use diesel::pg::PgConnection;

#[derive(Clone)]
pub struct EthereumFetcher {
    busy: Arc<Mutex<bool>>,
    duration: Duration,
    db_pool: Arc<DbPool>,
    client: Arc<EthereumClient>,
    blocks_per_fetch: i64,
    thread_pool: Arc<CpuPool>,
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
        }
    }

    pub fn start(self) -> impl Stream<Item = (), Error = Error> {
        info!("Ethereum fetcher started.");
        let interval = Interval::new_interval(self.duration).map_err(|e| {
            e.context(ErrorKind::Timer).into()
        });

        interval.and_then(move |_| {
            let busy = self.busy
                .lock()
                .expect("Ethereum fetcher: poisoned mutex at fetch step");
            match *busy {
                true => Either::A(future::ok(())),
                false => Either::B(self.make_step()),
            }
        })
    }

    fn make_step(&self) -> impl Future<Item = (), Error = Error> {
        info!("Step!!!");
        let client = self.client.clone();
        let client2 = self.client.clone();
        let blocks_per_fetch = self.blocks_per_fetch;
        let pool = self.db_pool.clone();
        // self.transaction_repo_query(|repo| repo.max_block())
        EthereumFetcher::get_connection(&*self.db_pool)
            .and_then(|conn| {
                let repo = TransactionsRepoImpl::new(&*conn);
                repo.max_block()
                    .map_err(|e| e.context(ErrorKind::TransactionsRepo).into())
            })
            .and_then(move |maybe_max_block| {
                let from = maybe_max_block.unwrap_or(-1) + 1;
                client
                    .fetch_current_block_number()
                    .map(move |to| (from, to))
            })
            .map(move |(from_min, to_max)| {
                let mut jobs: Vec<(i64, i64)> = Vec::new();
                let mut from = from_min;
                while from <= to_max {
                    let to = min(from + blocks_per_fetch, to_max);
                    jobs.push((from, to));
                    from += to - from + 1;
                }
                let stream = stream::iter_ok(jobs)
                    .and_then(move |(from, to)| client2.fetch_transactions(Some(from), Some(to)))
                    .and_then(move |transactions| {
                        future::result(pool.get())
                            .map(move |conn| (conn, transactions))
                            .map_err(|e| e.context(ErrorKind::Connection).into())
                    })
                    .and_then(|(conn, transactions)| {
                        let repo = TransactionsRepoImpl::new(&*conn);
                        repo.insert(transactions)
                            .map_err(|e| e.context(ErrorKind::Database).into())
                    });
                stream.for_each(|_| Ok(()))
            })
            .map(|_| ())
    }

    fn transaction_repo_query<F, T>(&self, f: F) -> impl Future<Item = T, Error = Error>
        where
            T: Send + 'static,
            F: FnOnce(TransactionsRepoImpl<PgConnection>) -> Result<T, ReposErrorKind> + Send + 'static,
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
            .map_err(|e| e.context(ErrorKind::DatabaseConnecion).into())
    }
}
