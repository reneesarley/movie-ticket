var allMovies = [];

// userlogic
$(function(){

  $("#timesButton").click(function(){
    $("#timeDiv").show();
    $("#timeSelection").empty();
    var deadpool = new Movie ("Deadpool", "R", [1200, 1300, 1400], "firstRelease")
    var dawnOfTheDead = new Movie ("Dawn of the Dead", "R", [1500, 1600], "secondRun")
    var cars = new Movie ("Cars 2", "PG", [1700], "secondRun")
    var tenenbaums = new Movie ("The Royal Tenenbaums", "PG-13", [1700], "secondRun")
    var bottlerocket = new Movie ("Bottle Rocket", "PG-13", [1700], "secondRun")
    var movieName = $('#titleSelection :selected').text();


    for (mov = 0; mov < allMovies.length; ++mov) {
      console.log("main loop")
      if (movieName === allMovies[mov].movieName) {
        for (i = 0; i < allMovies[mov].timesArray.length; ++i) {
          $("#timeSelection").append("<option>" + allMovies[mov].timesArray[i] + "</option>");
        }
        break
      }
    }
    $("#timeSelection").clear
  })

  $("#submitButton").click(function(event) {
    event.preventDefault();
    var movieName = $('#titleSelection :selected').text();
    var movieTime = $('#timeSelection :selected').text();
    var movieDiscount = $('input:radio[name=discountInput]:checked').val();
    var newTicket = new Ticket(movieName, movieTime, movieDiscount)
    console.log(newTicket);
    $("#movie-name").text(newTicket.movie);
    $("#show-time").text(newTicket.mTime);
    $("#movie-rating").text(newTicket.mRating);
    $("#total-cost").text(newTicket.cost);
    return newTicket;
  })

  $("#titleSelection").click(function(){
    $("#timeDiv").hide();
    $("input:radio[name=discountInput]").removeAttr("checked")
  })

});

// business logic

Movie.prototype.pushToArray = function() {
  allMovies.push(this)
  return allMovies
}

function Movie(name, rating, times, type) {
  this.movieName = name
  this.rating = rating
  this.timesArray = times
  this.type = type
  this.addToFirstReleaseArray(type)
  this.pushToArray();
}
var firstReleaseArry = []
Movie.prototype.addToFirstReleaseArray = function(movieType) {
  if( movieType === "firstRelease"){
    firstReleaseArry.push(this.movieName);
  } else {
    firstReleaseArry = firstReleaseArry
  }
}

function Ticket(movieName, movieTime, discountType) {
  this.movie = movieName
  this.mTime = movieTime
  this.mRating = this.getMovieRating(movieName)
  this.movieType = this.getMovieType(movieName)
  var showType = this.makeShowType(movieTime)
  var cost = this.calcCost(movieType, discountType, showType)
  this.cost = cost
}

Ticket.prototype.getMovieRating = function(movieName) {
  for (mov = 0; mov < allMovies.length; ++mov) {
    if (movieName === allMovies[mov].movieName) {
      return allMovies[mov].rating;
    }
  }
}

Ticket.prototype.getMovieType = function(title) {
  if (firstReleaseArry.includes(title)) {
    movieType = "firstRelease"
  } else {
    movieType = "secondRun"
  }
  console.log(movieType)
  return movieType
}

Ticket.prototype.makeShowType = function(time) {
  var showType
  if(time <= 1600){
    showType = "matinee"
  } else{
    showType = "evening"
  }
  return showType
}

Ticket.prototype.calcCost = function(movieType, discountType, showType) {
  var cost = 16
  if (movieType === "secondRun") {
    cost = cost - 2;
  } else {
    cost = cost;
  }
  if (discountType === "seniorDiscount" || discountType === "studentDiscount" || discountType === "childDiscount") {
    cost = cost - 2;
  } else {
    cost = cost;
  }
  if (showType === "matinee") {
    cost = cost -2;
  } else {
    cost = cost;
  }
  return cost;
}
//
// function Kitten(kittenName) {
//   this.name = kittenName
//   this.allInstances = []
// }
//
// // within Movie constr. we have a var firstReleaseArry =
// var firstReleaseArry = ["deadpool", etc]
// // ever time we make a new ticket. Movie name is passed in
// var name = instanceOfMovie.name
//
// do logic to take name and spit out movie type
// if firstReleaseArry.includes(name) {movieType is firstRelease
// var ReneesTicket.type = movieType
//
//
// // Make a movie instance(isFirstRelease). When Movies are constructed, call the getMovieType prototype
// Movie.prototype.pushToFirstReleaseArrAndReturnMovieType(title)
//   var firstReleaseArry = ["deadpool", etc]
//   do logic to take name and spit out movie type
//   // check if this movie is included in the firstReleaseArr
//   return movieType
// //push movie to firstReleaseArr based on
