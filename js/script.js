
// initialize skrollr
skrollr.init();

// Stop default behaviours for links
var a = document.getElementsByTagName('a');
for(i=0 ; i<a.length ; i++){
    a[i].addEventListener('click', function(e) {
        if (this.href === window.location.href) {
            e.preventDefault();
        }
    });
}


// key press 4 down
function scrollToNext () {
  scrollTop = $(window).scrollTop();
  $('section').each(function(i, div){ // loop through article headings
    divtop = $(div).offset().top; // get article heading top
    if (scrollTop < divtop) { // compare if document is below heading

      $('html, body').stop().animate({
        scrollTop: $(div).offset().top + 5
    }, 1500,'easeInOutExpo');

      // console.log("ci"); 

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
        scrollTop: $(div).offset().top + 5
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
