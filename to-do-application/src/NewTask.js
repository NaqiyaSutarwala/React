import { AddNewButton } from "./AddNewButton";
import "./To-do.css";
import { useState } from "react";
import NewToDoForm from "./NewToDoForm";

const NewTask = ({ tasks, setTasks }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AddNewButton onHandleOpen={handleClickOpen}>
        Open form dialog
      </AddNewButton>

      <NewToDoForm
        tasks={tasks}
        setTasks={setTasks}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
};

export const SpanForMarginRight = () => {
  return <span style={{ marginRight: "10px" }}></span>;
};

export default NewTask;
