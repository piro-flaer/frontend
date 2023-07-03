import React from "react";
import Button from "@mui/material/Button";
import "../css/ButtonDesign.css";
import SetPreferencesAPI from "../../../../apis/SetPreferencesAPI";
import { Navigate } from "react-router-dom";

const ButtonDesign = ({
  divIndexValue,
  setDivIndexValue,
  setDirectionValue,
  setPrefStateValue,
  setPrefSeasonValue,
  setPrefDifficultyValue,
  prefStateValue,
  prefSeasonValue,
  prefDifficultyValue,
  userName,
}) => {
  const backButtonClicked = () => {
    setDivIndexValue((index) => {
      return (index -= 1);
    });
    setDirectionValue(-1);
  };

  const nextButtonClicked = () => {
    divIndexValue === 0
      ? setPrefStateValue(
          document.querySelector(".selectedOptionSpan")
            ? document.querySelector(".selectedOptionSpan").innerHTML ===
              "Other:"
              ? document.querySelector("#autocompleteValue").value
              : document.querySelector(".selectedOptionSpan").innerHTML
            : "NA"
        )
      : setPrefSeasonValue(
          document.querySelector(".selectedOptionSpan")
            ? document.querySelector(".selectedOptionSpan").innerHTML
            : "NA"
        );

    setDivIndexValue((index) => {
      return (index += 1);
    });
    setDirectionValue(1);
  };

  const finishButtonClicked = () => {
    setPrefDifficultyValue(
      document.querySelector(".selectedOptionSpan")
        ? document.querySelector(".selectedOptionSpan").innerHTML
        : "NA"
    );
    console.log("finished");
    const apiResponse = SetPreferencesAPI({
      userName: userName,
      state: prefStateValue,
      season: prefSeasonValue,
      difficulty: prefDifficultyValue,
    });
    if (apiResponse === 400) {
      alert("Please Try Again!");
      setDivIndexValue(0);
      setDirectionValue(1);
    } else {
      <Navigate to="/home" />;
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          onClick={backButtonClicked}
          disabled={divIndexValue === 0 ? true : false}
        >
          Back
        </Button>
        {divIndexValue === 2 ? (
          <Button variant="contained" onClick={finishButtonClicked}>
            Finish
          </Button>
        ) : (
          <Button variant="contained" onClick={nextButtonClicked}>
            Next
          </Button>
        )}
      </div>
    </>
  );
};

export default ButtonDesign;
