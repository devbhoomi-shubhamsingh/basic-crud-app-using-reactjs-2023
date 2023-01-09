import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateEmployeeDetails = ({ updateExistingEmployee, empData }) => {
  const {
    empId,
    empName,
    empFatherName,
    empDob,
    empEmailAddress,
    empMobileNo,
  } = empData;

  const [employeeData, setEmployeeData] = useState({
    empId: empId || "",
    empName: empName || "",
    empFatherName: empFatherName || "",
    empDob: empDob || "",
    empEmailAddress: empEmailAddress || "",
    empMobileNo: empMobileNo || "",
  });

  const handleChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
    });
  };

  // This method is used to collecting data from the form and send to update employee function.
  const updateEmployee = (e) => {
    e.preventDefault();
    updateExistingEmployee(employeeData);
  };

  return (
    <div className="addNewEmployee">
      <h3>Update Employee Details</h3>
      <section className="newEmployeeForm mt-4">
        <Form autoComplete="off" onSubmit={updateEmployee}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter employee's full name"
              name="empName"
              value={employeeData.empName}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Father's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter employee father's name"
              name="empFatherName"
              value={employeeData.empFatherName}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter employee date of Birth"
              name="empDob"
              value={employeeData.empDob}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter employee email address"
              name="empEmailAddress"
              value={employeeData.empEmailAddress}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter employee mobile number"
              name="empMobileNo"
              value={employeeData.empMobileNo}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>

          <div className="submit-btn">
            <Button variant="success" type="submit">
              Update Employee
            </Button>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default UpdateEmployeeDetails;