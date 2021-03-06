$(document).ready(function () {
  // OnScroll Animation Starts
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  // OnScroll Animation Ends
  // Best Seller Mobile Slider Starts

  $(".best-seller-mobile-slider").slick({
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
  });

  // $(window).resize(function () {
  //   if ($(window).width() < 767) {
  //     $(".best-seller-mobile-slider").slick({
  //       variableWidth: true,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       infinite: false,
  //       arrows: false,
  //     });
  //   } else {
  //     $(".best-seller-mobile-slider").slick("unslick");
  //   }
  // });

  // Best Seller Mobile Slider Ends

  // Best Seller Leaf Effect Starts

  $(window).resize(function () {
    if ($(window).width() > 767) {
      $(function () {
        var scene = document.getElementById("best-seller-leaf");
        var leaf = document.getElementById("subscribe-wrap");
        var parallaxInstance = new Parallax(scene, {
          relativeInput: true,
        });
        var leafParallaxInstance = new Parallax(leaf, {
          relativeInput: true,
        });
      });
    }
  });
  // Best Seller Leaf Effect Ends

  // Best Seller Slider Starts
  if ($(".bestSellerSliderContainer").length) {
    $(".bestSellerSlider").each(function () {
      if ($(this).find(".bestSellerSliderInnerContainer").length > 2) {
        var modIDBestSeller = $(this).attr("id");
        var slickElement2 = $(
          "#" + modIDBestSeller + " .bestSellerSliderContainer"
        ).not(".slick-initialized");
        var modThisEle = $(this);

        slickElement2.on("init", function (event, slick) {
          var slickDots = $(".slick-dots li");
          slickDots.each(function (k, v) {
            $(this)
              .find("button")
              .addClass("heading" + k);
          });
          var items = slick.$slides;
          items.each(function (k, v) {
            var text = $(this).find("h2 .bestSellerTag").text();
            $(".heading" + k).text(text);
          });
        });

        slickElement2.slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          focusOnSelect: true,
          // fade: true,
          // speed: 2000,
          dots: true,
          appendDots: $(".customSlickDots"),
        });

        (colorSettings = {
          section: ["#84ac89", "#beb068", "#b068be", "#6876be"],
        }),
          (changeColors = function (slide) {
            $(".bestSeller").css({
              backgroundColor: colorSettings.section[slide],
            });
          });

        // Initial call to set color
        changeColors(0);

        $(".bestSellerSliderContainer").on(
          "beforeChange",
          function (event, slick, currentSlide, nextSlide) {
            changeColors(nextSlide);
          }
        );
      }
    });
  }

  // $(".customSlickDots ul li.slick-active button").attr("data-val",val);
  // Best Seller Slider Ends

  // Banner Slider Starts
  $(".bSliderContainer").slick({
    variableWidth: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    focusOnSelect: true,
    dots: true,
  });
  // Banner Slider Ends

  // Banner Slider Full Height Starts
  var topBelt = $(".topBelt").outerHeight();
  var topHeader = $(".topHeader").outerHeight();
  var totalHeight = topBelt + topHeader;

  if ($(window).width() > 767 && $(window).width() < 1024) {
    $(".bSlider .bSliderImageWrapper").css(
      "min-height",
      "calc(47vh - " + totalHeight + "px)"
    );
  } else {
    $(".bSlider .bSliderImageWrapper").css(
      "min-height",
      "calc(100vh - " + totalHeight + "px)"
    );
  }

  $(window).resize(function () {
    var topBelt = $(".topBelt").outerHeight();
    var topHeader = $(".topHeader").outerHeight();
    var totalHeight = topBelt + topHeader;

    if ($(window).width() > 767 && $(window).width() < 1024) {
      $(".bSlider .bSliderImageWrapper").css(
        "min-height",
        "calc(47vh - " + totalHeight + "px)"
      );
    } else {
      $(".bSlider .bSliderImageWrapper").css(
        "min-height",
        "calc(100vh - " + totalHeight + "px)"
      );
    }
  });
  // Banner Slider Full Height Ends

  // New Arrivals Slider Starts

  $(".carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        },
      },
    ],
  });

  // New Arrivals Slider Ends

  // Shop By Range Slider Starts

  // $('.rangeSliderCarousel').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   infinite: false
  // });

  $(".rangeSliderCarousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        },
      },
    ],
  });

  // Shop By Range Slider Ends

  // Customer Image Slider Starts

  $(".customerImageSliderCarousel").slick({
    variableWidth: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 10000,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        },
      },
    ],
  });

  // Customer Image Slider Ends

  // Customer Review Slider Starts
  $(".customerReviewSlider").slick({
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
        },
      },
    ],
  });
  // Customer Review Slider Ends

  // Customer Review Height Starts
  var reviewLeftSection = $(".customerReviewLeftSection").outerHeight();
  $(".customerReview").css("height", reviewLeftSection + "px");
  $(window).resize(function () {
    var reviewLeftSection = $(".customerReviewLeftSection").outerHeight();
    $(".customerReview").css("height", reviewLeftSection + "px");
  });

  // Customer Review Height Ends

  // Supplements You Can Trust Starts
  if ($(window).width() < 1024) {
    var marginDivideTwo = reviewLeftSection / 2;
    $(".suppYouCanTrust").css("margin-top", marginDivideTwo + "px");
  }
  $(window).resize(function () {
    if ($(window).width() < 1024) {
      var marginDivideTwo = reviewLeftSection / 2;
      $(".suppYouCanTrust").css("margin-top", marginDivideTwo + "px");
    }
  });
  // Supplements You Can Trust Ends

  // Latest Artical Slider Starts
  $(".latestArticalCarousel").slick({
    variableWidth: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  });
  // Latest Artical Slider Ends

  // Equal Height Plugin Starts

  $(".sliderImageTitle").sameHeight();

  // Equal Height Plugin Starts

  // Supp Mobile Slider Starts

  $(".suppMobiSlider").slick({
    variableWidth: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });

  // Supp Mobile Slider Starts
});
