import React from 'react';
import { useGet } from "../hooks/API.js"
import "./Table.css"

//Check out 20-State/03-Stu_useState
function Table(){
    // https://randomuser.me/documentation#howto
    const employees = useGet("https://randomuser.me/api/?results=5", "age");
    const employeeRows = employees.map(employee => 
            {
                return(
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
        )
    
    return(
        <table>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>UID</td>
                    <td>Gender</td>
                    <td>E-mail</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </table>
    )
}
export default Table;