//! UserDeliveryAddress Services, presents CRUD operations with user_roles
use std::time::SystemTime;

use futures_cpupool::CpuPool;

use diesel::connection::AnsiTransactionManager;
use diesel::pg::Pg;
use diesel::Connection;
use failure::Fail;
use futures::Future;
use r2d2::{ManageConnection, Pool};

use super::types::ServiceFuture;
use errors::ErrorKind;
use models::Capitalization;
use repos::{CapitalizationRepo, CapitalizationRepoImpl};

pub trait CapitalizationService {
    /// Returns list of user_delivery_address
    fn get(&self, from: SystemTime, to: SystemTime) -> ServiceFuture<Vec<Capitalization>>;
}

/// UserDeliveryAddress services, responsible for UserDeliveryAddress-related CRUD operations
pub struct CapitalizationServiceImpl<
    T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
    M: ManageConnection<Connection = T>,
> {
    pub db_pool: Pool<M>,
    pub cpu_pool: CpuPool,
}

impl<
        T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
        M: ManageConnection<Connection = T>,
    > CapitalizationServiceImpl<T, M>
{
    pub fn new(db_pool: Pool<M>, cpu_pool: CpuPool) -> Self {
        Self { db_pool, cpu_pool }
    }
}

impl<
        T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
        M: ManageConnection<Connection = T>,
    > CapitalizationService for CapitalizationServiceImpl<T, M>
{
    /// Returns list of user_delivery_address
    fn get(&self, from: SystemTime, to: SystemTime) -> ServiceFuture<Vec<Capitalization>> {
        let db_pool = self.db_pool.clone();
        Box::new(
            self.cpu_pool
                .spawn_fn(move || {
                    db_pool
                        .get()
                        .map_err(|e| e.context(ErrorKind::Connection).into())
                        .and_then(move |conn| {
                            let capitalization_repo = CapitalizationRepoImpl::new(&*conn);
                            capitalization_repo.list(from, to)
                        })
                }).map_err(|e| {
                    e.context("Service CapitalizationService, get endpoint error occured.")
                        .into()
                }),
        )
    }
}
