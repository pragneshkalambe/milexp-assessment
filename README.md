# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Customer Accounts & Transactions Viewer

## Overview

This project is a simple React-based application built as part of an assessment.
It displays **active customer details** and allows users to view **transactions linked to specific accounts**.

The app also includes **Google Authentication using Firebase** to restrict access.

---

## Features

*  Google Login (Firebase Authentication)
* Display active customers in a table
* Show customer details (Name, Address, Accounts)
* Clickable account numbers
* View transactions for selected account
* Conditional rendering based on user interaction

---

## Tech Stack

* React (Frontend)
* Firebase Authentication (Google OAuth)
* JavaScript (ES6)
* CSS (basic styling)

---

## Data Source

Customer and transaction data were taken from the provided sample dataset (MongoDB format) and used locally in the application.

---

## ⚙️ Implementation Details

### 1. Filtering Active Customers

Customers were filtered based on an `active` flag:

```js
const activeCustomers = customers.filter(c => c.active === true);
```

---

### 2. Displaying Customer Data

A table was created to show:

* Name
* Address
* Accounts

Accounts are rendered dynamically and made clickable.

---

### 3. Handling Account Click

When a user clicks on an account number:

* The selected account ID is stored in state
* संबंधित transactions are fetched using `.find()`

```js
const transactionData = transactions.find(
  t => t.account_id === accountId
);
```

---
## Query : query to list down account ids which has made at least one transaction below the amount 5000
```js
db.transactions.find(
{"transactions.amount" : {$lt:5000}},
{_id:0,account_id:1}
)
```

## Query : query to list down distinct list of products available in the system
```js
db.accounts.distinct("products")
```
---

### 4. Displaying Transactions

Transactions are conditionally rendered below the table:

* Date
* Amount
* Transaction Type
* Symbol
* Price

---

### 5. Google Authentication (Firebase)

* Firebase project was created
* Google provider enabled
* `signInWithPopup` used for login

```js
const result = await signInWithPopup(auth, provider);
setUser(result.user);
```

UI is conditionally rendered:

* Login button (before login)
* Welcome message + data (after login)

---

## How to Run Locally

1. Clone the repository

```bash
git clone <your-repo-link>
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open in browser

```
http://localhost:5173
```

---

## Firebase Setup

* Created a Firebase project
* Enabled Google Authentication
* Add your app (Web)
* Copied Firebase config into project
* Allowed pop-ups in browser for localhost

---

## Main Goal Achieved

* Only active customers are displayed
* Transactions are shown per selected account
* Basic UI styling is used (focus on functionality)

---


## Author

Pragnesh Kalambe

---


---

