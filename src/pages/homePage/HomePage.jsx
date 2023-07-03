import React, { useState, useEffect } from "react";
import Header from "./components/jsx/Header";
import MainDiv from "./components/jsx/MainDiv";
import RestBody from "./components/jsx/RestBody";
import TrekListAPI from "../../apis/TrekListAPI";

const HomePage = () => {
  const [Treks, setTreks] = useState();

  const generateArray = async () => {
    const response = await TrekListAPI({});
    setTreks(response);
  };
  useEffect(() => {
    generateArray();
  }, []);
  return (
    <>
      <Header />
      {Treks && <MainDiv Treks={Treks} />}
      <div style={{ position: "absolute", top: "90vh" }}>
        <RestBody />
      </div>
    </>
  );
};

export default HomePage;
