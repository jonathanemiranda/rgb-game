//VARIABLE DECLARITIONS
var numberOfBoxes = 6;
var colors = generateRandomColors(numberOfBoxes);
var messageDisplay = document.querySelector("#message");
var colorBoxes = document.querySelectorAll(".colorBox");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var pickedColor = randomColor();
var pickedColorDisplay = document.querySelector("#pickedColor");
var nav = document.querySelector("nav");
pickedColorDisplay.textContent = pickedColor;


//NEW COLORS & PLAY AGAIN BUTTON
resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numberOfBoxes);

	pickedColor = randomColor();

	pickedColorDisplay.textContent = pickedColor;

	nav.style.backgroundColor = "steelblue";

	messageDisplay.textContent = "";

	this.textContent = "New Colors";
	for(var i = 0; i < colorBoxes.length; i++){
		colorBoxes[i].style.backgroundColor = colors[i];
	}
});


//DIFFICULTY BUTTONS
easyButton.addEventListener("click", function(){
	numberOfBoxes = 3;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(numberOfBoxes);
	pickedColor = randomColor();
	pickedColorDisplay.textContent = pickedColor;
	for(var i = 0; i < colorBoxes.length; i++){
		if(colors[i]){
			colorBoxes[i].style.backgroundColor = colors[i];
		}
		else{
			colorBoxes[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	numberOfBoxes = 6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColors(numberOfBoxes);
	pickedColor = randomColor();
	pickedColorDisplay.textContent = pickedColor;
	for(var i = 0; i < colorBoxes.length; i++){
		if(colors[i]){
			colorBoxes[i].style.backgroundColor = colors[i];
			colorBoxes[i].style.display = "block";
	}
}});


//
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
			nav.style.backgroundColor = pickedColor
			resetButton.textContent = "Play Again";

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

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		//get random color
		arr.push(randomColorGenerator());
	}
	return arr;
}

function randomColorGenerator(){
	//pick a red value
	var redValue = Math.floor(Math.random() * 256);
	//pick green value
	var greenValue = Math.floor(Math.random() * 256);
	//pick blue value
	var blueValue = Math.floor(Math.random() * 256);

	return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}








