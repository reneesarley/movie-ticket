
// userlogic

$(function(){

  $("#submitButton").click(function() {
    var movieName = $('#titleSelection :selected').text();
    var movieTime = $('#timeSelection :selected').text();
    var movieDiscount = $('input:radio[name=discountInput]:checked').val();
    var newTicket = new Ticket(movieName, movieTime, movieDiscount)
    console.log(newTicket);
    return newTicket;
  })
});

function Movie(name, rating, times, type) {
  this.movieName = name
  this.rating = rating
  this.timesArray = times
  this.type = type
  this.addToFirstReleaseArray(type)
}
var firstReleaseArry = []
 Movie.prototype.addToFirstReleaseArray = function(movieType) {
  if( movieType === "firstRelease"){
    firstReleaseArry.push(this.movieName);
  } else {
    firstReleaseArry = firstReleaseArry
  }
}

var deadpool = new Movie ("Deadpool", "R", [1200, 1600, 2200], "firstRelease")
var dawnOfTheDead = new Movie ("Dawn of the Dead", "R", [1200, 1600, 2200], "secondRun")



// business logic
function Ticket(movieName, movieTime, discountType) {
  this.movie = movieName
  this.mTime = movieTime
  this.movieType = this.getMovieType(movieName)
  var showType = this.makeShowType(movieTime)
  var cost = this.calcCost(movieType, discountType, showType)
  this.cost = cost
}


//   this.movie -> movieType
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
