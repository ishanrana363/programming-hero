import { useState } from "react";
import "./App.css";

const Even = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    
        setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if(count>0){
        setCount((prev) => prev - 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button
        className={`btn-2`}
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default Even;
