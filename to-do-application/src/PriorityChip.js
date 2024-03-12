import Chip from "@mui/material/Chip";

import "./To-do.css";

const PriorityChip = ({ priority, setPriorityValue }) => {
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
      label={priority}
      variant="filled"
      color={BgColor}
      id={priority}
      onClick={() => {
        setPriorityValue(priority);
      }}
    />
  );
};

export default PriorityChip;
