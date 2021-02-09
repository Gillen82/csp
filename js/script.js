/*Hamburger Nav*/
$('.hamburger-nav').click(function() {
  var nav  = $('.nav-menu');
  var icon = $('.hamburger');

  nav.slideToggle(200);
})


/*Smooth Scroll*/
$(function() {
  $('.smooth-scroll').click(function() {

    if($(window).width() < 500){
      $('.nav-menu').slideToggle(200);
    }

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
