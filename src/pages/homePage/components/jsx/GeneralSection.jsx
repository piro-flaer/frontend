import React from "react";
import { motion } from "framer-motion";
import "../css/GeneralSection.css";
import { Link } from "react-router-dom";

const GeneralSection = ({
  sectionHead,
  sectionArray,
  filterParameter,
  filterValue,
  recommendedTreks,
}) => {
  const sectionHeadValue = sectionHead.replace(/\W/g, "\\$&");

  return (
    <>
      <div className="generalSection">
        <div className="sectionHeader">
          <Link
            to={"/category/" + filterValue}
            state={{
              filterParameter: filterParameter,
              filterValue: filterValue,
              sectionHead: sectionHead,
              recommendedTreks: recommendedTreks,
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <motion.div
              onHoverStart={() => {
                document
                  .querySelector("#" + sectionHeadValue)
                  .classList.add("makeVisible");
              }}
              onHoverEnd={() => {
                document
                  .querySelector("#" + sectionHeadValue)
                  .classList.remove("makeVisible");
              }}
              style={{ display: "flex" }}
            >
              <p>{sectionHead}</p>
              <div id={sectionHead} className="besideSectionHead">
                Explore All &gt;
              </div>
            </motion.div>
          </Link>
        </div>
        <div className="sectionBodyHolder">
          <div className="sectionBody">
            {sectionArray.map((trek, index) => {
              return (
                <Link
                  key={index}
                  to={"/trek/" + trek.name}
                  state={{ trekArray: trek }}
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    className="sectionBodyItem"
                    onHoverStart={() => {
                      document.querySelector(
                        "#" + sectionHeadValue + "_" + index + "_trekHolder"
                      ).style.transitionDelay = "0s";
                      document.querySelector(
                        "#" + sectionHeadValue + "_" + index + "_img"
                      ).style.transitionDelay = "0s";
                      document.querySelector(
                        "#" + sectionHeadValue + "_" + index + "_p"
                      ).style.transitionDelay = "0s";
                      document
                        .querySelector(
                          "#" + sectionHeadValue + "_" + index + "_trekHolder"
                        )
                        .classList.add("trekHolderHover");
                      document
                        .querySelector(
                          "#" + sectionHeadValue + "_" + index + "_img"
                        )
                        .classList.add("trekHolderHoverImgP");
                      document
                        .querySelector(
                          "#" + sectionHeadValue + "_" + index + "_p"
                        )
                        .classList.add("trekHolderHoverImgP");
                      document.querySelector(
                        "#" +
                          sectionHeadValue +
                          "_" +
                          index +
                          "_sectionBodyExpand"
                      ).style.transitionDelay = "0.5s";
                      document
                        .querySelector(
                          "#" +
                            sectionHeadValue +
                            "_" +
                            index +
                            "_sectionBodyExpand"
                        )
                        .classList.add("open");
                    }}
                    onHoverEnd={() => {
                      const sectionHeadValue = sectionHead.replaceAll(
                        /\W/g,
                        "\\$&"
                      );
                      document.querySelector(
                        "#" + sectionHeadValue + "_" + index + "_trekHolder"
                      ).style.transitionDelay = "0.5s";
                      document.querySelector(
                        "#" + sectionHeadValue + "_" + index + "_img"
                      ).style.transitionDelay = "0.5s";
                      document.querySelector(
                        "#" + sectionHeadValue + "_" + index + "_p"
                      ).style.transitionDelay = "0.5s";
                      document
                        .querySelector(
                          "#" + sectionHeadValue + "_" + index + "_trekHolder"
                        )
                        .classList.remove("trekHolderHover");
                      document
                        .querySelector(
                          "#" + sectionHeadValue + "_" + index + "_img"
                        )
                        .classList.remove("trekHolderHoverImgP");
                      document
                        .querySelector(
                          "#" + sectionHeadValue + "_" + index + "_p"
                        )
                        .classList.remove("trekHolderHoverImgP");
                      document.querySelector(
                        "#" +
                          sectionHeadValue +
                          "_" +
                          index +
                          "_sectionBodyExpand"
                      ).style.transitionDelay = "0s";
                      document
                        .querySelector(
                          "#" +
                            sectionHeadValue +
                            "_" +
                            index +
                            "_sectionBodyExpand"
                        )
                        .classList.remove("open");
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    <div
                      id={sectionHead + "_" + index + "_trekHolder"}
                      className="trekHolder large sectionImg"
                    >
                      <img
                        id={sectionHead + "_" + index + "_img"}
                        src={trek.img}
                      />
                      <p id={sectionHead + "_" + index + "_p"}>{trek.name}</p>
                    </div>
                    <div
                      id={sectionHead + "_" + index + "_sectionBodyExpand"}
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
      </div>
    </>
  );
};

export default GeneralSection;
