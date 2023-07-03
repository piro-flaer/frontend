import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TrekParallax from "./TrekParallax";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const SeasonTrekInfoLayer = ({ trekArray, rotateVal, mid }) => {
  const genRandomLetter = () => {
    const letters = ["Small", "Medium", "Large"];
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[randomIndex];
    return randomLetter;
  };

  const parallaxlayerWidth = window.innerWidth < 768 ? "115px" : "500px";
  const parallaxlayerHeight = window.innerWidth < 768 && "100px";
  const parallaxHeight = window.innerWidth < 768 ? "100px" : "150px";

  return (
    <>
      <div className="introPageTrekHolder" style={{ transform: rotateVal }}>
        <div
          style={{
            background: "linear-gradient(to right, gray 50%, transparent 100%",
            height: "90%",
            width: "auto",
            display: "flex",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <ArrowBackIosNewIcon style={{ fontSize: "80px" }} />
        </div>
        <Parallax
          pages={Math.ceil(trekArray.length / 4)}
          horizontal
          style={{ height: parallaxHeight }}
        >
          {trekArray.map((trek, index) => {
            return (
              <ParallaxLayer
                key={index}
                offset={index / 4}
                speed={
                  window.innerWidth < 1024
                    ? 0.25
                    : parseFloat(Math.random().toFixed(2))
                }
                className="introPageTrekSeason"
                style={{
                  width: parallaxlayerWidth,
                  height: parallaxlayerHeight,
                }}
              >
                <TrekParallax
                  mid={mid}
                  treks={trek}
                  dimension={genRandomLetter()}
                />
              </ParallaxLayer>
            );
          })}
        </Parallax>
        <div
          style={{
            background: "linear-gradient(to left, gray 50%, transparent 100%",
            height: "90%",
            width: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            zIndex: 1,
          }}
        >
          <ArrowBackIosNewIcon
            style={{
              fontSize: "80px",
              transform: "rotateZ(180deg)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SeasonTrekInfoLayer;
