import React, { useState } from 'react'

const ExpenseForm = ({setexpenses}) => {

  const handleform = (e) => {
    e.preventDefault()
   const expense = {...getFormData(e.target), id:crypto.randomUUID()}
    setexpenses((prestate) => [...prestate ,expense])
    e.target.reset()
  }
  const getFormData = (form) => {
    const formData = new FormData(form)
    const data = {}
      for (const [key , value] of formData.entries()) {
      
      data[key] = value
    }
    return data
  }
  return (
    <>
      <div className="expense-form d-flex flex-column bg-primary">
        <form className="expense-form" onSubmit={handleform}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type='text'/>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id='category' name="category">
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
            <input id="amount" name="amount"/>
          </div>
          <button  className="add-btn btn btn-warning ">Add</button>
        </form>

      </div>

    </>

  )
}

export default ExpenseForm
