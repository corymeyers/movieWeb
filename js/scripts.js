function Tickulator (movieType, movieTime, yearBorn) {
  this.movieType = movieType;
  this.movieTime = movieTime;
  this.yearBorn = yearBorn;
  this.basePrice = 12;
}

Tickulator.prototype.price = function(){
  var basePrice = 12;
  var adjustablePrice = 12;
  if (this.movieType == "secondRun") {
    var adjustablePrice = basePrice - 6;
  //  return adjustablePrice;
  } else if (this.movieTime == "matinae") {
    var adjustablePrice = basePrice - 4;
  //  return adjustablePrice;
  } else if ((this.yearBorn > 2002) || (this.yearBorn < 1951)) {
    var adjustablePrice = basePrice - 4;
    //return adjustablePrice;
  } return adjustablePrice;
}

$(document).ready(function() {
  $("form#movieForm").submit(function(event) {
    event.preventDefault();

    var movieType = $("select#movieType").val();
    var movieTime = $("select#movieTime").val();
    var yearBorn = parseInt($("input#yearBorn").val());
    var newTicket = new Tickulator(movieType, movieTime, yearBorn);

    $("ul#receipt").append("<li>"+"$"+"<span class='receiptPrint'>" + newTicket.price() + "</span></li>");
      $("input").val("");

});
});
