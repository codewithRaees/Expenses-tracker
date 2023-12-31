import React from 'react'

const ContextMenu = ({menuPosition , setmenuPosition ,expenses, setexpenses, setExpense,seteditingrowId , rowId} ) => {
   if(!menuPosition.left) return
  return (
    <div className="context-menu " style={menuPosition}>
    <div onClick={()=>{
      const {title , category , amount} = expenses.find((expense)=> expense.id === rowId)
      seteditingrowId(rowId)
      setExpense({title , category , amount})
      setmenuPosition({})
    }}>Edit</div>
    <div onClick={()=>{
      setexpenses((prevState)=> prevState.filter((expense)=> expense.id !== rowId))
      setmenuPosition({})
    }}>Delete</div>
  </div>
  )
}

export default ContextMenu
