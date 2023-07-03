import React from "react";
import "../css/TDPHeader.css";

const TDPHeader = ({ imgSrc }) => {
  return (
    <>
      <div className="tdpHeader">
        <img src={imgSrc} />
      </div>
    </>
  );
};

export default TDPHeader;
