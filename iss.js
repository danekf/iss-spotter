/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

 const request = require('request');

 const fetchMyIP = (callback) => { 
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if(error){
      return callback (error, null);
    }
    if(response.statusCode !== 200) {
      return callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      
    }
    const data = JSON.parse(body); 
    callback(error, data.ip);

 });
}

const fetchCoordsByIP = (ip, callback) => {
  request("http://ipwho.is/"+ip, (error, response, body) => {
    if(error){
      return callback (error, null);
    }
    if(response.statusCode !== 200) {
      return callback(Error(`Status Code ${response.statusCode} when fetching location: ${body}`), null);
      
    }
    const data = JSON.parse(body); 
    if(!data.success){
      return callback(`Site reached but IP not found in database. IP may not be in correct format (IPv4 or IPv6). IP searched was ${ip}.`, null)
    }
    let latitude = data.latitude;
    let longitude = data.longitude;
    callback(error, {latitude, longitude});

 });
}

const fetchISSFlyOverTimes = (coordinates, callback) =>{
  let latitude = coordinates.latitude;
  let longitude = coordinates.longitude;

  request("https://iss-pass.herokuapp.com/json/?lat=" + latitude + "&lon=" + longitude, (error, response, body) => {
    if(error){
      return callback (error, null);
    }
    if(response.statusCode !== 200) {
      return callback(Error(`Status Code ${response.statusCode} when fetching ISS location: ${body}`), null);
      
    }

    const data = JSON.parse(body); 
    callback(error, data.response);

 });
}





module.exports = { 
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,

};
