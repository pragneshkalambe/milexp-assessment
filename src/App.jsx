import { useState } from 'react'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import './App.css'

let provider = new GoogleAuthProvider();

function App() {
  const [selectedAccount, setselectedAccount] = useState(null);
  const [selectedTransaction, setselectedTransaction] = useState(null);
  const [user, setuser] = useState(null);


  //customers data taken from milxp database
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

  //transactions of customers according to their AccountID 
  let transactions = [
    {
      id: "5ca4bbc1a2dd94ee58161cc3",
      account_id: 116508,
      transaction_count: 10,
      bucket_start_date: "1986-04-26T00:00:00.000Z",
      bucket_end_date: "2016-12-30T00:00:00.000Z",
      transactions: [
        {
          date: "2006-03-03T00:00:00.000Z",
          amount: 3503,
          transaction_code: "sell",
          symbol: "aapl",
          price: "8.73",
          total: "30593.58"
        },
        {
          date: "1991-08-19T00:00:00.000Z",
          amount: 8653,
          transaction_code: "sell",
          symbol: "aapl",
          price: "1.58",
          total: "13745.69"
        },
        {
          date: "2011-08-17T00:00:00.000Z",
          amount: 288,
          transaction_code: "sell",
          symbol: "sap",
          price: "49.25",
          total: "14184.10"
        },
        {
          date: "2014-09-02T00:00:00.000Z",
          amount: 5905,
          transaction_code: "sell",
          symbol: "crm",
          price: "59.29",
          total: "350114.62"
        },
        {
          date: "2015-12-21T00:00:00.000Z",
          amount: 4113,
          transaction_code: "buy",
          symbol: "crm",
          price: "77.41",
          total: "318421.68"
        },
        {
          date: "2013-05-17T00:00:00.000Z",
          amount: 5707,
          transaction_code: "sell",
          symbol: "aapl",
          price: "56.55",
          total: "322770.20"
        },
        {
          date: "2007-03-26T00:00:00.000Z",
          amount: 1623,
          transaction_code: "sell",
          symbol: "crm",
          price: "10.67",
          total: "17320.79"
        }
      ]
    },
    {

      _id: "5ca4bbc1a2dd94ee58161cc5",
      account_id: 170945,
      transaction_count: 66,
      bucket_start_date: "1987-10-19T00:00:00.000+00:00",
      bucket_end_date: "2017-01-05T00:00:00.000+00:00",
      transactions: [
        {
          date: "2016-10-14T00:00:00.000 +00:00",
          amount:
            3946,
          transaction_code:
            "buy",
          symbol:
            "team",
          price:
            "28.01393539001582411174240405671298503875732421875",
          total:
            "110542.9890490024419449355264"
        },

        {
          date: "2014-10-03T00:00:00.000+00:00",
          amount:
            1068,
          transaction_code:
            "buy",
          symbol:
            "nflx",
          price:
            "65.426363108399215207100496627390384674072265625",
          total:
            "69875.35579977036184118333040"
        },

        {
          date: "2014-01-21T00:00:00.000+00:00",
          amount:
            8768,
          transaction_code:
            "buy",
          symbol:
            "nflx",
          price:
            "46.9739833864050950751334312371909618377685546875",
          total:
            "411867.8863319998736187699251"
        }
      ]
    },

    {

      _id: "5ca4bbc1a2dd94ee58161d23",
      account_id:
        951849,
      transaction_count:
        89,
      bucket_start_date: "1985-12-31T00:00:00.000+00:00",
      bucket_end_date: "2017-01-09T00:00:00.000+00:00",
      transactions: [

        {
          date: "2016-02-19T00:00:00.000+00:00",
          amount:
            6623,
          transaction_code:
            "sell",
          symbol:
            "team",
          price:
            "22.35696193031755996116771711967885494232177734375",
          total:
            "148070.1588644931996228137905"
        },
        {
          date: "2014-08-01T00:00:00.000+00:00",
          amount:
            8476,
          transaction_code:
            "buy",
          symbol:
            "znga",
          price:
            "2.837972736729510447872826262027956545352935791015625",
          total:
            "24054.65691651933055617007540"
        },
        {

          date: "2016-08-15T00:00:00.000+00:00",
          amount:
            9740,
          transaction_code:
            "sell",
          symbol:
            "nflx",
          price:
            "96.703014452748675466864369809627532958984375",
          total:
            "941887.3607697720990472589619"

        }
      ]
    },
    {
      _id: "5ca4bbc1a2dd94ee58161cfc",
      account_id:
        904260,
      transaction_count:
        60,
      bucket_start_date: "1977-01-21T00:00:00.000+00:00",
      bucket_end_date: "2016-12-29T00:00:00.000+00:00",
      transactions: [
        {
          date: "2015-02-02T00:00:00.000+00:00",
          amount:
            689,
          transaction_code:
            "buy",
          symbol:
            "intc",
          price:
            "30.58076556247227273388489265926182270050048828125",
          total:
            "21070.14747254339591364669104"

        },
        {

          date: "2011-02-09T00:00:00.000+00:00",
          amount:
            2791,
          transaction_code:
            "sell",
          symbol:
            "crm",
          price:
            "33.64179890298945707627353840507566928863525390625",
          total:
            "93894.26073824357469987944569"

        },
        {

          date: "1993-05-05T00:00:00.000+00:00",
          amount:
            1047,
          transaction_code:
            "buy",
          symbol:
            "intc",
          price:
            "2.494253071916488817549861778388731181621551513671875",
          total:
            "2611.482966296563791974705282"
        },
        {

          date: "2015-04-14T00:00:00.000+00:00",
          amount:
            9820,
          transaction_code:
            "buy",
          symbol:
            "nflx",
          price:
            "68.97378601217081950380816124379634857177734375",
          total:
            "677322.5786395174475273961434"
        }
      ]
    },
    {

      _id: "5ca4bbc1a2dd94ee58161d01",
      account_id:
        565468,
      transaction_count:
        81,
      bucket_start_date: "1972-09-12T00:00:00.000+00:00",
      bucket_end_date: "2016-12-10T00:00:00.000+00:00",
      transactions: [
        {

          date: "2015-10-14T00:00:00.000+00:00",
          amount:
            5588,
          transaction_code:
            "sell",
          symbol:
            "bb",
          price:
            "7.32147875510058643300226322025991976261138916015625",
          total:
            "40912.42328350207698761664687"

        },
        {

          date: "2000-04-20T00:00:00.000+00:00",
          amount:
            9711,
          transaction_code:
            "sell",
          symbol:
            "bb",
          price:
            "6.825193553708931659684822079725563526153564453125",
          total:
            "66279.45460006743534719930722"

        },
        {

          date: "2014-12-18T00:00:00.000+00:00",
          amount:
            2741,
          transaction_code:
            "buy",
          symbol:
            "ebay",
          price:
            "24.0489886006747610736056230962276458740234375",
          total:
            "65918.27775444952010275301291"
        }
      ]
    }
  ]

  //for handling transaction data and checking accountID
  function handleAccountId(accountId) {
    console.log("account ID : ", accountId);
    setselectedAccount(accountId);

    let transactionData = transactions.find((transaction) => transaction.account_id === accountId);
    console.log("Transaction Data : ", transactionData);

    //setting transaction data
    setselectedTransaction(transactionData);
  }

  //for handling Login
  async function handleLogin() {
    try {
      let result = await signInWithPopup(auth, provider);
      console.log("User : ", result.user);
      setuser(result.user);

    } catch (error) {
      console.log("error : ", error.message);
    }
  }


  return (

    <div className="container">

      {!user ?
        <button
        className='login-btn'
          onClick={handleLogin}>Login</button>
        :
        
          <p className='welcome'>Welcome, {user.displayName}</p>

        
      }

      {user && (
        <>
          <table className="table-auto">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Address</th>
                <th>Birthdate</th>
                <th>Email</th>
                <th>Accounts</th>
                <th>Tier_And_Details</th>

              </tr>
            </thead>
            <tbody>
              {activeCustomers && (
                activeCustomers.map((customer) => (
                  <tr key={customer._id}>
                    <td>{customer._id}</td>
                    <td>{customer.username}</td>
                    <td>{customer.name}</td>
                    <td>{customer.address}</td>
                    <td>{customer.birthdate.toLocaleDateString()}</td>

                    <td>{customer.email}</td>
                    <td style={{ whiteSpace: "nowrap", cursor: "pointer" }}>
                      {customer.accounts && customer.accounts.map((account) => (
                        <span key={account}
                          onClick={() => handleAccountId(account)}>
                          {account}| </span>

                      ))}
                    </td>

                    <td style={{ whiteSpace: "nowrap" }}>
                      {customer.tier_and_details && Object.values(customer.tier_and_details)
                        .map((item) => item.tier)
                        .join(" | ")
                      }
                    </td>
                  </tr>

                ))
              )}
            </tbody>
          </table>

          {/* </div> */}

          {/* //rendering transaction data */}
          {selectedAccount && selectedTransaction && (
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
          )}

        </>


      )}

      {/* {selectedAccount && !selectedTransaction && (
         <p>No Transaction found for this account.</p>
      )} */}
    </div>
  )
}

export default App
