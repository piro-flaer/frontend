import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../css/IntroSection.css";
import "../css/IntroSectionMedia.css";
import DetailPart from "./DetailPart";
import SeasonTrek from "./SeasonTrek";
import StateTrek from "./StateTrek";
import Clients from "./Clients";

const IntroSection = ({ Treks }) => {
  return (
    <div className="introSection">
      <Parallax
        pages={6}
        style={{ top: "0", left: "0" }}
        className="introParallax"
      >
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="introParallaxLayer" id="img01"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.75}>
          <div className="introParallaxLayer" id="img02"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="introParallaxLayer" id="img03"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.75}>
          <div className="introParallaxLayer" id="img04"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.55}>
          <div className="introParallaxLayer" id="img05"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.95}>
          <div className="introParallaxLayer" id="img06"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="introParallaxLayer" id="title">
            <p>TrekLicious</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div className="introParallaxLayer" id="img07"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <DetailPart />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2, end: 3 }}
          speed={0.25}
          style={{ backgroundColor: "#A1D2CE" }}
        >
          <SeasonTrek Treks={Treks} />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.75}>
          <StateTrek Treks={Treks} />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.5}>
          <Clients />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default IntroSection;
