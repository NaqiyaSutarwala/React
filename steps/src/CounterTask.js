import { useState } from "react";

export default function CounterTask() {
  const [count, setCount] = useState();
  const [value, setValue] = useState(0);

  const handleSetCount = () => {
    if (!count) return;
    console.log(count);
    setValue(Math.abs(count));
  };

  const handleIncrement = () => {
    setValue((value) => {
      return Number(value) + 1;
    });
  };

  const handleDecrement = () => {
    setValue((value) => {
      return Number(value) - 1;
    });
  };

  return (
    <>
      <h1>Counter</h1>
      <input
        type="number"
        onChange={(e) => {
          setCount(e.target.value);
        }}
        value={count}
      ></input>
      <button onClick={handleSetCount}>Set Count</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
      <h3>Count: {value}</h3>
    </>
  );
}
