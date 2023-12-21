import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'

const ExpenseForm = ({setexpenses}) => {
  // const [title , setTitle] = useState('')
  // const [category , setCategory] = useState('')
  // const [amount , setAmount] = useState('')
  const [expense , setExpense] = useState({
    title:'',
    category: '',
    amount: '',
    email: ''
  })
  const[ errors , setErrors] = useState({})
  const validationConfig = {
    title:[
          {required: true , message:'Please enter title'}, 
          {minlength: 5 , message:'Value must be at least 5 charactors'}
          ],
    category: [{required: true , message:'Please enter title'}],
    amount: [{required: true , message:'Please enter amount'}],

    email: [{required: true , message:'Please enter email'},
             {pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , message: 'Please enter valid email'},
          
           ],
  }
  
  const formValidation = (formdata)=>{
    const errorsData = {}
   Object.entries(formdata).forEach(([key, value])=>
   {
    validationConfig[key].some((rule)=>{
      console.log(rule)
      if(rule.required && !value){
        errorsData[key] = rule.message
        return true
      }
      if(rule.minlength && value.length < 5){
        errorsData[key] = rule.message
        return true
      }
      if(rule.pattern && !rule.pattern.test(value))
      {
        errorsData[key] = rule.message
        return true
      }
      
    })
   })
    // if(!formdata.title){
    //   errorsData.title = "Title is required"
    // }
    // if(!formdata.category){
    //   errorsData.category = "Select a categoery"
    // }
    // if(!formdata.amount){
    //   errorsData.amount = "Amount is required"
    // }
    setErrors(errorsData)
    return errorsData
  }
  const handleform = (e) => {
    e.preventDefault()
    if(Object.keys(formValidation(expense)).length) return 
    setexpenses((prestate) => [...prestate ,{...expense,id:crypto.randomUUID() }])
   setExpense({
    title:'',
    category: '',
    amount: ''
   })
  }
const handleChange = (e)=> {
  const { name, value } = e.target;
  setExpense((prevstate)=>({...prevstate, [name]:value}))
  setErrors({})
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
          </div> */}
          <Input label="Title" 
                 id="title"
                 name="title"
                 value={expense.title}
                 onChange={handleChange}
                 errors={errors.title}
          />
          <Select label="Category" 
                  defaultoption='Select Category'
                  options={['Grocery','Clothes','Bills','Education','Medicine']}
                 id="category"
                 name="category"
                 value={expense.category}
                 onChange={handleChange}
                 errors={errors.category}/>
          {/* <div className="input-container position-relative mb-4 ">
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
            <p className='error text-warning m-0 position-absolute top-100 '>{errors.category}</p>
          </div> */}
          {/* <div className="input-container position-relative mb-4 ">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="amount" value={expense.amount} 
             onChange={handleChange}/>
              <p className='error text-warning m-0 position-absolute top-100 '>{errors.amount}</p>
          </div> */}
          <Input label="Amount" 
                 id="amount"
                 name="amount"
                 value={expense.amount}
                 onChange={handleChange}
                 errors={errors.amount}
          />
          <Input label="email" 
                 id="email"
                 name="email"
                 value={expense.email}
                 onChange={handleChange}
                 errors={errors.email}
          />
          <button  className="add-btn btn btn-warning ">Add</button>
        </form>

      </div>

    </>

  )
}

export default ExpenseForm
