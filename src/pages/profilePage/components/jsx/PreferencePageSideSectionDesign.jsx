import React, { useState, useEffect } from "react";
import PreferenceSelector from "./PreferenceSelector";
import Button from "@mui/material/Button";
import TrekListAPI from "../../../../apis/TrekListAPI";
import GetPreferencesAPI from "../../../../apis/GetPreferencesAPI";
import UpdatePreferencesAPI from "../../../../apis/UpdatePreferencesAPI";

const PreferencePageSideSectionDesign = () => {
  const userName = localStorage.getItem("userName");
  const [isdisabled, setIsdisabled] = useState(true);
  const [Treks, setTreks] = useState([]);
  const [state, setState] = useState();
  const [season, setSeason] = useState();
  const [difficulty, setDifficulty] = useState();

  const generateArray = async () => {
    const apiResponseTrek = await TrekListAPI({});
    setTreks(apiResponseTrek);

    const apiResponsePref = await GetPreferencesAPI({ userName });
    setState(apiResponsePref.state);
    setSeason(apiResponsePref.season);
    setDifficulty(apiResponsePref.difficulty);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const updatePrefButton = async () => {
    const apiResponse = await UpdatePreferencesAPI({
      userName,
      state: document.querySelectorAll("input")[0].value,
      season: document.querySelectorAll("input")[1].value,
      difficulty: document.querySelectorAll("input")[2].value,
    });
    if (apiResponse === 400) {
      alert("Something Went Wrong. Please Try Again!");
    } else {
      alert("Preferences Updated Successfully!");
      setIsdisabled(true);
    }
  };

  const stateArray = [...new Set(Treks?.map((trek) => trek.state))];
  const seasonArray = [...new Set(Treks?.map((trek) => trek.season))];
  const difficultyArray = [...new Set(Treks?.map((trek) => trek.difficulty))];

  return (
    <>
      {state && season && difficulty && (
        <div
          className="sectionProfileHolder"
          style={{ flexDirection: "column" }}
        >
          <PreferenceSelector
            tag={"State"}
            valueArray={stateArray}
            setValue={setState}
            preferredValue={state}
            setDisable={setIsdisabled}
          />
          <PreferenceSelector
            tag={"Season"}
            valueArray={seasonArray}
            setValue={setSeason}
            preferredValue={season}
            setDisable={setIsdisabled}
          />
          <PreferenceSelector
            tag={"Difficulty"}
            valueArray={difficultyArray}
            setValue={setDifficulty}
            preferredValue={difficulty}
            setDisable={setIsdisabled}
          />
          <Button
            variant="contained"
            onClick={updatePrefButton}
            disabled={isdisabled}
          >
            Update
          </Button>
        </div>
      )}
    </>
  );
};

export default PreferencePageSideSectionDesign;
