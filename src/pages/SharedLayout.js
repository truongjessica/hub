import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const SharedLayout = () => {
  return (
    <main className="dashboard">
      <Navbar />
      <div className="dashboard-page">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default SharedLayout;
