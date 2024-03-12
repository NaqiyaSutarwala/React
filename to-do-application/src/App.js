import NewTask from "./NewTask";
import "./To-do.css";
import TaskCard from "./TaskCard";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="main">
      <NewTask tasks={tasks} setTasks={setTasks} />
      <div className="taskGrid">
        <DisplayTask tasks={tasks} />
      </div>
    </div>
  );
}

const DisplayTask = ({ tasks }) => {
  return tasks.map((task) => {
    return (
      <TaskCard
        id={task.id}
        title={task.title}
        description={task.description}
        priority={task.priority}
        assigned={task.assigned}
        key={task.id}
      />
    );
  });
};

export default App;

// title, description ,current status, actions(edit, delete), assign(drop down(profile)), ticket id with formate,
