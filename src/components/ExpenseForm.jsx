import React from 'react'

const ExpenseForm = () => {
  return (
    <div classNameName='container '>
       <form className="expense-form">
          <div className="input-container">
            <label for="title">Title</label>
            <input id="title" />
          </div>
          <div className="input-container">
            <label for="category">Category</label>
            <input id="category" />
          </div>
          <div className="input-container">
            <label for="amount">Amount</label>
            <input id="amount" />
          </div>
          <button className="add-btn bg-warning ">Add</button>
        </form>
    </div>
  )
}

export default ExpenseForm
