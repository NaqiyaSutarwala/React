import TextField from "@mui/material/TextField";
import { useState } from "react";

const Search = ({ tasks, setTasks, setSearch, filteredTask }) => {
  const [searchValue, setSearchValue] = useState();

  const search = filteredTask.length > 0 ? filteredTask : tasks;

  const handleSearch = (e) => {
    setSearchValue(e.target.value);

    const filteredArr = search.filter((task) => {
      if (task.title.includes(e.target.value)) return task;
    });

    setSearch(filteredArr.length <= 0 ? "" : filteredArr);

    if (e.target.value.trim().length === 0) setSearch([]);
  };

  return (
    <>
      <TextField
        style={{ width: "400px", marginRight: "20px" }}
        id="outlined-search"
        label="Search"
        value={searchValue}
        onChange={(e) => handleSearch(e)}
        type="search"
      />
    </>
  );
};

export default Search;
