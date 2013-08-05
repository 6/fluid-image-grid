describe("FluidImageGrid", function() {
  beforeEach(function() {
    // TODO - put this in a fixture
    $grid = $("<div class='fluid-image-grid'><div class='fluid-image-grid-inner'></div></div>");
    $grid.appendTo("body");

    window.FluidImageGrid.init();
  });

  context("on window resize", function() {
    it("does not raise any errors", function() {
      $(window).trigger("resize");
    });
  });

  context("on scroll", function() {
    it("does not raise any errors", function() {
      $(window).trigger("scroll");
    });
  });
});
