$(document).ready(function () {

  // Jordan
  // Declare a Book1 variable that will have the data calling the present book. As of this moment, the author data is only there in case we need Jason needs it for a future book if he needs to add it to the query if iDreamBooks doesn't access the right url with just a query of the title
  var Book1 = {
    // I emptied these so that they could be populated with meetup api data(Jason)
    title: "",
    author: ""
  }
  console.log("The current book's title is below");
  console.log(Book1);

  var Book2 = {
    title: "",
    author: ""
  }
  console.log("The upcoming book's title is below");
  console.log(Book2);


  function displayBook1Review() {
    //I changed the queryURL http to https below b/c of an insecure XMLHttpRequest error
    var queryURL = "https://idreambooks.com/api/books/reviews.json?q=" + Book1.title + "+" + Book1.author + "&key=36ecbc8d8618c9f56345cf3e322fa1355b25fc32"
    console.log(queryURL);
    console.log(Book1.title);
    console.log(Book1.author);
    //make the ajax call to the iDreamBooks API
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log("The response to the CURRENT BOOK iDreamBooks ajax call is below");
      console.log(response);
      $("#iDB-preview").html("Information on the book we are currently reading:<br>")
      if (response.book.rating) {
        $("#iDB-preview").append(`iDreamBooks Rating: ${response.book.rating}%<br><br>`);
      }
      else {
        $("#iDB-preview").append("Sorry, iDreamBooks has not yet rated this book.<br><br>");
      }
      if (response.book.critic_reviews[0]) {
        $("#iDB-preview").append("Critic Review(s):");
        $("#iDB-preview").append("<br>");
        $("#iDB-preview").append('"');
        $("#iDB-preview").append(response.book.critic_reviews[0].snippet);
        $("#iDB-preview").append('"');
        $("#iDB-preview").append(`<br>Source: ${response.book.critic_reviews[0].source}`);
        var reviewLink = response.book.critic_reviews[0].review_link;
        $("#iDB-preview").append($("<br><a target='_blank' href='" + reviewLink + "'>Click here for the full review</a>"));
      }
      else {
        $("#iDB-preview").append("Sorry, iDreamBooks does not yet have any critic reviews of this book on file");
      }
      if (response.book.critic_reviews[1]) {
        $("#iDB-preview").append("<br>");
        $("#iDB-preview").append("<br>");
        $("#iDB-preview").append('"');
        $("#iDB-preview").append(response.book.critic_reviews[1].snippet);
        $("#iDB-preview").append('"');
        $("#iDB-preview").append(`<br>Source: ${response.book.critic_reviews[1].source}`);
        var reviewLink = response.book.critic_reviews[1].review_link;
        $("#iDB-preview").append($("<br><a target='_blank' href='" + reviewLink + "'>Click here for the full review</a>"));
      }
    })
    //this will pause the carousel when after it loads and displays the book1
    // $('.carousel').carousel('pause');
  }
  // This function call is commented out because I moved it into snipFunction below so that it could occur after Meetup api has had time to respond
  // displayBook1Review(Book1);

  //function for displaying the 
  // Jordan
  function displayBook2Review() {
    //I changed the queryURL http to https below b/c of an insecure XMLHttpRequest error
    var queryURL = "https://idreambooks.com/api/books/reviews.json?q=" + Book2.title + "+" + Book2.author + "&key=36ecbc8d8618c9f56345cf3e322fa1355b25fc32"
    console.log(queryURL);
    console.log(Book2.title);
    console.log(Book2.author);
    //make the ajax call to the iDreamBooks API
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log("The response to the UPCOMING iDreamBooks ajax call is below");
      console.log(response);
      $("#iDB-preview-upcoming").html("Information on the book we are reading next:<br>");
      if (response.book.rating) {
        $("#iDB-preview-upcoming").append(`iDreamBooks Rating: ${response.book.rating}%<br><br>`);
      }
      else {
        $("#iDB-preview-upcoming").append("Sorry, iDreamBooks has not yet rated this book.<br><br>");
      }
      if (response.book.critic_reviews[0]) {
        $("#iDB-preview-upcoming").append("Critic Review:");
        $("#iDB-preview-upcoming").append("<br>");
        $("#iDB-preview-upcoming").append('"');
        $("#iDB-preview-upcoming").append(response.book.critic_reviews[0].snippet);
        $("#iDB-preview-upcoming").append('"');
        $("#iDB-preview-upcoming").append(`<br>Source: ${response.book.critic_reviews[0].source}`);
        var reviewLink = response.book.critic_reviews[0].review_link;
        $("#iDB-preview-upcoming").append($("<br><a target='_blank' href='" + reviewLink + "'>Click here for the full review</a>"));
      }
      else {
        $("#iDB-preview-upcoming").append("Sorry, iDreamBooks does not yet have any critic reviews of this book on file");
      }
      if (response.book.critic_reviews[1]) {
        $("#iDB-preview-upcoming").append("<br>");
        $("#iDB-preview-upcoming").append("<br>");
        $("#iDB-preview-upcoming").append('"');
        $("#iDB-preview-upcoming").append(response.book.critic_reviews[1].snippet);
        $("#iDB-preview-upcoming").append('"');
        $("#iDB-preview-upcoming").append(`<br>Source: ${response.book.critic_reviews[1].source}`);
        var reviewLink = response.book.critic_reviews[1].review_link;
        $("#iDB-preview-upcoming").append($("<br><a target='_blank' href='" + reviewLink + "'>Click here for the full review</a>"));
      }
    })
    //this will pause the carousel when after it loads and displays the book1
    // $('.carousel').carousel('pause');
  }
  // displayBook2Review();

  function displayBookRecentReview() {
    //I changed the queryURL http to https below b/c of an insecure XMLHttpRequest error
    var queryURL = "https://idreambooks.com/api/books/reviews.json?q=" + pastBooks[0].title + "+" + pastBooks[0].author + "&key=36ecbc8d8618c9f56345cf3e322fa1355b25fc32"
    console.log(queryURL);
    console.log(pastBooks[0].title);
    console.log(pastBooks[0].author);
    //make the ajax call to the iDreamBooks API
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log("The response to the RECENT iDreamBooks ajax call is below");
      console.log(response);
      $("#iDB-preview-recent").html("Information on the last book we read:<br>")
      if (response.book.rating) {
        $("#iDB-preview-recent").append(`iDreamBooks Rating: ${response.book.rating}%<br><br>`);
      }
      else {
        $("#iDB-preview-recent").append("Sorry, iDreamBooks has not yet rated this book.<br><br>");
      }
      if (response.book.critic_reviews[0]) {
        $("#iDB-preview-recent").append("Critic Review:");
        $("#iDB-preview-recent").append("<br>");
        $("#iDB-preview-recent").append('"');
        $("#iDB-preview-recent").append(response.book.critic_reviews[0].snippet);
        $("#iDB-preview-recent").append('"');
        $("#iDB-preview-recent").append(`<br>Source: ${response.book.critic_reviews[0].source}`);
        var reviewLink = response.book.critic_reviews[0].review_link;
        $("#iDB-preview-recent").append($("<br><a target='_blank' href='" + reviewLink + "'>Click here for the full review</a>"));
      }
      if (response.book.critic_reviews[1]) {
        $("#iDB-preview-recent").append("<br>");
        $("#iDB-preview-recent").append("<br>");
        $("#iDB-preview-recent").append('"');
        $("#iDB-preview-recent").append(response.book.critic_reviews[1].snippet);
        $("#iDB-preview-recent").append('"');
        $("#iDB-preview-recent").append(`<br>Source: ${response.book.critic_reviews[1].source}`);
        var reviewLink = response.book.critic_reviews[1].review_link;
        $("#iDB-preview-recent").append($("<br><a target='_blank' href='" + reviewLink + "'>Click here for the full review</a>"));
      }
    })
    //this will pause the carousel when after it loads and displays the book1
    // $('.carousel').carousel('pause');
  }
  //the following line calls this function to run, but it will actually be called by Jason's relevant snip function, so once his snip function is in the code and calls this function to run, we can comment the following line out!
  displayBookRecentReview();

  function displayBookWaybackReview() {
    //I changed the queryURL http to https below b/c of an insecure XMLHttpRequest error
    var queryURL = "https://idreambooks.com/api/books/reviews.json?q=" + pastBooks[1].title + "+" + pastBooks[1].author + "&key=36ecbc8d8618c9f56345cf3e322fa1355b25fc32"
    console.log(queryURL);
    console.log(pastBooks[1].title);
    console.log(pastBooks[1].author);
    //make the ajax call to the iDreamBooks API
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log("The response to the WAYBACK iDreamBooks ajax call is below");
      console.log(response);
      $("#iDB-preview-wayback").html("Information on the book we read two months ago:<br>");
      if (response.book.rating) {
        $("#iDB-preview-wayback").append(`iDreamBooks Rating: ${response.book.rating}%<br><br>`);
      }
      else {
        $("#iDB-preview-wayback").append("Sorry, iDreamBooks has not yet rated this book.<br><br>");
      }
      if (response.book.critic_reviews[0]) {
        $("#iDB-preview-wayback").append("Critic Review:");
        $("#iDB-preview-wayback").append("<br>");
        $("#iDB-preview-wayback").append('"');
        $("#iDB-preview-wayback").append(response.book.critic_reviews[0].snippet);
        $("#iDB-preview-wayback").append('"');
        $("#iDB-preview-wayback").append(`<br>Source: ${response.book.critic_reviews[0].source}`);
        var reviewLink = response.book.critic_reviews[0].review_link;
        $("#iDB-preview-wayback").append($("<br><a target='_blank' href='" + reviewLink + "'>Click here for the full review</a>"));
      }
      else {
        $("#iDB-preview-wayback").append("Sorry, iDreamBooks does not yet have any critic reviews of this book on file");
      }
      if (response.book.critic_reviews[1]) {
        $("#iDB-preview-wayback").append("<br>");
        $("#iDB-preview-wayback").append("<br>");
        $("#iDB-preview-wayback").append('"');
        $("#iDB-preview-wayback").append(response.book.critic_reviews[1].snippet);
        $("#iDB-preview-wayback").append('"');
        $("#iDB-preview-wayback").append(`<br>Source: ${response.book.critic_reviews[1].source}`);
        var reviewLink = response.book.critic_reviews[1].review_link;
        $("#iDB-preview-wayback").append($("<br><a target='_blank' href='" + reviewLink + "'>Click here for the full review</a>"));
      }
    })
    //this will pause the carousel when after it loads and displays the book1
    // $('.carousel').carousel('pause');
  }
  //the following line calls this function to run, but it will actually be called by Jason's relevant snip function, so once his snip function is in the code and calls this function to run, we can comment the following line out!
  displayBookWaybackReview();


  // <!-- Jason -->
  // set up variable to store response
  var meetings = "";
  var meetupName = "";
  var bookName = "";
  var bookName2 = "";
  var authorName = "";
  var authorName2 = "";
  var bookNamePluses = "";
  var bookNamePlusses2 = "";
  var authorNamePluses = "";
  var authorNamePluses = "";
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
    googleBooks();
  };

  // function to pull title name out of meetings variable and put it into Book2 object (This is repetitive, but works for now.
  function snipFunction2(input) {
    console.log("function input: " + input)
    var titleBegin = input.indexOf("-") + 2;
    console.log(titleBegin);
    var titleEnd = input.indexOf(",");
    console.log(titleEnd);
    bookName2 = input.slice(titleBegin, titleEnd);
    console.log(bookName2);
    authorName2 = input.slice(titleEnd + 5, input.length);
    console.log(authorName2);
    bookNamePluses2 = plusFunction(bookName2);
    authorNamePluses2 = plusFunction(authorName2);
    console.log("bookNamePluses2 variable: " + bookNamePluses2 + ". AuthorNamePluses2 variable: " + authorNamePluses2 + ".");
    Book2.title = bookNamePluses2;
    Book2.author = authorNamePluses2;
    console.log("Book2 after snip " + Book2.title + " " + Book2.author);

    // displayBook2Review(Book2);  This function needs to be created
    displayBook2Review(Book2);
    googleBooks2();

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
  var corsURL = `https://alex-rosencors.herokuapp.com/?url=${MeetupAPISignedNextMeetupKey}`;

  $.ajax({
    url: corsURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    meetings = response;
    console.log(meetings.results[0].name);
    console.log(meetings.results[1].name);
    meetupName = meetings.results[0].name;
    meetupName2 = meetings.results[1].name;
    // Adding a variable to take in the date of the next meeting in unix
    time = meetings.results[0].time;
    console.log("This is the time in unix " + time);
    // Sending the time, the date of the next meeting to waitForTime function
    waitForTime(time);

    console.log("interior Ajax meetupName value " + meetupName);
    snipFunction(meetupName);
    snipFunction2(meetupName2);
  });


  // variables
  var googleISBN = "";
  var googleISBN2 = "";
  var googleViewability = "";
  var googleViewability2 = "";
  var googleVolume = {};
  var googleVolume2 = {};
  var googleImageURL = "";
  var googleImageURL2 = "";
  var googlePagination = "";
  var googlePagination2 = "";

  function googleBooks() {
    var googleBooksAPI = "AIzaSyCheolDq79sZudYdTX1G6FspSWLpQXDEiI";
    var googleBooksURL = "https://www.googleapis.com/books/v1/volumes?q=" + Book1.title + Book1.author + "&key=" + googleBooksAPI;

    $.ajax({
      url: googleBooksURL,
      method: "GET"
    }).then(function (response) {
      console.log("Google Books Response");
      console.log(response);
      googleVolume = response;
      googleISBN = response.items[0].volumeInfo.industryIdentifiers[1].identifier;
      googleViewability = response.items[0].accessInfo.viewability;
      console.log(googleISBN);
      console.log("viewability: "+googleViewability);
      googleImageURL = response.items[0].volumeInfo.imageLinks.thumbnail;
      console.log(googleImageURL);
      googlePagination = response.items[0].volumeInfo.pageCount;
      console.log(googlePagination);

      if (googleViewability==="NO_PAGES"){
        // href without isbn if no preview is available
        var coverImageTag = `<img src="${googleImageURL}" alt="cover image">`;
        $("#google-preview").append(`<a href="./preview.html">${coverImageTag}<a><br /><p>Click cover for<br />preview</p>`);

      }

      else {
        var coverImageTag = `<img src="${googleImageURL}" alt="cover image">`;
        $("#google-preview").append(`<a href="./preview.html?isbn=${googleISBN}">${coverImageTag}<a><br /><p>Click cover for<br />preview</p>`);

      };

    });
  };

  function googleBooks2() {
    var googleBooksAPI = "AIzaSyCheolDq79sZudYdTX1G6FspSWLpQXDEiI";
    var googleBooksURL = "https://www.googleapis.com/books/v1/volumes?q=" + Book2.title + Book2.author + "&key=" + googleBooksAPI;

    $.ajax({
      url: googleBooksURL,
      method: "GET"
    }).then(function (response) {
      console.log("Google Books 2 Response");
      console.log(response);
      googleVolume2 = response;
      googleISBN2 = response.items[1].volumeInfo.industryIdentifiers[1].identifier;
      googleViewability2 = response.items[0].accessInfo.viewability;
      console.log(googleISBN2);
      console.log("viewability2: "+googleViewability2);
      googleImageURL2 = response.items[1].volumeInfo.imageLinks.thumbnail;
      console.log(googleImageURL2);
      googlePagination2 = response.items[1].volumeInfo.pageCount;
      console.log(googlePagination2);
      var coverImageTag = `<img src="${googleImageURL2}" alt="cover image">`;
      $("#google-preview-upcoming").append(`<a href="./preview.html?isbn=${googleISBN2}">${coverImageTag}<a><br /><p>Click cover for<br />preview</p>`);
    });
  };


  // <!-- Jason end -->

  // <!-- Jordan-->















  
  // <!-- Jordan-->












  // <!-- Jordan-->

  // <!-- Charity -->



















  // <!-- Jordan-->

  // <!-- Charity -->

  function waitForTime(time) {
    console.log("waitForTime received ", time);
    var convertedTime = moment(time).format('MMMM Do YYYY, h:mm:ss a');
    console.log("This is converted time " + convertedTime);
    // var firstTime = time;
    console.log("firstTime is " + time);

    var currentTime = moment();
    // Set a variable for how long until book meeting happens 
    var tDiff = moment(time).fromNow();
    console.log(tDiff);

    console.log('first time and time: ' + time)
    // Populate the current bookMtg data in html, just pop it in
    $("#timeTilMtg").append("The CNJ Scifi-Fantasy Book and Movie Club next meeting will be " + tDiff);
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


// star background code
/*
===============================================================

Barev and welcome to my little playground!

My name is Ani and I'm a Web Developer from Yerevan. Here you will find some of my personal experiments. Feel free to use them for whatever you want.

===============================================================
*/
function init(){

  var styles = ["animate4", "animate1", "animate2", "animate3"];
  var scales = ["scale1", "scale2", "scale3"];
  var opacities = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var stars = "";
  var count = 300;
  var widthWindow = window.innerWidth;
  var heightWindow = window.innerHeight;

  for (var i = 0; i < count; i++) {
    stars += "<span class='star " + styles[rand(0, 4)] + " " + opacities[rand(0, 6)] + " "
    + scales[rand(0, 3)] + "' style='animation-delay: ." + rand(0, 9)+ "s; left: "
    + rand(0, widthWindow) + "px; top: " + rand(0, heightWindow) + "px;'></span>";
  }

  document.querySelector(".sky").innerHTML = stars;

  }

window.onload = init;
window.onresize = init;
// end background code























// <!-- priyesh -->