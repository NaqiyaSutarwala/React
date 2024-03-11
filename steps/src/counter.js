import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(1);

  const handleNextCount = () => {
    setCount((count) => {
      return count + step;
    });
  };

  const handlePreviousCount = () => {
    setCount((count) => {
      return count - 1;
    });
  };

  const handlePreviousStep = () => {
    setStep((step) => {
      return step - 1;
    });
  };

  const handleNextStep = () => {
    setStep((step) => {
      return step + 1;
    });
  };

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={handlePreviousStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div>
        <button onClick={handlePreviousCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleNextCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
