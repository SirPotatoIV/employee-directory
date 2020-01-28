import React, { useState, useContext } from 'react';
import { useGet } from "../hooks/API.js"
import "./Table.css"
import Button from "./Button.js"
import { EmployeeContext } from './EmployeeContext.js';

//Check out 20-State/03-Stu_useState
function Table() {
    // https://randomuser.me/documentation#howto
    const [url, setUrl] = useState("https://randomuser.me/api/?results=10")
    const { sortFunc } = useGet(url);
    const { employees, setEmployees, displayedEmployees, setDisplayedEmployees } = useContext(EmployeeContext)

    return (
        <table>
            <thead>
                <tr>
                    <td onClick={() => sortFunc("name")}><Button>First Name</Button></td>
                    <td>Last Name</td>
                    <td>UID</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td onClick={() => sortFunc("age")}><Button>Age</Button></td>
                </tr>
            </thead>
            <tbody>
                {displayedEmployees.map(employee => {
                    return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.login.uuid}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob.age}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}
export default Table;