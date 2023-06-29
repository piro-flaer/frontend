import React from "react";
import Treks from "./Treks.json";
import SeasonTrekInfoLayer from "./SeasonTrekInfoLayer";
import "./SeasonTrekInfo.css";
import "./SeasonTrekInfoMedia.css";

const SeasonTrekInfo = () => {
  const SummerTreks = Treks.filter((trek) => trek.season === "Summer");
  const MonsoonTreks = Treks.filter((trek) => trek.season === "Monsoon");
  const WinterTreks = Treks.filter((trek) => trek.season === "Winter");
  const traversalArray = [SummerTreks, MonsoonTreks, WinterTreks];

  return (
    <>
      <div className="introPageSeasonHolder">
        {traversalArray.map((trek, index) => {
          return (
            <SeasonTrekInfoLayer
              key={index}
              trekArray={trek}
              rotateVal={index === 1 ? "rotateY(180deg)" : "rotateY(0deg)"}
              mid={index === 1}
            />
          );
        })}
      </div>
    </>
  );
};

export default SeasonTrekInfo;
