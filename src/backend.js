import $ from 'jquery';
export default class Doctor{
doctorSearch(searchTerm , searchType){
  if (searchType == "condition") {
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${searchTerm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
      }
    }


  }
  if (searchType == "name") {
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${searchTerm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
      }
    }
  request.open("GET", url, true);
  request.send();
}
}
}
