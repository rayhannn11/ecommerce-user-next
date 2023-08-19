import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutComponent;
