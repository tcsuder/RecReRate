var arborLodge = new Park("Arbor Lodge", "north");
var overlook = new Park("Overlook Park", "north");
var peninsula = new Park("Peninsula Park", "north");
var alberta = new Park("Alberta Park", "northEast");
var buckmanField = new Park("Buckman Field Park", "northEast");
var grant = new Park("Grant Park", "northEast");
var laurelhurst = new Park("Laurelhurst Park", "southEast");
var tabor = new Park("Mt. Tabor Park", "southEast");
var gabriel = new Park("Gabriel Park", "southWest");
var tryon = new Park("Tryon Creek State Park", "southWest");
var forest = new Park("Forest Park", "northWest");
var jamison = new Park("Jamison Square", "northWest");

var allParks = [arborLodge, overlook, peninsula, alberta, buckmanField, grant, laurelhurst, tabor, gabriel, tryon, forest, jamison];

// NORTH
allParks.arborLodge.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "horseshoePit", "dogArea", "paths", "playground", "soccerField"];
allParks.arborLodge.activities = ["tennis", "baseball", "kickball", "horseshoe", "dogOffLeash", "pavedPaths", "soccer", "frisbee", "ballSports"];

allParks.overlook.amenities = ["picnic", "restroom", "baseballField", "basketballCourt", "dogArea", "paths", "playground", "soccerField"];
allParks.overlook.activities = ["baseball", "kickball", "basketball", "dogOffLeash", "pavedPaths", "soccer", "frisbee", "ballSports"]

allParks.peninsula.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "basketballCourt", "horseshoePit", "fountain", "paths", "playground", "soccerField", "pool"];
allParks.peninsula.activities = ["tennis", "baseball", "kickball", "basketball", "horseshoe", "pavedPaths", "soccer", "frisbee", "ballSports", "poolSwimming"];
// NORTHEAST
allParks.alberta.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "basketballCourt", "dogArea", "paths", "playground", "soccerField"];
allParks.alberta.activities = ["tennis", "baseball", "kickball", "basketball", "dogOffLeash", "pavedPaths", "soccer", "frisbee", "ballSports"];

allParks.buckmanField.amenities = ["picnic", "baseballField", "playground", "soccerField"];
allParks.buckmanField.activities = ["baseball", "kickball", "soccer", "frisbee", "ballSports"];

allParks.grant.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "basketballCourt", "dogArea", "fountain", "naturalArea", "paths", "playground", "skatepark", "pool"];
allParks.grant.activities = ["tennis", "baseball", "kickball", "basketball", "dogOffLeash", "fountain", "pavedPaths", "skateboarding", "poolSwimming"];
// SOUTHEAST
allParks.laurelhurst.amenities = ["picnic", "restroom", "tennisCourt", "basketballCourt", "horseshoePit", "dogArea", "paths", "playground", "soccerField"];
allParks.laurelhurst.activities = ["tennis", "basketball", "horseshoe", "dogOffLeash", "pavedPaths", "soccer", "frisbee", "ballSports"];

allParks.tabor.amenities = ["picnic", "restroom", "tennisCourt", "basketballCourt", "horseshoePit", "dogArea", "naturalArea", "paths", "playground"];
allParks.tabor.activities = ["tennis", "basketball", "horseshoe", "dogOffLeash", "wildlife", "hikingTrails", "pavedPaths"];

// SOUTHWEST
allParks.gabriel.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "basketballCourt", "dogArea", "paths", "playground", "skatepark", "soccerField"];
allParks.gabriel.activities = ["tennis", "baseball", "kickball", "basketball", "fountain", "pavedPaths", "skateboarding", "soccer", "frisbee", "ballSports"];

allParks.tryon.amenities = ["picnic", "restroom", "naturalArea", "paths"];
allParks.tryon.activities = ["wildlife", "hikingTrails", "pavedPaths"];

// NORTHWEST
allParks.forest.amenities = ["restroom", "naturalArea", "paths"];
allParks.forest.activities = ["wildlife", "hikingTrails"];

allParks.jamison.amenities = ["restroom", "fountain"];
allParks.jamison.activities = ["fountain"];




function Park(parkName, parkLocation) {
  this.parkName = parkName;
  this.amenities = [];
  this.allParks = [];
  this.parkLocation = parkLocation;
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








































function Review(name, rating, comment) {
  this.name = name;
  this.rating = rating;
  this.comment = comment;
}


//User Interface Logic

$(document).ready(function() {
  $("form.form-horizontal").submit(function(event) {
    var userName = $("input#reviewName").val();
    var userRating = $("select#reviewRating").val();
    var userComment = $("textarea#reviewComment").val();
  

    $("div.realUserReivew").show();
      $(".realUserName").text(userName);
      $(".realUserRating").text(userRating);
      $(".realUserComment").text(userComment);

    event.preventDefault();
  });
});
