import NewTask from "./NewTask";
import "./To-do.css";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import Search from "./Search";
import Filter from "./filter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [criteriaFilter, setCriteriaFilter] = useState([]);
  const [search, setSearch] = useState([]);
  const [filteredTask, setFilteredTask] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    const previousValue = criteriaFilter;

    const temp = typeof value === "string" ? value.split(",") : value;

    setCriteriaFilter(temp);
    handleFiltering(temp, previousValue);
  };

  // useEffect(() => {
  //   // console.log(tas);
  //   <Filter
  //     handleFiltering={handleFiltering}
  //     filteredArray={filteredArray}
  //     setFilteredArray={setFilteredArray}
  //     isFiltered={isFiltered}
  //     setIsFiltered={setIsFiltered}
  //     criteriaFilter={criteriaFilter}
  //     setCriteriaFilter={setCriteriaFilter}
  //     tasks={tasks}
  //     filteredTask={filteredTask}
  //     setFilteredTask={setFilteredTask}
  //     setTasks={setTasks}
  //     handleChange={handleChange}
  //   ></Filter>;
  // }, [tasks]);

  const handleFiltering = (temp = [], previousValue) => {
    if (isFiltered) {
      let filteredTasks = [];

      if (previousValue.length > temp.length) {
        console.log("section 1", previousValue, temp);

        if (temp.length === 0) setFilteredTask(tasks);
        if (temp.length === 0) setIsFiltered(false);

        let filteredTasks = [];
        temp.forEach((criteria) => {
          tasks.forEach((task) => {
            if (Object.values(task).includes(criteria)) {
              filteredTasks.push({ ...task });
              console.log(filteredTasks);
            }
          });
        });
        console.log(filteredTasks, "final");
        setFilteredTask(filteredTasks);
        if (temp.length === 0) setFilteredTask(tasks);
      } else {
        filteredArray.forEach((task) => {
          if (Object.values(task).includes(temp[temp.length - 1])) {
            filteredTasks.push({ ...task });
            setFilteredArray(filteredTasks);
          }

          setFilteredTask(filteredTasks);
        });
      }
    } else {
      if (temp.length === 0) setFilteredTask(tasks);

      let filteredTasks = [];
      temp.forEach((criteria) => {
        tasks.forEach((task) => {
          if (Object.values(task).includes(criteria)) {
            filteredTasks.push({ ...task });
            setFilteredArray(filteredTasks);
            setIsFiltered(true);
          }
        });

        if (temp.length === 0) filteredTasks = [];
        if (temp.length === 0) filteredTasks = "";
        if (temp.length === 0) setIsFiltered(false);
        setFilteredTask(filteredTasks);
      });
    }
  };

  const conditionalRender = () => {
    console.log(filteredTask, "from app");
    if (search.length > 0) {
      return <DisplayTask search={search} setTasks={setTasks} />;
    } else if (search === "") {
      return <h1>No Data Found</h1>;
    } else if (filteredTask.length > 0) {
      return (
        <DisplayTask
          filter={filteredTask}
          setTasks={setTasks}
          search={filteredTask}
        />
      );
    } else if (filteredTask === "") {
      return <DisplayTask tasks={tasks} setTasks={setTasks} />;
    } else {
      return <DisplayTask tasks={tasks} setTasks={setTasks} />;
    }
  };

  return (
    <div className="main">
      <NewTask tasks={tasks} setTasks={setTasks} />
      <div className="searchBarDiv">
        <Search
          tasks={tasks}
          setTasks={setTasks}
          setSearch={setSearch}
          filteredTask={filteredTask}
        />
        <Filter
          handleFiltering={handleFiltering}
          filteredArray={filteredArray}
          setFilteredArray={setFilteredArray}
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
          criteriaFilter={criteriaFilter}
          setCriteriaFilter={setCriteriaFilter}
          tasks={tasks}
          filteredTask={filteredTask}
          setFilteredTask={setFilteredTask}
          setTasks={setTasks}
          handleChange={handleChange}
        ></Filter>
      </div>

      <div className="taskGrid">{conditionalRender()}</div>
    </div>
  );
}

export const DisplayTask = ({ tasks, setTasks, search, filter }) => {
  let searchData;
  if (search) {
    searchData = search;
  } else if (tasks) {
    searchData = tasks;
  } else {
    searchData = filter;
  }

  // const searchData = search ? search : tasks;

  return searchData.map((task) => {
    return (
      <TaskCard
        id={task.id}
        title={task.title}
        description={task.description}
        priority={task.priority}
        assigned={task.assigned}
        key={task.id}
        tasks={searchData}
        setTasks={setTasks}
      />
    );
  });
};

export default App;
