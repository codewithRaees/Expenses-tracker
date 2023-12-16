import React, { useEffect, useRef, useState } from 'react'

const ExpenseForm = ({ setexpenses }) => {
  // const [title , setTitle] = useState('')
  // const [category , setCategory] = useState('')
  // const [amount , setAmount] = useState('')
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: ''
  })
  const[errors , setErrors] = useState({})
  const formValidation = (formdata) => {
    const errorsData = {}
    if(!expense.title)
    {
      errorsData.title = "Title is Required"
    }
    if(!expense.category)
    {
      errorsData.category = "Please select a Categoery"
    }
    if(!expense.amount)
    {
      errorsData.amount = "Title is Amount"
    }
    setErrors(errorsData)
    return errorsData
   
  }
  const handleform = (e) => {
    e.preventDefault()
    const validateResult = formValidation(expense)
    if(Object.keys(validateResult).length) return
    setexpenses((prestate) => [...prestate, { ...expense, id: crypto.randomUUID() }])
    setExpense({
      title: '',
      category: '',
      amount: ''
    })
  }
  const handleChange = (e) => {
    setErrors({})
    const { name,value} = e.target;
    setExpense((prevstate) => ({ ...prevstate, [name]: value }))
  }
  // const titleRef = useRef('hi')
  // console.log(titleRef.current)
  // useEffect(()=>{
  //   titleRef.current.style.backgroundColor = 'pink'
  // })

  return (
    <>
      <div className="expense-form d-flex flex-column bg-primary">
        <form className="expense-form" onSubmit={handleform}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title"
              name='title'
              value={expense.title}
              onChange={handleChange}
            //  ref={titleRef}
            />
            <p className='error text-warning fs-6'>{errors.title}</p>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id='category' name="category" value={expense.category}
              onChange={handleChange}>
              <option value="" hidden>Select Category</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
            <p className='error text-warning fs-6'>{errors.category}</p>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="amount" value={expense.amount}
              onChange={handleChange} />
              <p className='error text-warning fs-6'>{errors.amount}</p>
          </div>
          <button className="add-btn btn btn-warning ">Add</button>
        </form>

      </div>

    </>

  )
}

export default ExpenseForm
