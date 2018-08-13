extern crate config as config_crate;
extern crate hyper;
extern crate hyper_tls;
extern crate serde;
extern crate tokio;
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
extern crate stq_logging;
extern crate stq_router;

mod application;
mod client;
pub mod config;
mod controller;
mod environment;
mod errors;
mod http;
mod models;
mod repos;
mod schema;
mod services;
mod types;

use diesel::pg::PgConnection;
use futures_cpupool::CpuPool;
use r2d2_diesel::ConnectionManager;

use self::config::Config;
use self::environment::Environment;
use failure::Fail;
use futures::Future;

use hyper::rt;
use hyper::Server;

use application::Application;
use errors::Error;

pub fn start_server(config: Config) {
    let env = Environment::new(config.clone());

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

    let new_service = move || {
        let controller =
            controller::ControllerImpl::new(db_pool.clone(), cpu_pool.clone(), config.clone());

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
    let env = Environment::new(config);
    let future = env
        .ethereum_client
        .fetch_current_block_number()
        .map(|number| {
            println!("Current block number is {}, or {:x}", number, number);
        }).map_err(|e| {
            log_error(&e);
        });
    tokio::run(future);
}

pub fn print_transactions(config: Config, from: Option<u64>, to: Option<u64>) {
    let env = Environment::new(config);
    let future = env
        .ethereum_client
        .fetch_transactions(from, to)
        .map(move |transactions| {
            println!(
                "Transactions from {:?}, to {:?} are: {:?}",
                from, to, transactions
            );
        }).map_err(|e| {
            log_error(&e);
        });
    tokio::run(future);
}

fn log_error(e: &Fail) {
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
