import React from "react";
import NavbarComponent from "./NavbarComponent";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavbarComponent /> {/* Navbar appears only once */}
      <Outlet /> {/* This renders different page content */}
    </div>
  );
};

export default Layout;
