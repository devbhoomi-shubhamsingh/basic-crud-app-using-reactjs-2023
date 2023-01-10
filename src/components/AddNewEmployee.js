import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { validateEmployeeForm } from "../utils/FormValidations";
// ================================================================================

const AddNewEmployee = ({ addNewEmployee }) => {
  const [employeeData, setEmployeeData] = useState({
    empId: "",
    empName: "",
    empFatherName: "",
    empDob: "",
    empEmailAddress: "",
    empMobileNo: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      addNewEmployee(employeeData);
      setEmployeeData({
        empName: "",
        empFatherName: "",
        empDob: "",
        empEmailAddress: "",
        empMobileNo: "",
      });
      setIsSubmit(false);
    }
  }, [formErrors]);

  useEffect(() => {
    isSubmit && setFormErrors(validateEmployeeForm(employeeData));
  }, [employeeData]);

  const handleChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
      empId: uuidv4(),
    });
  };

  const createNewEmployee = (e) => {
    e.preventDefault();
    setFormErrors(validateEmployeeForm(employeeData));
    setIsSubmit(true);
  };

  return (
    <div className="addNewEmployee">
      <h3>Add New Employee</h3>
      <section className="newEmployeeForm mt-4">
        {/* <pre>{JSON.stringify(employeeData, undefined, 2)}</pre> */}
        <Form autoComplete="off" onSubmit={createNewEmployee} noValidate>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter employee's full name"
              name="empName"
              value={employeeData.empName}
              onChange={(event) => handleChange(event)}
            />
            {formErrors.empName && (
              <p className="text-danger form-error-msg ">
                {formErrors.empName}
              </p>
            )}
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
            {formErrors.empFatherName && (
              <p className="text-danger form-error-msg ">
                {formErrors.empFatherName}
              </p>
            )}
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
            {formErrors.empDob && (
              <p className="text-danger form-error-msg ">{formErrors.empDob}</p>
            )}
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
            {formErrors.empEmailAddress && (
              <p className="text-danger form-error-msg ">
                {formErrors.empEmailAddress}
              </p>
            )}
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
            {formErrors.empMobileNo && (
              <p className="text-danger form-error-msg ">
                {formErrors.empMobileNo}
              </p>
            )}
          </Form.Group>

          <div className="submit-btn">
            <Button
              variant="success"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Add New Employee
            </Button>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default AddNewEmployee;
