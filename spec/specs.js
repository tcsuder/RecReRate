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

// describe('Location', function() {
//   it("creates a location object with the given specifications", function() {
//     var testLocation = new Location("NE");
//     testPark.north = true;
//     expect(testPark.parkName).to.equal("Peninsula Park");
//     expect(testPark.amenities).to.eql([]);
//     expect(testPark.reviews).to.eql([]);
//     expect(testPark.allParks).to.eql([]);
//     expect(testPark.north).to.equal(true);
//     expect(testPark.northEast).to.equal(false);
//     expect(testPark.southEast).to.equal(false);
//     expect(testPark.northWest).to.equal(false);
//     expect(testPark.southWest).to.equal(false);
//   });
