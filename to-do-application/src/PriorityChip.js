import Chip from "@mui/material/Chip";

import "./To-do.css";
import { useState } from "react";

const PriorityChip = ({ priority, setPriorityValue, border }) => {

  let BgColor;
  if (priority === "High") {
    BgColor = "primary";
  } else if (priority === "Medium") {
    BgColor = "secondary";
  } else {
    BgColor = "default";
  }
  return (
    <Chip
      sx={
        border
          ? { border: "2px", borderColor: "black", borderStyle: "solid" }
          : ""
      }
      label={priority}
      variant="filled"
      color={BgColor}
      id={priority}
      onClick={(e) => {
        setPriorityValue(priority);
      }}
    />
  );
};

export default PriorityChip;
