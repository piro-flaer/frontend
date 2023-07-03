import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./css/CategoryShow.css";
import { Button } from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import { Link, useLocation } from "react-router-dom";
import TrekListAPI from "../../apis/TrekListAPI";

const CategoryShow = () => {
  const [Treks, setTreks] = useState();

  const generateArray = async () => {
    const response = await TrekListAPI({});
    setTreks(response);
  };

  useEffect(() => {
    generateArray();
  }, []);
  const location = useLocation();
  const { filterParameter, filterValue, sectionHead, recommendedTreks } =
    location.state;

  const trekArray = recommendedTreks
    ? recommendedTreks
    : filterParameter === "state"
    ? Treks?.filter((trek) => trek.state === filterValue)
    : filterParameter === "season"
    ? Treks?.filter((trek) => trek.season === filterValue)
    : Treks?.filter((trek) => trek.difficulty === filterValue);

  return (
    <>
      {Treks && (
        <>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <Button
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: 1,
                color: "white",
              }}
              variant="contained"
              startIcon={<ForwardIcon sx={{ transform: "rotateZ(180deg)" }} />}
            >
              Go Home
            </Button>
          </Link>
          <div className="categoryShow">
            <div className="categoryHead">{sectionHead}:</div>
            <div className="categoryBody">
              {trekArray.map((trek, index) => {
                return (
                  <Link
                    key={index}
                    to={"/trek/" + trek.name}
                    state={{ trekArray: trek }}
                    style={{ textDecoration: "none" }}
                  >
                    <motion.div
                      key={index}
                      className="sectionBodyItem"
                      onHoverStart={() => {
                        document.querySelector(
                          "#" + "categoryBody" + "_" + index + "_trekHolder"
                        ).style.transitionDelay = "0s";
                        document.querySelector(
                          "#" + "categoryBody" + "_" + index + "_img"
                        ).style.transitionDelay = "0s";
                        document.querySelector(
                          "#" + "categoryBody" + "_" + index + "_p"
                        ).style.transitionDelay = "0s";
                        document
                          .querySelector(
                            "#" + "categoryBody" + "_" + index + "_trekHolder"
                          )
                          .classList.add("trekHolderHover");
                        document
                          .querySelector(
                            "#" + "categoryBody" + "_" + index + "_img"
                          )
                          .classList.add("trekHolderHoverImgP");
                        document
                          .querySelector(
                            "#" + "categoryBody" + "_" + index + "_p"
                          )
                          .classList.add("trekHolderHoverImgP");
                        document.querySelector(
                          "#" +
                            "categoryBody" +
                            "_" +
                            index +
                            "_sectionBodyExpand"
                        ).style.transitionDelay = "0.5s";
                        document
                          .querySelector(
                            "#" +
                              "categoryBody" +
                              "_" +
                              index +
                              "_sectionBodyExpand"
                          )
                          .classList.add("open");
                      }}
                      onHoverEnd={() => {
                        document.querySelector(
                          "#" + "categoryBody" + "_" + index + "_trekHolder"
                        ).style.transitionDelay = "0.5s";
                        document.querySelector(
                          "#" + "categoryBody" + "_" + index + "_img"
                        ).style.transitionDelay = "0.5s";
                        document.querySelector(
                          "#" + "categoryBody" + "_" + index + "_p"
                        ).style.transitionDelay = "0.5s";
                        document
                          .querySelector(
                            "#" + "categoryBody" + "_" + index + "_trekHolder"
                          )
                          .classList.remove("trekHolderHover");
                        document
                          .querySelector(
                            "#" + "categoryBody" + "_" + index + "_img"
                          )
                          .classList.remove("trekHolderHoverImgP");
                        document
                          .querySelector(
                            "#" + "categoryBody" + "_" + index + "_p"
                          )
                          .classList.remove("trekHolderHoverImgP");
                        document.querySelector(
                          "#" +
                            "categoryBody" +
                            "_" +
                            index +
                            "_sectionBodyExpand"
                        ).style.transitionDelay = "0s";
                        document
                          .querySelector(
                            "#" +
                              "categoryBody" +
                              "_" +
                              index +
                              "_sectionBodyExpand"
                          )
                          .classList.remove("open");
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      whileHover={{
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      <div
                        id={"categoryBody" + "_" + index + "_trekHolder"}
                        className="trekHolder large sectionImg"
                      >
                        <img
                          id={"categoryBody" + "_" + index + "_img"}
                          src={trek.img}
                        />
                        <p id={"categoryBody" + "_" + index + "_p"}>
                          {trek.name}
                        </p>
                      </div>
                      <div
                        id={"categoryBody" + "_" + index + "_sectionBodyExpand"}
                        className="sectionBodyExpand"
                      >
                        {trek.description}
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CategoryShow;
