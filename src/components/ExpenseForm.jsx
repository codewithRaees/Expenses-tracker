import React, { useState } from 'react'

const ExpenseForm = ({ setexpenses }) => {
  // const [title , setTitle] = useState('')
  // const [category , setCategory] = useState('')
  // const [amount , setAmount] = useState('')
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
    // email: ''
  })
  const[ errors , setErrors] = useState({})
  
  const formValidation = (formdata)=>{
    const errorsData = {}
    if(!formdata.title){
      errorsData.title = "Title is required"
    }
    if(!formdata.category){
      errorsData.category = "Select a categoery"
    }
    if(!formdata.amount){
      errorsData.amount = "Amount is required"
    }
    setErrors(errorsData)
    return errorsData
  }
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
          {/* <div className="input-container position-relative mb-4  ">
            <label htmlFor="title">Title</label>
            <input id="title" 
             name='title' 
             value={expense.title} 
             onChange={handleChange}/>
             <p className='error text-warning m-0 position-absolute top-100 '>{errors.title}</p>
          </div>
          <div className="input-container position-relative mb-4 ">
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
            <p className='error text-warning m-0 position-absolute top-100 '>{errors.category}</p>
          </div>
          <div className="input-container position-relative mb-4 ">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="amount" value={expense.amount} 
             onChange={handleChange}/>
              <p className='error text-warning m-0 position-absolute top-100 '>{errors.amount}</p>

          </div>
          <button  className="add-btn btn btn-warning ">Add</button>
        </form>

      </div>

    </>

  )
}

export default ExpenseForm
