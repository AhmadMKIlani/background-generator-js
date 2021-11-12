let left = document.querySelector(".left");
let right = document.querySelector(".right");
let css = document.querySelector("h3");
var body = document.getElementById("my-body");



function colorIt(){
	body.style.background =
	 "linear-gradient(to right,"
	 + left.value 
	 + ", " 
	 + right.value 
	 + ")";

	 css.textContent = body.style.background + ";";
};


left.addEventListener("input", colorIt);

right.addEventListener("input", colorIt);



// var css = document.querySelector("h3");
// let color1 = document.querySelector(".left");
// let color2 = document.querySelector(".right");
// var body = document.getElementById("my-body");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);