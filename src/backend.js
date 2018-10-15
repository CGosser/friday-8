function doctorSearch(searchTerm , searchType){
  if (searchType == "condition") {
    $.ajax({
      url: "https://api.betterdoctor.com/2016-03-01/doctors?query=${searchterm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.API_KEY}",
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        return response
      },
      error: function() {
        return "error"
      }
    });
  }
  if (searchType == "name") {
    $.ajax({
      url: "https://api.betterdoctor.com/2016-03-01/doctors?name=${searchterm}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.API_KEY}",
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        return response
      },
      error: function() {
        return "error"
      }
    });
  }
}
