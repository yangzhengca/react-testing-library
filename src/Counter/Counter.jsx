import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
      setCounterValue(counterValue+inputValue)
  }

  const subToCounter = () => {
    setCounterValue(counterValue-inputValue)
  }


  return (
    <div>
      <h2 data-testid="header">My Counter</h2>
      <h1 data-testid="counter"
      className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`}>
          {counterValue}
          </h1>
      <button data-testid="add-sub" onClick={subToCounter}>-</button>
      <input
        class="text-center"
        type="number"
        data-testid="input"
        value={inputValue}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button data-testid="add-btn" onClick={addToCounter}>+</button>
    </div>
  );
};

export default Counter;
