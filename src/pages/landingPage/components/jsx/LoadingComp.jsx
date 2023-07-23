import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import Favorite from "@mui/icons-material/Favorite";
import PropagateLoader from "react-spinners/PropagateLoader";

const LoadingComp = () => {
  const cssProps = {
    height: "100vh",
    width: "100vw",
    display: "flex",
  };
  return (
    <div style={cssProps}>
      <div style={{ margin: "auto", inset: 0, fontSize: "30px" }}>
        <PropagateLoader
          color="rgb(0,0,0)"
          style={{ position: "absolute", right: "50%" }}
        />
        <br />
        Made With <Favorite sx={{ color: "red" }} /> By{" "}
        <a
          href="https://www.github.com/akshat-g-07"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          Akshat Garg
          <sup>
            <LaunchIcon sx={{ fontSize: "15px" }} />
          </sup>
        </a>
      </div>
    </div>
  );
};

export default LoadingComp;
