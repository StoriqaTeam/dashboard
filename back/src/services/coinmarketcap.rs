//! UserDeliveryAddress Services, presents CRUD operations with user_roles
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
use r2d2::{ManageConnection, Pool};

use super::types::ServiceFuture;
use errors::ErrorKind;
use models::{CoinMarketCapValue, CoinMarketCapValueExt};
use repos::{CoinMarketCapsRepo, CoinMarketCapsRepoImpl};

pub trait CoinMarketCapsService {
    /// Returns coinmarketcap history
    fn get(&self, from: SystemTime, to: SystemTime) -> ServiceFuture<Vec<CoinMarketCapValue>>;
    /// Fetches last coinmarketcap data
    fn last(&self) -> ServiceFuture<CoinMarketCapValueExt>;
    /// Returns whole coinmarketcap history
    fn all(&self) -> ServiceFuture<Vec<CoinMarketCapValue>>;
}

/// UserDeliveryAddress services, responsible for UserDeliveryAddress-related CRUD operations
pub struct CoinMarketCapsServiceImpl<
    T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
    M: ManageConnection<Connection = T>,
> {
    pub db_pool: Pool<M>,
    pub cpu_pool: CpuPool,
    pub points_count: usize,
}

impl<
        T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
        M: ManageConnection<Connection = T>,
    > CoinMarketCapsServiceImpl<T, M>
{
    pub fn new(db_pool: Pool<M>, cpu_pool: CpuPool, points_count: usize) -> Self {
        Self {
            db_pool,
            cpu_pool,
            points_count,
        }
    }
}

impl<
        T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
        M: ManageConnection<Connection = T>,
    > CoinMarketCapsService for CoinMarketCapsServiceImpl<T, M>
{
    /// Returns coinmarketcap history
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
                }).map_err(|e| {
                    e.context("Service CoinMarketCapsService, get endpoint error occured.")
                        .into()
                }),
        )
    }

    /// Returns list of user_delivery_address
    fn all(&self) -> ServiceFuture<Vec<CoinMarketCapValue>> {
        let db_pool = self.db_pool.clone();
        let points_count = self.points_count;
        Box::new(
            self.cpu_pool
                .spawn_fn(move || {
                    db_pool
                        .get()
                        .map_err(|e| e.context(ErrorKind::Connection).into())
                        .and_then(move |conn| {
                            let capitalization_repo = CoinMarketCapsRepoImpl::new(&*conn);
                            capitalization_repo.all().map(|points| {
                                let skip = points.len() / points_count;
                                debug!("skip = {}", skip);
                                points
                                    .into_iter()
                                    .filter(|p| p.id % (skip as i32) == 0)
                                    .collect()
                            })
                        })
                }).map_err(|e| {
                    e.context("Service CoinMarketCapsService, get endpoint error occured.")
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
                                    let last_time: DateTime<
                                        Utc,
                                    > = last.time.into();
                                    let day_ago: DateTime<Utc> = last_time - Duration::days(1);
                                    capitalization_repo
                                        .first_after(day_ago.into())
                                        .map(|day_ago| CoinMarketCapValueExt::new(last, day_ago))
                                } else {
                                    return Err(format_err!("No data!"));
                                }
                            })
                        })
                }).map_err(|e| {
                    e.context("Service CoinMarketCapsService, last endpoint error occured.")
                        .into()
                }),
        )
    }
}
