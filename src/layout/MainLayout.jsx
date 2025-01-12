import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/Navbar";
import React from "react";

const MainLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
