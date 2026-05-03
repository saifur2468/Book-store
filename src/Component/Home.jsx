// Component/Home.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import OfferModal from "./OfferModal";

const Home = () => {
  return (
    <div>
      <Navbar />
      <OfferModal></OfferModal>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;