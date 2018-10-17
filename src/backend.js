import $ from 'jquery';
export class Doctor{
  doctorSearch(searchTerm , searchType){
    if (searchType == "condition") {
      console.log("condition");
      let promise = new Promise(function(resolve, reject) {
        console.log("promises");
        let request = new XMLHttpRequest();
        const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${searchTerm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

        request.onload = function() {
          if (this.status === 200) {
            console.log("working");
            resolve(request.response);
          }
          else{
            console.log("not working");
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    }
    if (searchType == "name") {
      console.log("name");
      let promise = new Promise(function(resolve, reject) {

        let request = new XMLHttpRequest();
        const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${searchTerm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

        request.onload = function() {
          if (this.status === 200) {
            console.log("working");
            resolve(request.response);
          }
          else{
            console.log("not working");
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    }
  }
}


// `https://api.betterdoctor.com/2016-03-01/doctors?query=${searchTerm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
//
//
// `https://api.betterdoctor.com/2016-03-01/doctors?name=${searchTerm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
