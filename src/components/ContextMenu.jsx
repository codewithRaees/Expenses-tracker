import React from 'react'

const ContextMenu = ({menuPosition}) => {
   if(!menuPosition.left) return
  return (
    <div className="context-menu " style={menuPosition} >
    <div>Edit</div>
    <div>Delete</div>
  </div>
  )
}

export default ContextMenu
