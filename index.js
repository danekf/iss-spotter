const {fetchMyIP} = require('./iss.js');
const {fetchCoordsByIP} = require('./iss')
const {fetchISSFlyOverTimes} = require("./iss");

fetchMyIP((error, data) =>{
  if (error) {
    console.log("Something went wrong fetching IP: ", error);
    return;
  }
  console.log("Returned IP: ", data);
});

fetchCoordsByIP("107.190.8.97", (error, data) =>{
  if (error) {
    console.log("Something went wrong finding location of IP: ", error);
    return;
  }
  console.log("Returned location: ", data);
});

fetchISSFlyOverTimes({ latitude: 44.2311717, longitude: -76.4859544 },(error, data) =>{
  if (error) {
    console.log("Something went wrong finding ISS locations: ", error);
    return;
  }
  console.log("Returned flyover times: ", data);
});