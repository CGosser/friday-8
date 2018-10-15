import $ from 'jquery';
import {doctorSearch} from './backend'

$(document).ready(function() {
  var searchType = $("#searchType").val()
  var userInput = $("#userInput").val()
  var searchResult = doctorSearch(userInput, searchType)

  $("#userInput").append(searchResult.data[1].profile.first_name)

})
