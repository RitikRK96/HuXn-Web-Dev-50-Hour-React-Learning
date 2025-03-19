import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <div>Count is: {count}</div>
      <button onClick={()=>{setCount(count+1)}}>Add Value</button>
      <button onClick={()=>{setCount(count-1)}}>Remove Value</button>
    </div>
  );
};

export default CounterEffect;
