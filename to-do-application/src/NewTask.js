import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AddNewButton } from "./AddNewButton";
import { TextareaAutosize } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./To-do.css";
import ProfileAvatar from "./ProfileAvatar";
import PriorityChip from "./PriorityChip";
import { useState } from "react";

const NewTask = ({ tasks, setTasks }) => {
  const [open, setOpen] = useState(false);
  const [priorityValue, setPriorityValue] = useState("");
  const [assigned, setAssigned] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    formJson.priority = priorityValue;
    formJson.assigned = assigned;
    formJson.id = `task/${1}`;

    console.log(formJson);
    setTasks((task) => {
      return [
        ...task,
        {
          ...formJson,
          id: task.length > 0 ? `task/${task.length + 1}` : `task/1`,
        },
      ];
    });
    handleClose();
  };

  return (
    <>
      <AddNewButton onHandleOpen={handleClickOpen}>
        Open form dialog
      </AddNewButton>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            handleSubmit(event);
          },
        }}
      >
        <DialogTitle>To-do</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="normal"
            id="name"
            name="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <span className="margin"> </span>

          <TextareaAutosize
            required
            name="description"
            id="description"
            className="textArea-width"
            aria-label="minimum height"
            minRows={4}
            placeholder="Enter Task"
          />
          <div style={{ margin: "10px" }}></div>

          <PriorityChip priority={"High"} setPriorityValue={setPriorityValue} />
          <SpanForMarginRight />

          <PriorityChip
            priority={"Medium"}
            setPriorityValue={setPriorityValue}
          />
          <SpanForMarginRight />

          <PriorityChip
            priority={"Low"}
            priorityValue={priorityValue}
            setPriorityValue={setPriorityValue}
          />

          <AssignmentDropDown assigned={assigned} setAssigned={setAssigned} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Okay</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const SpanForMarginRight = () => {
  return <span style={{ marginRight: "10px" }}></span>;
};

const AssignmentDropDown = ({ assigned, setAssigned }) => {
  return (
    <FormControl className="dropDown">
      <InputLabel id="demo-simple-select-label">Assign Task</InputLabel>
      <Select
        onChange={(e) => {
          setAssigned(e.target.value);
        }}
        value={assigned}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Assign Task"
        style={{
          height: "40px",
        }}
      >
        <MenuItem value="NS">
          <ProfileAvatar>NS</ProfileAvatar>
          <SpanForMarginRight />
          Naqiya Sutarwala
        </MenuItem>

        <MenuItem value="MS">
          <ProfileAvatar>MS</ProfileAvatar>
          <SpanForMarginRight />
          Mohammed Shethwala
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default NewTask;
