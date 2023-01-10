import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
// ========================================================================

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h1>Page Not Found - 404</h1>
      <h3>
        Sorry, the page you are requesting is not available. Please check your
        URL.
      </h3>
      <Link to="/">
        <button className="btn btn-primary">Go to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
