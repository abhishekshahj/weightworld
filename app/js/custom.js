$(document).ready(function(){

  // Best Seller Slider Starts
  if ($('.bestSellerSliderContainer').length) {
    $('.bestSellerSlider').each(function() {
      if($(this).find('.bestSellerSliderInnerContainer').length > 2){
        var modIDBestSeller = $(this).attr('id');
        var slickElement2 = $('#' + modIDBestSeller + ' .bestSellerSliderContainer').not('.slick-initialized');
        var modThisEle = $(this);
        
        slickElement2.on('init', function(event, slick){
          var slickDots = $( '.slick-dots li' );
          slickDots.each( function( k, v){
            $(this).find( 'button' ).addClass( 'heading'+ k );
          });
          var items = slick.$slides;
          items.each( function( k, v){
            var text = $(this).find( 'h2 .bestSellerTag' ).text();
            $( '.heading' + k ).text(text);
          });
        });
        
        slickElement2.slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          focusOnSelect: true,
          dots: true,
          appendDots: $(".customSlickDots")
        });
        
      }
    });
  }

  // $(".customSlickDots ul li.slick-active button").attr("data-val",val);
  // Best Seller Slider Ends
  
    // Banner Slider Starts 
    $('.bSliderContainer').slick({
      variableWidth: true,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      focusOnSelect: true,
      dots: true
    });
    // Banner Slider Ends

    // Banner Slider Full Height Starts
    var topBelt = $(".topBelt").outerHeight();
    var topHeader = $("nav.navbar").outerHeight();
    var totalHeight = topBelt + topHeader;
    
    $(".bSlider .bSliderImageWrapper").css("min-height","calc(100vh - "+totalHeight+"px)")

    $(window).resize(function(){
      var topBelt = $(".topBelt").outerHeight();
      var topHeader = $("nav.navbar").outerHeight();
      var totalHeight = topBelt + topHeader;
      $(".bSlider .bSliderImageWrapper").css("min-height","calc(100vh - "+totalHeight+"px)")
    });
    // Banner Slider Full Height Ends

    // New Arrivals Slider Starts

    $('.carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true
          }
        }
      ]
    });
    
    // New Arrivals Slider Ends

    // Shop By Range Slider Starts

    // $('.rangeSliderCarousel').slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   arrows: true,
    //   infinite: false
    // });

    $('.rangeSliderCarousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: true
          }
        }
      ]
    });

    // Shop By Range Slider Ends

    // Customer Image Slider Starts
    
    $('.customerImageSliderCarousel').slick({
      variableWidth: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 0,
      cssEase: 'linear',          
      speed: 10000,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true
          }
        }
      ]
    });

    // Customer Image Slider Ends

    // Customer Review Slider Starts
    $('.customerReviewSlider').slick({
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
            infinite: true
          }
        }
      ]
    });
    // Customer Review Slider Ends

    // Customer Review Height Starts
    var reviewLeftSection = $(".customerReviewLeftSection").outerHeight()
    $(".customerReview").css("height",reviewLeftSection+"px");
    $(window).resize(function(){
      var reviewLeftSection = $(".customerReviewLeftSection").outerHeight()
      $(".customerReview").css("height",reviewLeftSection+"px");
    });

    // Customer Review Height Ends

    // Supplements You Can Trust Starts
    if ($(window).width() < 1023) {
      var marginDivideTwo = (reviewLeftSection/2);
      $(".suppYouCanTrust").css("margin-top",marginDivideTwo+"px");
    }
    $(window).resize(function(){
      if ($(window).width() < 1023) {
        var marginDivideTwo = (reviewLeftSection/2);
        $(".suppYouCanTrust").css("margin-top",marginDivideTwo+"px");
      }
    });
    // Supplements You Can Trust Ends

    // Latest Artical Slider Starts
    if ($(window).width() < 575) {
      $('.latestArticalCarousel').slick({
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      });
  }
    // Latest Artical Slider Ends

    $('.sliderImageTitle').sameHeight();
    
  });