import React from "react";
import {useState, useEffect} from 'react'


const useEffect1 = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Call use effect");
    document.title = `Increment ${value}`;
  }, [value]);
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click me...</button>
    </div>
  );
};

export default useEffect1;
