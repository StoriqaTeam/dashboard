mod accounts;
mod error;

use self::accounts::Accounts;
use self::accounts::Operation;
use self::error::*;
use bigdecimal::BigDecimal;
use diesel::PgConnection;
use environment::ServerEnvironment;
use failure::Fail;
use futures::future;
use futures::Future;
use futures_cpupool::CpuPool;
use models::*;
use repos::{ReposError, TransactionsRepo, TransactionsRepoImpl};
use std::sync::{Arc, Mutex};
use types::{Connection, DbPool};

pub use self::accounts::Bucket;

#[derive(Clone)]
pub struct EthereumService {
    accounts: Arc<Mutex<Accounts>>,
    db_pool: DbPool,
    thread_pool: CpuPool,
    break_points: Vec<u64>,
}

impl EthereumService {
    pub fn new(env: ServerEnvironment) -> Self {
        let ServerEnvironment {
            thread_pool,
            db_pool,
            ..
        } = env;
        EthereumService {
            accounts: Arc::new(Mutex::new(Accounts::new(TokenAddress::new(
                env.config.ethereum.contract_address[2..].to_string().to_lowercase(),
            )))),
            db_pool,
            thread_pool,
            break_points: env.config.ethereum.histogram_break_points.clone(),
        }
    }

    pub fn get_balance(&self, address: &TokenAddress) -> BigDecimal {
        let accounts = self.accounts.lock().unwrap();
        accounts.get(address).unwrap_or(0.into())
    }

    pub fn histogram(&self) -> Result<Vec<Bucket>, Error> {
        let accs = self.accounts.lock().unwrap();
        accs.histogram(&self.break_points)
    }

    pub fn sync(&self) -> impl Future<Item = (), Error = Error> {
        let self_clone = self.clone();
        self.use_transactions_repo(move |repo| {
            let mut accounts = self_clone.accounts.lock().unwrap();
            let transactions = repo.list(Some(accounts.block + 1), None)?;
            accounts.apply(&transactions, Operation::Apply);
            Ok(())
        })
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
