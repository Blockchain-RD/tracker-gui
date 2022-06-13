
import './App.css'
import Header from './components/header'
import Visor from './components/visor'
import { FormTransaction } from './components/formTransaction'
import TransactionContext from './context/transactions'
import { useState } from 'react'


function App() {
  const transactions = useState({})
  return (
    <TransactionContext.Provider value={transactions}>
      <div className="App">
        <Header />
        <FormTransaction />
        <Visor />
      </div>
    </ TransactionContext.Provider>
  )
}

export default App
