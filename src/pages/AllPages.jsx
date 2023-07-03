import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/LandingPage";
import LogInPage from "./loginSignupPage/LogInPage";
import SignUpPage from "./loginSignupPage/SignUpPage";
import PreferencePage from "./preferencesPage/PreferencePage";
import HomePage from "./homePage/HomePage";
import ProfilePage from "./profilePage/ProfilePage";
import FavoritePage from "./profilePage/FavoritePage";
import PreferencePageSideSection from "./profilePage/PreferencePageSideSection";
import TrekDetailPage from "./trekDetailShower/TrekDetailPage";
import CategoryShow from "./categoryShower/CategoryShow";

const AllPages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/preferences" element={<PreferencePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/my-profile" element={<ProfilePage />} />
          <Route path="/my-favorites" element={<FavoritePage />} />
          <Route
            path="/my-preferences"
            element={<PreferencePageSideSection />}
          />
          <Route path="/trek/:trekName" element={<TrekDetailPage />} />
          <Route path="/category/:categoryName" element={<CategoryShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllPages;
