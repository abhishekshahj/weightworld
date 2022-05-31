$(document).ready(function(){
  
    // Banner Slider Starts
    
    if ($('.bSliderContainer').length) {
      $('.bSlider').each(function() {
        if($(this).find('.bSliderInnerContainer').length > 2){
          var modID = $(this).attr('id');
          var slickElement1 = $('#' + modID + ' .bSliderContainer').not('.slick-initialized');
          
          slickElement1.slick({
            variableWidth: true,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            focusOnSelect: true,
            dots: true
          });
          
        }
      });
    }
    
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
      console.log(totalHeight);
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
            slidesToShow: 1,
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
    });
    // Customer Review Slider Ends

    // Best Seller Slider Starts
    $('.banner-slider-container')
  .on('init', function(event, slick){
    $('.slick-current').prev().addClass('prev');
    $('.slick-current').next().addClass('next');
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-slide').removeClass('prev next');
  })
  .on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-current').prev().addClass('prev');
    $('.slick-current').next().addClass('next');          
  });
  
  if ($('.banner-slider-container').length) {
    $('.banner-slider').each(function() {
      if($(this).find('.banner-slider-inner-container').length > 2){
        var modID = $(this).attr('id');
        var slickElement1 = $('#' + modID + ' .banner-slider-container').not('.slick-initialized');
        var modThis = $(this);
        
        slickElement1.on('init', function(event, slick){
          var dots = $( '.slick-dots li' );
          dots.each( function( k, v){
            $(this).find( 'button' ).addClass( 'heading'+ k );
          });
          var items = slick.$slides;
          items.each( function( k, v){
            var text = $(this).find( 'h1' ).text();
            $( '.heading' + k ).text(text);
          });
        });
        
        slickElement1.slick({
          variableWidth: true,
          infinite: true,
          slidesToScroll: 1,
          arrows: true,
          focusOnSelect: true,
          dots: true
        });
        
      }
    });
  }
    // Best Seller Slider Ends
    
  });