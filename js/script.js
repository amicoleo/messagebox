// full page https://s3-us-west-2.amazonaws.com/s.cdpn.io/95495/jquery.fullPage.min.js

// skrollr js is imported https://s3-us-west-2.amazonaws.com/s.cdpn.io/95495/skrollr.min.js

// loading
/*$(document).ready(function(){   
    window.setTimeout('fadeout();', 1000);
}); 

function fadeout(){
    $('#load').fadeOut('slow', function() {
    });
}
*/


// fullpage
/*$(document).ready(function() {
    $('#fullpage').fullpage({
        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        scrollBar: false,
        easing: 'easeInQuart',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        keyboardScrolling: true,
        animateAnchor: true,
        sectionSelector: '.panel',

      
//callback      
        afterRender: function(){

          // initialize skrollr
          skrollr.init();

          // smooth scroll
          $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top +300
                  }, 1000);
                  return false;
                }
              }
            });
          });

          
        
        
        }
      
    });
});*/






// initialize skrollr
skrollr.init();

// smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top +300
        }, 1000);
        return false;
      }
    }
  });
});

// key press 4 down
function scrollToNext () {
  scrollTop = $(window).scrollTop();
  $('section').each(function(i, div){ // loop through article headings
    divtop = $(div).offset().top; // get article heading top
    if (scrollTop < divtop) { // compare if document is below heading
      $('html, body').stop().animate({
        scrollTop: $(div).offset().top
    }, 1500,'easeInOutExpo');

      return false; // exit function
    }
  });
}

function scrollToPrevious () {
  scrollTop = $(window).scrollTop();
  $($('section').get().reverse()).each(function(i, div){ // loop through article headings
    divtop = $(div).offset().top; // get article heading top
    divheight = $(div).height(); 
    if (scrollTop > divtop + divheight - 10) { // compare if document is below heading
      $('html, body').stop().animate({
        scrollTop: $(div).offset().top
    }, 1500,'easeInOutExpo');

      return false; // exit function
    }
  });
}

jQuery(function () {
  $(document).keydown(function (evt) {
    if (evt.keyCode == 40 || evt.keyCode == 34) { // down arrow
      evt.preventDefault(); // prevents the usual scrolling behaviour
      scrollToNext(); // scroll to the next new heading instead
    }

    if (evt.keyCode == 38 || evt.keyCode == 33){
      evt.preventDefault(); // prevents the usual scrolling behaviour
      scrollToPrevious(); // scroll to the next new heading instead
    }
  });
});
