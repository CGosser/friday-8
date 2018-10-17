import $ from 'jquery';
export class Doctor{
  doctorSearch(searchTerm , searchType){
    if (searchType == "condition") {
      let promise = new Promise(function(resolve, reject) {

        let request = new XMLHttpRequest();
        const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${searchTerm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

        request.onload = function() {
          if (this.readyState === 4 && this.status === 200) {
            resolve(request.response);
          }
          else{
            reject(Error(request.statusText));
          }
        }
      });
    }
    if (searchType == "name") {
      let promise = new Promise(function(resolve, reject) {

        let request = new XMLHttpRequest();
        const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${searchTerm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

        request.onload = function() {
          if (this.readyState === 4 && this.status === 200) {
            resolve(request.response);
          }
          else{
            reject(Error(request.statusText));
          }
        }
      });
    }
  }
}


// `https://api.betterdoctor.com/2016-03-01/doctors?query=${searchTerm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
//
//
// `https://api.betterdoctor.com/2016-03-01/doctors?name=${searchTerm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`
