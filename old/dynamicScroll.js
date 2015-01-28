function dynamicfy(r1, g1, b1, r2, g2, b2){
	
var startSheet = document.createElement('style');
startSheet.innerHTML = "::-webkit-scrollbar { width: 12px; } ::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); border-radius: 10px; } ::-webkit-scrollbar-thumb { border-radius: 10px; background: ";
startSheet.innerHTML += "rgb(".concat(r1,",",g1,",",b1,"); webkit-transition: background 3s ease-in-out;}");
document.head.appendChild(startSheet);
	
var sheet = document.createElement('style');
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
	
var steps = 30;
var interval = (height/steps);
	
var rdif = (r2-r1);
var gdif = (g2-g1);
var bdif = (b2-b1);

var rinterval = (rdif/steps);
var ginterval = (gdif/steps);
var binterval = (bdif/steps);
	
var rsteps = [];
var gsteps = [];
var bsteps = [];
	
var r = r1-rinterval;
var g = g1-ginterval;
var b = b1-binterval;
	
for (i = 0; i < steps; i++) { 
	rsteps[rsteps.length] = Math.round(r+rinterval);
	r = r+rinterval;
	gsteps[gsteps.length] = Math.round(g+ginterval);
	g = g+ginterval;
	bsteps[bsteps.length] = Math.round(b+binterval);
	b = b+binterval;
}

$(window).scroll(function () {
var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
var scx = 0;
for (i = 0; i < steps; i++) {
	ubound = (scx+interval) 
	if( $(window).scrollTop() >= scx && $(window).scrollTop() < ubound){
		start = "::-webkit-scrollbar-thumb {background: rgb(";
		rstr = rsteps[i];
		gstr = gsteps[i];
		bstr = bsteps[i];
		var final = start.concat(rstr,",",gstr,",",bstr,");} body, html{overflow: visible;}");
		sheet.innerHTML = final;
		document.head.appendChild(sheet);
	}
	scx = scx + interval;
}
}
)
	
}
