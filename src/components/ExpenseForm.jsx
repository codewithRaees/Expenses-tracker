import React, { useState } from 'react'

const ExpenseForm = ({setexpenses}) => {

    const [formData, setFormData] = useState({
      title: '',
      category: '',
      amount: '',
      
    });
  
  
    // Function to handle form input changes
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
  const handlesubmision = (e)=>{
    e.preventDefault()
    console.log('Form Data:', formData);
    setexpenses((prestate)=>[...prestate , formData])
    
  
}
  return (
    <>
      <div className="expense-form d-flex flex-column bg-primary">
        <form className="expense-form" onSubmit={ handlesubmision}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type='text'
          value={formData.title}  onChange={handleInputChange}/>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id='category' name="category"
          value={formData.category} onChange={handleInputChange}>
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
            <input id="amount" name="amount"
          value={formData.amount} onChange={handleInputChange}/>
          </div>
          <button  className="add-btn btn btn-warning ">Add</button>
        </form>

      </div>

    </>

  )
}

export default ExpenseForm
