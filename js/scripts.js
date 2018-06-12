function Ticket(movieName, movieType, movieTime, discountType) {
  this.movie = movieName
  this.mType = movieType
  this.mTime = movieTime
  var showType = makeShowType(movieTime)
  var cost = calcCost(movieType, discountType, showType)
  this.cost = cost
}


function makeShowType(time) {
  var showType
  if(time <= 1600){
    showType = "matinee"
  } else{
    showType = "evening"
  }
  return showType
}

function calcCost(movieType, discountType, showType) {
  var cost = 16
  console.log(movieType);
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
