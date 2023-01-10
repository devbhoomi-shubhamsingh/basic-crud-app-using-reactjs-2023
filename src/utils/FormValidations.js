import { emailRegex, indianMobileRegex, nameRegex } from "./ImportantRegex";

//This method is used to validate the add/update employee form
export const validateEmployeeForm = (values) => {
  const errors = {};

  if (!values.empName) errors.empName = "Full Name is required";
  else if (!nameRegex.test(values.empName))
    errors.empName = "Full Name is invalid";
  else if (values.empName.length < 2)
    errors.empName = "Name cannot be less than 2 characters.";
  else if (values.empName.length > 30)
    errors.empName = "Name cannot be more than 30 characters.";

  if (!values.empFatherName) errors.empFatherName = "Father Name is required";
  else if (!nameRegex.test(values.empFatherName))
    errors.empFatherName = "Father Name is invalid";
  else if (values.empFatherName.length < 2)
    errors.empFatherName = "Father Name cannot be less than 2 characters.";
  else if (values.empFatherName.length > 30)
    errors.empFatherName = "Father Name cannot be more than 30 characters.";

  if (!values.empDob) errors.empDob = "Date of Birth is required";

  if (!values.empEmailAddress)
    errors.empEmailAddress = "Email Address is required";
  else if (!emailRegex.test(values.empEmailAddress))
    errors.empEmailAddress = "Email Address is invalid";

  if (!values.empMobileNo) errors.empMobileNo = "Mobile Number is required";
  else if (!indianMobileRegex.test(values.empMobileNo))
    errors.empMobileNo = "This is not a valid indian mobile number";

  return errors;
};
