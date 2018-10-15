import $ from 'jquery';
export function doctorSearch(searchTerm , searchType){
  if (searchType == "condition") {
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=` + searchTerm + `&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=` + process.env.exports.apiKey,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log("success");
        return response
      },
      error: function() {
        console.log(`There was an error processing your request. Please try again.`);
      }
    });
  }
  if (searchType == "name") {
    $.ajax({
      url: "https://api.betterdoctor.com/2016-03-01/doctors?name=" + searchTerm + "&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=" + process.env.exports.apiKey,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log("success");
        return response
      },
      error: function() {
        console.log(`There was an error processing your request. Please try again.`);
      }
    });
  }
}
// if (searchType == "condition") {
//   $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + searchTerm + "&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=" + process.env.API_KEY).then(function(response) {
//       return response
//       }).fail(function(error) {
//         $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
//       });
//
//   };
// if (searchType == "name") {
//   $.get("https://api.betterdoctor.com/2016-03-01/doctors?name=" + searchTerm + "&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=" + process.env.API_KEY).then(function(response) {
//       return response
//       }).fail(function(error) {
//         $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
//       });
// }
// }
