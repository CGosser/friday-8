import $ from 'jquery';
import {Doctor} from './backend'
function isAcceptingNewPatients(accepting){ if (accepting){
  return "Is currently accepting new patients"
} else {
  return "Is currently <strong> not </strong> accepting new patients"
}
}
$(document).ready(function() {
  $('#searchInput').click(function() {
    console.log("clicked");
    $('.outputs').empty()
    let searchType = $("#searchType").val()
    let userInput = $("#userInput").val()
    let doctor = new Doctor()
    let promise = doctor.doctorSearch(userInput, searchType)

    promise.then(function(response){
      console.log(response);
      const body = JSON.parse(response);
      if (body.data.length > 0){
        for (let i = 0; i < body.data.length; i++){
          const practice = body.data[i].practices.findIndex(practices => practices.location_slug == "or-portland")


          $('.outputs').append("<img src='" + body.data[i].profile.image_url + "'>" +
          "<ul><li>" + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "</li>" +
          "<li>" + body.data[i].practices[practice].phones[0].number + "</li>" +
          "<li>" + isAcceptingNewPatients(body.data[i].practices[practice].accepts_new_patients) + "</li><br>" +

          "<li>" + "<strong>office address:</strong>" + "</li>" +
          "<li>" + body.data[i].practices[practice].visit_address.street + "</li>" +
          "<li>" + body.data[i].practices[practice].visit_address.city + "</li>" +
          "<li>" + body.data[i].practices[practice].visit_address.state + "</li>" +
          "<li>" + body.data[i].practices[practice].visit_address.zip + "</li>" +
          "</ul>" )
        }
      } else {
        $('.outputs').append("<h1>no results for your search</h1>")
      }
    })
    promise.catch(function(error) {
      $('.outputs').append(error)
    })
  })
})
