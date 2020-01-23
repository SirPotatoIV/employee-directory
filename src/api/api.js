const axios = require("axios")

function main(){

    async function getRandomEmployees(){
        try{
            // https://randomuser.me/documentation#howto
            // requests 5 employees from random user api
            const response = await axios.get("https://randomuser.me/api/?results=5")
            console.log(response.data)
        }
        catch(err){
            console.log("error getting employees from api: ", err)
        }
    }
    getRandomEmployees()
}
main()