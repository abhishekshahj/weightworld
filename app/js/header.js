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

  // Click in Background Overlay to close slide starts
  $(".background-overlay").mouseup(function (e) {
    var cartSlide = $(".cart-slide");
    var searchSlide = $(".search-wrapper");
    var burgerMenu = $(".burger");

    if (e.target.id != cartSlide) {
      $("body").removeClass("overflow-hidden");
      $(".background-overlay").removeClass("active");
      cartSlide.animate({
        width: "hide",
      });
    }

    if (e.target.id != searchSlide) {
      $("body").removeClass("overflow-hidden");
      $(".background-overlay").removeClass("active");
      $(".navbar form input").removeClass("active");
      searchSlide.animate({
        width: "hide",
      });
    }

    if (e.target.id != burgerMenu) {
      $("body").removeClass("overflow-hidden");
      $(".background-overlay").removeClass("active");
      $(".navbar-collapse").removeClass("show");
      $(".burger").removeClass("active");
      $(".topBelt").removeClass("position-rel");
      $(".topBelt").removeClass("higher-z-index");
      $(".topHeader").removeClass("higher-z-index");
    }
  });
  // Click in Background Overlay to close slide ends

  // Search Wrapper Starts
  var topBeltHeight = $(".topBelt").outerHeight();
  var headerHeight = $(".topHeader").outerHeight();
  var headerTotalHeight = topBeltHeight + headerHeight;
  $(".search-wrapper").css("padding-top", topBeltHeight + "px");
  $(".search-container").css("height", headerHeight + "px");

  // Height of Mobile Navbar Starts

  $(".burger").click(function () {
    $(this).toggleClass("active");
    $("body").toggleClass("overflow-hidden");
    $(".background-overlay").toggleClass("active");
    $(".topHeader").toggleClass("higher-z-index");
    $(".topBelt").toggleClass("position-rel");
    $(".topBelt").toggleClass("higher-z-index");
  });

  $(".navbar-collapse").css("top", headerTotalHeight + "px");

  $(window).resize(function () {
    var headerTotalHeight =
      $(".topBelt").outerHeight() + $(".topHeader").outerHeight();
    $(".navbar-collapse").css("top", headerTotalHeight + "px");
  });
  // Height of Mobile Navbar Starts

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

            //
            var headerHeight = $(".topHeader").outerHeight();
            var headerTotalHeight = headerHeight;
            $(".navbar-collapse").css("top", headerTotalHeight + "px");
            $(window).resize(function () {
              var headerHeight = $(".topHeader").outerHeight();
              var headerTotalHeight = headerHeight;
              $(".navbar-collapse").css("top", headerTotalHeight + "px");
            });
            //

            $(".nav-down").css("top", "-1px");
          }
        }

        lastScrollTop = st;
      }

      // Detect page is fully scrolled up starts
      window.onscroll = function () {
        var B = document.body; //IE 'quirks'
        var D = document.documentElement; //IE with doctype
        D = D.clientHeight ? D : B;

        if (D.scrollTop == 0) {
          var headerTotalHeight =
            $(".topBelt").outerHeight() + $(".topHeader").outerHeight();
          $(".navbar-collapse").css("top", headerTotalHeight + "px");
          $(window).resize(function () {
            var headerTotalHeight =
              $(".topBelt").outerHeight() + $(".topHeader").outerHeight();
            $(".navbar-collapse").css("top", headerTotalHeight + "px");
          });

          $(".topHeader").removeClass("nav-down");
        }
      };
      // Detect page is fully scrolled up ends
    };

    // Call the created function
    pageScroll();
  })(jQuery);

  // $(window).resize(function () {
  //   var headerOuterHeight = $(".navbar").outerHeight();
  //   $(".topHeader.nav-up").css("top", "-" + headerOuterHeight + "px");
  // });

  // Show/Hide Navigation Ends

  // Burger Menu Starts
  var burgers = document.querySelectorAll(".burger");
  for (let i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener("click", function () {
      this.classList.remove("animate");

      var bars = this.querySelectorAll(".burger__bar");
      for (let i = 0; i < bars.length; i++) {
        // Reset span animations - https://css-tricks.com/restart-css-animation/
        void bars[i].offsetWidth;
      }

      if (this.classList.contains("open")) {
        this.classList.remove("open");
        this.classList.add("close");
        this.setAttribute("aria-expanded", "false");
      } else {
        this.classList.remove("close");
        this.classList.add("open");
        this.setAttribute("aria-expanded", "true");
      }
      this.classList.add("animate");
    });
  }
  // Burger Menu ends
});
