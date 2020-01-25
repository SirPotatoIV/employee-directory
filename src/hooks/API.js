import {useState, useEffect} from 'react';
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
                setEmployees(response.data.results)
            }
            catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }   
        }
        getEmployees()
    }, [url])

    useEffect(()=>{
        console.log(sort)
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

    function sortByName(employees){
        let sortedEmployees = employees;

        sortedEmployees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })
        setEmployees(sortedEmployees)
    }

    function sortByAge(employees){
        let sortedEmployees = employees;

        sortedEmployees.sort(function(a,b){
            return (a.dob.age - b.dob.age)
        })
        setEmployees(sortedEmployees)
    }

    return employees
}
