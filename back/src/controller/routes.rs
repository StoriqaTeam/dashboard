use stq_router::RouteParser;

/// List of all routes with params for the app
#[derive(Clone, Debug, PartialEq)]
pub enum Route {
    CoinMarketCap,
}

pub fn create_route_parser() -> RouteParser<Route> {
    let mut router = RouteParser::default();

    // Capitalization
    router.add_route(r"^/coinmarketcap$", || Route::CoinMarketCap);

    router
}
