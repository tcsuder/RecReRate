describe('Park', function() {
  it("creates a Park object with the given specifications", function() {
    var testPark = new Park("Peninsula Park", "north");
    expect(testPark.parkName).to.equal("Peninsula Park");
    expect(testPark.amenities).to.eql([]);
    expect(testPark.reviews).to.eql([]);
    expect(testPark.allParks).to.eql([]);
    expect(testPark.parkLocation).to.equal("north");

  });


  it("will find all parks in one or more given locations", function() {
    var peninsula = new Park("Peninsula Park");
    peninsula.north = true;
    var fernhill = new Park("Fernhill Park");
    peninsula.northEast = true;
    var allParks = [peninsula, fernhill];
    expect(parkCompiler(true, true, false, false, false)).to.equal
  });
});




























describe('Review', function() {
  it("creates a new park review with the given specifications", function (){
    var testReview = new Review ("Jane", "Excellent", "Great park for kids and dogs.");
    expect(testReview.name).to.equal("Jane");
    expect(testReview.rating).to.equal("Excellent");
    expect(testReview.comment).to.be.a("string");
  });

});
