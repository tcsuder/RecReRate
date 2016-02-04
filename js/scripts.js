var arborLodge = new Park("Arbor Lodge", "arborLodge", "north");
var overlook = new Park("Overlook Park", "overlook", "north");
var peninsula = new Park("Peninsula Park", "peninsula", "north");
var alberta = new Park("Alberta Park", "alberta", "northEast");
var buckmanField = new Park("Buckman Field Park", "buckmanField", "northEast");
var grant = new Park("Grant Park", "grant", "northEast");
var laurelhurst = new Park("Laurelhurst Park", "laurelhurst", "southEast");
var tabor = new Park("Mt. Tabor Park", "tabor", "southEast");
var gabriel = new Park("Gabriel Park", "gabriel", "southWest");
var tryon = new Park("Tryon Creek State Park", "tryon", "southWest");
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

function preferenceMatch(parkId) {
  this.parkId = parkId;
  this.activityMatchIndices;
  this.amenityMatchIndices;
}

var returnedParkLocations = [];
var userPreferenceMatches = [];
var preferenceMatchIndices = [];

var parkCompiler = function(location) {
  for (var i = 0; i < allParks.length; i++) {
    if (location === allParks[i].parkLocation) {
      returnedParkLocations.push(allParks[i]);
    }
  }
  return returnedParkLocations;
}

var preferenceFinder = function(amenitiesAndActivities) {
  debugger;
  for (var i = returnedParkLocations.length - 1; i >= 0; i--) {
    parkMatch = new preferenceMatch(returnedParkLocations[i].parkId)
    if (returnedParkLocations[i].amenities.indexOf(amenitiesAndActivities) === -1) {
      if (returnedParkLocations[i].activities.indexOf(amenitiesAndActivities) === -1) {
        returnedParkLocations[i].exclusiveSearch = "not";
      } else if (userPreferenceMatches.indexOf(returnedParkLocations[i]) === -1) {
        userPreferenceMatches.push(returnedParkLocations[i]);
        parkMatch.activityMatchIndices = returnedParkLocations[i].activities.indexOf(amenitiesAndActivities);
        }
      } else if (userPreferenceMatches.indexOf(returnedParkLocations[i]) === -1) {
      userPreferenceMatches.push(returnedParkLocations[i]);
      parkMatch.amenityMatchIndices = returnedParkLocations[i].amenities.indexOf(amenitiesAndActivities);
      }
      preferenceMatchIndices.push(parkMatch);
      console.log(parkMatch);
    }
  return userPreferenceMatches;
}

var fullSearchResult = function(park) {
  return  "<li class='park-click' id=" + park.parkId +
          " data-toggle='modal' data-target='#" +
          park.parkId + "Modal'>" + park.parkName + "</li>" +
          "<ul id = 'preferenceMatch'></ul>"
}

function Review(name, rating, comment) {
  this.name = name;
  this.rating = rating;
  this.comment = comment;
}

Review.prototype.fullReview = function () {
  return "<p><strong>" + this.name + "</strong></p>" +
    "<p>Rating: " + this.rating + "</p>" +
    "<p>" + this.comment + "</p><hr>";
}


//User Interface Logic

