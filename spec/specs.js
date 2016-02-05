describe('Park', function() {
  it("creates a Park object with the given specifications", function() {
    var testPark = new Park("Peninsula Park", "peninsula", "north");
    expect(testPark.parkName).to.equal("Peninsula Park");
    expect(testPark.parkId).to.equal("peninsula");
    expect(testPark.amenities).to.eql([]);
    expect(testPark.activities).to.eql([]);
    expect(testPark.review).to.eql([]);
    expect(testPark.parkLocation).to.equal("north");
    expect(testPark.exclusiveSearch).to.equal("match");
  });

  it("will find all parks in one or more given locations", function() {
    expect(parkCompiler("north")).to.eql([arborLodge, overlook, cathedral, kelleyPoint, pier, peninsula])
  });

  it("will add parks that have amenities chosen by user and remove parks that don't", function() {
    expect(preferenceFinder("pool")).to.eql([peninsula, pier])
  });

  it("will remove parks that don't have activities chose by the user", function() {
    expect(activitiesFinder("tennis")).to.eql([arborLodge, peninsula])
  });
});

describe('Review', function() {
  it("creates a new park review with the given specifications", function() {
    var testReview = new Review ("Jane", "Excellent", "Great park for kids and dogs.");
    expect(testReview.name).to.equal("Jane");
    expect(testReview.rating).to.equal("Excellent");
    expect(testReview.comment).to.be.a("string");
  });

  it("creates the fullReview method to combine and style inputs from the user's review", function() {
    var testReview = new Review ("Jane", "Excellent", "Great park for kids and dogs.");
    expect(testReview.fullReview()).to.equal("<p><strong>Jane</strong></p><p>Rating: Excellent</p><p>Great park for kids and dogs.</p><hr>");
  });
});
