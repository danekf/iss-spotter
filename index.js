const {fetchMyIP} = require('./iss.js');

fetchMyIP((error, data) =>{
  if (error) {
    console.log("Something went wrong: ", error);
    return;
  }
  console.log("Returned IP: ", data.ip);
});