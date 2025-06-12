import React, { useState } from 'react';
import ExpenseSummary from './expensesummary';


function ExpForm() {
  const [expense, setExpense] = useState({
    expense: '',
    amount: '',
    date: '',
  });

  const [expenseList, setExpenseList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenseList((prevList) => [...prevList, expense]);
    setExpense({ expense: '', amount: '', date: '' });
  };

  const handleDelete = (indexToRemove) => {
    setExpenseList((prevList) =>
      prevList.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <section style={{ marginBottom: '1rem' }}>
          <label>Expense: </label>
          <input
            type="text"
            name="expense"
            value={expense.expense}
            onChange={handleChange}
            required
          />
        </section>
        <section style={{ marginBottom: '1rem' }}>
          <label>Amount: </label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </section>
        <section style={{ marginBottom: '1rem' }}>
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </section>
        <button type="submit" style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px' }}>
          Add Expense
        </button>
      </form>

      {/* Pass expenseList and delete function to child */}
      <ExpenseSummary expenses={expenseList} onDelete={handleDelete} />
    </>
  );
}

export default ExpForm;