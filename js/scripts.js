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
  if (showType === "matinee"); {
    cost = cost -2;
  } else {
    cost = cost;
  }
}
