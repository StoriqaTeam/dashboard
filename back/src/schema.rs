table! {
    transactions (id) {
        id -> Integer,
        from_address -> VarChar,
        to_address -> VarChar,
        block -> BigInt,
        value -> Numeric,
        block_hash -> VarChar,
        transaction_hash -> VarChar,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    coin_market_cap_values (id) {
        id -> Integer,
        time -> Timestamp,
        capitalization -> Nullable<BigInt>,
        price_btc -> Nullable<Double>,
        price_usd -> Nullable<Double>,
        price_eth -> Nullable<Double>,
        volume_usd -> Nullable<BigInt>,
    }
}