$(document).ready(function() {

  // Home Page and Nav Clicks

  $("button#search-button").click(function() {
    $("#search-and-nav").slideDown();
    $("#homePage").hide();
  });

  $("button#browse-button").click(function() {
    $("#browse-and-nav").slideDown();
    $("#homePage").hide();
  });

  $("a#navbar-search").click(function() {
    $("#homePage").hide();
    $("#search").hide();
    $("#search-and-nav .navbar").hide();
    $("#search-and-nav").show();
    $("#browse-and-nav").hide();
    $("#search-and-nav .navbar").show();
    $("#search").slideDown();
  });

  $("a#navbar-browse").click(function() {
    $("#homePage").hide();
    $("#browse").hide();
    $("#browse-and-nav .navbar").hide();
    $("#browse-and-nav").show();
    $("#search-and-nav").hide();
    $("#browse-and-nav .navbar").show();
    $("#browse").slideDown();
  });

  // Search Submit

  $("form.search-form").submit(function(event) {
    event.preventDefault();
    $("ul#parkMatchesList1").empty();
    $("ul#parkMatchesList2").empty();

    // reset exclusive search function
    allParks.forEach(function(park) {
      park.exclusiveSearch = "match";
    });

    returnedParkLocations = [];
    userPreferenceMatches = [];
    preferenceMatchIndices = [];
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

    // no amenities or activities selected
    if (amenitiesAndActivities.length === 0) {
      if (returnedParkLocations.length > 10) {
        var rplFirstHalf = Math.ceil(returnedParkLocations.length / 2);
        for (var i = 0; i < rplFirstHalf; i++) {
          $("ul#parkMatchesList1").append(fullSearchResult(returnedParkLocations[i]));
        }
        for (var i = rplFirstHalf; i < returnedParkLocations.length; i++) {
          $("ul#parkMatchesList2").append(fullSearchResult(returnedParkLocations[i]));
        }
      } else {
        for (var i = 0; i < returnedParkLocations.length; i++) {

          $("ul#parkMatchesList1").append(fullSearchResult(returnedParkLocations[i]));
        }
      } // no location selected
    } else if (returnedParkLocations.length === 0) {
      allParks.forEach(function(park) {
        returnedParkLocations.push(park);
      });
      for (var i = 0; i < amenitiesAndActivities.length; i++) {
        preferenceFinder(amenitiesAndActivities[i]);
      }
      if (userPreferenceMatches.length > 10) {
        var upmFirstHalf = Math.ceil(userPreferenceMatches.length / 2);
        for (var i = 0; i < upmFirstHalf; i++) {
          $("ul#parkMatchesList1").append(fullSearchResult(returnedParkLocations[i]));
        }
        for (var i = upmFirstHalf; i < userPreferenceMatches.length; i++) {
          $("ul#parkMatchesList2").append(fullSearchResult(returnedParkLocations[i]));
        }
      } else {
        for (var i = 0; i < userPreferenceMatches.length; i++) {
          $("ul#parkMatchesList1").append(fullSearchResult(returnedParkLocations[i]));
        }
      }
      for (var i = 0; i <= userPreferenceMatches.length; i++) {

      }
       // both locations and amenities or activities selected
    } else {
        for (var i = 0; i < amenitiesAndActivities.length; i++) {
          preferenceFinder(amenitiesAndActivities[i]);
        }
        if (userPreferenceMatches.length > 10) {
          var upmFirstHalf = Math.ceil(userPreferenceMatches.length / 2);
          for (var i = 0; i < upmFirstHalf; i++) {
            $("ul#parkMatchesList1").append(fullSearchResult(returnedParkLocations[i]));
          }
          for (var i = upmFirstHalf; i < userPreferenceMatches.length; i++) {
            $("ul#parkMatchesList2").append(fullSearchResult(returnedParkLocations[i]));
          }
        } else {
          for (var i = 0; i < userPreferenceMatches.length; i++) {
            $("ul#parkMatchesList1").append(fullSearchResult(returnedParkLocations[i]));
          }
        }
      }
    // look for perfect matches, exclusiveSearch = "match"
    for (var j = returnedParkLocations.length - 1; j >= 0; j--) {
      if (returnedParkLocations[j].exclusiveSearch === "not") {
        returnedParkLocations.splice(j,1);
      }
    }
    $("#search-results").show();
  });

  $("form.form-horizontal").submit(function(event) {
    event.preventDefault();

    var userName = $("input#reviewName").val();
    var userRating = $("select#reviewRating").val();
    var userComment = $("textarea#reviewComment").val();
    var userReview = new Review (userName, userRating, userComment);
console.log((this.id));
console.log(allParks);
var reviewId = this.id;
var foundPark;
for (var i= 0; i < allParks.length; i++) {
console.log(reviewId);

  if (allParks[i].parkId === reviewId) {
    foundPark = allParks[i];
  }
  // return foundPark;


};
  foundPark.review.push(userReview);
  console.log(foundPark.review)
  console.log(userReview.fullReview())

    $("#" + reviewId + "Modal .realUserReview").prepend(userReview.fullReview());
    // $("#arborLodgeModal .realUserReview").prepend(userReview.fullReview());

    // $("input#reviewName").val("");
    // $("select#reviewRating").val("Excellent");
    // $("textarea#reviewComment").val("");

  });

});
