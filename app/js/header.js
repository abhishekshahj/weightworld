$(document).ready(function () {
  // Cart Icon Starts
  $(".cartIcon").click(function () {
    $("body").addClass("overflow-hidden");
    $(".background-overlay").addClass("active");
    $(".cart-slide").animate({
      width: "toggle",
    });
  });

  $(".cart-slide-cross").click(function () {
    $("body").removeClass("overflow-hidden");
    $(".background-overlay").removeClass("active");
    $(".cart-slide").animate({
      width: "toggle",
    });
  });
  //   Cart Icon Ends

  // Search Wrapper Starts
  var topBeltHeight = $(".topBelt").outerHeight();
  var headerHeight = $(".navbar").outerHeight();
  $(".search-wrapper").css("padding-top", topBeltHeight + "px");
  $(".search-container").css("height", headerHeight + "px");
  $(
    ".navbar form input,.navbar form .searchIcon,.navbar-mobi-header .searchIcon"
  ).click(function () {
    $("body").addClass("overflow-hidden");
    $(".background-overlay").addClass("active");
    $(this).addClass("active");
    $(".search-wrapper").animate({
      width: "show",
    });
  });

  $(".search-slide-cross").click(function () {
    $("body").removeClass("overflow-hidden");
    $(".background-overlay").removeClass("active");
    $(
      ".navbar form input,.navbar form .searchIcon,.navbar-mobi-header .searchIcon"
    ).removeClass("active");
    $(".search-wrapper").animate({
      width: "toggle",
    });
  });

  // Search Wrapper Ends
});
