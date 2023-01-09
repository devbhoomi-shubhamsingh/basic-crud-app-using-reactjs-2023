import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>
          Employees Management App - This website is created and managed by
          <b> Shubham Singh</b>
        </p>
        <p>All Rights are Reserved &copy; {new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default Footer;
