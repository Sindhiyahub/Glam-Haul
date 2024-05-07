import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Mainl from "./pages/Login/mainl";
import Products from "./pages/Product/Products";
import AddProducts from "./pages/Product/AddProducts";

import "./App.css";
import { useStateValue } from "./store/AuthContext/authContext";
import WishList from "./components/Header/Wishlist/WishList";
import Spinner from "./components/UI/Spinner";

import Signup from "./pages/Login/signup";
import MainShops from "./components/Main/MainShops";

const App = () => {
  const payment = useSelector((state) => state.ui.payment);
  const productQuantity = useSelector((state) => state.cart.totalQuantity);
  const existSpinner = useSelector((state) => state.ui.spinner);

  const [{ user }, dispatcha] = useStateValue();
  let location = useLocation();



  return (
    <>
      {!payment && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={existSpinner ? <Spinner /> : <Main />} />
        <Route
          path="/:products"
          element={existSpinner ? <Spinner /> : <Products user={user} />}
        />
     
      
        <Route path="/login" element={<Mainl />} />
        
        <Route
          path="/wishlist"
          element={user ? <WishList user={user} /> : <Navigate to="/login" state={{ from: "/wishlist" }} />}
        />
       
       <Route path="/mainshops" element={<MainShops />} />

       <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Mainl />} />

        <Route path="/add-products" element={<AddProducts />} />
      </Routes>
    </>

  );
};
export default App;


