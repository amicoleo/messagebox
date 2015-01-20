TODO LIST
========


- image of marlene shouldn't reload 
- image of the message box in the first frames shouldn't reload

- color of info link on dark panels - OK
- allow reaching info page when linked - OK
- Arrow scrolling when on info (override normal arrow behaviou)
	http://jsfiddle.net/Mottie/rgmrw/1/

- navigation to-from info section - OK
- info link becomes a X when active - OK
- delete "how it works" link - OK
- info link adds location hash - OK

- Add scrollbar on info section
	http://rocha.la/jQuery-slimScroll/ - OK
- move between section with scrolling events (so that works for touchscreen too)
- minify everything (and be careful to use minified libs)

- Black rail for scrollbar
- Info section loaded with ajax 
	- so there's 
- Hack scrollbar for resizing (otherwise is problema)

General
------

- something to hide the loading (hold on main MB image, then scroll down to reveal first text)
- add another frame of Marlene raising the lid
- Some photos are way too big (n particular photo w/ Marlene face is gigantic). Let's 
- add location hash when navigating between sections

Navigation & Scrolling
--------

- shorten vertical scrolling between panels - OK
>I implemented that with absolute scrolling values and costant values of sections height. Check after `<div id="fullpage">` for info. 
- Activate arrow keys as navigation between panels - OK
>I added jQuery easing plugin and revised a bit your code. We now have arrow keys and page up and down for moving between panels. 
- Use scrollToNext and scrollToPrevious functions for section links behaviours
- Detect mouse wheel and touch scrolling for moving between sections
- Add location hashes for navigation
- Revise easing function values for moving between sections

Illustrations
-----------

- I will ask Ferreol to try again on the 3rd illustration, speech bubbles (this is his last week!)

Animations
---------
>To be considered at the end

- add small motions to Ferreol drawings
- figure out how to add large animations without crashing page (svg manipulation, gifs, html5 video?)

Design
---------

- reposition text so it’s not covering the product (per ryu’s comments) - OK? 

Mobile & Testing
-------

>All Leo stuff :)

- some easy quick solution w/o depending on fixed backgrounds?
- test in all major modern browsers
- change how it works / info into a toggle