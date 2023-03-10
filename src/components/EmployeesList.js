import React, { useEffect, useState } from "react";
import AddNewEmployee from "./AddNewEmployee";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import UpdateEmployeeDetails from "./UpdateEmployeeDetails";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
// ========================================================================

const EmployeesList = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  // Fetching employees from the local storage.
  useEffect(() => {
    if (localStorage.getItem("employeesData") !== null) {
      setEmployeesList(JSON.parse(localStorage.getItem("employeesData")));
    } else setEmployeesList([]);
  }, []);

  // Saving employees in local storage.
  useEffect(() => {
    localStorage.setItem("employeesData", JSON.stringify(employeesList));
  }, [employeesList]);

  // This method is used to insert new employee in the employee records.

  const addNewEmployee = (employeeData) => {
    setEmployeesList([...employeesList, employeeData]);
    // Employee created toast message
    setTimeout(() => {
      toast.success("Employee Created Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, 300);
  };

  // This method is used to delete existing employee from the record based on employee id.
  const deleteEmployee = (empId, empName) => {
    // Confirm Delete Popup
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this record?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const existingEmployees = employeesList;
            setEmployeesList(
              existingEmployees?.length > 0 &&
                existingEmployees.filter((emp) => emp.empId !== empId)
            );
            // Delete Toast Message
            setTimeout(() => {
              toast.success(
                `Employee with id ${empId} and name ${empName} deleted successfully`,
                {
                  position: toast.POSITION.TOP_RIGHT,
                }
              );
            }, 300);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  // This method is used to update existing employee details.
  const updateExistingEmployee = (employeeData) => {
    let existingEmployees = [...employeesList];
    const editEmployeeIndex = existingEmployees.findIndex(
      (ele) => ele.empId === employeeData.empId
    );
    existingEmployees.splice(editEmployeeIndex, 1, employeeData);
    setEmployeesList(existingEmployees);

    setTimeout(() => {
      toast.success(`Employee details updated successfully`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }, 300);
    setEditMode(false);
  };

  return (
    <>
      <div className="empSection">
        <div className="row">
          <div className="col-12 col-lg-4">
            {editMode ? (
              <UpdateEmployeeDetails
                updateExistingEmployee={updateExistingEmployee}
                empData={editFormData}
              />
            ) : (
              <AddNewEmployee addNewEmployee={addNewEmployee} />
            )}
          </div>
          <div className="col-12 col-lg-8">
            <div className="employeesList">
              <h3>Employees List</h3>
              <section className="empListSection mt-4">
                {employeesList?.length > 0 ? (
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Employee Id</th>
                        <th>Full Name</th>
                        {/* <th>Father's Name</th> */}
                        {/* <th>Date of Birth</th> */}
                        <th>Email Address</th>
                        <th>Mobile Number</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-body">
                      {employeesList?.length > 0 &&
                        employeesList.map((emp, index) => {
                          return (
                            <tr key={emp.empId}>
                              <td style={{ width: "5%" }}>{index + 1}</td>
                              <td
                                style={{ width: "20%" }}
                                title="View Complete Details"
                              >
                                <Link
                                  to={`/viewEmployee/${emp.empId}`}
                                  state={emp}
                                >
                                  {emp.empId}
                                </Link>
                              </td>
                              <td style={{ width: "15%" }}>{emp.empName}</td>
                              {/* <td>{emp.empFatherName}</td> */}
                              {/* <td>{emp.empDob}</td> */}
                              <td style={{ width: "20%" }}>
                                {emp.empEmailAddress}
                              </td>
                              <td style={{ width: "20%" }}>
                                {emp.empMobileNo}
                              </td>
                              <td style={{ width: "20%" }}>
                                <button
                                  className="btn btn-warning edit-btn"
                                  onClick={() => {
                                    setEditMode(true);
                                    setEditFormData(emp);
                                  }}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-danger"
                                  onClick={() =>
                                    deleteEmployee(emp.empId, emp.empName)
                                  }
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                ) : (
                  <h5 className="text-center mt-5">No Data Found</h5>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeesList;
