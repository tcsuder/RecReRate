function Park(parkName) {
  this.parkName = parkName;
  this.amenities = [];
  this.reviews = [];
  this.allParks = [];
  this.north = false;
  this.northEast = false;
  this.southEast = false;
  this.northWest = false;
  this.southWest = false;
}

Park.prototype.parkCompiler = function(north, northEast, southEast, northWest, southWest) {
  var peninsula = new Park("Peninsula Park");
  peninsula.north = true;
  var fernhill = new Park("Fernhill Park");
  peninsula.northEast = true;
  var allParks = [peninsula, fernhill];
  var userParks = [];
  for (var i = 0; i < allParks.length; i++) {
  if (allParks[i].north === true) {
    userParks.push(allParks[i]);
    console.log(userParks);
    }
  }
}
