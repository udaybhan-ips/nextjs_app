const axios = require('axios')

class Users {
    static all(){
        return axios.get("./user.json")
               .then((res)=>{
                 return res.data;
               })
    }
}


module.exports = Users