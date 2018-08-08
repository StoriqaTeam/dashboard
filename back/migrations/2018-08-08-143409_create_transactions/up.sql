CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    from_address VARCHAR(40) NOT NULL,
    to_address VARCHAR(40) NOT NULL,
    value NUMERIC NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
);

SELECT diesel_manage_updated_at('transactions');
