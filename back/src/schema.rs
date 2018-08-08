table! {
    transactions (id) {
        id -> Integer,
        from_address -> VarChar,
        to_address -> VarChar,
        value -> Numeric,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}
