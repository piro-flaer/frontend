import React, { useState, useEffect } from "react";
import GeneralSection from "./GeneralSection";
import RecommendAPI from "../../../../apis/RecommendAPI";

const RecommendedSection = () => {
  const [Trek, setTrek] = useState();
  const userName = localStorage.getItem("userName");

  const generateArray = async () => {
    const recommendedArray = await RecommendAPI({ userName });
    setTrek(recommendedArray);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const sectionHeadValue = "Recommended For You";
  const sectionArrayValue = Trek?.sort(() => Math.random() - 0.5).slice(0, 10);

  return (
    <>
      {Trek && (
        <GeneralSection
          sectionHead={sectionHeadValue}
          sectionArray={sectionArrayValue}
          recommendedTreks={Trek}
        />
      )}
    </>
  );
};

export default RecommendedSection;
