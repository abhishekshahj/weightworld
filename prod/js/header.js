$(document).ready(function(){$(".cartIcon").click(function(){$("body").addClass("overflow-hidden"),$(".background-overlay").addClass("active"),$(".cart-slide").animate({width:"toggle"})}),$(".cart-slide-cross").click(function(){$("body").removeClass("overflow-hidden"),$(".background-overlay").removeClass("active"),$(".cart-slide").animate({width:"toggle"})});var a=$(".topBelt").outerHeight(),e=$(".navbar").outerHeight();$(".search-wrapper").css("padding-top",a+"px"),$(".search-container").css("height",e+"px"),$(".navbar form input,.navbar form .searchIcon,.navbar-mobi-header .searchIcon").click(function(){$("body").addClass("overflow-hidden"),$(".background-overlay").addClass("active"),$(this).addClass("active"),$(".search-wrapper").animate({width:"show"})}),$(".search-slide-cross").click(function(){$("body").removeClass("overflow-hidden"),$(".background-overlay").removeClass("active"),$(".navbar form input,.navbar form .searchIcon,.navbar-mobi-header .searchIcon").removeClass("active"),$(".search-wrapper").animate({width:"toggle"})})});