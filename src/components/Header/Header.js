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
      {/* <ul className="navbar">
        <li>
          <NavLink className="navbarLink" to="/">
            View All Employees
          </NavLink>
        </li>
        <li>
          <NavLink className="navbarLink" to="/addNewEmployee">
            Add New Employee
          </NavLink>
        </li>
      </ul> */}
    </div>
  );
};

export default Header;
