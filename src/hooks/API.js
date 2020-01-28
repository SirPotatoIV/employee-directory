import {useState, useEffect, useContext} from 'react';
import {EmployeeContext} from "../components/EmployeeContext"
import axios from "axios"

// Check out 20-State/03-Ins_useEffect
export function useGet(url){
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(EmployeeContext)

    // help writing custom hooks and specifically ones that are async
    // -- https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g
    // -- https://reactjs.org/docs/hooks-custom.html
    // -- TA Jackson Oppenheim Github: jacksonopp
    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
             
                setEmployees(response.data.results)
                setDisplayedEmployees(response.data.results)
            }
            catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }   
        }
        getEmployees()
    },[])

    function sortFunc(sort){
        switch(sort){
            case "name":
                sortByName()
                break
            case "age":
                sortByAge()
                break
            default:
                console.log("sort does not match any cases")
        }
    }

    function sortByName(){
         employees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })
        // You have to spread, because this creates a new variable, instead of just updating the variable. React will not recognize it as an update if you just update the variable.
        setDisplayedEmployees([...employees])
    }

    function sortByAge(){
        employees.sort(function(a,b){
            return (a.dob.age - b.dob.age)
        })
        setDisplayedEmployees([...employees])
    }

    return {displayedEmployees, sortFunc}
}
