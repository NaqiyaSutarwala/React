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

const NewToDoForm = ({ perTask, setTasks, handleClose, open }) => {
  const obj = {
    title: "",
    description: "",
    priority: "",
    assigned: "",
    id: "",
    taskStatus: "Pending",
  };

  const [assigned, setAssigned] = useState(perTask ? perTask.assigned : "");
  const [updateTask, setUpdateTask] = useState(perTask);
  const [createTask, setCreateTask] = useState(obj);
  const [priorityValue, setPriorityValue] = useState(
    perTask ? perTask.priority : ""
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (perTask) {
      setTasks((tasks) => {
        return tasks.map((task) => {
          if (task.id === updateTask.id) {
            return {
              ...task,
              ...updateTask,
              priority: priorityValue,
              assigned: assigned,
              updatedDate: new Date().toLocaleDateString(),
              updatedTime: new Date().toLocaleTimeString(),
            };
          } else {
            return task;
          }
        });
      });
      handleClose();
    } else {
      const formData = new FormData(event.currentTarget);
      const formJson = Object.fromEntries(formData.entries());
      formJson.priority = priorityValue;
      formJson.assigned = assigned;
      formJson.taskStatus = "Pending";

      formJson.id = `task/${1}`;
      console.log(new Date().toLocaleTimeString());

      setTasks((task) => {
        return [
          ...task,
          {
            ...formJson,
            id: task.length > 0 ? `task/${task.length + 1}` : `task/1`,
            newDate: new Date().toLocaleDateString(),
            newTime: new Date().toLocaleTimeString(),
            // timeStamp:
          },
        ];
      });
      setCreateTask({
        title: "",
        description: "",
        priority: "",
        assigned: "",
        id: "",
      });
      setPriorityValue("");
      setAssigned("");
      handleClose();
    }
  };

  const [border] = useState(true);

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
          value={perTask ? updateTask?.title : createTask?.title}
          onChange={(e) => {
            perTask
              ? setUpdateTask((taskUpdate) => {
                  return { ...taskUpdate, title: e.target.value };
                })
              : setCreateTask((task) => {
                  return { ...task, title: e.target.value };
                });
          }}
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
          value={perTask ? updateTask?.description : createTask?.description}
          onChange={(e) => {
            perTask
              ? setUpdateTask((taskUpdate) => {
                  return { ...taskUpdate, description: e.target.value };
                })
              : setCreateTask((task) => {
                  return { ...task, description: e.target.value };
                });
          }}
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
        {perTask ? (
          <Button type="submit">Update</Button>
        ) : (
          <Button type="submit">Create</Button>
        )}
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
