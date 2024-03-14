import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ProfileAvatar from "./ProfileAvatar";
import PriorityChip from "./PriorityChip";
import { SpanForMarginRight } from "./NewTask";
import { Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import NewToDoForm from "./NewToDoForm";

export default function TaskCard({
  title,
  description,
  priority,
  assigned,
  id,
  setTasks,
  tasks,
  newDate,
  newTime,
  updatedTime,
  updatedDate,
}) {
  const [taskStatus, setTaskStatus] = useState("Pending");

  let perTask = {
    title,
    description,
    priority,
    assigned,
    id,
    taskStatus,
  };

  let bgColor;

  if (taskStatus === "Pending") {
    bgColor = "rgb(237, 255, 249)";
  } else if (taskStatus === "Process") {
    bgColor = "rgb(68, 255, 193)";
  } else {
    bgColor = "rgb(17, 255, 243)";
  }
  return (
    <Card
      sx={{ backgroundColor: bgColor }}
      style={{ marginTop: "20px", position: "relative", maxWidth: "400px" }}
    >
      <CardHeader
        title={
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "24px", fontWeight: "bolder", color: "black" }}
          >
            {title}
          </Typography>
        }
        subheader={id}
        style={{ position: "relative" }}
      />
      <StatusDropDown
        taskStatus={taskStatus}
        setTaskStatus={setTaskStatus}
        perTask={perTask}
        setTasks={setTasks}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <PriorityChip priority={priority} />
        <SpanForMarginRight />
        <ProfileAvatar>{assigned}</ProfileAvatar>
        <ActionButtons perTask={perTask} setTasks={setTasks} tasks={tasks} />
      </CardActions>
      <div
        style={{
          display: "flex",
          fontSize: "13px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
            Created Time: {newTime.toUpperCase()}
          </span>{" "}
          <br />
          <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
            Created Date: {newDate}
          </span>
          <div style={{ margin: "10px" }}></div>
        </div>
        {updatedDate ? (
          <div>
            <span style={{ marginRight: "10px", fontWeight: "bold" }}>
              Updated Time: {updatedTime.toUpperCase()}
            </span>
            <br />
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
              Updated Date: {updatedDate}
            </span>
            <div style={{ margin: "10px" }}></div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
}

const ActionButtons = ({ perTask, setTasks, tasks, taskStatus }) => {
  const [open, setOpen] = useState(false);

  const handleDeleteCurrent = () => {
    const deleted = tasks.filter((item) => {
      return item.id !== perTask.id;
    });
    setTasks(deleted);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditing = () => {
    setOpen(true);
  };

  return (
    <div
      style={{
        float: "right",
        position: "absolute",
        right: "10px",
      }}
    >
      <IconButton
        aria-label="Edit button"
        onClick={() => {
          handleEditing();
        }}
      >
        <EditIcon />
      </IconButton>
      {open ? (
        <NewToDoForm
          open={open}
          perTask={perTask}
          setTasks={setTasks}
          handleClose={handleClose}
        />
      ) : (
        ""
      )}

      <IconButton aria-label="share" onClick={handleDeleteCurrent}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

const StatusDropDown = ({ taskStatus, setTaskStatus, perTask, setTasks }) => {
  const [StatusCurr, setStatusCurr] = useState("Pending");

  const handleChange = (e) => {
    setStatusCurr(e.target.value);
    // const StatusCurr = e.target.value;

    setTaskStatus(e.target.value);

    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id === perTask.id) {
          return {
            ...task,
            ...perTask,
            taskStatus: StatusCurr,
          };
        } else {
          return task;
        }
      });
    });
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      size="small"
      style={{ position: "absolute", top: 14, right: 10 }}
    >
      <InputLabel id="demo-select-small-label">Status</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Status"
        value={taskStatus}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <MenuItem value={"Pending"}>Pending</MenuItem>
        <MenuItem value={"Process"}>In Process</MenuItem>
        <MenuItem value={"Completed"}>Completed</MenuItem>
      </Select>
    </FormControl>
  );
};
