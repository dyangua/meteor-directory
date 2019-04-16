import React from "react";
import EmployeeList from "./components/employee_list";

const App = () => {
  return (
    <div className="container">
      <h1 style={{ marginBottom: 50 }} className="text-center ">
        Employees
      </h1>
      <EmployeeList />
    </div>
  );
};

export default App;
