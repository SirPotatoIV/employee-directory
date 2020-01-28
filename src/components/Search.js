import React, {useState, useContext} from 'react';
import { EmployeeContext } from './EmployeeContext.js';
import "./Search.css"

function Search(){
    const [search, setSearch] = useState("")
    const {employees, setEmployees} = useContext(EmployeeContext)
    
    function updateSearch({target}){

        const searchTerm = target.value
        setSearch(searchTerm)
        const filterResult = employees.filter(function(employee){
            // Looks at every employee first name, makes the name lowercase, 
            // ... if first name contains the current search, display 
            // ... if not it is removed from the list.
            return employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ? true : false
        })
        setEmployees([...filterResult])
    }

    return(
       <input type="text" onChange= {updateSearch} value={search}></input>
    )
}
export default Search;