const axios = require("axios")

// Check out 20-State/03-Ins_useEffect
export const getEmployees =
    // https://randomuser.me/documentation#howto
    // requests 5 employees from random user api
    function(){
        return axios.get("https://randomuser.me/api/?results=5")
    }
