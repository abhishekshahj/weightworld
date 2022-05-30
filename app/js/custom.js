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
    
  });