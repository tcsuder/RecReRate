var arborLodge = new Park("Arbor Lodge", "arborLodge", "north");
var overlook = new Park("Overlook Park", "overlook", "north");
var peninsula = new Park("Peninsula Park", "peninsula", "north");
var alberta = new Park("Alberta Park", "alberta", "northEast");
var buckmanField = new Park("Buckman Field Park", "buckmanField", "northEast");
var grant = new Park("Grant Park", "grant", "northEast");
var laurelhurst = new Park("Laurelhurst Park", "laurelhurst", "southEast");
var tabor = new Park("Mt. Tabor Park", "tabor", "southEast");
var gabriel = new Park("Gabriel Park", "gabriel", "southWest");
var tryon = new Park("Tryon Creek State Park", "southWest");
var forest = new Park("Forest Park", "forest", "northWest");
var jamison = new Park("Jamison Square", "jamison", "northWest");

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

grant.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "basketballCourt", "dogArea", "fountain", "paths", "playground", "soccerField", "pool"];
grant.activities = ["tennis", "baseball", "kickball", "basketball", "dogOffLeash",  "pavedPaths", "soccer", "frisbee", "ballSports", "poolSwimming"];
// SOUTHEAST
laurelhurst.amenities = ["picnic", "restroom", "tennisCourt", "basketballCourt", "horseshoePit", "dogArea", "paths", "playground", "soccerField"];
laurelhurst.activities = ["tennis", "basketball", "horseshoe", "dogOffLeash", "pavedPaths", "soccer", "frisbee", "ballSports"];

tabor.amenities = ["picnic", "restroom", "tennisCourt", "basketballCourt", "horseshoePit", "dogArea", "naturalArea", "paths", "playground"];
tabor.activities = ["tennis", "basketball", "horseshoe", "dogOffLeash", "wildlife", "hikingTrails", "pavedPaths", "frisbee"];

// SOUTHWEST
gabriel.amenities = ["picnic", "restroom", "tennisCourt", "baseballField", "basketballCourt", "dogArea", "paths", "playground", "skatepark", "soccerField"];
gabriel.activities = ["tennis", "baseball", "kickball", "basketball", "dogOffLeash",  "pavedPaths", "skateboarding", "soccer", "frisbee", "ballSports"];

tryon.amenities = ["picnic", "restroom", "naturalArea", "paths"];
tryon.activities = ["wildlife", "hikingTrails", "pavedPaths"];

// NORTHWEST
forest.amenities = ["naturalArea", "paths"];
forest.activities = ["wildlife", "hikingTrails"];

jamison.amenities = ["restroom", "fountain"];


var allParks = [arborLodge, overlook, peninsula, alberta, buckmanField, grant, laurelhurst, tabor, gabriel, tryon, forest, jamison];

function Park(parkName, parkId, parkLocation) {
  this.parkName = parkName;
  this.parkId = parkId;
  this.amenities = [];
  this.activities = [];
  this.review = [];
  this.parkLocation = parkLocation;
  this.exclusiveSearch = "match";
}

var returnedParkLocations = [];
var userPreferenceMatches = [];

var parkCompiler = function(location) {
  for (var i = 0; i < allParks.length; i++) {
    if (location === allParks[i].parkLocation) {
      returnedParkLocations.push(allParks[i]);
    }
  }
  return returnedParkLocations;
}

var preferenceFinder = function(amenitiesAndActivities) {
  for (var i = returnedParkLocations.length - 1; i >= 0; i--) {
    if (returnedParkLocations[i].amenities.indexOf(amenitiesAndActivities) === -1) {
      if (returnedParkLocations[i].activities.indexOf(amenitiesAndActivities) === -1) {
        returnedParkLocations[i].exclusiveSearch = "not";
      } else if (userPreferenceMatches.indexOf(returnedParkLocations[i]) === -1) {
        userPreferenceMatches.push(returnedParkLocations[i]);
        }
      } else if (userPreferenceMatches.indexOf(returnedParkLocations[i]) === -1) {
      userPreferenceMatches.push(returnedParkLocations[i]);
      }
    }
  return userPreferenceMatches;
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
    event.preventDefault();
    $("ul#parkMatchesList").empty();

    returnedParkLocations = [];
    userPreferenceMatches = [];
    var amenitiesAndActivities = [];
    var locations = [];

    $.each($('input[name="location"]:checked'), function() {
      locations.push($(this).val());
    });
    for (var i = 0; i < locations.length; i++) {
      parkCompiler(locations[i]);
    }
    $.each($('input[name="amenity"]:checked'), function() {
      amenitiesAndActivities.push($(this).val());
    });
    $.each($('input[name="activity"]:checked'), function() {
      amenitiesAndActivities.push($(this).val());
    });


    if (amenitiesAndActivities.length === 0) {
      for (var i = 0; i < returnedParkLocations.length; i++) {
        $("ul#parkMatchesList").append("<li class='park-click' id=" + returnedParkLocations[i].parkId + " data-toggle='modal' data-target='#" + returnedParkLocations[i].parkId + "Modal'>" + returnedParkLocations[i].parkName + "</li>");
      }
    } else if (returnedParkLocations.length === 0) {
      returnedParkLocations = allParks;
      for (var i = 0; i < amenitiesAndActivities.length; i++) {
        preferenceFinder(amenitiesAndActivities[i]);
      }
      for (var i = 0; i < userPreferenceMatches.length; i++) {
        $("ul#parkMatchesList").append( "<li class='park-click' id=" +
                                        userPreferenceMatches[i].parkId +
                                        " data-toggle='modal' data-target='#" +
                                        userPreferenceMatches[i].parkId + "Modal'>" + userPreferenceMatches[i].parkName + "</li>");
      }
    } else {
      for (var i = 0; i < amenitiesAndActivities.length; i++) {
        preferenceFinder(amenitiesAndActivities[i]);
      }
      for (var i = 0; i < userPreferenceMatches.length; i++) {
        $("ul#parkMatchesList").append( "<li class='park-click' id=" +
                                        userPreferenceMatches[i].parkId +
                                        " data-toggle='modal' data-target='#" +
                                        userPreferenceMatches[i].parkId + "Modal'>" + userPreferenceMatches[i].parkName + "</li>");
      }
    }
    // look for perfect matches, exclusiveSearch = "match"
    for (var j = returnedParkLocations.length - 1; j >= 0; j--) {
      if (returnedParkLocations[j].exclusiveSearch === "not") {
        returnedParkLocations.splice(j,1);
      }
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
