import React, { useRef, useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import TrekListAPI from "../../../../apis/TrekListAPI";
import { Navigate } from "react-router-dom";

const SearchBox = () => {
  const [Treks, setTreks] = useState();
  const [redirect, setRedirect] = useState(false);
  const [trekValue, setTrekValue] = useState();

  const generateArray = async () => {
    const response = await TrekListAPI({});
    setTreks(response);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const dropOptions = [...new Set(Treks?.map((trek) => trek.name))];
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
      {redirect && (
        <Navigate
          to={"/trek/" + trekValue}
          state={{
            trekArray: Treks.filter((trek) => trek.name === trekValue)[0],
          }}
        />
      )}

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
            setTrekValue(value);
            setRedirect(true);
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
