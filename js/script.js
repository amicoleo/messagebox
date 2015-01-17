
// // initialize skrollr
// skrollr.init();

var currentSection, homeSection; 
var mouseWheelTransition = false; 
var panelTransition = false; 

//Constants
var fadeTime = 1000; 

//
var infoToggle = false; 
var infoRaisingTime = 1000; 



$(function() {

  //slimScroll 
  $(".info > .container").slimScroll({
    height: $(".info").height()
  })

  //Initialize section vars
  homeSection = $('.panel').eq(0); 
  currentSection = homeSection; 
  console.log("current section: "+currentSection); 

  // Stop default behaviours for links
  var a = document.getElementsByTagName('a');
  for(i=0 ; i<a.length ; i++){
      a[i].addEventListener('click', function(e) {
          if (this.href === window.location.href) {
              e.preventDefault();
          }
      });
  }
});

function showInfo(){
  if (!infoToggle){
    setLocationHash("info");
    $(".info-link").css("opacity", "0.0"); 
    $(".info-link").removeAttr("href");  
    $(".info").animate({
      "margin-top": "0%"
      }, infoRaisingTime, function(){
      infoToggle = true; 
      panelTransition = false; 
      $(".info-link").html('<i class="fa fa-times"></i>');
      $(".info-link").animate({
      opacity: 1.0
      }, infoRaisingTime, function(){
        $(".info-link").attr("href", "#");  
      }

    );
    });
  }else{
    $(".info-link").css("opacity", "0.0"); 
    $(".info-link").removeAttr("href");  
    setLocationHash("");
    $(".info").animate({
      "margin-top": "100%"
      }, infoRaisingTime, function(){
        infoToggle = false; 
        panelTransition = false; 
        $(".info-link").html('info');
        $(".info-link").animate({
        opacity: 1.0
        }, infoRaisingTime, 
          function(){
            $(".info-link").attr("href", "#");  
          }
      );
    });
  }
  
}


// key press 4 down
function scrollToNext () {
  if (!panelTransition){

    //If we are in the section before info
    if (currentSection.hasClass("e3") && !infoToggle){
      showInfo();
    }else if (!infoToggle){
      $('.panel').each(function(i, div){ // loop through article headings
        if ($(div).attr("class") == currentSection.attr("class")){
          if (i < $('.panel').length -1){
            panelTransition = true; 
            var nextSection = $('.panel').eq(i+1);
            nextSection.css("visibility", "visible");
            nextSection.animate({
            opacity: 1.0
            }, fadeTime);

            $(div).animate({
              opacity: 0.0
            }, fadeTime, function(){
              currentSection.css("visibility", "hidden"); 
              currentSection = nextSection; 
              panelTransition = false; 
            });
          }
        }
      });
    }
  }
}

function scrollToPrevious () {
  if (!panelTransition){

    //If we are in the section before info
    if (infoToggle){
      showInfo();
    }else{
      $('.panel').each(function(i, div){ // loop through article headings
        if ($(div).attr("class") == currentSection.attr("class")){
          if (i > 0){
            panelTransition = true; 
            var nextSection = $('.panel').eq(i-1);
            nextSection.css("visibility", "visible");
            nextSection.animate({
            opacity: 1.0
            }, fadeTime);

            $(div).animate({
              opacity: 0.0
            }, fadeTime, function(){
              currentSection.css("visibility", "hidden"); 
              currentSection = nextSection; 
              panelTransition = false; 
            });
          }
        }
      });
    }
  }
}

// On keys
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

//On mousewheel
if (document.addEventListener) {
  // IE9, Chrome, Safari, Opera
  document.addEventListener("mousewheel", MouseWheelHandler, false);
  // Firefox
  document.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else document.attachEvent("onmousewheel", MouseWheelHandler);

function MouseWheelHandler(e) {
  e.preventDefault(); 
  // cross-browser wheel delta
  var e = window.event || e; // old IE support
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

  if (!mouseWheelTransition){
    mouseWheelTransition = true; 
    if (delta == -1)
      scrollToNext(); 
    if (delta == 1)
      scrollToPrevious(); 
  }

}


//Hash navigation 
function getLocationHash(){
  return window.location.hash.substring(1);
}

function setLocationHash(str){
  window.location.hash = str;
}

window.onhashchange = function(e) {
    if (panelTransition)
        panelTransition = false; 
    else {
        setCurrentPanelFromHash(); 
    }
}

function setCurrentPanelFromHash(){
  if (getLocationHash() == "info"){
    if (!infoToggle){
      showInfo(); 
    }
  }else{
    if (infoToggle){
      showInfo(); 
    }
  }
}