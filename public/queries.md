## Query : Transactions less than 5000
```javascript
db.transactions.find(
{"transactions.amount" : {$lt:5000}},
{_id:0,account_id:1}
)
```

## Query : Find transactions by account ID
db.accounts.distinct("products")