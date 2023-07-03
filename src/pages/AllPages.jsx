import React from "react";
import { Link, useLocation } from "react-router-dom";
import TDPHeader from "./components/jsx/TDPHeader";
import TDPBody from "./components/jsx/TDPBody";
import { Button } from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";

const TrekDetailPage = () => {
  const location = useLocation();
  const { trekArray } = location.state;
  return (
    <>
      <Link to={"/home"} style={{ textDecoration: "none" }}>
        <Button
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            zIndex: 1,
            color: "white",
          }}
          variant="contained"
          startIcon={<ForwardIcon sx={{ transform: "rotateZ(180deg)" }} />}
        >
          Go Home
        </Button>
      </Link>
      <div className="trekDetailPage">
        <TDPHeader imgSrc={trekArray.img} />
        <TDPBody
          trekName={trekArray.name}
          trekState={trekArray.state}
          trekSeason={trekArray.season}
          trekDifficulty={trekArray.difficulty}
          trekDescription={trekArray.description}
        />
      </div>
    </>
  );
};

export default TrekDetailPage;
