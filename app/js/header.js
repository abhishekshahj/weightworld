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
  var headerHeight = $(".topHeader").outerHeight();
  $(".search-wrapper").css("padding-top", topBeltHeight + "px");
  $(".search-container").css("height", headerHeight + "px");
  $(
    ".navbar form input,.navbar form .searchIcon,.navbar-mobi-header .searchIcon"
  ).click(function () {
    $("body").addClass("overflow-hidden");
    $(".background-overlay").addClass("active");
    $(this).addClass("active");
    setTimeout(function () {
      $(".navbar form input").addClass("display-none");
      $(".navbar form span.searchIcon").addClass("display-none");
    }, 50);
    $(".search-wrapper").animate({
      width: "show",
    });
  });

  $(".search-slide-cross").click(function () {
    $("body").removeClass("overflow-hidden");
    $(".background-overlay").removeClass("active");
    setTimeout(function () {
      $(".navbar form input").removeClass("display-none");
      $(".navbar form span.searchIcon").removeClass("display-none");
    }, 100);
    $(
      ".navbar form input,.navbar form .searchIcon,.navbar-mobi-header .searchIcon"
    ).removeClass("active");
    $(".search-wrapper").animate({
      width: "toggle",
    });
  });

  // Search Wrapper Ends

  // Show/Hide Navigation Starts

  (function ($) {
    /**
     * Hide top navigation on scroll down
     */
    var pageScroll = function (e) {
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $(".topHeader").outerHeight();

      $(window).scroll(function (e) {
        didScroll = true;
      });

      setInterval(function () {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      });

      function hasScrolled() {
        var st = $(this).scrollTop();
        var navbarHeight = $(".topHeader").outerHeight();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) return;

        // If they scrolled down and are past the navbar, add class .topHeader
        // This is necessary so you never see what is "behind" the navbar
        if (st > lastScrollTop && st > navbarHeight) {
          // Scroll down
          var headerOuterHeight = $(".topHeader").outerHeight();
          $(".topHeader").removeClass("nav-down").addClass("nav-up");
          $(".topHeader.nav-up").css("top", "-" + headerOuterHeight + "px");
        } else {
          // Scroll up
          if (st + $(window).height() < $(document).height()) {
            $(".topHeader").removeClass("nav-up").addClass("nav-down");
            $(".nav-down").css("top", "-1px");
          }
        }

        lastScrollTop = st;
      }
    };

    // Call the created function
    pageScroll();
  })(jQuery);
  // $(window).resize(function () {
  //   var headerOuterHeight = $(".navbar").outerHeight();
  //   $(".topHeader.nav-up").css("top", "-" + headerOuterHeight + "px");
  // });

  // Show/Hide Navigation Ends
});
