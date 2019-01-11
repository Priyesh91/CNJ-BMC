

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






























// <!-- priyesh -->
