import React from "react";
import StateTrekInfo from "./StateTrekInfo";

const StateTrek = ({ Treks }) => {
  return (
    <>
      <div style={{ color: "black" }}>
        <div
          id="title"
          style={{
            textShadow: "1px 1px 12.5px black",
            marginTop: window.innerWidth > 1023 ? "0.5%" : "10%",
          }}
        >
          TrekLicious
        </div>
        <div className="rotatingPartHolder">
          <div>to explore state treasures</div>
        </div>
        <StateTrekInfo Treks={Treks} />
      </div>
    </>
  );
};

export default StateTrek;
