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

// NORTH
arborLodge.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "horseshoePit", "dogArea", "paths", "playground", "soccerField"];
arborLodge.activities = ["tennis", "baseball", "kickball", "horseshoe", "dogOffLeash", "pavedPaths", "soccer", "frisbee", "ballSports"];

overlook.amenities = ["picnic", "restroom", "baseballField", "basketballCourt", "dogArea", "paths", "playground", "soccerField"];
overlook.activities = ["baseball", "kickball", "basketball", "dogOffLeash", "pavedPaths", "soccer", "frisbee", "ballSports"]

peninsula.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "basketballCourt", "horseshoePit", "fountain", "paths", "playground", "soccerField", "pool"];
peninsula.activities = ["tennis", "baseball", "kickball", "basketball", "horseshoe", "pavedPaths", "soccer", "frisbee", "ballSports", "poolSwimming"];

// NORTHEAST
alberta.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "basketballCourt", "dogArea", "paths", "playground", "soccerField"];
alberta.activities = ["tennis", "baseball", "kickball", "basketball", "dogOffLeash", "pavedPaths", "soccer", "frisbee", "ballSports"];

buckmanField.amenities = ["picnic", "baseballField", "playground", "soccerField"];
buckmanField.activities = ["baseball", "kickball", "soccer", "frisbee", "ballSports"];

grant.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "basketballCourt", "dogArea", "fountain", "naturalArea", "paths", "playground", "skatepark", "pool"];
grant.activities = ["tennis", "baseball", "kickball", "basketball", "dogOffLeash", "fountain", "pavedPaths", "skateboarding", "poolSwimming"];
// SOUTHEAST
laurelhurst.amenities = ["picnic", "restroom", "tennisCourt", "basketballCourt", "horseshoePit", "dogArea", "paths", "playground", "soccerField"];
laurelhurst.activities = ["tennis", "basketball", "horseshoe", "dogOffLeash", "pavedPaths", "soccer", "frisbee", "ballSports"];

tabor.amenities = ["picnic", "restroom", "tennisCourt", "basketballCourt", "horseshoePit", "dogArea", "naturalArea", "paths", "playground"];
tabor.activities = ["tennis", "basketball", "horseshoe", "dogOffLeash", "wildlife", "hikingTrails", "pavedPaths"];

// SOUTHWEST
gabriel.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "basketballCourt", "dogArea", "paths", "playground", "skatepark", "soccerField"];
gabriel.activities = ["tennis", "baseball", "kickball", "basketball", "fountain", "pavedPaths", "skateboarding", "soccer", "frisbee", "ballSports"];

tryon.amenities = ["picnic", "restroom", "naturalArea", "paths"];
tryon.activities = ["wildlife", "hikingTrails", "pavedPaths"];

// NORTHWEST
forest.amenities = ["restroom", "naturalArea", "paths"];
forest.activities = ["wildlife", "hikingTrails"];

jamison.amenities = ["restroom", "fountain"];
jamison.activities = ["fountain"];

var allParks = [arborLodge, overlook, peninsula, alberta, buckmanField, grant, laurelhurst, tabor, gabriel, tryon, forest, jamison];

function Park(parkName, parkLocation) {
  this.parkName = parkName;
  this.amenities = [];
  this.review = [];
  this.parkLocation = parkLocation;
}

userChosenParks = [];

var parkCompiler = function(location) {
  for (var i = 0; i < allParks.length; i++) {
    if (location === allParks[i].parkLocation) {
      userChosenParks.push(allParks[i]);
    }
  }
  return userChosenParks;
}

var amenitiesFinder = function(amenity) {
  for (var i = userChosenParks.length - 1; i >=0 ; i--) {
    if (userChosenParks[i].amenities.indexOf(amenity) === -1) {
      userChosenParks.splice(i, 1);
    }
  }
  return userChosenParks;
}

var activitiesFinder = function(activity) {
  for (var i = userChosenParks.length - 1; i >=0 ; i--) {
    if (userChosenParks[i].activities.indexOf(activity) === -1) {
      userChosenParks.splice(i, 1);
    }
  }
  return userChosenParks;
}




















$(document).ready(function() {

  $(".park-click").each(function(index) {
    $(this).on("click", function () {

    });
  });






































});
