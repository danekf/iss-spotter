const {fetchMyIP} = require('./iss.js');
const {fetchCoordsByIP} = require('./iss')

fetchMyIP((error, data) =>{
  if (error) {
    console.log("Something went wrong fetching IP: ", error);
    return;
  }
  console.log("Returned IP: ", data);
});

fetchCoordsByIP("42", (error, data) =>{
  if (error) {
    console.log("Something went wrong findind location of IP: ", error);
    return;
  }
  console.log("Returned location: ", data);
});