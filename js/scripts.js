
// userlogic

$(function(){

  $("#submitButton").click(function() {
    var movieName = $('#titleSelection :selected').text();
    var movieTime = $('#timeSelection :selected').text();
    var movieDiscount = $('input:radio[name=discountInput]:checked').val();
    var newTicket = new Ticket(movieName, movieTime, movieDiscount)
    console.log(movieDiscount);
    return newTicket;
  })
});

function Movie(name, rating, times, type) {
  this.movieName = movie
  this.rating = rating
  this.timesArray = times
  this.type = type
}

// business logic
function Ticket(movieName, movieTime, discountType) {
  this.movie = movieName
  this.mType = movieType
  this.mTime = movieTime
  var showType = this.makeShowType(movieTime)
  var cost = this.calcCost(movieType, discountType, showType)
  this.cost = cost
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
