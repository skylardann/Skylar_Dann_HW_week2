// Final 2



function setup() {

	createCanvas(600, 400);
	background(255);

}

function draw() {

	background(255);

	var leftEyeX = mouseX - 25;
	var leftEyeY = mouseY - 10;

	var rightEyeX = mouseX + 25;
	var rightEyeY = mouseY - 10;

	fill(255);
	stroke(0);
	ellipse(mouseX, mouseY, 120, 120);

	ellipse(rightEyeX, rightEyeY, 30, 30);
	ellipse(leftEyeX, leftEyeY, 30, 30);

	if (mouseX < 200) {

		arc(mouseX, mouseY + 20, 50, 40, 0, PI, OPEN);
	}
	if (mouseX < 400 && mouseX > 200) {
		line(mouseX - 20, mouseY + 20, mouseX + 20, mouseY + 20);
	}
	if (mouseX < 600 && mouseX > 400) {
		arc(mouseX, mouseY + 40, 50, 40, PI, 0, OPEN);
	}

}
