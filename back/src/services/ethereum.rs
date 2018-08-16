use bigdecimal::BigDecimal;
use environment::ServerEnvironment;
use futures_cpupool::CpuPool;
use std::collections::HashMap;
use std::sync::{Arc, Mutex};
use super::error::*;
use futures::Future;
use futures::future;
use repos::{ReposError, TransactionsRepo, TransactionsRepoImpl};
use types::{Connection, DbPool};
use diesel::PgConnection;
use failure::Fail;
use models::Transaction;

#[derive(Clone)]
struct EthereumService {
    accounts: Arc<Mutex<Accounts>>,
    db_pool: DbPool,
    thread_pool: CpuPool,
}

impl EthereumService {
    pub fn new(env: ServerEnvironment) -> Self {
        let ServerEnvironment {
            thread_pool,
            db_pool,
            ..
        } = env;
        EthereumService {
            accounts: Arc::new(Mutex::new(Accounts::default())),
            db_pool,
            thread_pool,
        }
    }

    pub fn sync(&self) -> impl Future<Item = (), Error = Error> {
        let self_clone = self.clone();
        self.use_transactions_repo(move |repo| {
            let accounts = self_clone.accounts.lock().unwrap();
            let transactions = repo.list(self_clone.accounts.block)?;
            self_clone.apply_transactions(&mut accounts)
        })
        unimplemented!()
    }

    fn apply_transactions(acc: &mut Accounts, txs: &[Transaction]) {

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

struct Accounts {
    block: i64,
    data: HashMap<String, BigDecimal>,
}

impl Default for Accounts {
    fn default() -> Self {
        Accounts {
            block: 0,
            data: HashMap::new(),
        }
    }
}

