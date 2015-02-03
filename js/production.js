/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

// // initialize skrollr
// skrollr.init();

var currentSection, homeSection; 
var mouseWheelTransition = false; 
var panelTransition = false; 
var reachedTopOfInfo = true;
bReachedLastText = false; 

//Constants
var fadeTime = 1000; 

//
var infoToggle = false; 
var infoRaisingTime = 1000; 



$(function() {
  //Check if info hash
  if (getLocationHash() == "info")
    showInfo();   

  //Initialize section vars
  homeSection = $('.panel').eq(0); 
  currentSection = homeSection; 

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
    $(".info-link").removeAttr("href");  

    $(".info").animate({
      "top": "0%"
      }, infoRaisingTime, function(){
      $('.arrow').css("display", "none"); 
      $('.info-link').css("display", "block"); 
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
    $(".info-link").removeAttr("href");  
    setLocationHash("");
    $(".info").animate({
      "top": "102%"
      }, infoRaisingTime, function(){
        $('.arrow').css("display", "block"); 
        infoToggle = false; 
        panelTransition = false; 
        $(".info-link").html('info');
        $(".arrow").animate({
        opacity: 1.0
        }, infoRaisingTime, 
          function(){
            $(".info-link").attr("href", "#");  
          }
      );
    });

    // $('.info-link').animate({
    //   opacity: 0.0}, infoRaisingTime); 
  }
  
}

// key press 4 down
function goHome () {
  if (!panelTransition){
  
  if (!infoToggle){
      $('.panel').each(function(i, div){ // loop through article headings
        if ($(div).attr("class") == currentSection.attr("class")){
          if (i < $('.panel').length -1){
            panelTransition = true; 
            var nextSection = $('.panel').eq(0); //Next section is home. So panel 0
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
               if (currentSection.hasClass("dark")){
                $(".info-link").css("color", "#fff"); 
                $(".arrow i").css("color", "#fff"); 
                $(".arrow").css("color", "#fff"); 
              }
              else{
                $(".info-link").css("color", "#000");
                $(".arrow i").css("color", "#000");
                $(".arrow").css("color", "#000");
              }
            });
          }
        }
      });
    }
  }
}


// key press 4 down
function scrollToNext () {
  if (!panelTransition){

    //If we are in the section before info
    if (currentSection.hasClass("e3") && !infoToggle){
      if (!bReachedLastText){
        $(".e3 .second").animate({
            opacity: 1.0
            }, fadeTime, function(){
              bReachedLastText = true; 
            });
      }else{
        showInfo();
      }


    // if (currentSection.hasClass("e4") && !infoToggle){
    //   showInfo();
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
               if (currentSection.hasClass("dark")){
                $(".info-link").css("color", "#fff"); 
                $(".arrow i").css("color", "#fff"); 
                $(".arrow").css("color", "#fff"); 
              }
              else{
                $(".info-link").css("color", "#000");
                $(".arrow i").css("color", "#000");
                $(".arrow").css("color", "#000");
              }
            });

            if (nextSection.hasClass("b1")){
                console.log("fade in"); 
                $(".m-b").css("visibility", "visible");
                $(".m-b").animate({opacity:1.0}, fadeTime); 
            }
            else if (nextSection.hasClass("e1")){
                $(".marlene").css("visibility", "visible");
                $(".marlene").animate({opacity:1.0}, fadeTime); 
            }
            else if (currentSection.hasClass("b3")){
                $(".m-b").animate({opacity:0.0}, fadeTime, function(){
                  $(".m-b").css("visibility", "hidden");
                }); 
            }
            else if (currentSection.hasClass("e2")){
                $(".marlene").animate({opacity:0.0}, fadeTime, function(){
                  $(".marlene").css("visibility", "hidden");
                }); 
            }
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

      

    }else if (currentSection.hasClass("e3") && bReachedLastText){
      $(".e3 .second").animate({
        opacity: 0.0
        }, fadeTime, function(){
          bReachedLastText = false; 
        });




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
               if (currentSection.hasClass("dark")){
                $(".info-link").css("color", "#fff"); 
                $(".arrow i").css("color", "#fff"); 
                $(".arrow").css("color", "#fff");
              }
              else{
                $(".info-link").css("color", "#000");
                $(".arrow i").css("color", "#000");
                $(".arrow").css("color", "#000");
              }
            });

            if (currentSection.hasClass("b1")){
                $(".m-b").animate({opacity:0.0}, fadeTime, function(){
                  $(".m-b").css("visibility", "hidden");
                }); 
            }
            else if (currentSection.hasClass("e1")){
                $(".marlene").animate({opacity:0.0}, fadeTime, function(){
                  $(".marlene").css("visibility", "hidden");
                }); 
                
            }
            else if (nextSection.hasClass("b3")){
                $(".m-b").css("visibility", "visible");
                $(".m-b").animate({opacity:1.0}, fadeTime); 
            }
            else if (nextSection.hasClass("e2")){
                $(".marlene").css("visibility", "visible");
                $(".marlene").animate({opacity:1.0}, fadeTime); 
            }
          }
        }
      });
    }
  }
}

// On keys
jQuery(function () {
  $(document).keydown(function (evt) {
    if (evt.keyCode == 40 || evt.keyCode == 34 || evt.keyCode == 39 ) { // down arrow
      evt.preventDefault(); // prevents the usual scrolling behaviour
      scrollToNext(); // scroll to the next new heading instead
    }

    if (evt.keyCode == 38 || evt.keyCode == 33 || evt.keyCode == 37){
      evt.preventDefault(); // prevents the usual scrolling behaviour
      
      if (reachedTopOfInfo)
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

var mouseWheelTimeOut; 
function MouseWheelHandler(e) {
  e.preventDefault(); 
  // cross-browser wheel delta
  var e = window.event || e; // old IE support
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

  window.clearTimeout(mouseWheelTimeOut);
  mouseWheelTimeOut = window.setTimeout(resetMouseWheelTransition, 20); 
  if (!infoToggle){
    if (!mouseWheelTransition){
      if (delta == -1)
        scrollToNext(); 
      if (delta == 1)
        scrollToPrevious(); 
    }
  }
  mouseWheelTransition = true; 

}

function resetMouseWheelTransition(){
  mouseWheelTransition = false; 
}

//On touch scroll
document.addEventListener("touchmove", handleMove, false);
document.addEventListener("touchend", handleEnd, false);
 
var bTouchScrolling = false;
var scrollingStartY;
function handleMove(event) {
  //start of scroll event for iOS
  event.preventDefault();
  if (!infoToggle){
    var touches = event.changedTouches;
     if (!bTouchScrolling){
      bTouchScrolling = true;
      scrollingStartY = touches[0].pageY;
    }
  }
}
 
function handleEnd(event) {
  //start of scroll event for iOS
  var touches = event.changedTouches;
  if (!infoToggle){
    if (bTouchScrolling){
      bTouchScrolling = false;
      if (touches[0].pageY > scrollingStartY)
        scrollToPrevious();
      else
        scrollToNext();
    }
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

window.onresize = function(){
  $(".scroll-container").perfectScrollbar("update");
}

$(".scroll-container").scroll(function(){
  if ($(".scroll-container").scrollTop() == 0)
    reachedTopOfInfo = true; 
  else
    reachedTopOfInfo = false; 
}); 

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

var imgLoad = imagesLoaded( $(document), function( instance ) {
    $(".scroll-container").perfectScrollbar();
}); 