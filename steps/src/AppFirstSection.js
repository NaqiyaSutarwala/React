import { useState } from "react";
import Counter from "./counter";
import CounterSecond from "./CounterSecond";
import CounterTask from "./CounterTask";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  // return <Counter></Counter>;
  // return <CounterSecond></CounterSecond>;
  // return <CounterTask></CounterTask>;

  // return (
  //   <>
  //     <button
  //       className="close"
  //       onClick={() => {
  //         setIsOpen((open) => !open);
  //       }}
  //     >
  //       &times;
  //     </button>
  //     {isOpen && <Stepper />}
  //   </>
  // );
}

const Stepper = () => {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1)
      setStep((step) => {
        return step - 1;
      });
  };
  const handleNext = () => {
    if (step < 3) {
      setStep((step) => {
        return step + 1;
      });
      // setStep((step) => {
      //   return step + 1;
      // });
    }
  };

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className="message">
          Step {step} : {messages[step - 1]}
        </p>
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
