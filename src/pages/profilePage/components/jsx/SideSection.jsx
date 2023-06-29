import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import ForwardIcon from "@mui/icons-material/Forward";
import "../css/SideSection.css";
import { Link } from "react-router-dom";

const SideSection = ({ classSelected }) => {
  useEffect(() => {
    document.querySelector(classSelected).classList.add("sideSelected");
  }, []);
  return (
    <>
      <Link to="/home">
        <Button
          variant="outlined"
          sx={{ position: "fixed", top: "5%", left: "10%" }}
          startIcon={<ForwardIcon sx={{ transform: "rotateZ(180deg)" }} />}
        >
          Home
        </Button>
      </Link>
      <div className="sideSectionHolder">
        <div className="profileSide">
          <Link
            to="/my-profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </div>
        <div className="favoriteSide">
          <Link
            to="/my-favorites"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Favorites
          </Link>
        </div>
        <div className="preferenceSide">
          <Link
            to="/my-preferences"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Preferences
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideSection;
