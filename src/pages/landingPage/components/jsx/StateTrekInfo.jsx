import React, { useState, useEffect } from "react";
import "../css/StateTrekInfo.css";
import ShowStateTrek from "./ShowStateTrek";

const StateTrekInfo = ({ Treks }) => {
  const numberOfItems = window.innerWidth < 768 ? 3 : 6;

  const stateList = [
    ...new Set(
      Treks.map((trek) => {
        return trek.state;
      })
    ),
  ];
  const firstHalf = stateList.slice(0, 3);
  const secondHalf = stateList.slice(3, 6);

  const [stateName, setStateName] = useState(firstHalf[0]);
  const [stateArray, setStateArray] = useState(
    Treks.filter((trek) => {
      return trek.state === stateName;
    }).slice(0, numberOfItems)
  );

  function buttonClicked(index) {
    document.querySelector(".clicked")?.classList.remove("clicked");
    document
      .querySelectorAll(".stateButton")
      [index].classList.toggle("clicked");
    setStateName(document.querySelectorAll(".stateButton")[index].innerHTML);
  }

  useEffect(() => {
    setStateArray(
      Treks.filter((trek) => {
        return trek.state === stateName;
      }).slice(0, numberOfItems)
    );
  }, [stateName]);

  return (
    <>
      <div className="stateButtonDivHolder">
        <div className="stateButtonHolder">
          {firstHalf.map((item, index) => {
            return (
              <button
                className={index === 0 ? "stateButton clicked" : "stateButton"}
                key={index}
                onClick={() => buttonClicked(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="stateButtonHolder">
          {secondHalf.map((item, index) => {
            return (
              <button
                className="stateButton"
                key={3 + index}
                onClick={() => buttonClicked(3 + index)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <ShowStateTrek
        stateTrekArray={stateArray.sort(() => Math.random() - 0.5)}
      />
    </>
  );
};

export default StateTrekInfo;
