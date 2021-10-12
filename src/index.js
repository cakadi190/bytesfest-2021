// Remove the following lines, if you do not need any of Bootstrap's JavaScript features
import Popper from "popper.js";
window.jQuery = $;
window.$ = $;

require("bootstrap");

// Components ==================================

// Navbar Scroll
$(document).ready(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('.navbar').addClass('shadow');
    } else {
      $('.navbar').removeClass('shadow');
    }
  });
});

// Smooth scrolling using anime.js
$(document).on('click', 'a.scrolling-nav[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = parseInt($id.offset().top) - 56;

  // animated top scrolling
  $('body, html').animate({scrollTop: pos});
});

// Closes responsive menu when a scroll trigger link is clicked
$(".scrolling-nav").on('click', function () {
  $(".navbar-collapse").collapse("hide");
});
