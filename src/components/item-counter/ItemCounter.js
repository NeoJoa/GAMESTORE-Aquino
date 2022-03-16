import React, { useEffect, useState } from "react";

const ItemCounter = ({ stock, setSotckSelected }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setSotckSelected(counter);
  }, [counter]);

  const minusCounter = () => {
    if (counter <= 1) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="counter">
        <button onClick={minusCounter}>-</button>
        <span>{counter}</span>
        <button onClick={plusCounter}>+</button>
      </div>
    </>
  );
};

export default ItemCounter;
