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
  this.activities = [];
  this.review = [];
  this.parkLocation = parkLocation;
}

returnedParkLocations = [];
userPreferenceMatches = [];

var parkCompiler = function(location) {
  for (var i = 0; i < allParks.length; i++) {
    if (location === allParks[i].parkLocation) {
      returnedParkLocations.push(allParks[i]);
    }
  }
  return returnedParkLocations;
}

var amenitiesFinder = function(amenity) {
  for (var i = returnedParkLocations.length - 1; i >= 0; i--) {
    if (returnedParkLocations[i].amenities.indexOf(amenity) === -1) {
      returnedParkLocations.splice(i, 1);
    } else {
      if (userPreferenceMatches.indexOf(returnedParkLocations[i]) === -1) {
      userPreferenceMatches.push(returnedParkLocations[i]);
      }
    }
  }
  return userPreferenceMatches;
}

var activitiesFinder = function(activity) {
  for (var i = returnedParkLocations.length - 1; i >= 0 ; i--) {
    if (returnedParkLocations[i].activities.indexOf(activity) === -1) {
      returnedParkLocations.splice(i, 1);
    } else {
      if (userPreferenceMatches.indexOf(returnedParkLocations[i]) === -1) {
      userPreferenceMatches.push(returnedParkLocations[i]);
      }
    }
  }
  return returnedParkLocations;
}

function Review(name, rating, comment) {
  this.name = name;
  this.rating = rating;
  this.comment = comment;
}

Review.prototype.fullReview = function () {
  return "<p><strong>" + this.name + "</strong></p>" +
    "<p>Rating:" + this.rating + "</p>" +
    "<p>" + this.comment + "</p>";
}


//User Interface Logic

$(document).ready(function() {

  // Home Page Clicks

  $("button#search-button").click(function() {
      $("#search").slideDown();
      $("#homePage").hide();
  });

  $("button#browse-button").click(function() {
    $("#browse").slideDown();
    $("#homePage").hide();
  });

  // Search Submit

  $("form.search-form").submit(function(event) {
    event.preventDefault;

    var amenities = [];
    var activities = [];
    var locations = [];

    $.each($('input[name="location"]:checked'), function() {
      locations.push($(this).val());
    });
    for (var i = 0; i < locations.length; i++) {
      parkCompiler(locations[i]);
    }

    $.each($('input[name="amenity"]:checked'), function() {
      amenities.push($(this).val());
    });
    for (var i = 0; i < amenities.length; i++) {
      amenitiesFinder(amenities[i]);
    }

    $.each($('input[name="activity"]:checked'), function() {
      activities.push($(this).val());
    });
    for (var i = 0; i < activities.length; i++) {
      activitiesFinder(activities[i]);
    }
  });

  $("form.form-horizontal").submit(function(event) {
    event.preventDefault();

    var userName = $("input#reviewName").val();
    var userRating = $("select#reviewRating").val();
    var userComment = $("textarea#reviewComment").val();
    var userReview = new Review (userName, userRating, userComment);


    $("input#reviewName").val("");
    $("select#reviewRating").val("");
    $("textarea#reviewComment").val("");

  });

});
