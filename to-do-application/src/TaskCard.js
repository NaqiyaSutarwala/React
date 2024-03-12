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
import { Select, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { AssignmentDropDown } from "./NewToDoForm";
import FileDownloadDoneIcon from "@mui/icons-material/FileDownloadDone";

export default function TaskCard({
  title,
  description,
  priority,
  assigned,
  id,
  setTasks,
  tasks,
}) {
  const [taskStatus, setTaskStatus] = useState("Pending");
  const [edit, setEdit] = useState(false);
  const [assignedTo, setAssigned] = useState("");
  const [priorityValue, setPriorityValue] = useState("");

  let perTask = {
    title,
    description,
    priority,
    assigned,
    id,
  };

  const [perTaskEdit, setPerTaskEdit] = useState(perTask);
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
      sx={{ maxWidth: 345, backgroundColor: bgColor }}
      style={{ marginTop: "20px", position: "relative" }}
    >
      <CardHeader
        title={
          edit ? (
            <TextField
              id="standard-basic"
              variant="standard"
              value={perTaskEdit.title}
              onChange={(e) => {
                setPerTaskEdit((perTaskPrev) => {
                  return { ...perTaskPrev, title: e.target.value };
                });
              }}
            />
          ) : (
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          )
        }
        subheader={id}
        style={{ position: "relative" }}
      />
      <StatusDropDown taskStatus={taskStatus} setTaskStatus={setTaskStatus} />
      <CardContent>
        {edit ? (
          <TextField
            id="standard-basic"
            variant="standard"
            value={perTaskEdit.description}
            onChange={(e) => {
              setPerTaskEdit((perTaskPrev) => {
                return { ...perTaskPrev, description: e.target.value };
              });
            }}
          />
        ) : (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        {edit ? (
          <>
            <PriorityChip
              priority={"High"}
              setPriorityValue={setPriorityValue}
            />
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
          </>
        ) : (
          <PriorityChip priority={priority} />
        )}
        <SpanForMarginRight />

        {edit ? (
          <>
            <AssignmentDropDown
              assigned={assignedTo}
              setAssigned={setAssigned}
              className="dropDown-edit"
            />
          </>
        ) : (
          <ProfileAvatar>{assigned}</ProfileAvatar>
        )}

        <ActionButtons
          setEdit={setEdit}
          edit={edit}
          perTask={perTaskEdit}
          setTasks={setTasks}
          tasks={tasks}
          priority={priorityValue}
          assigned={assignedTo}
        />
      </CardActions>
    </Card>
  );
}

const ActionButtons = ({
  setEdit,
  edit,
  perTask,
  setTasks,
  tasks,
  priority,
  assigned,
}) => {
  const handleDeleteCurrent = () => {
    const deleted = tasks.filter((item) => {
      return item.id !== perTask.id;
    });
    setTasks(deleted);
  };

  const handleClick = () => {
    setEdit(true);

    if (edit) {
      setEdit(false);
      const editedArray = tasks.map((task) => {
        if (task.id === perTask.id) {
          return {
            ...task,
            ...perTask,
            priority: priority,
            assigned: assigned,
          };
        } else {
          return task;
        }
      });
      setTasks(editedArray);
    }
  };

  return (
    <div style={{ float: "right", position: "absolute", right: "10px" }}>
      <IconButton aria-label="Edit button" onClick={handleClick}>
        {edit ? <FileDownloadDoneIcon /> : <EditIcon />}
      </IconButton>
      {edit || (
        <IconButton aria-label="share" onClick={handleDeleteCurrent}>
          <DeleteIcon />
        </IconButton>
      )}
    </div>
  );
};

const StatusDropDown = ({ taskStatus, setTaskStatus }) => {
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
          setTaskStatus(e.target.value);
        }}
      >
        <MenuItem value={"Pending"}>Pending</MenuItem>
        <MenuItem value={"Process"}>In Process</MenuItem>
        <MenuItem value={"Completed"}>Completed</MenuItem>
      </Select>
    </FormControl>
  );
};
