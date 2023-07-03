import React, { useState } from "react";
import "../css/TrekParallax.css";
import "../css/TrekParallaxMedia.css";
import DialogBox from "./DialogBox";

const TrekParallax = ({ mid, treks, dimension }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={
          mid ? `trekHolder ${dimension} midLayer` : `trekHolder ${dimension}`
        }
        onClick={() => {
          setOpen(true);
        }}
      >
        <img src={treks.img} />
        <p>{treks.name}</p>
      </div>
      <DialogBox open={open} setOpen={setOpen} />
    </>
  );
};

export default TrekParallax;
