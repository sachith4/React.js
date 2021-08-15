import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // useState is an array containing [initialno.,function]

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

// useState hook returns an array [initialValue,function]; We have mapped it to [count,setCount]
//count=100 and setCount equals the function to increase or decrease

export default App;
