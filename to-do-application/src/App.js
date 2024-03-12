import NewTask from "./NewTask";
import "./To-do.css";
import TaskCard from "./TaskCard";
import { useState } from "react";
import Search from "./Search";
import Filter from "./filter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [criteriaFilter, setCriteriaFilter] = useState([]);

  const handleFiltering = () => {
    if (!criteriaFilter) return;

    console.log(criteriaFilter);
  };

  return (
    <div className="main">
      <NewTask tasks={tasks} setTasks={setTasks} />
      <div className="searchBarDiv">
        <Search />
        <Filter
          criteriaFilter={criteriaFilter}
          setCriteriaFilter={setCriteriaFilter}
          handleFiltering={handleFiltering}
        ></Filter>
      </div>

      <div className="taskGrid">
        <DisplayTask tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

const DisplayTask = ({ tasks, setTasks }) => {
  return tasks.map((task) => {
    return (
      <TaskCard
        id={task.id}
        title={task.title}
        description={task.description}
        priority={task.priority}
        assigned={task.assigned}
        key={task.id}
        tasks={tasks}
        setTasks={setTasks}
      />
    );
  });
};

export default App;
