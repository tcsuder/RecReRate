describe('Park', function() {
  it("creates a Park object with the given specifications", function() {
    var testPark = new Park("Peninsula Park", "N");
    expect(testPark.parkName).to.equal("Peninsula Park");
    expect(testPark.parkLocation).to.equal("N");
  });

})
