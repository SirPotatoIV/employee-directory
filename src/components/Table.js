import React from 'react';
import "./Table.css"

function Table(){

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