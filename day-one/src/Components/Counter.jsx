import { useState } from "react";
import "./Counter.css"

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p className="counter-text">You clicked <span>{count}</span> times...</p>
      <div className="counter-buttons">
        <button className="btn increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="btn decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
