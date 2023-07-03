import React, { useState, useEffect } from "react";
import IntroSection from "./components/jsx/IntroSection";
import TrekListAPI from "../../apis/TrekListAPI";

const LandingPage = () => {
  const [Treks, setTreks] = useState();

  const generateArray = async () => {
    const response = await TrekListAPI({});
    setTreks(response);
  };

  useEffect(() => {
    generateArray();
  }, []);

  return <>{Treks && <IntroSection Treks={Treks} />}</>;
};

export default LandingPage;
