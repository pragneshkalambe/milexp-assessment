
import { Routes, Route } from "react-router-dom";
import './App.css'
import Transaction from './Transactions';
import MainApp from './MainApp';




function App() {

  
  return (
    
    //defining main app(customer data) and transaction routes to send data using Link
    <Routes>
      <Route path='/' element={<MainApp />} />
      <Route path='/transaction/:accountId' element={<Transaction />} />
    </Routes>


  )
}

export default App
