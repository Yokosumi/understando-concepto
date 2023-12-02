import axios from "axios";
import { useState, useEffect } from "react";

type EmployeeType = EmployeeTypes[];

type EmployeeTypes = {
  employeeID: number;
  firstName: string;
  lastName: string;
};

const URL = "https://edwardtanguay.vercel.app/share/employees.json";

export const Employees = () => {
  const [employeesState, setEmployeesState] = useState<EmployeeType>(
    [] as EmployeeType
  );

  const fetchData = async () => {
    const response = await axios.get(URL);
    const employees = response.data;
    setEmployeesState(employees);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {employeesState.map((employee) => {
        return (
          <div>
            <p key={employee.employeeID}>
              {employee.firstName} {employee.lastName}{" "}
            </p>
          </div>
        );
      })}
    </>
  );
};
