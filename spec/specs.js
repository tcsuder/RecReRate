describe('Park', function() {
  it("creates a Park object with the given specifications", function() {
    var testPark = new Park("Peninsula Park", "north");
    expect(testPark.parkName).to.equal("Peninsula Park");
    expect(testPark.amenities).to.eql([]);
    expect(testPark.allParks).to.eql([]);
    expect(testPark.parkLocation).to.equal("north");

  });

  it("will find all parks in one or more given locations", function() {
    expect(parkCompiler("north")).to.eql([arborLodge, overlook, peninsula])
  });

  it("will remove parks that don't have amentities and activities chosen by user", function() {
    expect(amenitiesFinder("tennisCourt")).to.eql([arborLodge, peninsula])
  });
});
