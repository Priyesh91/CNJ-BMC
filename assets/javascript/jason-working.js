// temporary Book1 object to fill in for mettup response not present in this js file
var Book1 = {
  
  title: "Station+Eleven",
  author: "by+Emily+St.+John+Mandel"
}



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
var googleBooksAPI = "AIzaSyCheolDq79sZudYdTX1G6FspSWLpQXDEiI";
var googleBooksURL = "https://www.googleapis.com/books/v1/volumes?q="+Book1.title+Book1.author+"&key="+googleBooksAPI;
  var googleISBN = "";
  var googleVolume = {};
console.log();googleBooksURL;

$.ajax({
  url: googleBooksURL,
  method: "GET"
  }).then(function(response) {
  console.log(response);
  googleVolume = response;
  
  
  }); 


// Modal toggle
// $("#googleModalToggler").click(function(){

//     $('#googlePreviewModal').modal('toggle');

// });

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
