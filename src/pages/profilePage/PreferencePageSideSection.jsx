import React from "react";
import PreferencePageSideSectionDesign from "./components/jsx/PreferencePageSideSectionDesign";
import SideSection from "./components/jsx/SideSection";

const PreferencePageSideSection = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <SideSection classSelected={".preferenceSide"} />
        <PreferencePageSideSectionDesign />
      </div>
    </>
  );
};

export default PreferencePageSideSection;
