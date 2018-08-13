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
use models::Capitalization;
use schema::capitalization::dsl::*;

/// Capitalization repository for handling Capitalization
pub trait CapitalizationRepo {
    /// Returns capitalization for specific period
    fn list(&self, from: SystemTime, to: SystemTime) -> RepoResult<Vec<Capitalization>>;
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
}
