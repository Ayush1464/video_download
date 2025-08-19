import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqsPage from "../components/FaqsPage";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="bg-gray-100  flex flex-col h-full py-20">{children}</main>
      <FaqsPage/>
      <Footer />
    </div>
  );
};

export default MainLayout;
