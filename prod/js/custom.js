$(document).ready(function(){window.addEventListener("scroll",function(){for(var e=document.querySelectorAll(".reveal"),i=0;i<e.length;i++){var s=window.innerHeight;e[i].getBoundingClientRect().top<s-150?e[i].classList.add("active"):e[i].classList.remove("active")}}),$(".best-seller-mobile-slider").slick({variableWidth:!0,slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1}),$(window).resize(function(){$(window).width()>767&&$(function(){var e=document.getElementById("best-seller-leaf"),i=document.getElementById("subscribe-wrap");new Parallax(e,{relativeInput:!0}),new Parallax(i,{relativeInput:!0})})}),$(".bestSellerSliderContainer").length&&$(".bestSellerSlider").each(function(){if($(this).find(".bestSellerSliderInnerContainer").length>2){var e=$(this).attr("id"),i=$("#"+e+" .bestSellerSliderContainer").not(".slick-initialized");$(this),i.on("init",function(e,i){$(".slick-dots li").each(function(e,i){$(this).find("button").addClass("heading"+e)}),i.$slides.each(function(e,i){var s=$(this).find("h2 .bestSellerTag").text();$(".heading"+e).text(s)})}),i.slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,focusOnSelect:!0,dots:!0,appendDots:$(".customSlickDots")}),colorSettings={section:["#84ac89","#beb068","#b068be","#6876be"]},changeColors=function(e){$(".bestSeller").css({backgroundColor:colorSettings.section[e]})},changeColors(0),$(".bestSellerSliderContainer").on("beforeChange",function(e,i,s,o){changeColors(o)})}}),$(".bSliderContainer").slick({variableWidth:!0,infinite:!0,slidesToScroll:1,autoplay:!1,arrows:!1,focusOnSelect:!0,dots:!0});var e=$(".topBelt").outerHeight()+$(".topHeader").outerHeight();$(window).width()>767&&$(window).width()<1024?$(".bSlider .bSliderImageWrapper").css("min-height","calc(47vh - "+e+"px)"):$(".bSlider .bSliderImageWrapper").css("min-height","calc(100vh - "+e+"px)"),$(window).resize(function(){var e=$(".topBelt").outerHeight()+$(".topHeader").outerHeight();$(window).width()>767&&$(window).width()<1024?$(".bSlider .bSliderImageWrapper").css("min-height","calc(47vh - "+e+"px)"):$(".bSlider .bSliderImageWrapper").css("min-height","calc(100vh - "+e+"px)")}),$(".carousel").slick({slidesToShow:4,slidesToScroll:1,arrows:!0,infinite:!1,responsive:[{breakpoint:1370,settings:{arrows:!1}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:767,settings:{variableWidth:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0}}]}),$(".rangeSliderCarousel").slick({slidesToShow:4,slidesToScroll:1,infinite:!1,arrows:!0,responsive:[{breakpoint:1370,settings:{arrows:!1}},{breakpoint:1023,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:767,settings:{variableWidth:!0,slidesToShow:2,slidesToScroll:1,arrows:!1,infinite:!0}}]}),$(".customerImageSliderCarousel").slick({variableWidth:!0,slidesToShow:7,slidesToScroll:1,autoplay:!0,centerMode:!0,autoplaySpeed:0,cssEase:"linear",speed:1e4,infinite:!0,arrows:!1,responsive:[{breakpoint:1023,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:767,settings:{variableWidth:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0}}]}),$(".customerReviewSlider").slick({variableWidth:!0,slidesToShow:2,slidesToScroll:1,infinite:!0,arrows:!1,responsive:[{breakpoint:767,settings:{variableWidth:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0}}]});var i=$(".customerReviewLeftSection").outerHeight();if($(".customerReview").css("height",i+"px"),$(window).resize(function(){var e=$(".customerReviewLeftSection").outerHeight();$(".customerReview").css("height",e+"px")}),$(window).width()<1024){var s=i/2;$(".suppYouCanTrust").css("margin-top",s+"px")}$(window).resize(function(){if($(window).width()<1024){var e=i/2;$(".suppYouCanTrust").css("margin-top",e+"px")}}),$(".latestArticalCarousel").slick({variableWidth:!1,slidesToShow:4,slidesToScroll:1,infinite:!1,arrows:!1,responsive:[{breakpoint:1024,settings:{variableWidth:!0,slidesToShow:2,slidesToScroll:1,infinite:!0,arrows:!1}},{breakpoint:768,settings:{variableWidth:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1}}]}),$(".sliderImageTitle").sameHeight(),$(".suppMobiSlider").slick({variableWidth:!1,slidesToShow:6,slidesToScroll:3,infinite:!1,arrows:!1,responsive:[{breakpoint:1024,settings:{variableWidth:!1,slidesToShow:3,slidesToScroll:1,arrows:!1,infinite:!1}}]})});