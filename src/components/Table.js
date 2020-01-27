import React, {useState} from 'react';
import { useGet } from "../hooks/API.js"
import "./Table.css"
import Button from "./Button.js"

//Check out 20-State/03-Stu_useState
function Table(){
    // https://randomuser.me/documentation#howto
    const [url] = useState("https://randomuser.me/api/?results=2")
    // const [sort, setSort] = useState(null)
    const {employees, sortFunc} = useGet(url);

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
    
    function nameSort(){
        sortFunc("name")
    }

    return(
        <table>
            <thead>
                <tr>
                    <td onClick={nameSort}><Button>First Name</Button></td>
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