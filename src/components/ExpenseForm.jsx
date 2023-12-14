import React, { useState } from 'react'

const ExpenseForm = ({setexpenses}) => {
  // const [title , setTitle] = useState('')
  // const [category , setCategory] = useState('')
  // const [amount , setAmount] = useState('')
  const [expense , setExpense] = useState({
    title:'',
    category: '',
    amount: ''
  })
  const handleform = (e) => {
    
    e.preventDefault()
   
    setexpenses((prestate) => [...prestate ,{...expense,id:crypto.randomUUID() }])
   setExpense({
    title:'',
    category: '',
    amount: ''
   })
  }

  return (
    <>
      <div className="expense-form d-flex flex-column bg-primary">
        <form className="expense-form" onSubmit={handleform}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" 
             name='title' 
             value={expense.title} 
             onChange={(e)=> setExpense((prevstate)=> ({...prevstate, title:e.target.value}))}/>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id='category' name="category" value={expense.category} 
             onChange={(e)=> setExpense((prevstate)=> ({...prevstate, category:e.target.value}))}>
              <option value="" hidden>Select Category</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="amount" value={expense.amount} 
             onChange={(e)=> setExpense((prevstate)=> ({...prevstate, amount:e.target.value}))}/>
          </div>
          <button  className="add-btn btn btn-warning ">Add</button>
        </form>

      </div>

    </>

  )
}

export default ExpenseForm
