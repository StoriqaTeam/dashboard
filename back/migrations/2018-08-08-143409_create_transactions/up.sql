CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    from_address VARCHAR(40) NOT NULL,
    to_address VARCHAR(40) NOT NULL,
    block BIGINT NOT NULL DEFAULT 0,
    value NUMERIC NOT NULL DEFAULT 0,
    block_hash VARCHAR(64) NOT NULL,
    transaction_hash VARCHAR(64) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

SELECT diesel_manage_updated_at('transactions');
