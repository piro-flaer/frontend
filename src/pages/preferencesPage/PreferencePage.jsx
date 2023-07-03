import React from "react";
import LogInPageBackground from "../loginSignupPage/components/jsx/LogInPageBackground";
import PreferencePageDesign from "./components/jsx/PreferencePageDesign";
import { useLocation } from "react-router-dom";

const PreferencePage = () => {
  const location = useLocation();
  const { userName } = location.state;
  return (
    <>
      <LogInPageBackground />
      <PreferencePageDesign userName={userName} />
    </>
  );
};

export default PreferencePage;
