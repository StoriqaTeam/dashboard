#![recursion_limit = "128"]
extern crate config as config_crate;
extern crate hyper;
extern crate hyper_tls;
extern crate serde;
extern crate tokio;
extern crate tokio_core;
#[macro_use]
extern crate serde_derive;
#[macro_use]
extern crate serde_json;
#[macro_use]
extern crate failure;
extern crate futures;
extern crate futures_cpupool;
#[macro_use]
extern crate log;
extern crate bigdecimal;
#[macro_use]
extern crate diesel;
#[macro_use]
extern crate diesel_derive;
extern crate r2d2;
extern crate r2d2_diesel;
#[macro_use]
extern crate stq_http;
extern crate chrono;
extern crate rand;
extern crate stq_logging;
extern crate stq_router;

mod application;
mod clients;
pub mod config;
mod controller;
mod environment;
mod errors;
mod fetchers;
mod http;
mod models;
mod repos;
mod schema;
mod services;
mod types;

use self::config::Config;
use self::environment::FetcherEnvironment;
use self::environment::ServerEnvironment;
use self::fetchers::CoinmarketcapFetcher;
use self::fetchers::EthereumFetcher;
use self::services::EthereumService;
use diesel::pg::PgConnection;
use failure::Fail;
use futures::{Future, Stream};
use futures_cpupool::CpuPool;
use hyper::rt;
use hyper::Server;
use r2d2_diesel::ConnectionManager;

use application::Application;
use errors::Error;

pub fn start_server(config: Config) {
    // Prepare server
    let thread_count = config.server.thread_count;

    // Prepare server
    let address = {
        format!("{}:{}", config.server.host, config.server.port)
            .parse()
            .expect("Could not parse address")
    };

    // Prepare database pool
    let database_url: String = config
        .server
        .database
        .parse()
        .expect("Database URL must be set in configuration");
    let manager = ConnectionManager::<PgConnection>::new(database_url);
    let db_pool = r2d2::Pool::builder()
        .build(manager)
        .expect("Failed to create connection pool");
    // Prepare CPU pool
    let cpu_pool = CpuPool::new(thread_count);

    // Prepare ethereum service
    let env = ServerEnvironment::new(config.clone());
    let ethereum_service = EthereumService::new(env);
    info!("Start syncing ethereum service");
    match ethereum_service.sync().wait() {
        Err(e) => {
            log_error(&e);
            panic!("Unable to sync ethereum service");
        }
        _ => (),
    };
    info!("Finished syncing ethereum service");

    let new_service = move || {
        let controller = controller::ControllerImpl::new(
            db_pool.clone(),
            cpu_pool.clone(),
            config.clone(),
            ethereum_service.clone(),
        );

        // Prepare application
        let app = Application::<Error>::new(controller);

        Ok(app) as Result<Application<Error>, hyper::Error>
    };

    let server = Server::bind(&address).serve(new_service).map_err(|e| {
        log_error(&e);
    });

    rt::run(server);
}

pub fn print_current_block_number(config: Config) {
    let env = FetcherEnvironment::new(config);
    let future = env
        .ethereum_client
        .fetch_current_block_number()
        .map(|number| {
            println!("Current block number is {}, or {:x}", number, number);
        })
        .map_err(|e| {
            log_error(&e);
        });
    tokio::run(future);
}

pub fn print_transactions(config: Config, from: Option<i64>, to: Option<i64>) {
    let env = FetcherEnvironment::new(config);
    let future = env
        .ethereum_client
        .fetch_transactions(from, to)
        .map(move |transactions| {
            println!(
                "Transactions from {:?}, to {:?} are: {:?}",
                from, to, transactions
            );
        })
        .map_err(|e| {
            log_error(&e);
        });
    tokio::run(future);
}

pub fn start_fetcher(config: Config) {
    let f = futures::future::ok(()).map(move |_| {
        tokio::spawn(create_coinmarketcap_fetcher(config.clone()));
        tokio::spawn(create_ethereum_fetcher(config));
    });
    tokio::run(f);
}

fn create_ethereum_fetcher(config: Config) -> impl Future<Item = (), Error = ()> {
    let environment = FetcherEnvironment::new(config);
    let fetcher = EthereumFetcher::new(environment);
    let stream = fetcher.start();
    stream
        .or_else(|e| {
            log_error(&e);
            futures::future::ok(())
        })
        .for_each(|_| futures::future::ok(()))
}

fn create_coinmarketcap_fetcher(config: Config) -> impl Future<Item = (), Error = ()> {
    let environment = FetcherEnvironment::new(config);
    let fetcher = CoinmarketcapFetcher::new(environment);
    let stream = fetcher.start();
    stream
        .or_else(|e| {
            log_error(&e);
            futures::future::ok(())
        })
        .for_each(|_| futures::future::ok(()))
}

pub fn log_error(e: &Fail) {
    let mut err = e;
    loop {
        error!("{}", err);
        if let Some(e) = err.cause() {
            err = e;
        } else {
            return;
        }
    }
}
