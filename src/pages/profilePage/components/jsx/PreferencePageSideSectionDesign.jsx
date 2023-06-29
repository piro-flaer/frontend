import React, { useState } from "react";
import PreferenceSelector from "./PreferenceSelector";
import Treks from "../../../landingPage/components/Treks.json";
import Button from "@mui/material/Button";

const PreferencePageSideSectionDesign = () => {
  const stateArray = [...new Set(Treks.map((trek) => trek.state))];
  const seasonArray = [...new Set(Treks.map((trek) => trek.season))];
  const difficultyArray = [...new Set(Treks.map((trek) => trek.difficulty))];

  const [state, setState] = useState("Uttarakhand");
  const [season, setSeason] = useState("Monsoon");
  const [difficulty, setDifficulty] = useState("Easy");

  return (
    <>
      <div className="sectionProfileHolder" style={{ flexDirection: "column" }}>
        <PreferenceSelector
          tag={"State"}
          valueArray={stateArray}
          setValue={setState}
          preferredValue={state}
        />
        <PreferenceSelector
          tag={"Season"}
          valueArray={seasonArray}
          setValue={setSeason}
          preferredValue={season}
        />
        <PreferenceSelector
          tag={"Difficulty"}
          valueArray={difficultyArray}
          setValue={setDifficulty}
          preferredValue={difficulty}
        />
        <Button variant="contained">Update</Button>
      </div>
    </>
  );
};

export default PreferencePageSideSectionDesign;
