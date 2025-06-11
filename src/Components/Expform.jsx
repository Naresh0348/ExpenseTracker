import React, { useState } from 'react';

function Expform() {
  const [expense, setExpense] = useState({
    expense: "",
    amount: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Expense:", expense);
    // Optional: Clear form after submission
    setExpense({ expense: "", amount: "", date: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <label>Expense: </label>
          <input
            type="text"
            name="expense"
            value={expense.expense}
            onChange={handleChange}
            required
          />
        </section>
        <section>
          <label>Amount: </label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </section>
        <section>
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </section>
        <section>
          <button type="submit" style={{ color: 'red' }}>
            Add Expense
          </button>
        </section>
      </form>
    </>
  );
}

export default Expform;
