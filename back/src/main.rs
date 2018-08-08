extern crate dashboard_core;

use dashboard_core::config::Config;

fn main() {
    let config = Config::new();
    println!("Hello, config! {:?}", config);
}
