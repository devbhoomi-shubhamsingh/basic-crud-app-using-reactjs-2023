import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
// ========================================================================

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <img
        src="/images/404-Page-Not-Found.png"
        alt="404"
        height={200}
        width={200}
      />
      <h3 className="text-center text-success">
        Sorry, the page &nbsp;
        <span className="text-dark">
          <b>{window.location.href}</b>
        </span>
        &nbsp; you are requesting is not available. <br /> Please check your
        URL.
      </h3>
      <Link to="/">
        <button className="btn btn-primary">Go to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
