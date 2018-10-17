import $ from 'jquery';
import {Doctor} from './backend'

$(document).ready(function() {
  var searchType = $("#searchType").val()
  var userInput = $("#userInput").val()
  let doctor = new Doctor()
  let searchResult = doctor.doctorSearch("feet", "condition")
  searchResult.then(function(response){
    console.log(searchResult);
    console.log(response);
  })


})
