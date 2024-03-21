import { useState } from "react";
import { useEffect } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

const CurrencyConvertor = () => {
  const [convertedCurrency, setConvertedCurrency] = useState(0);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setConvertedCurrency(`${amount}`);
      return;
    }
    if (amount.length === 0) setConvertedCurrency("");

    (async () => {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
        );

        const data = await res.json();
        // convertedCurrency = data.rates[toCurrency];
        setConvertedCurrency(data.rates[toCurrency].toFixed(3));
      } catch (err) {}
    })();
  }, [amount, fromCurrency, toCurrency]);

  console.log(convertedCurrency);

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
        width: "auto",
        padding: "10px",
      }}
    >
      <input
        type="text"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <select
        value={fromCurrency}
        onChange={(e) => {
          setFromCurrency(e.target.value);
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => {
          setToCurrency(e.target.value);
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p style={{ marginTop: "10px" }}>
        {`${convertedCurrency} ${amount.length > 0 ? `${toCurrency}` : "0"}`}
      </p>
    </div>
  );
};

export default CurrencyConvertor;
