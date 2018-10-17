import $ from 'jquery';
import {Doctor} from './backend'

$(document).ready(function() {
  var searchType = $("#searchType").val()
  var userInput = $("#userInput").val()
  var
  var searchResult = Doctor.doctorSearch("steve", "name")
  console.log(searchResult);
  $(".outputs").append("<p>" + searchResult.data[1].profile.first_name + "</p>")
})
