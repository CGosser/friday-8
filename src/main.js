import $ from 'jquery';
import {Doctor} from './backend'

$(document).ready(function() {
  $('#searchInput').click(function() {
    var searchType = $("#searchType").val()
    var userInput = $("#userInput").val()
    let doctor = new Doctor()
    let promise = doctor.doctorSearch("feet", "condition")
    promise.then(function(response){
      let body = JSON.parse(response);
      $('.outputs').append("<p>" + body.data[0].profile.first_name + "</p>")
    })
  })


})
