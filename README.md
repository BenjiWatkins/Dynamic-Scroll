# Dynamic-Scroll
A JS script (with CSS) to change the colour of your scrollbar as you scroll!

Link the neccessary files (dynamicScroll.js, dynamicScroll.css, and JQuery)

<link rel="stylesheet" href="dynamicScroll.css">

<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>	
<script src="dynamicScroll.js"></script>		

Then in the body onload function, run dynamicfy(r1, g1, b1, r2, g2, b2) where the r g and b values are rgb colour
codes to fade between, as shown in the example below

<body onload="dynamicfy(255,100,150,100,250,250);">
