var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

window.onload = setGradient();

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";
	console.log(color1.value);

	css.textContent = body.style.background + ";";
}


function randomColors() {
	color1.value = "#"+((1<<24)*Math.random()|0).toString(16);
	color2.value = "#"+((1<<24)*Math.random()|0).toString(16);

	setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomColors);
