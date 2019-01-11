
// Jordan
// Declare a Book1 variable that will have the data calling the present book. As of this moment, the author data is only there in case we need Jason needs it for a future book if he needs to add it to the query if iDreamBooks doesn't access the right url with just a query of the title
var Book1 = {
  title: "Station+Eleven",
  author: "Emily+St+John+Mandel"
}
console.log(Book1);

$(document).ready(function() {

  function displayBook1Review() {
    //I changed the queryURL http to https below b/c of an insecure XMLHttpRequest error
    var queryURL = "https://idreambooks.com/api/books/reviews.json?q=" + Book1.title + "&key=36ecbc8d8618c9f56345cf3e322fa1355b25fc32"
    console.log(queryURL);
    console.log(Book1.title);
    console.log(Book1.author);
    //make the ajax call to the iDreamBooks API
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log("The response to the ajax call is below");
      console.log(response);
      $("#iDB-preview").prepend(`iDreamBooks Rating: ${response.book.rating}%<br><br>`);
      $("#iDB-preview").append(response.book.critic_reviews[0].snippet);
      $("#iDB-preview").append(`<br><br>Source: ${response.book.critic_reviews[0].source}`);
      var reviewLink = response.book.critic_reviews[0].review_link;
      $("#iDB-preview").append($("<br><a href='" + reviewLink + "'>Click here for the full review</a>"));
      //Now I just need to figure out how to make the variable reviewLink get printed to the page as a link instead of plain text
    })
  }

  displayBook1Review(Book1);

});
// Jordan





// <!-- Jason -->
  var MeetupAPISignedNextMeetupKey = "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=Central-Jersey-Sci-Fi-Fantasy-Book-and-Movie-Club&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=3331796&sig=4e946097cff58f9b643141d9dc9b3d33b2bb73ce";

  var corsURL = `https://cors-anywhere.herokuapp.com/${MeetupAPISignedNextMeetupKey}`;

  $.ajax({
    url: corsURL,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    var meetings = response;
    console.log(meetings.results[0].name);
    }); 


// <!-- Jason end -->

// <!-- Jordan-->


































// <!-- Jordan-->

// <!-- Charity -->

























// <!-- Charity -->


// <!-- priyesh -->


































// <!-- priyesh -->
