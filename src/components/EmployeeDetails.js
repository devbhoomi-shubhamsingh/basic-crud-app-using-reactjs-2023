import React from "react";
import { Table } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const EmployeeDetails = () => {
  const location = useLocation();
  const {
    empId,
    empName,
    empFatherName,
    empDob,
    empEmailAddress,
    empMobileNo,
  } = location.state;

  return (
    <div className="empCompleteDetails">
      <h3 className="text-center text-danger my-3">
        Employee Complete Details
      </h3>
      <section>
        <Table responsive bordered className="mx-auto" style={{ width: "40%" }}>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{empId || "N.A"}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{empName || "N.A"}</td>
            </tr>
            <tr>
              <th>Father's Name</th>
              <td>{empFatherName || "N.A"}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{empDob || "N.A"}</td>
            </tr>
            <tr>
              <th>Email Address</th>
              <td>{empEmailAddress || "N.A"}</td>
            </tr>
            <tr>
              <th>Mobile Number</th>
              <td>{empMobileNo || "N.A"}</td>
            </tr>
          </tbody>
        </Table>
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-primary"> Go to Back</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EmployeeDetails;
