function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255); // bacround colour will be white
	frameRate(60);
}

function draw() {
	DIVIDERS();
	NAME();
	CIRCLE();
	RECTANGLE();
	PURPLELINE();
	BLUELINE();
	NAME();
	ERASER();
}

function NAME() {// custom function
	stroke(255);
	textSize(30); // the size of the text is 30.
	fill(0); // text colour is black
	text("Matthew King", windowWidth, windowHeight); // text will be placed in the bottom right hand corner
	textAlign(RIGHT, BOTTOM); // the text will allign at the bottom right hand side of the screen
}

function CIRCLE() {// custom function
	if (mouseX <= windowWidth/2 && mouseY <= windowHeight) { // the whole left hand side of the screen allows circles to be drawn.
	stroke(int(random(256)),int(random(256)),int(random(256))); // random RGB value between 0 and 255 for all values for the outline colour.
	strokeWeight(random(20)); // the strokeweight will be between 0 and 30.
  fill(int(random(256)),int(random(256)),int(random(256))); // random RGB colour between 0 and 255 for all values  for the fill colour.
	if (mouseIsPressed) { // When the mouse is pressed, a circle with a width and height of 20 appears.
	ellipse(mouseX, mouseY, 20, 20); // the circle will appear on the cursor.
	}
}
}

function RECTANGLE() { // custom function
	if (mouseX <= windowWidth/2 && mouseY <= windowHeight) { // the whole left hand side of the screen allows squares to be drawn.
	stroke(int(random(256)),int(random(256)),int(random(256))); // random RGB value between 0 and 255 for all values for the outline colour.
	strokeWeight(random(20)); // the strokeweight will be between 0 and 30.
  fill(int(random(256)),int(random(256)),int(random(256))); // random RGB colour between 0 and 255 for all values  for the fill colour.
	if (keyIsPressed) { // When the mouse is pressed, a rectangle with a width and height of 20 appears.
		if (keyCode == 38) {
	rect(mouseX, mouseY-10, 20, 20); // the rectangle will appear 20 pixels horizontally from the cursor and -10 pixels vertically from the cursor
			}
		}
	}
}

function PURPLELINE() {
	if (mouseX >= windowWidth/2 && mouseY <= windowHeight/2) { //only a purple line can be drawn in the top right corner.
		stroke(160, 32, 240); // RGB value for purple.
		strokeWeight(10);
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}

function BLUELINE() {
	if (mouseX >= windowWidth/2 && mouseY >= windowHeight/2) { // only a blue alternating thickness line can be drawn in the bottom right hand corner.
		stroke(0,0, 255); // RGB value for blue.
		strokeWeight(int(random(1,10))); //chooses between drawing a line with a thickness of 1 or 10.
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
}
		
	function DIVIDERS() {
	stroke(0);
	strokeWeight(10);
	line(windowWidth/2, 0, windowWidth/2, windowHeight);
	stroke(0);
	strokeWeight(10);
	line(windowWidth/2, windowHeight/2, windowWidth, windowHeight/2);
}

function ERASER() {
stroke(255); 
		strokeWeight(10);
	fill(255);
	if (keyIsPressed) {
		if (keyCode == 37){
		ellipse(mouseX, mouseY, 100, 100); // erases all drawings
		}
	}
}
