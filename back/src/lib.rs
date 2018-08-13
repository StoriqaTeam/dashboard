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
#[macro_use]
extern crate log;
extern crate bigdecimal;
#[macro_use]
extern crate diesel;
#[macro_use]
extern crate diesel_derive;

mod client;
pub mod config;
mod environment;
mod http;
mod models;
mod schema;
mod types;

use self::config::Config;
use self::environment::Environment;
use failure::Fail;
use futures::Future;

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
