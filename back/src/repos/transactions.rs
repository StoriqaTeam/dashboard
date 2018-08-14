//! Repo for user_delivery_address table. UserDeliveryAddress is an entity that connects
//! users and roles. I.e. this table is for user has-many roles
//! relationship

use diesel;
use diesel::connection::AnsiTransactionManager;
use diesel::dsl::max;
use diesel::pg::Pg;
use diesel::prelude::*;
use diesel::query_dsl::RunQueryDsl;
use diesel::Connection;
use failure::Error as FailureError;

use super::types::RepoResult;
use models::*;
use schema::transactions::dsl::*;

pub trait TransactionsRepo {
    fn list(&self, from: Option<i64>, to: Option<i64>) -> RepoResult<Vec<Transaction>>;
    fn insert(&self, txs: Vec<NewTransaction>) -> RepoResult<Vec<Transaction>>;
    /// Returns Some(max_block_number) or None if there are no records
    fn max_block(&self) -> RepoResult<Option<i64>>;
}

/// Implementation of Transaction trait
pub struct TransactionsRepoImpl<
    'a,
    T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static,
> {
    pub db_conn: &'a T,
}

impl<'a, T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static>
    TransactionsRepoImpl<'a, T>
{
    pub fn new(db_conn: &'a T) -> Self {
        Self { db_conn }
    }
}

impl<'a, T: Connection<Backend = Pg, TransactionManager = AnsiTransactionManager> + 'static>
    TransactionsRepo for TransactionsRepoImpl<'a, T>
{
    /// Returns transaction for specific period
    fn list(&self, from_block: Option<i64>, to_block: Option<i64>) -> RepoResult<Vec<Transaction>> {
        let mut query = transactions.order(block).into_boxed();
        if let Some(from) = from_block {
            query = query.filter(block.ge(from));
        }
        if let Some(to) = to_block {
            query = query.filter(block.le(to));
        }
        query
            .get_results::<Transaction>(self.db_conn)
            .map_err(From::from)
            .map_err(|e: FailureError| {
                e.context(format_err!("Transactions repo list db error"))
                    .into()
            })
    }

    fn max_block(&self) -> RepoResult<Option<i64>> {
        transactions
            .select(max(block))
            .limit(1)
            .get_result::<Option<i64>>(self.db_conn)
            .map_err(From::from)
            .map_err(|e: FailureError| {
                e.context(format_err!("Transactions repo list db error"))
                    .into()
            })
    }

    fn insert(&self, txs: Vec<NewTransaction>) -> RepoResult<Vec<Transaction>> {
        trace!("Insert transactions {:?}.", txs);
        let query_store = diesel::insert_into(transactions).values(&txs);
        query_store
            .get_results::<Transaction>(self.db_conn)
            .map_err(From::from)
            .map_err(|e: FailureError| e.context(format!("Create new caps error occured.")).into())
    }
}
