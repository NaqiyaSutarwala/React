import { useState } from "react";
import Counter from "./counter";
import CounterSecond from "./CounterSecond";
import CounterTask from "./CounterTask";
import CounterUsingTask from "./CounterUsingTask";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  // return <Counter></Counter>;
  // return <CounterSecond></CounterSecond>;
  return <CounterTask></CounterTask>;
  // return <CounterUsingTask></CounterUsingTask>;

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
        <StepMessage step={step}>{messages[step - 1]}</StepMessage>
        <div className="buttons">
          <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
            <span>👈🏻</span> Previous
          </Button>
          <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
            Next <span>👉🏻</span>
          </Button>
        </div>
      </div>
    </>
  );
};

const StepMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3> Step {step} </h3> {children}
    </div>
  );
};

const Button = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
      {/* {emoji === "👈🏻" ? (
        <>
          <span>{emoji}</span> {text}
        </>
      ) : (
        <>
          <span> {text}</span> {emoji}
        </>
      )} */}
    </button>
  );
};
