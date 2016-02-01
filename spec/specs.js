describe('Park', function() {
  it("creates a Park object with the given specifications", function() {
    var testPark = new Park("Peninsula Park");
    expect(testPark.parkName).to.equal("Peninsula Park");
    expect(testPark.amenities).to.eql([]);
    expect(testPark.reviews).to.eql([]);
    expect(testPark.north).to.equal(false);
    expect(testPark.northEast).to.equal(false);
    expect(testPark.southEast).to.equal(false);
    expect(testPark.northWest).to.equal(false);
    expect(testPark.southWest).to.equal(false);
  });
});
