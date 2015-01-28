<h1>Dynamic Scroll</h1>
<h2>@BenjiWatkins - Github</h2>

A JS script (with CSS) to change the colour of your scrollbar as you scroll!

Link the neccessary files (dynamicScroll.js, dynamicScroll.css, and JQuery)

&lt;link rel="stylesheet" href="dynamicScroll.css"&gt;

&lt;script src="http://code.jquery.com/jquery-1.11.2.min.js"&gt; &lt;/script&gt;
&lt;script src="dynamicScroll.js"&gt; &lt;/script&gt;

Then in the body onload function, run dynamicfy(r1, g1, b1, r2, g2, b2) where the r g and b values are rgb colour
codes to fade between, as shown in the example below

&lt;body onload="dynamicfy(255,100,150,100,250,250);"&gt;

dynamicfy(255,100,150,100,250,250); looks nice!
