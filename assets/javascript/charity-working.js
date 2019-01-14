$(document).ready(function () {

  // Jordan
  // Declare a Book1 variable that will have the data calling the present book. As of this moment, the author data is only there in case we need Jason needs it for a future book if he needs to add it to the query if iDreamBooks doesn't access the right url with just a query of the title
  var Book1 = {
    // I emptied these so that they could be populated with meetup api data(Jason)
    title: "",
    author: ""
  }
  console.log(Book1);


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
      $("#iDB-preview").append($("<br><a target='_blank' href='" + reviewLink + "'>Click here for the full review</a>"));
      //Now I just need to figure out how to make the variable reviewLink get printed to the page as a link instead of plain text
    })
    //this will pause the carousel when after it loads and displays the book1
    $('.carousel').carousel('pause');
  }
  // This function call is commented out because I moved it into snipFunction below so that it could occur after Meetup api has had time to respond
  // displayBook1Review(Book1);

  // Jordan





  // <!-- Jason -->
  // set up variable to store response
  var meetings = "";
  var meetupName = "";
  var bookName = "";
  var authorName = "";
  var bookNamePluses = "";
  var authorNamePluses = "";
  var time = "";
  var timeConverted = "";
  // for use in google preview page
  var googleISBN = "";
  var googleVolume = {};


  // function to pull title name out of meetings variable
  function snipFunction(input) {
    console.log("function input: " + input)
    var titleBegin = input.indexOf("-") + 2;
    console.log(titleBegin);
    var titleEnd = input.indexOf(",");
    console.log(titleEnd);
    bookName = input.slice(titleBegin, titleEnd);
    console.log(bookName);
    authorName = input.slice(titleEnd + 5, input.length);
    console.log(authorName);
    bookNamePluses = plusFunction(bookName);
    authorNamePluses = plusFunction(authorName);
    console.log("bookNamePluses variable: " + bookNamePluses + ". AuthorNamePluses variable: " + authorNamePluses + ".");
    Book1.title = bookNamePluses;
    Book1.author = authorNamePluses;
    console.log("Book1 after snip " + Book1.title + " " + Book1.author);
    displayBook1Review(Book1);
  };

  // function to convert spaces to pluses within the string parameter
  function plusFunction(withSpaces) {
    var withPluses = withSpaces.replace(/ /g, "+");
    console.log("Spaces switched for pluses: " + withPluses);
    return withPluses;
  };

  // variable for mettup secure key for next meeting 
  var MeetupAPISignedNextMeetupKey = "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=Central-Jersey-Sci-Fi-Fantasy-Book-and-Movie-Club&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=3331796&sig=4e946097cff58f9b643141d9dc9b3d33b2bb73ce";

  // magic Alex stuff (runs request though server to get past cors stuff
  // var corsURL = `https://alex-rosencors.herokuapp.com/?url=${MeetupAPISignedNextMeetupKey}`;
  var corsURL = `https://cors-anywhere.herokuapp.com/${MeetupAPISignedNextMeetupKey}`;
  $.ajax({
    url: corsURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    meetings = response;
    console.log(meetings.results[0].name);
    meetupName = meetings.results[0].name;
    console.log("interior Ajax meetupName value " + meetupName);
    snipFunction(meetupName);
    time = meetings.results[0].time;

    console.log("This is the time in unix " + time);
    time = moment(time).format('MMMM Do YYYY, h:mm:ss a');
    console.log("This is converted time " + time);
    
   
    waitForTime(time);
  });





  //-------Start----Priyesh Submit A READ BUTTON AND FIREBASE CODE---------
  $(document).ready(function () {

    // Initialize Firebase
    //priyesh firebase test project key, on final submit change to Jason's information as he will be using it periodically
    var config = {
      apiKey: "AIzaSyClgcbH2St3fS0SxAAivW6ts5PS8rTlMGY",
      authDomain: "test-project1-718de.firebaseapp.com",
      databaseURL: "https://test-project1-718de.firebaseio.com",
      projectId: "test-project1-718de",
      storageBucket: "test-project1-718de.appspot.com",
      messagingSenderId: "83784774921"
    };
    firebase.initializeApp(config);

    // save firebase database reference
    var database = firebase.database();
    // add event listener for form submit
    $("#submit-btn").on("click", function (event) {
      event.preventDefault();

      var userData = {
        name: $("#name-input").val().trim(),
        goodreadsUsername: $("#goodreads-username-input").val().trim(),
        meetupUsername: $("#meetup-username-input").val().trim(),
        bookSuggestion: $("#booksuggestion-input").val().trim()
      };

      database.ref().push(userData);

      //clear out values after submit
      $("#name-input").val("");
      $("#goodreads-username-input").val("");
      $("#meetup-username-input").val("");
      $("#booksuggestion-input").val("");
    });
  });
  //-------END---Priyesh Submit A READ BUTTON AND FIREBASE CODE---------
});
// --------------------Start---Logo Animation--------------------
$(".grimg, .muimg").rotate({
  bind: {
    mouseover: function () {
      $(this).rotate({
        animateTo: 360
      })
    },
    mouseout: function () {
      $(this).rotate({
        animateTo: 0
      })
    }
  }
});

// --------------------End---Logo Animation--------------------



// <!-- Charity -->
function waitForTime(time) {
  console.log("waitForTime received ", time);

  var firstTime = time;

  var currentTime = moment();

  // Set a variable for how frequently the book meeting happens 
  var tDiff = moment(firstTime).fromNow();
  console.log("The difference in days is " + tDiff)
  // convert time to EST from GMT
  tDiff = tDiff - 5;
  console.log("This is time in EST " + tDiff);

  // Set variable for getting the time to the next book meeting
  var nextbookMtg = moment().add(tMinutesTillbookMtg, "minutes");
  nextbookMtg = (moment(nextbookMtg).format("dd:hh:mm A"));

  // Populate the current bookMtg data in html, create table to do it
  $("# > tbody").append("<td>" + "The Next meeting is in : " + tMinutesTillbookMtg + " min" + "</td>" + "<td>" + "</td>" + "</tr>");
}























// <!-- Charity -->


// <!-- priyesh -->


//-------Start----Priyesh Submit A READ BUTTON AND FIREBASE CODE---------
$(document).ready(function () {

  // Initialize Firebase
  //priyesh firebase test project key, on final submit change to Jason's information as he will be using it periodically
  var config = {
    apiKey: "AIzaSyClgcbH2St3fS0SxAAivW6ts5PS8rTlMGY",
    authDomain: "test-project1-718de.firebaseapp.com",
    databaseURL: "https://test-project1-718de.firebaseio.com",
    projectId: "test-project1-718de",
    storageBucket: "test-project1-718de.appspot.com",
    messagingSenderId: "83784774921"
  };
  firebase.initializeApp(config);

  // save firebase database reference
  var database = firebase.database();
  // add event listener for form submit
  $("#submit-btn").on("click", function (event) {
    event.preventDefault();

    var userData = {
      name: $("#name-input").val().trim(),
      goodreadsUsername: $("#goodreads-username-input").val().trim(),
      meetupUsername: $("#meetup-username-input").val().trim(),
      bookSuggestion: $("#booksuggestion-input").val().trim()
    };

    database.ref().push(userData);

    //clear out values after submit
    $("#name-input").val("");
    $("#goodreads-username-input").val("");
    $("#meetup-username-input").val("");
    $("#booksuggestion-input").val("");
  });
});
//-------Start----Priyesh Submit A READ BUTTON AND FIREBASE CODE---------