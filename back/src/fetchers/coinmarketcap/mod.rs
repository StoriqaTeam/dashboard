mod error;

use self::error::*;
use chrono::prelude::*;
use chrono::Duration;
use diesel::pg::PgConnection;
use environment::FetcherEnvironment;
use failure::Error as FailureError;
use failure::Fail;
use futures::future;
use futures::future::Either;
use futures::prelude::*;
use futures_cpupool::CpuPool;
use hyper::Client as HyperClient;
use hyper::Method;
use hyper_tls::HttpsConnector;

use http::*;
use models::CoinMarketCap;
use rand;
use repos::{CoinMarketCapsRepo, CoinMarketCapsRepoImpl};
use std::collections::HashMap;
use std::sync::Arc;
use std::sync::Mutex;
use std::thread;
use std::time::Duration as StdDuration;
use std::time::SystemTime;
use tokio::timer::Interval;
use types::{Client, Connection, DbPool};

#[derive(Clone)]
pub struct CoinmarketcapFetcher {
    busy: Arc<Mutex<bool>>,
    duration: StdDuration,
    db_pool: DbPool,
    thread_pool: CpuPool,
    client: Arc<Client>,
}

impl CoinmarketcapFetcher {
    pub fn new(env: FetcherEnvironment) -> Self {
        let duration = StdDuration::from_secs(env.config.coinmarketcap.fetcher_tick_seconds as u64);
        let thread_pool = CpuPool::new(env.config.fetcher.thread_count as usize);
        let mut connector = HttpsConnector::new(env.config.http.dns_threads).unwrap();
        connector.force_https(true);
        let client = Arc::new(HyperClient::builder().build(connector));

        CoinmarketcapFetcher {
            busy: Arc::new(Mutex::new(false)),
            duration,
            db_pool: env.db_pool.clone(),
            client,
            thread_pool: thread_pool,
        }
    }

    pub fn start(self) -> impl Stream<Item = (), Error = Error> {
        info!("Coinmarketcap fetcher started.");
        let interval =
            Interval::new_interval(self.duration).map_err(|e| e.context(ErrorKind::Timer).into());

        interval.and_then(move |_| {
            let random_time = 10f64 * rand::random::<f64>();
            let duration = StdDuration::from_secs(random_time as u64);
            thread::sleep(duration);

            let busy = self
                .busy
                .lock()
                .expect("Coinmarketcap fetcher: poisoned mutex at fetch step");
            match *busy {
                true => Either::A(future::ok(())),
                false => Either::B(self.clone().make_step()),
            }
        })
    }

    fn make_step(self) -> impl Future<Item = (), Error = Error> {
        self.fetch_from_coinmarketcap_repo(|repo| repo.last())
            .and_then(move |(s, last)| {
                let from_to = if let Some(last) = last {
                    let duration = SystemTime::now().duration_since(last.time).unwrap();
                    if duration.as_secs() > 600 {
                        let from: DateTime<Utc> = last.time.into();
                        let to: DateTime<Utc> = from + Duration::days(1);
                        Some((from, to))
                    } else {
                        None
                    }
                } else {
                    let from = DateTime::<Utc>::from_utc(
                        NaiveDateTime::new(
                            NaiveDate::from_ymd(2018, 03, 14),
                            NaiveTime::from_hms(0, 0, 0),
                        ),
                        Utc,
                    );
                    let to = DateTime::<Utc>::from_utc(
                        NaiveDateTime::new(
                            NaiveDate::from_ymd(2018, 03, 15),
                            NaiveTime::from_hms(0, 0, 0),
                        ),
                        Utc,
                    );
                    Some((from, to))
                };

                s.fetch_from_coinmarketcap(move |client| {
                    if let Some((from, to)) = from_to {
                        let mut query = HashMap::new();
                        let url = format!(
                            "https://graphs2.coinmarketcap.com/currencies/storiqa/{}/{}/",
                            from.timestamp() * 1000,
                            to.timestamp() * 1000
                        );
                        info!("parsing: {}", url);
                        Either::A(request_entity::<CoinMarketCap>(
                            client,
                            &Method::GET,
                            &url,
                            &query,
                            None,
                            None,
                        ))
                    } else {
                        Either::B(future::ok(CoinMarketCap::default()))
                    }
                })
            })
            .and_then(|(s, caps)| s.fetch_from_coinmarketcap_repo(|repo| repo.add(caps.to_vec())))
            .map(|_| ())
            .map_err(|(_, e)| e)
    }

    fn fetch_from_coinmarketcap<F, T, U>(
        self,
        f: F,
    ) -> impl Future<Item = (Self, T), Error = (Self, Error)>
    where
        T: Send + 'static,
        F: FnOnce(Arc<Client>) -> U + Send + 'static,
        U: IntoFuture<Item = T, Error = FailureError>,
    {
        f(self.client.clone())
            .into_future()
            .map_err(|e| e.context(ErrorKind::HttpClient).into())
            .then(|res| match res {
                Ok(r) => Ok((self, r)),
                Err(e) => Err((self, e)),
            })
    }

    fn fetch_from_coinmarketcap_repo<F, T>(
        self,
        f: F,
    ) -> impl Future<Item = (Self, T), Error = (Self, Error)>
    where
        T: Send + 'static,
        F: FnOnce(CoinMarketCapsRepoImpl<PgConnection>) -> Result<T, FailureError> + Send + 'static,
    {
        let self_clone = self.clone();
        self.thread_pool.spawn_fn(move || {
            self_clone.get_connection_blocking().and_then(|(s, conn)| {
                let repo = CoinMarketCapsRepoImpl::new(&*conn);
                match f(repo).map_err(|e| e.context(ErrorKind::CoinmarketcapRepo).into()) {
                    Ok(r) => Ok((s, r)),
                    Err(e) => Err((s, e)),
                }
            })
        })
    }

    fn get_connection_blocking(
        self,
    ) -> impl Future<Item = (Self, Connection), Error = (Self, Error)> {
        future::result(self.db_pool.get())
            .map_err(|e| e.context(ErrorKind::DatabaseConnection).into())
            .then(|res| match res {
                Ok(r) => Ok((self, r)),
                Err(e) => Err((self, e)),
            })
    }
}
