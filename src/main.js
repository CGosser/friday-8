import $ from 'jquery';
import {Doctor} from './backend'

$(document).ready(function() {
  $('#searchInput').click(function() {
    $('.outputs').empty()
    let searchType = $("#searchType").val()
    let userInput = $("#userInput").val()
    let doctor = new Doctor()
    let promise = doctor.doctorSearch(userInput, searchType)
    promise.then(function(response){
      let body = JSON.parse(response);
      if (body.data.length > 0){
        for (let i = 0; i < body.data.length; i++){
          $('.outputs').append("<ul><li>" + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "</li>" + "</ul>" )
        }
      } else {
        $('.outputs').append("<h1>no results for your search</h1>")
      }
    })
  })
})
