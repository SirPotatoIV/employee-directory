const axios = require("axios")

function main(){
    // console.log("test")
    async function getRandomEmployees(){
        try{
            const response = await axios.get("https://randomuser.me/api/")
            console.log(response.data)
        }
        catch(err){
            console.log("error getting employees from api: ", err)
        }
    }
    getRandomEmployees()
}
main()