describe("FluidImageGrid", function() {
  beforeEach(function() {
    // TODO - put this in a fixture
    $grid = $("<div class='fluid-image-grid'><div class='fluid-image-grid-inner'></div></div>");
    $grid.appendTo("body");
  });

  describe("#init", function() {
    it("does not raise any errors", function() {
      window.FluidImageGrid.init();
    });
  });
});
