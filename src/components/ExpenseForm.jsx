import React from 'react'

const ExpenseForm = () => {
  return (
    <>    <div className="expense-form d-flex flex-column  border-end border-2  pe-5 ps-3       bg-primary">
    <form className="expense-form">
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <input id="category" />
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" />
      </div>
     
    </form>
        <button type="button" className="add-btn btn btn-warning ">Add</button>
  </div>
    
    </>

  )
}

export default ExpenseForm
