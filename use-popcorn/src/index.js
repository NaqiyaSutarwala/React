import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
      onSetRating={{}}
      maxRating={4}
    /> */}
  </React.StrictMode>
);

