CREATE TABLE coin_market_cap_values (
    id SERIAL PRIMARY KEY,
    time TIMESTAMP NOT NULL,
    capitalization BIGINT,
    price_btc DOUBLE PRECISION,
    price_usd DOUBLE PRECISION,
    price_eth DOUBLE PRECISION,
    volume_usd BIGINT
);
