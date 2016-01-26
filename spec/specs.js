describe("Tickulator", function() {
  it("collects information from a form and makes it into an object", function() {
    var testSale = new Tickulator("secondRun", "matinae", 1976);
    expect(testSale.movieType).to.equal("secondRun");
    expect(testSale.movieTime).to.equal("matinae");
    expect(testSale.yearBorn).to.equal(1976);
  });

  it("will determine if it's regular or second run, and set price accordingly", function() {
    var testSale = new Tickulator("secondRun", "matinae", 1976);
    expect(testSale.price()).to.equal(6);
  });

  it("will determine what times, and set price accordingly", function() {
    var testSale = new Tickulator("firstRun", "matinae", 1976);
    expect(testSale.price()).to.equal(8);
  });

  it("will determine if movie-goer is a senior citizen, and set price accordingly", function() {
    var testSale = new Tickulator("firstRun", "regular", 1970);
    expect(testSale.price()).to.equal(12);
  });
});
