var colors = ["rgb(255, 0, 0)",
			"rgb(255, 255, 0)",
			"rgb(0, 255, 0)",
			"rgb(0, 255, 255)",
			"rgb(0, 0, 255)",
			"rgb(255, 0, 255)"];

var messageDisplay = document.querySelector("#message");

var colorBoxes = document.querySelectorAll(".colorBox");

var pickedColor = randomColor();
var pickedColorDisplay = document.querySelector("#pickedColor");
pickedColorDisplay.textContent = pickedColor;

for (var i = 0; i < colorBoxes.length; i++) {
	//add initial colors
	colorBoxes[i].style.backgroundColor = colors[i];

	//add click listeners
	colorBoxes[i].addEventListener("click", function(){
		//grab color of clicked sqaure
		var clickedColor = this.style.backgroundColor;
		//compare to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);

		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

}

function changeColors(color){
	for(var i = 0; i < colorBoxes.length; i++){
		colorBoxes[i].style.backgroundColor = color;
	}
}

function randomColor(){
	var randomNumber = Math.floor(Math.random() * colors.length);
	return colors[randomNumber];
}