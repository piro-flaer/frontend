import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Treks from "../../../landingPage/components/Treks.json";

const OtherOption = ({ prefStateValue, optionValue, indexValue }) => {
  const dropOptions = [
    ...new Set(
      Treks.map((trek) => trek.state).filter(
        (stateName) =>
          stateName !== "Uttarakhand" &&
          stateName !== "Himachal Pradesh" &&
          stateName !== "Maharashtra"
      )
    ),
  ];

  return (
    <>
      <span
        className={
          dropOptions.includes(prefStateValue)
            ? "optionSpan selectedOptionSpan"
            : "optionSpan"
        }
      >
        {optionValue}
      </span>

      <div
        style={{
          marginLeft: "10px",
          width: "50%",
          alignItems: "center",
          display: "flex",
          color: "white",
        }}
      >
        <Autocomplete
          sx={{
            width: "100%",
            "& .MuiInput-root": {
              color: "white",
              "& .MuiSvgIcon-root": {
                color: "white",
              },
              "&::before": {
                borderBottom: "1px solid rgba(255,255,255,0.8)",
              },
              "&:hover": {
                borderBottom: "1px solid rgba(255,255,255,0.4)",
                "&:not(.Mui-disabled, .Mui-error)::before": {
                  borderBottom: "0px",
                },
              },
              "&::after": {
                borderBottom: "2px solid rgba(255,255,255,1)",
              },
            },
          }}
          id="autocompleteValue"
          defaultValue={
            dropOptions.includes(prefStateValue) ? prefStateValue : null
          }
          options={dropOptions}
          onChange={(event, value) => {
            document
              .querySelector(".showCheckIcon")
              ?.classList.remove("showCheckIcon");
            document
              .querySelector(".selectedOptionSpan")
              ?.classList.remove("selectedOptionSpan");
            value &&
              (() => {
                document
                  .querySelectorAll(".checkIcon")
                  [indexValue].classList.add("showCheckIcon");
                document
                  .querySelectorAll(".optionSpan")
                  [indexValue].classList.add("selectedOptionSpan");
              })();
          }}
          renderInput={(params) => <TextField {...params} variant="standard" />}
        />
      </div>

      <CheckCircleIcon
        className={
          dropOptions.includes(prefStateValue)
            ? "checkIcon showCheckIcon"
            : "checkIcon"
        }
      />
    </>
  );
};

export default OtherOption;
