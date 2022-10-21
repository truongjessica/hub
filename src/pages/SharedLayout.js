import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SharedLayout = () => {
  return (
    <main>
      <Navbar />
      <div className="container-lg">
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;
