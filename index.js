//VARIABLE DECLARITIONS
var numberOfBoxes = 6;
var colors = generateRandomColors(numberOfBoxes);
var messageDisplay = document.querySelector("#message");
var colorBoxes = document.querySelectorAll(".colorBox");
var resetButton = document.querySelector("#reset");
var difficultyButtons = document.querySelectorAll(".difficultyButton");
var pickedColor = randomColor();
var pickedColorDisplay = document.querySelector("#pickedColor");
var nav = document.querySelector("nav");
pickedColorDisplay.textContent = pickedColor;


//NEW COLORS & PLAY AGAIN BUTTON
resetButton.addEventListener("click", function(){
	reset();
});


//DIFFICULTY BUTTONS
for (var i = 0; i < difficultyButtons.length; i++) {
	difficultyButtons[i].addEventListener("click", function(){
		difficultyButtons[0].classList.remove("selected");
		difficultyButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent == "Easy" ? numberOfBoxes = 3 : numberOfBoxes = 6;
		reset();

	});
}


//RESET
function reset(){
	colors = generateRandomColors(numberOfBoxes);

	pickedColor = randomColor();

	pickedColorDisplay.textContent = pickedColor;

	nav.style.backgroundColor = "steelblue";

	messageDisplay.textContent = "";

	resetButton.textContent = "New Colors";

	for(var i = 0; i < colorBoxes.length; i++){
		colorBoxes[i].style.display = "block";
		if (colors[i]) {
			colorBoxes[i].style.backgroundColor = colors[i];
		}
		else{
			colorBoxes[i].style.display = "none";	
		}
	}
}


//GAMEPLAY LOGIC
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








