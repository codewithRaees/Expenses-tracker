import { useState } from "react";
import "./App.css";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import ContextMenu from "../components/ContextMenu";
import ExpenseData from "../ExpenseData";
import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  const [isEditing, setisEditing] = useLocalStorage("isEditing", "");
  const [expenses, setExpenses] = useLocalStorage("expenses", ExpenseData);
  const [rowId, setRowId] = useLocalStorage("rowId", "");
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
  });

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            setExpenses={setExpenses}
            rowId={rowId}
            setRowId={setRowId}
            expense={expense}
            setExpense={setExpense}
            isEditing={isEditing}
          />
          <ExpenseTable
            expenses={expenses}
            setExpenses={setExpenses}
            rowId={rowId}
            setRowId={setRowId}
            setExpense={setExpense}
            setisEditing={setisEditing}
          />
          <ContextMenu />
        </div>
      </main>
    </>
  );
}

export default App;
