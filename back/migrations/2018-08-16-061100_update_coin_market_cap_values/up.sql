-- Your SQL goes here
DELETE FROM coin_market_cap_values a USING coin_market_cap_values b
WHERE a.id < b.id AND a.time = b.time;

CREATE UNIQUE INDEX coin_market_cap_values_time_idx ON coin_market_cap_values (time);
