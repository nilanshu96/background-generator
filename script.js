var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	console.log("linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")");

	css.textContent = body.style.background + ";";
}

setGradient();

function intToHex(num) {
	if(num < 16) {
		return "0"+num.toString(16);
	} else {
		return num.toString(16);
	}
}

function getRandomInteger(max) {
	return Math.floor(Math.random()*Math.floor(max));
}

function getRandomHex(max) {
	return intToHex(getRandomInteger(max));
}

function getRandomColor() {
	
	var max = 255;
	var r = getRandomHex(max);
	var g = getRandomHex(max);
	var b = getRandomHex(max);
	
	return `#`+r+g+b;
}

function setRandomBackground() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

randomBtn.addEventListener("click", setRandomBackground);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);