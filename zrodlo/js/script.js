$(document).ready(function() {

    
    
    
    /*STICKY NAWIGACJA*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;' /*pojawia sie 60px przed tym za nim wejdziemy w js-section*/
    });
    
/*scrollowanie na przyciskach*/
    
    
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
          });
    
        $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
          });
    
    
    /*nawigacja scrollowanie*/
    
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
    
    /*Animations on scroll*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIN');
    }, {
        offset: '50%'
    });
    
    
    
    /*telefon*/
        $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated bounceInDown');
    }, {
        offset: '50%'
    });
    
    /*miasta*/
            $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    

    /*pierwsza cena*/
           $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated bounce');
    }, {
        offset: '50%'
    });
    

/*mobilna nawka*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
       
        nav.slideToggle(200);
    });
    
    /*mapka*/
    
    new GMaps({
  div: '.map',
  lat: 49.567027,
  lng: 20.634229
});
    
    

    });
    
    
    
