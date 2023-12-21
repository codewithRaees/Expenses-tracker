import React, { useState } from 'react'
import { useFilter } from './hooks/useFilter';

const ExpenseTable = ({ expenses }) => {
  const [category, setCategory] = useState('')
  const filteredData = expenses.filter((expense) => expense.category.toLowerCase().includes(category) );
  
    const total =filteredData.reduce((accum , currunt) => accum + currunt.amount , 0 )
    const result = useFilter(filteredData)
    console.log(result)
  return (
    <div className="right-container d-flex flex-column w-100 ">
      <table className="table bg-white expense-table ">
        <thead>
          <tr>

            <th scope="col">Title</th>
            <th scope="col">
              <select onChange={(e)=> setCategory(e.target.value.toLowerCase())}>
              <option value="">All</option>
              <option value="grocery">Grocery</option>
              <option value="clothes">Clothes</option>
              <option value="bills">Bills</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path
                    d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </div></th>
          </tr>
        </thead>
        <tbody>

          {
            filteredData.map(({ id, title, category, amount }) =>
            (
              <tr key={id}>
                <td>{title}</td>
                <td>{category}</td>
                <td>₹{amount}</td>
              </tr>
            )
            )
          }
          <tr>
            
                <td colSpan={2}><b>&nbsp;Total :</b></td>
                
                <td><b>₹{total}</b></td>
              </tr>
              
        </tbody>
      </table>
      <div className="context-menu">
        <div>Edit</div>
        <div>Delete</div>
      </div>
    </div>

  )
}

export default ExpenseTable
