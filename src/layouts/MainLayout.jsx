import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="bg-gray-100 h-full  flex flex-col h-full py-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
