import React from "react";
import "../css/MainDiv.css";
import Treks from "../../../landingPage/components/Treks.json";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

const MainDiv = () => {
  const trekList = Treks.filter((trek) => trek.season === "Monsoon");
  const trek = trekList[Math.floor(Math.random() * trekList.length)];

  return (
    <>
      <div className="mainDivClass">
        <video
          src="videos/vid02.mp4"
          muted
          autoPlay
          loop
          className="bgVideo"
        ></video>
        <div className="mainDivHolder">
          <div
            style={{
              position: "relative",
              top: "20%",
              marginLeft: "50px",
              marginRight: "20px",
            }}
          >
            <div className="mainDivName">{trek.name}</div>
            <div className="mainDivDesc">{trek.description}</div>
            <div className="mainDivButton">
              <Link to={"/trek/" + trek.name} state={{ trekArray: trek }}>
                <Button
                  variant="contained"
                  startIcon={<InfoIcon />}
                  sx={{ backgroundColor: "#5D5A58" }}
                >
                  More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDiv;
