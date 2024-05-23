//import axios from "axios";

const axios  = require("axios")
const Users  = require("./users")


jest.mock('axios');

test("should fetch users", ()=>{
    const users = [{name:'bob'}]
    const res = {data:users} ;
    
    axios.get.mockResolvedValue(res);
              

    return Users.all().then((data)=> expect(data).toEqual(users))
})