import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import ExpenseData from './components/ExpenseData'


function App() {
  const [expenses, setexpenses] = useState(ExpenseData)

  return (
    <main>
   <Header/>
   <div className='expense-tracker container bg-primary py-5 d-flex  justify-content-center text-white py-3 my-1  rounded-3 '>
   <ExpenseForm  setexpenses={setexpenses}/>
   <ExpenseTable expenses = {expenses}/>
   </div>
   <Footer/>
   </main>
  )
}

export default App
