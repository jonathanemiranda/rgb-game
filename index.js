var colors = ["rgb(255, 0, 0)",
			"rgb(255, 255, 0)",
			"rgb(0, 255, 0)",
			"rgb(0, 255, 255)",
			"rgb(0, 0, 255)",
			"rgb(255, 0, 255)"];

var colorBoxes = document.querySelectorAll(".colorBox");

var pickedColor = colors[3];
var pickedColorDisplay = document.querySelector("#pickedColor");
pickedColorDisplay.textContent = pickedColor;

for (var i = 0; i < colorBoxes.length; i++) {
	//add initial colors
	colorBoxes[i].style.backgroundColor = colors[i];

	//add click listeners
	colorBoxes[i].addEventListener("click", function(){
		//grab color of clicked sqaure
		this.style.backgroundColor;
		//compare to pickedColor
	});

}

