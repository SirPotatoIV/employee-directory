import React, {useState} from 'react';
import "./Search.css"

function Search(){
    const [search, setSearch] = useState("")
    
    function updateSearch({target}){
        setSearch(target.value)
    }
    console.log(search);

    return(
       <input type="text" onChange= {updateSearch} value={search}></input>
    )
}
export default Search;