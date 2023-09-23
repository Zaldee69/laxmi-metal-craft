import React from "react";
import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative bg-white" >
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
