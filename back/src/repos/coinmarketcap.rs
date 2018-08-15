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
use models::{CoinMarketCapValue, NewCoinMarketCapValue};
use schema::coin_market_cap_values::dsl::*;

/// Capitalization repository for handling Capitalization
pub trait CoinMarketCapsRepo {
    /// Returns capitalization for specific period
    fn list(&self, from: SystemTime, to: SystemTime) -> RepoResult<Vec<CoinMarketCapValue>>;
    /// Returns last value
    fn last(&self) -> RepoResult<Option<CoinMarketCapValue>>;
    /// Add new value
    fn add(&self, new_caps: Vec<NewCoinMarketCapValue>) -> RepoResult<Vec<CoinMarketCapValue>>;
    /// Returns first value after specified time
    fn first_after(&self, after: SystemTime) -> RepoResult<Option<CoinMarketCapValue>>;
}

/// Implementation of Capitalization trait
pub struct CoinMarketCapsRepoImpl<
    'a,
    T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
> {
    pub db_conn: &'a T,
}

impl<'a, T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static>
    CoinMarketCapsRepoImpl<'a, T>
{
    pub fn new(db_conn: &'a T) -> Self {
        Self { db_conn }
    }
}

impl<'a, T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static>
    CoinMarketCapsRepo for CoinMarketCapsRepoImpl<'a, T>
{
    /// Returns capitalization for specific period
    fn list(&self, from: SystemTime, to: SystemTime) -> RepoResult<Vec<CoinMarketCapValue>> {
        let query = coin_market_cap_values
            .filter(time.ge(from))
            .filter(time.le(to))
            .order(time);
        query
            .get_results::<CoinMarketCapValue>(self.db_conn)
            .map_err(From::from)
            .map_err(|e: FailureError| {
                e.context(format!("list of capitalization error occured"))
                    .into()
            })
    }

    /// Returns last value
    fn last(&self) -> RepoResult<Option<CoinMarketCapValue>> {
        let query = coin_market_cap_values.order(time.desc()).limit(1);
        query
            .get_result::<CoinMarketCapValue>(self.db_conn)
            .optional()
            .map_err(From::from)
            .map_err(|e: FailureError| {
                e.context(format!("last capitalization point error occured"))
                    .into()
            })
    }

    /// Add new value
    fn add(&self, new_caps: Vec<NewCoinMarketCapValue>) -> RepoResult<Vec<CoinMarketCapValue>> {
        let query_store = diesel::insert_into(coin_market_cap_values).values(&new_caps);
        query_store
            .get_results::<CoinMarketCapValue>(self.db_conn)
            .map_err(From::from)
            .map_err(|e: FailureError| e.context(format!("Create new caps error occured.")).into())
    }

    /// Returns first value after specified time
    fn first_after(&self, after: SystemTime) -> RepoResult<Option<CoinMarketCapValue>> {
        let query = coin_market_cap_values
            .filter(time.ge(after))
            .order(time)
            .limit(1);
        query
            .get_result::<CoinMarketCapValue>(self.db_conn)
            .optional()
            .map_err(From::from)
            .map_err(|e: FailureError| {
                e.context(format!("first after point of coinmarketcap error occured"))
                    .into()
            })
    }
}
