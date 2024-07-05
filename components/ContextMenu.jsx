import React from "react";

const ContextMenu = ({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  expenses,
  setExpense,
  setisEditing,
}) => {
  if (!menuPosition) return;
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={(e) => {
          console.log("Edited");
          const { title, category, amount } = expenses.find(
            (expense) => expense.id === rowId
          );
          setExpense({ title, category, amount });
          setMenuPosition({
            left: 0,
            top: 0,
            display: "none",
          });
          setisEditing(rowId);
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          console.log("Deleted");
          setMenuPosition({
            left: 0,
            top: 0,
            display: "none",
          });
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
