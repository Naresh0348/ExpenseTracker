import React from 'react';

function ExpenseSummary({ expenses, onDelete }) {
  const totalAmount = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <>
      <h2>Expense List :</h2> 
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {expenses.map((item, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '1rem',
              width: '220px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
          >
            <h3>{item.expense}</h3>
            <p><strong>Amount:</strong> ₹{item.amount}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <button
              onClick={() => onDelete(index)}
              style={{
                top: '10px',
                right: '10px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.8rem',
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: '2rem' }}>
        Total Expense: <span style={{ color: 'green' }}>₹{totalAmount}</span>
      </h3>
    </>
  );
}

export default ExpenseSummary;
