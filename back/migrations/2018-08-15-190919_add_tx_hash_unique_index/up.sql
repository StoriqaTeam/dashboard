DELETE FROM transactions a USING transactions b
WHERE a.id < b.id AND a.transaction_hash = b.transaction_hash;

CREATE UNIQUE INDEX transactions_transaction_hash_idx ON transactions (transaction_hash);
