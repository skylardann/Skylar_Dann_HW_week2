/// final 4/5


var x = 100;
var y = 100;
var move = 8;

function setup() {
	createCanvas(600, 600);
	background(55);
}

function draw() {

	background(255);

	fill(255);

	ellipse(x, y, 50, 50);

	x = x + move;

	if (x > 575 || x < 25) {
		move = -move;
	}
}
