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
            {/*  Back Button */}
            <button onClick={() => navigate("/")}>
                ⬅ Back
            </button>
            <h3>Transactions for Account: {accountId}</h3>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {selectedTransaction.transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{new Date(transaction.date).toLocaleDateString()}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.transaction_code}</td>
                            <td>{transaction.symbol}</td>
                            <td>{transaction.price}</td>
                            <td>{transaction.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )
    //     )
    // }
}

export default Transaction