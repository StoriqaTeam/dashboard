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
    capitalization (id) {
        id -> Integer,
        time -> Timestamp,
        value -> Double,
    }
}
