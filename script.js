var powera = 20;
var powerusagea = 20;
var hap = 20;
var database = firebase.database();
var ref = database.ref("highscore");
var txt;
var data;
var powerplus;
var puplus = 8;
	
 function start() {
	document.getElementById( "images" ).setAttribute( "onclick", "javascript: power();" );
	document.getElementById( "photobottom" ).setAttribute( "onclick", "javascript: power();" );
	document.getElementById( "images" ).src = "frigo-1.jpg";
	document.getElementById("start").style.zIndex = "-1";
	puplus = 8;
    powerplus =	setInterval(function powerusage(){
    powerusagea = powerusagea + puplus;
document.getElementById("pu").innerHTML = "Power Usage:"+" "+ powerusagea;
}, 2000);
}

setInterval(function puplusf(){ 
puplus = puplus + 2;
console.log("power usage = "+puplus);
}, 10000);

function power() {	
    powera = powera + 1;
	document.getElementById("p").innerHTML = "Power:"+" "+powera;
}

setInterval(function highamount(){
	if (hap < powera) {
    if (powera < powerusagea) { 
	clearInterval(powerplus);
	console.log("new highscore");
	entername()
	hap = powera;
	}
	document.getElementById("hap").innerHTML = "Best Score:"+" "+txt+" "+powera;
}

if (powera < powerusagea) {
	clearInterval(powerplus);
	document.getElementById( "images" ).src = "frigo-3.jpg"; 
	document.getElementById( "images" ).setAttribute( "onclick", "javascript: #;" );
	document.getElementById( "photobottom" ).setAttribute( "onclick", "javascript: #;" );
	document.getElementById( "start" ).setAttribute( "onclick", "javascript: location.reload();" );
	document.getElementById("start").style.zIndex = "1";
	document.getElementById("start").innerHTML = "RESTART";
}
}, 100);

window.onbeforeunload = function autosave(){
save();
}

function save() {
    data = {
    name: txt,
    score: hap
	}
	ref.push(data);
	console.log(data);
}

var ref = database.ref("highscore");
ref.on("value", gotData, errData);

function gotData(data) {

  var highscore = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(highscore);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var score = highscore[key].score;
	var name = highscore[key].name;
	 console.log(name, score)
	 document.getElementById("hap").innerHTML = "Best Score:"+"  "+txt+" "+score;
	hap = score;
	 txt = name;
  }
}
   
   function entername() { 
   txt = name;
    var person = prompt("New Highscore. enter your name:", "");
    if (person == null || person == "") {
        txt = person;
    } else {
        txt = person;
    }
   }

function errData(err) {}














//firebase code
//{
//  "rules": {
//    ".read": "auth != null",
//    ".write": "auth != null"
//  }
//}












