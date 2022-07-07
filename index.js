// const {fetchMyIP} = require('./iss.js');
// const {fetchCoordsByIP} = require('./iss')
// const {fetchISSFlyOverTimes} = require("./iss");
const {nextISSTimesForMyLocation} = require('./iss');

const readablePassTimes = (passTimes) => {
  for (let times of passTimes) {
    console.log(times);
  }

}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  readablePassTimes(passTimes);

});

