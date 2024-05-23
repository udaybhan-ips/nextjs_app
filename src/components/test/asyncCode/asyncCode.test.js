const fetchData = require("./sampleFetch");

test('test async code', ()=>{
    return fetchData().then((data)=>{
        expect(data).toBe('Penut butter')
    })
})

test('the data to be Penut butter', async ()=>{
    const data = await fetchData();
    expect(data).toBe('Penut butter');
})

// test('the fetch fails with an error', () => {
//     return expect(fetchData()).rejects.toMatch('error');
//   });


// test('the fetch fail with error', async ()=>{
//     expect.assertions(1);
//     try{
//         await fetchData();
//     }catch(error){
//         expect(error).toMatch('error')
//     }
// })