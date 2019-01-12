// Jason's temporary javascript workspace for testing before altering the logic.js file

$(document).ready(function() {

// working on Google Books api

// variables
var googleBooks = "";

// GET google book function
  var googleSearchURL = "";

  $.ajax({
    url: googleBooksURL,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    googleBooks = response;
    
    }); 

});