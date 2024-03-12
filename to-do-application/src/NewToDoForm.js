import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SpanForMarginRight } from "./NewTask";
import "./To-do.css";
import ProfileAvatar from "./ProfileAvatar";
import PriorityChip from "./PriorityChip";
import { useState } from "react";

const NewToDoForm = ({ tasks, setTasks, handleClose, open }) => {
  const [priorityValue, setPriorityValue] = useState("");
  const [assigned, setAssigned] = useState("");

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

  const [border, setBorder] = useState(true);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
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

        <PriorityChip
          priority={"High"}
          setPriorityValue={setPriorityValue}
          border={priorityValue === "High" && border}
        />
        <SpanForMarginRight />

        <PriorityChip
          priority={"Medium"}
          setPriorityValue={setPriorityValue}
          border={priorityValue === "Medium" && border}
        />
        <SpanForMarginRight />

        <PriorityChip
          priority={"Low"}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
          border={priorityValue === "Low" && border}
        />

        <AssignmentDropDown
          assigned={assigned}
          setAssigned={setAssigned}
          className={"dropDown"}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Okay</Button>
      </DialogActions>
    </Dialog>
  );
};

export const AssignmentDropDown = ({ assigned, setAssigned }) => {
  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 80,
        float: "right",
      }}
    >
      <InputLabel id="demo-simple-select-autowidth-label">
        Assign Task
      </InputLabel>
      <Select
        onChange={(e) => {
          setAssigned(e.target.value);
        }}
        sx={{ minWidth: "200px" }}
        value={assigned}
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        label="Assign Task"
        autoWidth
      >
        <MenuItem value="MS">
          <tr>
            <td>
              <ProfileAvatar>MS</ProfileAvatar>
            </td>
            <td>
              <SpanForMarginRight></SpanForMarginRight>
            </td>
            <td>Mohammed Shethwala</td>
          </tr>
        </MenuItem>

        <MenuItem value="NS">
          <tr>
            <td>
              <ProfileAvatar>NS</ProfileAvatar>
            </td>
            <td>
              <SpanForMarginRight></SpanForMarginRight>
            </td>
            <td>Naqiya Sutarwala</td>
          </tr>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default NewToDoForm;
