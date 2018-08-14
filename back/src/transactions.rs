extern crate dashboard_core;
extern crate env_logger;

use dashboard_core::config::Config;

fn main() {
    env_logger::init();
    let config = match Config::new() {
        Ok(conf) => conf,
        Err(e) => {
            panic!("Error parsing config: {}", e);
        }
    };
    dashboard_core::print_transactions(config, Some(6107421), None);
}
