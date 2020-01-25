import React, {useState, useEffect} from 'react';
import axios from "axios"

// Check out 20-State/03-Ins_useEffect
export function useGet(url, sort){
    const [employees, setEmployees] = useState([])
    
    // help writing custom hooks and specifically ones that are async
    // -- https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g
    // -- https://reactjs.org/docs/hooks-custom.html
    // -- TA Jackson Oppenheim Github: jacksonopp
    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
                if(sort === ""){
                    setEmployees(response.data.results)
                    sortEmployees(response.data.results)
                }
                // if(sort === "yes"){
                //     sortEmployees()
                // }
            } catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }
        }
        getEmployees()
    }, [url])

    function sortEmployees(employees){
        let sortedEmployees = employees;

        sortedEmployees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })
        
        console.log("array sorted: ", sortedEmployees)
    }


    return employees
}
