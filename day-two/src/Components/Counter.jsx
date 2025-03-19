import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);
  const removeCount = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>You clicked {count} times...</h2>
      <button type="button" onClick={addCount} style={btnStyle}>
        Increment
      </button>
      <button type="button" onClick={removeCount} style={btnStyle}>
        Decrement
      </button>
    </div>
  );
};

const btnStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  transition: 'background-color 0.3s ease',
};

btnStyle[':hover'] = {
  backgroundColor: '#0056b3',
};

export default Counter;
