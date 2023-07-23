import jwtDecode from "jwt-decode";
import RefreshAPI from "../../apis/RefreshAPI";
import React, { useState, useEffect } from "react";
import IntroSection from "./components/jsx/IntroSection";
import { Navigate } from "react-router-dom";

const LandingPage = () => {
  const [Redirect, setRedirect] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setRedirect(true);
      const decodedToken = jwtDecode(accessToken);
      const expirationTime = decodedToken.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      if (expirationTime < currentTime) {
        const apiResponse = RefreshAPI();
        if (apiResponse === 401) {
          setRedirect(false);
        }
      }
    }
  }, []);

  return (
    <>
      {Redirect && <Navigate to="/home" />}
      <IntroSection />
    </>
  );
};

export default LandingPage;
