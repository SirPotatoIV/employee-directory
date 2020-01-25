import React, {useState} from 'react';
import "./Search.css"

function Search(){
    const [search, setSearch] = useState("")
    const testNames = [
        {
            first: "Jake"
        },
        {
            first: "Jan"
        },
        {
            first: "Carol"
        },
        {
            first: "David"
        },
        {
            first: "Carl"
        },
    ]

    function updateSearch({target}){
        const searchTerm = target.value
        setSearch(searchTerm)
        const filterResult = testNames.filter(function(name){
            // Looks at every employee first name, makes the name lowercase, 
            // ... if first name contains the current search, display 
            // ... if not it is removed from the list.
            return name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ? true : false
        })
        console.log(filterResult)
    }


    return(
       <input type="text" onChange= {updateSearch} value={search}></input>
    )
}
export default Search;