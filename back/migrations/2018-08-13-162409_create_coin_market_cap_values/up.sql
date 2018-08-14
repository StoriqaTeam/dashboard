CREATE TABLE coin_market_cap_values (
    id SERIAL PRIMARY KEY,
    time TIMESTAMP NOT NULL,
    capitalization BIGINT NOT NULL,
    price_btc DOUBLE PRECISION NOT NULL,
    price_usd DOUBLE PRECISION NOT NULL,
    price_eth DOUBLE PRECISION NOT NULL,
    volume_usd BIGINT NOT NULL
);
