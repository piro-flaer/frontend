import React from "react";
import "../css/TDPHeader.css";

const TDPHeader = ({ imgSrc }) => {
  console.log("02", imgSrc);
  return (
    <>
      <div className="tdpHeader">
        <img src={"/" + imgSrc} />
      </div>
    </>
  );
};

export default TDPHeader;
