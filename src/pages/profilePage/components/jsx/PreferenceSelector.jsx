import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const PreferenceSelector = ({
  tag,
  valueArray,
  setValue,
  preferredValue,
  setDisable,
}) => {
  return (
    <>
      <FormControl sx={{ width: 300, m: 2.5 }}>
        <InputLabel>{tag}</InputLabel>
        <Select
          value={preferredValue}
          onChange={(event) => {
            setValue(event.target.value);
            setDisable(false);
          }}
          input={<OutlinedInput label={tag} />}
          renderValue={(selected) => selected}
        >
          {valueArray.map((value) => (
            <MenuItem key={value} value={value}>
              <Checkbox checked={preferredValue === value} />
              <ListItemText>{value}</ListItemText>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default PreferenceSelector;
