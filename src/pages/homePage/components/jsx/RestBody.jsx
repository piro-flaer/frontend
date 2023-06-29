import React from "react";
import GeneralSection from "./GeneralSection";
import RecommendedSection from "./RecommendedSection";
import ComponentGenerator from "../js/ComponentGenerator";

const RestBody = () => {
  const trekDetailComponents = ComponentGenerator();
  return (
    <>
      <RecommendedSection />
      {trekDetailComponents.map((trek, index) => {
        return (
          <GeneralSection
            key={index}
            sectionHead={trek.sectionHeadValue}
            sectionArray={trek.sectionArrayValue}
            filterParameter={trek.filterParameter}
            filterValue={trek.filterValue}
          />
        );
      })}
    </>
  );
};

export default RestBody;
