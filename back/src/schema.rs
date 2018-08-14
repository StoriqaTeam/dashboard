table! {
    transactions (id) {
        id -> Integer,
        from_address -> VarChar,
        to_address -> VarChar,
        block -> BigInt,
        value -> Numeric,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    coin_market_cap_values (id) {
        id -> Integer,
        time -> Timestamp,
        capitalization -> BigInt,
        price_btc -> Double,
        price_usd -> Double,
        price_eth -> Double,
        volume_usd -> BigInt,
    }
}
