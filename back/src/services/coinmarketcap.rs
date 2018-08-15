//! UserDeliveryAddress Services, presents CRUD operations with user_roles
use std::collections::HashMap;
use std::sync::Arc;
use std::time::SystemTime;

use futures_cpupool::CpuPool;

use chrono::prelude::*;
use chrono::Duration;
use diesel::connection::AnsiTransactionManager;
use diesel::pg::Pg;
use diesel::Connection;
use failure::Fail;
use futures::Future;
use hyper::Client as HyperClient;
use hyper::Method;
use hyper_tls::HttpsConnector;
use r2d2::{ManageConnection, Pool};
use tokio_core::reactor::Core;

use super::types::ServiceFuture;
use errors::ErrorKind;
use http::*;
use models::{CoinMarketCap, CoinMarketCapValue, CoinMarketCapValueExt};
use repos::{CoinMarketCapsRepo, CoinMarketCapsRepoImpl};
use types::Client;

pub trait CoinMarketCapsService {
    /// Returns coinmarketcap history
    fn get(&self, from: SystemTime, to: SystemTime) -> ServiceFuture<Vec<CoinMarketCapValue>>;
    /// Fetches more data from coinmarketcap
    fn fetch_more(&self) -> ServiceFuture<Vec<CoinMarketCapValue>>;
    /// Fetches last coinmarketcap data
    fn last(&self) -> ServiceFuture<CoinMarketCapValueExt>;
}

/// UserDeliveryAddress services, responsible for UserDeliveryAddress-related CRUD operations
pub struct CoinMarketCapsServiceImpl<
    T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
    M: ManageConnection<Connection = T>,
> {
    pub db_pool: Pool<M>,
    pub cpu_pool: CpuPool,
    pub client: Arc<Client>,
}

impl<
        T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
        M: ManageConnection<Connection = T>,
    > CoinMarketCapsServiceImpl<T, M>
{
    pub fn new(db_pool: Pool<M>, cpu_pool: CpuPool, dns_threads: usize) -> Self {
        let mut connector = HttpsConnector::new(dns_threads).unwrap();
        connector.force_https(true);
        let client = Arc::new(HyperClient::builder().build(connector));
        Self {
            db_pool,
            cpu_pool,
            client,
        }
    }
}

impl<
        T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
        M: ManageConnection<Connection = T>,
    > CoinMarketCapsService for CoinMarketCapsServiceImpl<T, M>
{
    /// Returns list of user_delivery_address
    fn get(&self, from: SystemTime, to: SystemTime) -> ServiceFuture<Vec<CoinMarketCapValue>> {
        let db_pool = self.db_pool.clone();
        Box::new(
            self.cpu_pool
                .spawn_fn(move || {
                    db_pool
                        .get()
                        .map_err(|e| e.context(ErrorKind::Connection).into())
                        .and_then(move |conn| {
                            let capitalization_repo = CoinMarketCapsRepoImpl::new(&*conn);
                            capitalization_repo.list(from, to)
                        })
                })
                .map_err(|e| {
                    e.context("Service CoinMarketCapsService, get endpoint error occured.")
                        .into()
                }),
        )
    }

    /// Fetches more data from coinmarketcap
    fn fetch_more(&self) -> ServiceFuture<Vec<CoinMarketCapValue>> {
        let db_pool = self.db_pool.clone();
        let client = self.client.clone();
        Box::new(
            self.cpu_pool
                .spawn_fn(move || {
                    db_pool
                        .get()
                        .map_err(|e| e.context(ErrorKind::Connection).into())
                        .and_then(move |conn| {
                            let capitalization_repo = CoinMarketCapsRepoImpl::new(&*conn);
                            capitalization_repo
                                .last()
                                .and_then(|last| {
                                    let from_to = if let Some(last) = last {
                                        let duration =
                                            SystemTime::now().duration_since(last.time).unwrap();
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

                                    if let Some((from, to)) = from_to {
                                        let mut query = HashMap::new();
                                        let url = format!("https://graphs2.coinmarketcap.com/currencies/storiqa/{}/{}/", from.timestamp() * 1000, to.timestamp() * 1000);
                                        debug!("url = {}", url);
                                        let mut core = Core::new().unwrap();
                                        core.run(
                                            request_entity::<CoinMarketCap>(
                                                client,
                                                &Method::GET,
                                                &url,
                                                &query,
                                                None,
                                                None,
                                            ).map_err(|e| e.context(ErrorKind::Http).into()),
                                        )
                                    } else {
                                        Ok(CoinMarketCap::default())
                                    }
                                })
                                .and_then(|caps| capitalization_repo.add(caps.to_vec()))
                        })
                })
                .map_err(|e| {
                    e.context("Service CoinMarketCapsService, fetch_more endpoint error occured.")
                        .into()
                }),
        )
    }

    /// Fetches last coinmarketcap data
    fn last(&self) -> ServiceFuture<CoinMarketCapValueExt> {
        let db_pool = self.db_pool.clone();
        Box::new(
            self.cpu_pool
                .spawn_fn(move || {
                    db_pool
                        .get()
                        .map_err(|e| e.context(ErrorKind::Connection).into())
                        .and_then(move |conn| {
                            let capitalization_repo = CoinMarketCapsRepoImpl::new(&*conn);
                            capitalization_repo.last().and_then(|last| {
                                if let Some(last) = last {
                                    let from: DateTime<Utc> = last.time.into();
                                    let to: DateTime<Utc> = from - Duration::days(1);
                                    capitalization_repo
                                        .list(from.into(), to.into())
                                        .map(|list| {
                                            CoinMarketCapValueExt::new(
                                                last,
                                                list.into_iter().nth(0).unwrap_or_default(),
                                            )
                                        })
                                } else {
                                    return Err(format_err!("No data!"));
                                }
                            })
                        })
                })
                .map_err(|e| {
                    e.context("Service CoinMarketCapsService, last endpoint error occured.")
                        .into()
                }),
        )
    }
}
