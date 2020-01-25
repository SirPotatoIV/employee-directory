import React, {useState, useEffect} from 'react';
import { useGet } from "../hooks/API.js"
import "./Table.css"

//Check out 20-State/03-Stu_useState
function Table(){
    // const [url, setUrl] = useState("");
    const employees =useGet("https://randomuser.me/api/?results=5");
    console.log(employees)
    
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
                <tr>
                    <td>Jake</td>
                    <td>O'Toole</td>
                    <td>90104391</td>
                    <td>Male</td>
                    <td>otoolej33@gmail.com</td>
                    <td>06/30/1990</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table;