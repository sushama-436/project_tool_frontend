import React from "react";
import NavbarComponent from "./Navbar"; 
import { Outlet } from "react-router-dom"; 

const AppLayout = () => {
  return (
    <div>
      <NavbarComponent /> {/* Navbar is included ONCE here */}
      <Outlet /> {/* This dynamically renders the selected page */}
    </div>
  );
};

export default AppLayout;
