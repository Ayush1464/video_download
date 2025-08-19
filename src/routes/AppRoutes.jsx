import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YoutubePage from "../pages/YoutubePage";
import InstaPages from "../pages/InstaPages";
import FaceBookPages from "../pages/FaceBookPages";
import TwitterPages from "../pages/TwitterPages";
import Insta from "../pages/InstaPages";
import TermsAndConditions from "../components/TermsAndConditions";
import PrivacyPolicy from "../components/PrivacyPolicy";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<YoutubePage />} />
        <Route path="/youtube" element={<YoutubePage />} />

        <Route path="/facebook" element={<FaceBookPages />} />
        <Route path="/twitter" element={<TwitterPages />} />
        
        <Route path="/instagram" element={<InstaPages />} />
         <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
