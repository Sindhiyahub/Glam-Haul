import React from "react";

import "./Header.css";

import HeaderLogo from "../../assets/logo2.png";

import Account from "./Account/Account";
import { useNavigate, Link } from "react-router-dom";
import WishList from "./Wishlist/WishList";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__logo__Wrapper">
        <img
          className="header__logo"
          onClick={() => navigate("/home", { replace: true })}
          src={HeaderLogo}
          alt="headerLogo"
        />
      </div>
     
      <div className="header__right">
        <div>
          <Account />
          <Link className="wishlist__link" to="/wishlist">
            Wishlist
          </Link>
         
        </div>
        
      </div>
    </header>
  );
};

export default Header;
