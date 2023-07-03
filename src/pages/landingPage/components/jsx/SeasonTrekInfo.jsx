import React from "react";
import SeasonTrekInfoLayer from "./SeasonTrekInfoLayer";
import "../css/SeasonTrekInfo.css";
import "../css/SeasonTrekInfoMedia.css";

const SeasonTrekInfo = ({ Treks }) => {
  const SummerTreks = Treks.filter((trek) => trek.season === "Summer").sort(
    () => Math.random() - 0.5
  );
  const MonsoonTreks = Treks.filter((trek) => trek.season === "Monsoon").sort(
    () => Math.random() - 0.5
  );
  const WinterTreks = Treks.filter((trek) => trek.season === "Winter").sort(
    () => Math.random() - 0.5
  );
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
