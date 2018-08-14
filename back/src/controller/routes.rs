use stq_router::RouteParser;

/// List of all routes with params for the app
#[derive(Clone, Debug, PartialEq)]
pub enum Route {
    CoinMarketCapHistory,
    CoinMarketCapLast,
}

pub fn create_route_parser() -> RouteParser<Route> {
    let mut router = RouteParser::default();

    // CoinMarketCapHistory
    router.add_route(r"^/coinmarketcap/history$", || Route::CoinMarketCapHistory);
    // CoinMarketCapLast
    router.add_route(r"^/coinmarketcap/last$", || Route::CoinMarketCapLast);

    router
}
