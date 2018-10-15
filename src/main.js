import $ from 'jquery';
import {doctorSearch} from './backend'

$(document).ready(function() {
  var searchResult = doctorSearch("feet", "condition")
  console.log(searchResult);
})
