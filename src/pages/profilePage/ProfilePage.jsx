import React from "react";
import ProfilePageDesign from "./components/jsx/ProfilePageDesign";
import SideSection from "./components/jsx/SideSection";

const ProfilePage = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <SideSection classSelected={".profileSide"} />
        <ProfilePageDesign />
      </div>
    </>
  );
};

export default ProfilePage;
