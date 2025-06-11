import React, { useState } from 'react';

function Expform() {
    const [expense, setExpense] = useState({
        expense:"",
        amount:"",
        expense:"",

    });

    const handleChange = (event) => {
    setExpense((prevExpense) => ({
      ...prevExpense,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(expense);
  }

  const add = {...expense};

  return (
    <>
    <form onSubmit={handleSubmit}>
        <section>
            <label>Expense: </label>
            <input 
            type="text" name="expense" value={expense.expense} onChange={handleChange}/>
        </section>
        <section>
            <label>Amount: </label>
            <input 
            type="text" name="amount" value={expense.amount} onChange={handleChange} />
        </section>
        <section>
            <label>Date: </label>
            <input 
            type="date" name="date" value={expense.date} onChange={handleChange}/>
        </section>
        <section>
            <button type='submit' style={{color:'red'}}>Add Expense</button>
        </section>
    </form>
    </>
  );
}

export default Expform;
