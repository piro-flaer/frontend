import React from "react";
import GeneralSection from "./GeneralSection";
import Treks from "../../../landingPage/components/Treks.json";

const RecommendedSection = () => {
  const Trek = Treks.filter((trek) => {
    return (
      trek.state === "Uttarakhand" ||
      trek.season === "Summer" ||
      trek.difficulty === "Easy"
    );
  });
  const sectionHeadValue = "Recommended For You";
  const sectionArrayValue = Trek.sort(() => Math.random() - 0.5).slice(0, 10);

  return (
    <>
      <GeneralSection
        sectionHead={sectionHeadValue}
        sectionArray={sectionArrayValue}
        recommendedTreks={Trek}
      />
    </>
  );
};

export default RecommendedSection;
