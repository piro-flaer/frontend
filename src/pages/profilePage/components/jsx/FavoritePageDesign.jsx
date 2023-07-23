import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../css/FavoritePageDesign.css";
import GetFavTreksAPI from "../../../../apis/GetFavTreksAPI";
import { Link } from "react-router-dom";

const FavoritePageDesign = () => {
  const [userFavoriteTreks, setUserFavoriteTreks] = useState([]);

  const generateArray = async () => {
    const apiResponse = await GetFavTreksAPI();
    setUserFavoriteTreks(apiResponse);
  };

  useEffect(() => {
    generateArray();
  }, []);
  return (
    <>
      <div className="sectionProfileHolder favoriteSection">
        <div className="favoriteHeader">
          Here are your Favorites <FavoriteIcon sx={{ color: "red" }} /> :
        </div>
        {userFavoriteTreks && (
          <div className="favoriteBody">
            {userFavoriteTreks.map((trek, index) => {
              return (
                <Link
                  key={index}
                  to={"/trek/" + trek.name}
                  state={{ trekArray: trek }}
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    key={index}
                    className="sectionBodyItem favoriteSecItem"
                    onHoverStart={() => {
                      document.querySelector(
                        "#" + "section_" + index + "_trekHolder"
                      ).style.transitionDelay = "0s";
                      document.querySelector(
                        "#" + "section_" + index + "_img"
                      ).style.transitionDelay = "0s";
                      document.querySelector(
                        "#" + "section_" + index + "_p"
                      ).style.transitionDelay = "0s";
                      document
                        .querySelector("#" + "section_" + index + "_trekHolder")
                        .classList.add("trekHolderHover");
                      document
                        .querySelector("#" + "section_" + index + "_img")
                        .classList.add("trekHolderHoverImgP");
                      document
                        .querySelector("#" + "section_" + index + "_p")
                        .classList.add("trekHolderHoverImgP");
                      document.querySelector(
                        "#" + "section_" + index + "_sectionBodyExpand"
                      ).style.transitionDelay = "0.5s";
                      document
                        .querySelector(
                          "#" + "section_" + index + "_sectionBodyExpand"
                        )
                        .classList.add("open");
                    }}
                    onHoverEnd={() => {
                      document.querySelector(
                        "#" + "section_" + index + "_trekHolder"
                      ).style.transitionDelay = "0.5s";
                      document.querySelector(
                        "#" + "section_" + index + "_img"
                      ).style.transitionDelay = "0.5s";
                      document.querySelector(
                        "#" + "section_" + index + "_p"
                      ).style.transitionDelay = "0.5s";
                      document
                        .querySelector("#" + "section_" + index + "_trekHolder")
                        .classList.remove("trekHolderHover");
                      document
                        .querySelector("#" + "section_" + index + "_img")
                        .classList.remove("trekHolderHoverImgP");
                      document
                        .querySelector("#" + "section_" + index + "_p")
                        .classList.remove("trekHolderHoverImgP");
                      document.querySelector(
                        "#" + "section_" + index + "_sectionBodyExpand"
                      ).style.transitionDelay = "0s";
                      document
                        .querySelector(
                          "#" + "section_" + index + "_sectionBodyExpand"
                        )
                        .classList.remove("open");
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    whileHover={{
                      zIndex: 1,
                    }}
                  >
                    <div
                      id={"section_" + index + "_trekHolder"}
                      className="trekHolder large sectionImg"
                    >
                      <img id={"section_" + index + "_img"} src={trek.img} />
                      <p id={"section_" + index + "_p"}>{trek.name}</p>
                    </div>
                    <div
                      id={"section_" + index + "_sectionBodyExpand"}
                      className="sectionBodyExpand"
                    >
                      {trek.description}
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FavoritePageDesign;
