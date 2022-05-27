import React from "react";
import Nav from "./menues/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
