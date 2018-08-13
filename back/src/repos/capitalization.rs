//! Repo for user_delivery_address table. UserDeliveryAddress is an entity that connects
//! users and roles. I.e. this table is for user has-many roles
//! relationship

use std::time::SystemTime;

use diesel;
use diesel::connection::AnsiTransactionManager;
use diesel::pg::Pg;
use diesel::prelude::*;
use diesel::query_dsl::RunQueryDsl;
use diesel::Connection;
use failure::Error as FailureError;

use super::types::RepoResult;
use models::{Capitalization, CoinMarketCap};
use schema::capitalization::dsl::*;

/// Capitalization repository for handling Capitalization
pub trait CapitalizationRepo {
    /// Returns capitalization for specific period
    fn list(&self, from: SystemTime, to: SystemTime) -> RepoResult<Vec<Capitalization>>;
    /// Returns last value
    fn last(&self) -> RepoResult<Option<Capitalization>>;
    /// Add new value
    fn add(&self, new_caps: Vec<CoinMarketCap>) -> RepoResult<Vec<Capitalization>>;
}

/// Implementation of Capitalization trait
pub struct CapitalizationRepoImpl<
    'a,
    T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
> {
    pub db_conn: &'a T,
}

impl<'a, T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static>
    CapitalizationRepoImpl<'a, T>
{
    pub fn new(db_conn: &'a T) -> Self {
        Self { db_conn }
    }
}

impl<'a, T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static>
    CapitalizationRepo for CapitalizationRepoImpl<'a, T>
{
    /// Returns capitalization for specific period
    fn list(&self, from: SystemTime, to: SystemTime) -> RepoResult<Vec<Capitalization>> {
        let query = capitalization
            .filter(time.ge(from))
            .filter(time.le(to))
            .order(time);
        query
            .get_results::<Capitalization>(self.db_conn)
            .map_err(From::from)
            .map_err(|e: FailureError| {
                e.context(format!("list of capitalization error occured"))
                    .into()
            })
    }

    /// Returns last value
    fn last(&self) -> RepoResult<Option<Capitalization>> {
        let query = capitalization.order(time.desc()).limit(1);
        query
            .get_result::<Capitalization>(self.db_conn)
            .optional()
            .map_err(From::from)
            .map_err(|e: FailureError| {
                e.context(format!("last capitalization point error occured"))
                    .into()
            })
    }

    /// Add new value
    fn add(&self, new_caps: Vec<CoinMarketCap>) -> RepoResult<Vec<Capitalization>> {
        debug!("Create new caps {:?}.", new_caps);
        let query_store = diesel::insert_into(capitalization).values(&new_caps);
        query_store
            .get_results::<Capitalization>(self.db_conn)
            .map_err(From::from)
            .map_err(|e: FailureError| e.context(format!("Create new caps error occured.")).into())
    }
}
