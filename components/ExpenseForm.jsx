import React, { useState } from "react";
import Input from "./Input";
import SelectMenu from "./SelectMenu";

const ExpenseForm = ({
  setExpenses,
  rowId,
  expense,
  setExpense,
  setRowId,
  isEditing,
}) => {
  const validationConfig = {
    title: [
      { required: true, message: "Title is required!" },
      { minlength: 5, message: "Title should be at least 5 charactor long!" },
    ],
    category: [{ required: true, message: "Please select a category!" }],
    amount: [
      { required: true, message: "Please enter an amount!" },
      { pattern: /^[0-9]+$/, message: "Enter only number!" },
    ],
  };

  const [error, setError] = useState({});
  const validate = (formData) => {
    const errorData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.minlength && value.length < 5) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errorData[key] = rule.message;
          return true;
        }
      });
    });

    setError(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    if (rowId) {
      setExpenses((prevState) =>
        prevState.map((prevexpense) => {
          if (prevexpense.id === rowId) {
            return { ...expense, id: rowId };
          }
          return prevexpense;
        })
      );
      setRowId("");
      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      return;
    }
    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError({});
  };
  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          label={"Title"}
          value={expense.title}
          error={error.title}
          name={"title"}
          onChange={handleChange}
          id={"title"}
        />
        <SelectMenu
          id={"category"}
          name={"category"}
          value={expense.category}
          onChange={handleChange}
          error={error.category}
          label={"Category"}
          options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
          defaultText={"Select Category"}
          hidden={"hidden"}
        />

        <Input
          label={"Amount"}
          value={expense.amount}
          error={error.amount}
          onChange={handleChange}
          id={"amount"}
          name={"amount"}
        />
        <button className="add-btn">{isEditing ? "Save" : "Add"}</button>
      </form>
    </>
  );
};

export default ExpenseForm;
