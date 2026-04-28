// import { } from "./App";
import { useParams, useNavigate } from "react-router-dom";
import transactions from "./transactiondata";

function Transaction() {
    //receiving id from use params 
    let { accountId } = useParams();
    let selectedTransaction = transactions.find((transaction) => transaction.account_id === Number(accountId));
    let navigate = useNavigate();


    if (!selectedTransaction) {
        return <p>No transactions found</p>;
    }
    {/* //rendering transaction data */ }
    // {
    // {
    //     selectedAccount && selectedTransaction && (
    return (
        <div className='transactions'>
            {/* ✅ Back Button */}
            <button onClick={() => navigate("/")}>
                ⬅ Back
            </button>
            <h3>Transactions for Account: {accountId}</h3>
            {selectedTransaction && selectedTransaction.transactions.map((transaction) => (

                <div key={transaction.date}>
                    <span>Date : {new Date(transaction.date).toLocaleDateString()} | </span>
                    <span>Amount : {transaction.amount} | </span>
                    <span>Type : {transaction.transaction_code} | </span>
                    <span>Symbol : {transaction.symbol} | </span>
                    <span>Price : {transaction.price} | </span>
                    <span>Total : {transaction.total} | </span><hr />
                </div>
            ))}

        </div>

    )
    //     )
    // }
}

export default Transaction