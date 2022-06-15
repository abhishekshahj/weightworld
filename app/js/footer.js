$(document).ready(function () {
  // Footer Carousel Starts

  if ($(window).width() < 768) {
    $(".footer-top-mobi_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
    });
  }
  // else {
  //   $(".footer-top-mobi_slider").slick("unslick");
  // }

  $(window).resize(function () {
    if ($(window).width() < 768) {
      $(".footer-top-mobi_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
      });
    } else {
      $(".footer-top-mobi_slider").slick("unslick");
    }
  });

  // footer-top-mobi_slider

  // if ($(window).width() < 768 && $(window).width() > 320) {
  //   $(".footer-top-mobi_slider").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     infinite: false,
  //     arrows: false,
  //   });
  // } else {
  //   $(".footer-top-mobi_slider").slick("unslick");
  // }

  // $(window).resize(function () {
  //   if ($(window).width() < 768 && $(window).width() > 320) {
  //     $(".footer-top-mobi_slider").slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       infinite: false,
  //       arrows: false,
  //     });
  //   } else {
  //     $(".footer-top-mobi_slider").slick("unslick");
  //   }
  // });

  // Footer Carousel Ends

  // Footer Links OnClick Menu Open Starts
  function onClickSearchClose() {
    $(".search-close").on("click", function () {
      $("#searchbox").removeClass("show");
      $("#searchbox").addClass("hide");
    });
  }
  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      onClickSearchClose();
    }
  });

  $(".search-close").on("click", function () {
    $("#searchbox").removeClass("show");
    $("#searchbox").addClass("hide");
  });

  var headerHeight = $(".navbar").outerHeight();
  $("#searchbox").css("height", headerHeight + "px");

  $(window).resize(function () {
    var headerHeight = $(".navbar").outerHeight();
    $("#searchbox").css("height", headerHeight + "px");
  });

  $("body").click(function (e) {
    if (
      $(e.target).parents("#countryCombo").length ||
      e.target.id == "countryCombo"
    ) {
      $(".countyList").slideToggle();
      $(".sel-lang").toggleClass("open");
    } else {
      $(".countyList").slideUp();
      $(".sel-lang").removeClass("open");
    }
  });

  $("#all_county_list li").click(function () {
    var selectedId = $(this).attr("id");
    // console.log(selectedId);
    if (selectedId != "re_en") {
      $("#re_en").css("display", "block");
    } else {
      $("#re_en").css("display", "none");
    }
    var selectedVal = $(this).html();
    if (selectedVal != "") {
      /* $('#countryCombo_change').css("display", "block");
      $('#countryCombo').css("display", "none");*/
      $("#countryCombo").html(selectedVal);
    }
  });

  if ($(window).width() < 767) {
    var selector = ".footer-middle_menuWrap";
    $(selector).click(function (e) {
      if ($(this).hasClass("active")) {
        $(selector).removeClass("active");
        $(this).removeClass("active");
      } else {
        $(selector).removeClass("active");
        $(this).addClass("active");
      }
    });

    var socialMedia = $(".footer-middle_socialList");

    $(socialMedia).remove();

    $(".mobilesocialMedia").html(socialMedia);

    // console.log(socialMedia);
  }

  $(window).resize(function () {
    if ($(window).width() < 767) {
      var selector = ".footer-middle_menuWrap";
      $(selector).click(function (e) {
        if ($(this).hasClass("active")) {
          $(selector).removeClass("active");
          $(this).removeClass("active");
        } else {
          $(selector).removeClass("active");
          $(this).addClass("active");
        }
      });

      var socialMedia = $(".footer-middle_socialList");

      $(socialMedia).remove();

      $(".mobilesocialMedia").html(socialMedia);
    }
  });

  // Footer Links OnClick Menu Open Starts
});
