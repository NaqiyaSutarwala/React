import { useState, useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, "previous");
  console.log(action);

  switch (action.type) {
    case "dec": {
      return { ...state, count: state.count - state.step };
    }
    case "inc": {
      return { ...state, count: state.count + state.step };
    }
    case "setCount": {
      return { ...state, count: action.payload };
    }
    case "setStep": {
      return { ...state, step: action.payload };
    }
    case "reset": {
      return { count: 0, step: 1 };
    }
    default:
      throw new Error("Unknown Action");
  }
};

function DateCounter() {
  const initialState = { count: 0, step: 1 };

  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {};

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "dec" });
          }}
        >
          -
        </button>
        <input
          value={count}
          onChange={(e) => {
            dispatch({ type: "setCount", payload: Number(e.target.value) });
          }}
        />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
