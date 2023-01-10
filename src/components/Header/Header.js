import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h4>
        <NavLink to="/" className="navbarLink">
          Employees Management App 2023
        </NavLink>
      </h4>
    </div>
  );
};

export default Header;
