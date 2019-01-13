// Jason's temporary javascript workspace for testing before altering the logic.js file

// $(document).ready(function() {

// working on Google Books api

// Loading Google Books api
  google.books.load();

  function initialize() {
    var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    viewer.load('ISBN:1481440896');
    viewer.resize();
  }

  google.books.setOnLoadCallback(initialize);

// variables
var googleBooks = "";

// Modal toggle
$("#googleModalToggler").click(function(){

    $('#googlePreviewModal').modal('toggle');

});

// Bulma modal toggle

// GET google book function
  // var googleSearchURL = "";

  // $.ajax({
  //   url: googleBooksURL,
  //   method: "GET"
  //   }).then(function(response) {
  //   console.log(response);
  //   googleBooks = response;
    
  //   }); 

// });