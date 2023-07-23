import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Header from "./components/jsx/Header";
import MainDiv from "./components/jsx/MainDiv";
import RestBody from "./components/jsx/RestBody";
import TrekListAPI from "../../apis/TrekListAPI";
import RefreshAPI from "../../apis/RefreshAPI";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const [Treks, setTreks] = useState();
  const [Redirect, setRedirect] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      const expirationTime = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      if (expirationTime < currentTime) {
        const apiResponse = RefreshAPI();
        if (apiResponse === 401) {
          alert("Please LogIn First");
          setRedirect(true);
        }
      }
    } else {
      alert("Please LogIn First");
      setRedirect(true);
    }
  }, []);

  const generateArray = async () => {
    const response = await TrekListAPI({});
    setTreks(response);
  };
  useEffect(() => {
    generateArray();
  }, []);

  return (
    <>
      {Redirect && <Navigate to="/login" />}
      <Header />
      {Treks && <MainDiv Treks={Treks} />}
      <div style={{ position: "absolute", top: "90vh" }}>
        <RestBody />
      </div>
    </>
  );
};

export default HomePage;
