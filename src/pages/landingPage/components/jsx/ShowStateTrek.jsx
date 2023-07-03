import React, { useState } from "react";
import DialogBox from "./DialogBox";
import "../css/ShowStateTrek.css";

const ShowStateTrek = ({ stateTrekArray }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="stateTrekArrayHolder">
        {stateTrekArray?.map((trek, index) => {
          return (
            <div
              key={index}
              className="trekHolder Medium statePart"
              onClick={() => {
                setOpen(true);
              }}
            >
              <img src={trek.img} />
              <p>{trek.name}</p>
            </div>
          );
        })}
      </div>
      <DialogBox open={open} setOpen={setOpen} />
    </>
  );
};

export default ShowStateTrek;
