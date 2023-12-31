import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import ExpenseData from './components/ExpenseData'
import { useLocalStorage } from './components/hooks/useLocalStorage'


function App() {
  const [expense , setExpense] = useLocalStorage('expense',{
    title:'',
    category: '',
    amount: '',
    // email: ''
  })
  const [expenses, setexpenses] = useLocalStorage('expenses' , ExpenseData)
  const [ editingrowId , seteditingrowId] = useLocalStorage('editingrowId', '')
  return (
    <main>
        <Header/>
   <div className='expense-tracker container bg-primary py-5 d-flex  justify-content-center text-white py-3 my-1  rounded-3 '>
   <ExpenseForm  setexpenses={setexpenses} expense={expense} seteditingrowId={seteditingrowId} setExpense={setExpense} editingrowId={editingrowId}/>
   <ExpenseTable expenses = {expenses} setexpenses={setexpenses} seteditingrowId={seteditingrowId} setExpense={setExpense}/>
   </div>
   <Footer/>
   </main>
  )
}

export default App
