import React, {useState, useContext} from 'react';
import { EmployeeContext } from './EmployeeContext.js';
import "./Search.css"

function Search(){
    // stores the characters being entered into the search input
    const [search, setSearch] = useState("")
    const {employees, setDisplayedEmployees} = useContext(EmployeeContext)
    
    function updateSearch({target}){
        // just using for readability
        const searchTerm = target.value
        // used for updating the value in the search input, so it always equals exactly what is saved in state
        setSearch(searchTerm)
        // filters the employees based on the text that is entered in the search input
        const filterResult = employees.filter(function(employee){
            // Looks at every employee first name, makes the name lowercase, 
            // ... if first name contains the current search, display 
            // ... if not it is removed from the list.
            return employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ? true : false
        })
        setDisplayedEmployees([...filterResult])
    }
    // every letter entered triggers the onChange event.
    return(
       <input type="text" onChange= {updateSearch} value={search}></input>
    )
}
export default Search;