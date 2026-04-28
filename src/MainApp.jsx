import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup, onAuthStateChanged,signOut } from "firebase/auth";
import { auth, provider } from "./firebase";

// let provider = new GoogleAuthProvider();

function MainApp() {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);


    // to Persist login state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser);
            setLoading(false); //  done checking
        });

        return () => unsubscribe();
    }, []);

    //using customers data 
    let customers = [
        {
            _id: "5ca4bbcea2dd94ee58162a69",
            username:
                "valenciajennifer",
            name:
                "Lindsay Cowan",
            active: true,
            address:
                "Unit 1047 Box 4089\nDPO AA 57348",
            birthdate: new Date("1994-02-19T23:46:27.000+00:00"),
            email:
                "cooperalexis@hotmail.com",
            accounts: [116508],
            tier_and_details: {
                "c06d340a4bad42c59e3b6665571d2907": { tier: "Platinum", benefits: ["dedicated account representative"], active: true, id: "c06d340a4bad42c59e3b6665571d2907" },
                "5d6a79083c26402bbef823a55d2f4208": { tier: "Bronze", benefits: ["car rental insurance", "concierge services"], active: true, id: "5d6a79083c26402bbef823a55d2f4208" },
                "b754ec2d455143bcb0f0d7bd46de6e06": { tier: "Gold", benefits: ["airline lounge access"], active: true, id: "b754ec2d455143bcb0f0d7bd46de6e06" }
            }
        },
        {
            _id: "5ca4bbcea2dd94ee58162a6b",
            username:
                "serranobrian",
            name:
                "Leslie Martinez",
            active: true,
            address:
                "Unit 2676 Box 935\nDPO AA 38560",
            birthdate: new Date("1974-11-26T14:30:20.000+00:00"),
            email:
                "tcrawford@gmail.com",
            accounts: [170945, 951849],
            tier_and_details: {
                "a15baf69a759423297f11ce6c7b0bc9a": { tier: "Platinum", benefits: ["airline lounge access"], active: true, id: "a15baf69a759423297f11ce6c7b0bc9a" }
            }
        },
        {
            _id: "5ca4bbcea2dd94ee58162a6d",
            username:
                "gregoryharrison",
            name:
                "Natalie Ford",
            active: true,
            address:
                "17677 Mark Crest\nWalterberg, IA 39017",
            birthdate: new Date("1996-09-13T17:14:27.000+00:00"),
            email:
                "amyholland@yahoo.com",
            accounts: [904260, 565468],
            tier_and_details: {
                "69f8b6a3c39c42edb540499ee2651b75": { tier: "Bronze", benefits: ["dedicated account representative", "airline lounge access"], active: true, id: "69f8b6a3c39c42edb540499ee2651b75" },

                "c85df12c2e394afb82725b16e1cc6789": { tier: "Bronze", benefits: ["airline lounge access"], active: true, id: "c85df12c2e394afb82725b16e1cc6789" },

                "07d516cfd7fc4ec6acf175bb78cb98a2": { tier: "Gold", benefits: ["dedicated account representative"], active: true, id: "07d516cfd7fc4ec6acf175bb78cb98a2" },
            }
        }
    ];

    //for filtering active customers
    let activeCustomers = customers.filter(c => c.active === true);

    //for handling Login
    async function handleLogin() {
        try {
            await signInWithPopup(auth, provider);
            // console.log("User : ", result.user);
            // setuser(result.user);

        } catch (error) {
            console.log("error : ", error.message);
        }
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">

            {!user ?
                <button
                    className='login-btn'
                    onClick={handleLogin}>Login</button>
                :

                <div>
                    <p className='welcome'>Welcome, {user.displayName}</p>
                    <button onClick={() => signOut(auth)}>Logout</button>
                </div>
            }

            {user && (
                <>
                    <table className="table-auto">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Address</th>

                                <th>Accounts</th>


                            </tr>
                        </thead>
                        <tbody>
                            {activeCustomers && (
                                activeCustomers.map((customer) => (
                                    <tr key={customer._id}>

                                        <td>{customer.name}</td>
                                        <td>{customer.address}</td>


                                        <td style={{ whiteSpace: "nowrap", cursor: "pointer" }}>
                                            {customer.accounts && customer.accounts.map((account) => (
                                                <Link key={account}
                                                    to={`/transaction/${account}`}>
                                                    {account}|
                                                </Link>
                                                // <span key={account}
                                                //   onClick={() => handleAccountId(account)}>
                                                //   {account}| </span>
                                            ))}
                                        </td>


                                    </tr>

                                ))
                            )}
                        </tbody>
                    </table>

                    {/* </div> */}



                    {/* //rendering transaction data */}
                    {/* {selectedAccount && selectedTransaction && (
            <div className='transactions'>
              <h3>Transactions for Account: {selectedAccount}</h3>
              {selectedTransaction.transactions.map((transaction, index) => (
                <div key={index}>
                  <span>Date : {new Date(transaction.date).toLocaleDateString()} | </span>
                  <span>Amount : {transaction.amount} | </span>
                  <span>Type : {transaction.transaction_code} | </span>
                  <span>Symbol : {transaction.symbol} | </span>
                  <span>Price : {transaction.price} | </span>
                  <span>Total : {transaction.total} | </span><hr />
                </div>
              ))
              }
            </div>
          )} */}

                </>
            )}

            {/* {selectedAccount && !selectedTransaction && (
         <p>No Transaction found for this account.</p>
      )} */}
        </div>
    )
}

export default MainApp