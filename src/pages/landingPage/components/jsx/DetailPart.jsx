import React from "react";
import "../css/DetailPart.css";
import "../css/DetailPartMedia.css";
import RotatingPart from "./RotatingPart";
import { Link } from "react-router-dom";

const DetailPart = () => {
  const description = ["Adventure", "Escape", "Quest", "Getaway", "Odyssey"];

  return (
    <>
      <video
        src="videos/vid01.mp4"
        muted
        autoPlay
        loop
        className="bgVideo"
      ></video>
      <div className="detailPart">
        <div
          id="title"
          style={{ marginTop: "10%", textShadow: "1px 1px 12.5px black" }}
        >
          TrekLicious
        </div>
        <div className="rotatingPartHolder">
          <div>is your much needed</div>
          <div className="rotatingPart">
            <RotatingPart descriptions={description} />
          </div>
        </div>
        <div className="details">
          Welcome to Treklicious, the ultimate destination for adventure
          seekers. Explore a vast selection of exhilarating treks from around
          the world. Immerse yourself in stunning visuals, find comprehensive
          details, and plan your next unforgettable journey. Get ready to embark
          on the trek of a lifetime with Treklicious.
        </div>
        <div className="buttonHolder">
          <Link to={"/signup"}>
            <button className="button">Sign Up</button>
          </Link>
          <Link to={"/login"}>
            <button className="button">Log In</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailPart;
