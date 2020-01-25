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
                switch(sort){
                    case "":
                        setEmployees(response.data.results)
                        break
                    case "name":
                        sortByName(response.data.results)
                        break
                    case "age":
                        sortByAge(response.data.results)
                        break
                    default:
                        throw new Error("sort does not match any cases")
                }
            } catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }
        }
        getEmployees()
    }, [url, sort])

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
