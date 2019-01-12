// Jason's temporary javascript workspace for testing before altering the logic.js file

// code to pull current Meetup upcoming meetup information, to be used to extract current book name, date



$(document).ready(function() {

    // set up variable to store response
    var meetings = "";
    var meetupName = "";
    var bookName = "";
    var authorName = "";
    var bookNamePluses = "";
    var authorNamePluses = "";
    // var toggleA = false;

    // function to pull title name out of meetings variable
    function snipFunction(input){
    console.log("function input: "+input)
    var titleBegin = input.indexOf("-") + 2;
    console.log(titleBegin);
    var titleEnd = input.indexOf(",");
    console.log(titleEnd);
    bookName = input.slice(titleBegin,titleEnd);
    console.log(bookName);
    authorName = input.slice(titleEnd+5, input.length);
    console.log(authorName);
    bookNamePluses = plusFunction(bookName);
    authorNamePluses = plusFunction(authorName);
    console.log("bookNamePluses variable: "+bookNamePluses+". AuthorNamePluses variable: "+authorNamePluses+".");
    };

    // function to convert spaces to pluses within the string parameter
    function plusFunction(withSpaces){
      var withPluses = withSpaces.replace(/ /g, "+");
      console.log("Spaces switched for pluses: "+withPluses);
      return withPluses;
    };

    // variable for mettup secure key for next meeting 
    var MeetupAPISignedNextMeetupKey = "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=Central-Jersey-Sci-Fi-Fantasy-Book-and-Movie-Club&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=3331796&sig=4e946097cff58f9b643141d9dc9b3d33b2bb73ce";

    // magic Alex stuff (runs request though server to get past cors stuff
    var corsURL = `https://cors-anywhere.herokuapp.com/${MeetupAPISignedNextMeetupKey}`;

  $.ajax({
    url: corsURL,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    meetings = response;
    console.log(meetings.results[0].name);
    meetupName = meetings.results[0].name;
    console.log("interior Ajax meetupName value "+meetupName);
    snipFunction(meetupName);
    }); 


});