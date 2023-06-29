import React from "react";
import FavoritePageDesign from "./components/jsx/FavoritePageDesign";
import SideSection from "./components/jsx/SideSection";

const FavoritePage = () => {
  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <SideSection classSelected={".favoriteSide"} />
        <FavoritePageDesign />
      </div>
    </>
  );
};

export default FavoritePage;
