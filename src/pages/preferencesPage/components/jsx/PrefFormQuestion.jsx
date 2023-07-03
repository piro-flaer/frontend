import React from "react";
import { motion } from "framer-motion";
import NormalOption from "./NormalOption";
import OtherOption from "./OtherOption";
import PreferenceQuestions from "../json/PreferenceQuestions.json";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import "../css/PrefFormQuestion.css";

const PrefFormQuestion = ({
  divIndex,
  prefState,
  prefSeason,
  prefDifficulty,
}) => {
  const optionDivClicked = (index) => {
    document.querySelector(".showCheckIcon") &&
      document.querySelector(".showCheckIcon") !=
        document.querySelectorAll(".checkIcon")[index] &&
      document
        .querySelector(".showCheckIcon")
        .classList.remove("showCheckIcon");

    document
      .querySelectorAll(".checkIcon")
      [index].classList.toggle("showCheckIcon");

    document.querySelector(".selectedOptionSpan") &&
      document.querySelector(".selectedOptionSpan") !=
        document.querySelectorAll(".optionSpan")[index] &&
      document
        .querySelector(".selectedOptionSpan")
        .classList.remove("selectedOptionSpan");

    document
      .querySelectorAll(".optionSpan")
      [index].classList.toggle("selectedOptionSpan");
  };

  return (
    <div className="preferenceForm">
      <div className="question">{PreferenceQuestions[divIndex].question}</div>
      <div className="optionsHolder">
        {PreferenceQuestions[divIndex].options.map((option, index) => {
          return (
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="option"
              key={index}
              onClick={() => {
                option !== "Other:" &&
                  (() => {
                    document.querySelector("#autocompleteValue") &&
                      (document.querySelector("#autocompleteValue").value =
                        null);
                    optionDivClicked(index);
                  })();
              }}
            >
              <ArrowDropDownCircleIcon id="optionIcon" />

              {option !== "Other:" && (
                <NormalOption
                  divIndexValue={divIndex}
                  prefStateValue={prefState}
                  prefSeasonValue={prefSeason}
                  prefDifficultyValue={prefDifficulty}
                  optionValue={option}
                />
              )}

              {option === "Other:" && (
                <OtherOption
                  prefStateValue={prefState}
                  optionValue={option}
                  indexValue={index}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PrefFormQuestion;
