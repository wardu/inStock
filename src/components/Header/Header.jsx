import React from "react";
// import { Link } from "react-router-dom";
import Logo from "../../assets/logo/InStock-Logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header">
      <div className="header__wrapper">
        <div>
          <img src={Logo} alt="instock logo" />
        </div>
        <div className="header__container">
          <p className="header__item">Warehouses</p>
          <p className="header__item">Inventory</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
