import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import TodosList from "./components/EmployeesList";
import AddNewEmployee from "./components/AddNewEmployee";
import UpdateEmployeeDetails from "./components/UpdateEmployeeDetails";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TodosList />} />
        <Route path="/addNewEmployee" element={<AddNewEmployee />} />
        <Route path="/updateEmployee" element={<UpdateEmployeeDetails />} />
        <Route path="/viewEmployee/:id" element={<EmployeeDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
