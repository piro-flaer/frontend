import React, { useRef } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Treks from "../../../landingPage/components/Treks.json";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  const dropOptions = [...new Set(Treks.map((trek) => trek.name))];
  let inputRef = useRef();

  const handleOnClick = () => {
    document.querySelector(".searchHolder").classList.toggle("expanded");
    setTimeout(() => {
      document.querySelector(".searchHolder.expanded")
        ? inputRef.focus()
        : inputRef.blur();
    }, 700);
  };

  return (
    <>
      <div className="searchHolder">
        <SearchIcon className="searchIcon" onClick={handleOnClick} />
        <Autocomplete
          sx={{
            width: "100%",
            "& .MuiInput-root": {
              color: "white",
              "& .MuiAutocomplete-popupIndicator": {
                display: "none",
              },
              "&::before": {
                borderBottom: "0px solid rgba(0,0,0,0)",
              },
              "&:hover": {
                borderBottom: "0px solid rgba(0,0,0,0)",
                "&:not(.Mui-disabled, .Mui-error)::before": {
                  borderBottom: "0px solid rgba(255,255,255,0)",
                },
              },
              "&::after": {
                borderBottom: "0px solid rgba(0,0,0,0)",
              },
            },
          }}
          clearOnBlur
          clearOnEscape
          options={dropOptions}
          onChange={(event, value) => {
            console.log(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              placeholder="Search For Trek Names"
              inputRef={(input) => {
                inputRef = input;
              }}
              onBlur={handleOnClick}
            />
          )}
        />
      </div>
    </>
  );
};

export default SearchBox;
