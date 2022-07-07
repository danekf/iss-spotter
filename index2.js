const {nextISSTimesForMyLocation} = require('./issPromised.js');

const readablePassTimes = (passTimes) => {
  for (let times of passTimes) {
    console.log(times);
  }

}
nextISSTimesForMyLocation()
  .then((passtimes) =>{
    readablePassTimes(passtimes);
  })
  .catch((error) => {
    console.log("Something went wrong: ", error.message);
  });

