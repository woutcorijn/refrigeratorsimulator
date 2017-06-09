var powera = 20;
var powerusagea = 20;
var hap = 20;
var database = firebase.database();
var ref = database.ref("highscore");
var txt;
var data;
	
function start() {
	document.getElementById( "images" ).setAttribute( "onclick", "javascript: power();" );
	document.getElementById( "photobottom" ).setAttribute( "onclick", "javascript: power();" );
	document.getElementById( "images" ).src = "frigo-1.jpg";
	document.getElementById("start").style.zIndex = "-1";
	setInterval(function powerusage(){
	powerusagea = powerusagea + 10;
document.getElementById("pu").innerHTML = "power usage:"+" "+ powerusagea;
}, 2000);
}

function power() {	
    powera = powera + 1;
	document.getElementById("p").innerHTML = "power:"+" "+powera;
}

setInterval(function highamount(){
	if (hap < powera) {
    if (powera < powerusagea) { 
	console.log("new highscore");
	entername()
	}
	document.getElementById("hap").innerHTML = "Best Score:"+" "+txt+" "+powera;
}

if (powera < powerusagea) {
	document.getElementById( "images" ).src = "frigo-3.jpg"; 
	document.getElementById( "images" ).setAttribute( "onclick", "javascript: #;" );
	document.getElementById( "photobottom" ).setAttribute( "onclick", "javascript: #;" );
	document.getElementById( "start" ).setAttribute( "onclick", "javascript: location.reload();" );
	document.getElementById("start").style.zIndex = "1";
	document.getElementById("start").innerHTML = "RESTART";
	hap = powera;
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
    var person = prompt("enter your name:", "");
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












