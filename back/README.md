## Infura requests

### Get current block

```
curl -X POST \
-v \
-H "Content-Type: application/json" \
--data '{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}' \
"https://mainnet.infura.io/YOUR-API-KEY"
```

### Get transfers of a token

```
curl -X POST \
-v \
-H "Content-Type: application/json" \
--data '{"jsonrpc": "2.0", "id": 1, "method": "eth_getLogs", "params": [{"address": ["0x5c3a228510D246b78a3765C20221Cbf3082b44a4"], "topics": ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"], "fromBlock": "0x5d311d"}]}' \
"https://mainnet.infura.io/v3/YOUR-API-KEY"
```

```
Transfer topic =
KECCAK("Transfer(address,address,uint256)") =
0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
```


Sample response:
```
{
  "address": "0x5c3a228510d246b78a3765c20221cbf3082b44a4",
  "topics": [
    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    "0x0000000000000000000000000861fca546225fbf8806986d211c8398f7457734",
    "0x000000000000000000000000275fa971e04382da6fcb09d85dd5ab3cf8313b25"
  ],
  "data": "0x00000000000000000000000000000000000000000000003fa4dead3fbbfa8000",
  "blockNumber": "0x5d3155",
  "transactionHash": "0xc8d9fecb6650ece1842d359cf4b9adf6003011d924eb46f449cd2a7b764f9ef5",
  "transactionIndex": "0xe",
  "blockHash": "0xa9c57d1da3c50f56d610d5e7b794a7ea2425636e001a57b028792577ef0b8f88",
  "logIndex": "0x6",
  "removed": false
}
```
