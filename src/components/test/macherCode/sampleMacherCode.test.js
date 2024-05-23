//import sum from "./sum"

const sum = require("./macherCode");

test("adding 2+1 to equal 3",()=>{
    expect(sum(2,1)).toBe(3);
})

test('object assigment', ()=> {
    const data = {'one':1}
    data['two'] = 2;
    expect(data).toEqual({two:2,one:1});
})