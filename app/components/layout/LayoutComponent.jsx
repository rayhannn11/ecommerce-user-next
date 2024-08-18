import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Navbar />
        <div className="min-h-full h-auto">
          {children}
        </div>
      <Footer />
    </>
  );
};

export default LayoutComponent;
