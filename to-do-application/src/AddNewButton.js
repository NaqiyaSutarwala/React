import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const AddNewButton = ({ onHandleOpen }) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={onHandleOpen}
        endIcon={<AddCircleIcon />}
      >
        Create new Task
      </Button>
    </>
  );
};
