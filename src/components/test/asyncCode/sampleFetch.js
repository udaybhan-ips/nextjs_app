const fetchData = async () => {
  return new Promise((resloved, reject) => {
     resloved("Penut butter");
     reject("error")
  });
  
  //   promise.then((data) => {
  //     return data;
  //   });
  //   promise.catch((err) => {
  //     return err;
  //   });
};

module.exports = fetchData;
