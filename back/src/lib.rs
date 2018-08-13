extern crate config as config_crate;
extern crate hyper;
extern crate hyper_tls;
extern crate serde;
extern crate tokio;
#[macro_use]
extern crate serde_derive;
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

mod client;
pub mod config;
mod environment;
mod http;
mod models;
mod schema;
mod types;


use r2d2_diesel::ConnectionManager;
use diesel::pg::PgConnection;
use futures_cpupool::CpuPool;

use self::config::Config;
use self::environment::Environment;
use failure::Fail;
use futures::Future;


use hyper::{Body, Response, Server};
use hyper::service::service_fn_ok;
use hyper::rt::{self, Future as HyperFuture};


pub fn current_block_number(config: Config) {
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
    let database_url: String = config.server.database.parse().expect("Database URL must be set in configuration");
    let manager = ConnectionManager::<PgConnection>::new(database_url);
    let db_pool = r2d2::Pool::builder().build(manager).expect("Failed to create connection pool");


    let new_service = || {
        service_fn_ok(|_| {
            Response::new(Body::from("hello world"))
        })
    };

    let server = Server::bind(&address)
        .serve(new_service)
        .map_err(|e| eprintln!("server error: {}", e));

    rt::run(server);

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
