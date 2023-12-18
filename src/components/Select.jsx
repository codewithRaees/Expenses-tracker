import React from 'react'

const Select = ({label, id, name, value, onChange, errors, options, defaultoption}) => {
  return (
    <div className="input-container position-relative mb-4 ">
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} value={value} 
             onChange={onChange}>
              {
                defaultoption && <option value="" hidden>
                {defaultoption}
                </option>
              }
              {
                options.map((option, i)=>
                <option key={i} value={option}>{option}</option>
                )
              }
            </select>
            <p className='error text-warning m-0 position-absolute top-100 '>{errors}</p>
          </div>
  )
}

export default Select
