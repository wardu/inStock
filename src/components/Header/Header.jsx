import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/warehouses" className="header__item">
            Warehouses
          </Link>
          <Link to="/inventory" className="header__item">
            Inventory
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
