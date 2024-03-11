import { useState } from "react";

const TipCalculator = () => {
  const [bill, setBill] = useState();
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const handleTotalBill = (e) => {
    setBill(e.target.value);
  };

  const handleOptionChange = (e) => {
    setTip(Number(e.target.value));
  };

  const handleFriendOptionChange = (e) => {
    setFriendTip(Number(e.target.value));
  };

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setFriendTip(0);
  };

  let average = (tip + friendTip) / 2;
  let averageTip = (bill * average) / 100;
  let totalBill = Number(averageTip) + Number(bill);

  return (
    <>
      <TotalBills bill={bill} onInputChange={handleTotalBill}></TotalBills>
      <br></br>

      <TipInputs tip={tip} onOptionChange={handleOptionChange}>
        How did you like the service?{" "}
      </TipInputs>
      <br></br>

      <TipInputs tip={friendTip} onOptionChange={handleFriendOptionChange}>
        How did your friend like the service?
      </TipInputs>
      <br></br>
      <Output
        bill={bill}
        averageTip={averageTip}
        totalBill={totalBill}
      ></Output>
      <Reset onClickReset={handleReset} />
    </>
  );
};

const TotalBills = ({ onInputChange, bill }) => {
  return (
    <>
      <div>
        How much was the bill?
        <input
          type="number"
          value={bill}
          onChange={(e) => {
            onInputChange(e);
          }}
        ></input>
      </div>
    </>
  );
};
const TipInputs = ({ children, tip, onOptionChange }) => {
  return (
    <>
      <div>
        {children}
        <select
          value={tip}
          onChange={(e) => {
            onOptionChange(e);
          }}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was Okay (5%)</option>
          <option value={10}>It was Good (10%)</option>
          <option value={20}>Absolutely Amazing (20%)</option>
        </select>
      </div>
    </>
  );
};

const Output = ({ bill, averageTip, totalBill }) => {
  if (!bill) return;
  return (
    <h3>
      {" "}
      You pay ${totalBill} (${bill} + ${averageTip} tip){" "}
    </h3>
  );
};
const Reset = ({ onClickReset }) => {
  return <button onClick={onClickReset}>Reset</button>;
};

export default TipCalculator;
