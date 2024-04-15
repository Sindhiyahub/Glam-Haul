import React from "react";
import Carousel from "./Carousel";

import "./Main.css";
import MainShops from "./MainShops";

// import { uiActions } from "../../store/uiSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Footer from "../Footer/Footer";
// import Product from "../../pages/Product/Product";
import Welcome from "./welcome";
import LandingPage from './LandingPage';
import MainShop from "./MainShop";


const Main = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // if (location.pathname === "/home") {
  //   dispatch(uiActions.closePayment());
  // }

  return (
    <>
    <div className="lpage">
    <LandingPage/>
    </div>
    <div className="we">
      <Welcome />
    </div>
    <div className="main">
          <Carousel /> 
      </div>
      
        <div className="main__container">
          <MainShops />
          </div>

         
      <Footer />
    </>
  );
};

export default Main;
