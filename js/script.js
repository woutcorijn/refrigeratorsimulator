var cp = document.getElementById("controlp");
var fridgestate = document.getElementById("fridge");
var degrees = -90;
var temp = 1;
var timer;


function openf() {
	timer = setInterval(opentimer, 10000);
	if (temp > 4) {
		document.getElementById("fridge").src = "images/frigo-3-compressed.jpg";	
		document.getElementById("open").onclick = openbad;
	} 
	else {
		document.getElementById("fridge").src = "images/frigo-2-compressed.jpg";
	}
}

function openbad() {
	document.getElementById("fridge").src = "images/frigo-3-compressed.jpg";
}


function closef() {
	clearInterval(timer);
	document.getElementById("fridge").src = "images/frigo-1-compressed.jpg";
}

        function opentimer() {
			if (temp > 21) {
				temp = temp + 0;
			} else {
			  temp = temp + 1;
			}
			  document.getElementById("degr").innerHTML = temp + " °C";
			  	if (fridgestate.getAttribute("src") == "images/frigo-2-compressed.jpg" && temp > 4) {
	document.getElementById("fridge").src = "images/frigo-3-compressed.jpg";
}
}

		
		
function arrowf1() {
	degrees = degrees + 180;
	document.getElementById("arrow1").style.transform = "rotate(" + degrees + "deg)";
	document.getElementById("arrow1").style.mstransform = "rotate(" + degrees + "deg)";
	document.getElementById("arrow1").style.webkittransform = "rotate(" + degrees + "deg)";
	

	if (cp.style.marginLeft == "-300px") {
		document.getElementById("controlp").style.marginLeft = "0px";
		document.getElementById("arrow1").style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
	}  
	else {
		document.getElementById("controlp").style.marginLeft = "-300px";
		document.getElementById("arrow1").style.boxShadow = "0 -14px 28px rgba(0,0,0,0.25), 0 -10px 10px rgba(0,0,0,0.22)";
	}
}

function arrowover() {

	if (cp.style.marginLeft == "-300px") {
		document.getElementById("arrow1").style.boxShadow = "0 -14px 28px rgba(0,0,0,0.25), 0 -10px 10px rgba(0,0,0,0.22)";
	}  
	else {
		document.getElementById("arrow1").style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
	}
}

function arrowout() {

	if (cp.style.marginLeft == "-300px") {
		document.getElementById("arrow1").style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
	}  
	else {
		document.getElementById("arrow1").style.boxShadow = "0 -1px 3px rgba(0,0,0,0.12), 0 -1px 2px rgba(0,0,0,0.24)";
	}
}




function plus() {
	 if (fridgestate.getAttribute("src") == "images/frigo-2-compressed.jpg" && temp > 3) {
	 document.getElementById("fridge").src = "images/frigo-3-compressed.jpg";
	 document.getElementById("open").onclick = openbad;
}
if (temp > 5) {
		temp = temp + 0
	document.getElementById("degr").innerHTML = temp + " °C";
} else {
		temp = temp + 1
	document.getElementById("degr").innerHTML = temp + " °C";
}
}

function min() {
	if (temp < -2) {
		temp = temp + 0
	document.getElementById("degr").innerHTML = temp + " °C";
} else {
    temp = temp - 1
	document.getElementById("degr").innerHTML = temp + " °C";
}
}

// function on() {
	// ondelay();
// }

// setTimeout(function ondelay() {
// }, 10000); 

// function off() {
	// offdelay();
// }

// setTimeout(function offdelay() {
 // fb 
// }, 5000); 












