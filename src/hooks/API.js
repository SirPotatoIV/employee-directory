import {useState, useEffect, useContext} from 'react';
import {EmployeeContext} from "../components/EmployeeContext"
import axios from "axios"

// Check out 20-State/03-Ins_useEffect
export function useGet(url){
    const{employees, setEmployees} = useContext(EmployeeContext)
    const [sort, setSort] = useState("")
    console.log(setEmployees)
    // help writing custom hooks and specifically ones that are async
    // -- https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g
    // -- https://reactjs.org/docs/hooks-custom.html
    // -- TA Jackson Oppenheim Github: jacksonopp
    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
                // console.log(response.data.results)
                setEmployees(response.data.results)
            }
            catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }   
        }
        getEmployees()
    },[url])

    useEffect(()=>{
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
    }, [sort])

    function sortFunc(sort){
        setSort(sort);
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
        setEmployees([...employees])
    }

    function sortByAge(){
        employees.sort(function(a,b){
            return (a.dob.age - b.dob.age)
        })
        setEmployees([...employees])
    }

    return {employees, sortFunc}
}
