// slideout mobile slider
 $(function(){
    //Mobile slider
    var slideout = new Slideout({
      'panel': document.getElementById('main'),
      'menu': document.getElementById('mobile-menu'),
      'padding': 256,
      'side': 'right',
      'tolerance': 70
    });

    // Toggle button
    $('.hamburger').on('click', function() {
        $('#mobile-menu').fadeToggle()
        slideout.toggle();
    });
});

 //to slide slowly to the named anchor
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});