import React from 'react'

const Input = ({label, id, name, value, onChange, errors}) => {
  return (
    <div className="input-container position-relative mb-4  ">
    <label htmlFor={id}>{label}</label>
    <input id={id} 
     name={name} 
     value={value} 
     onChange={onChange} />
     <p className='error text-warning m-0 position-absolute top-100 '>{errors}</p>
  </div>
  )
}

export default Input
