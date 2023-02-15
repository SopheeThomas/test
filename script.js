var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body =	document.getElementById("gradient");
var colors = document.querySelectorAll(".color-box h2")
var colorBtn = document.querySelectorAll("#color.btn")



function setGradient () {
	body.style.background =
	"linear-gradient(to right,"+color1.value+","+ color2.value+")";
	css.textContent = body.style.background +";";
}

function generateColors(){
	colors.forEach((color)=>{
		let hexCode = "#" + Math.random().toString(16).substring(2,8);
		color.style.backgroundColor = hexCode;
		color.innerHTML = hexCode;
	});
}

// colorBtn.onclick = function() {generateColors()};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



