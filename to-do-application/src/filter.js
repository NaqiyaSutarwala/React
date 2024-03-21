import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";


const Filter = ({
  criteriaFilter,
  setCriteriaFilter,
  setFilteredTask,
  filteredTask,
  tasks,
  filteredArray,
  setFilteredArray,
  isFiltered, 
  setIsFiltered,
  handleFiltering,
  handleChange
}) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const criteria = [
    "Completed",
    "Pending",
    "Process",
    "High",
    "Low",
    "Medium",
    "MS",
    "NS",
  ];

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={criteriaFilter}
          onChange={(e) => {
            handleChange(e);
          }}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {criteria.map((criteria) => (
            <MenuItem key={criteria} value={criteria}>
              <Checkbox checked={criteriaFilter.indexOf(criteria) > -1} />
              <ListItemText primary={criteria} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
