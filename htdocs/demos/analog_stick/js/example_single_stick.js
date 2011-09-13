(function () {

var canvas = document.getElementById("stage");
var context = canvas.getContext("2d");
var WIDTH = canvas.offsetWidth;
var HEIGHT = canvas.offsetHeight;

var limitSize = 36;
var inputSize = 20;
var lastTime = Date.now();
var stick = new Stick(inputSize);
var threshold = 2;
var point = {
	radius: 20,
	speed: 15,
	x: (WIDTH / 2),
	y: (HEIGHT / 2)
};

function draw () {
	context.clearRect(0, 0, WIDTH, HEIGHT);
	drawStick();
	drawPoint();
};

function drawPoint () {
	context.save();

	context.beginPath();
	context.arc(point.x, point.y, point.radius, 0, (Math.PI * 2), true);

	context.lineWidth = 3;
	context.strokeStyle = "rgb(0, 200, 0)";
	context.stroke();

	context.restore();
};

function drawStick () {
	if (!stick.active) {
		return;
	}

	context.save();

	// Limit
	context.beginPath();
	context.arc(stick.limit.x, stick.limit.y, limitSize, 0, (Math.PI * 2), true);

	context.lineWidth = 3;
	if (stick.atLimit) {
		context.strokeStyle = "rgb(200, 0, 0)";
	} else {
		context.strokeStyle = "rgb(0, 0, 0)";
	}
	context.stroke();

	// Base
	context.beginPath();
	context.arc(stick.limit.x, stick.limit.y, (limitSize / 2), 0, (Math.PI * 2), true);

	context.lineWidth = 3;
	context.strokeStyle = "rgb(200, 200, 200)";
	context.stroke();

	// Input
	context.beginPath();
	context.arc(stick.input.x, stick.input.y, inputSize, 0, (Math.PI * 2), true);
	context.fillStyle = "rgb(0, 0, 200)";
	context.fill();

	context.restore();
};

function init () {
	canvas.addEventListener("mousedown", function (e) {
		e.preventDefault();
		stick.setLimitXY(e.pageX, e.pageY);
		stick.setInputXY(e.pageX, e.pageY);
		stick.active = true;
	});

	document.addEventListener("mousemove", function (e) {
		e.preventDefault();
		stick.setInputXY(e.pageX, e.pageY);
	});

	document.addEventListener("mouseup", function (e) {
		stick.active = false;
	});

	setInterval(main, 1);
};

function main () {
	var now = Date.now();
	var elapsed = (now - lastTime);

	update(elapsed);
	draw();

	lastTime = now;
};

function update (elapsed) {
	stick.update();

	if (stick.active && (stick.length > threshold)) {
		point.x += (
			(stick.length * stick.normal.x)
			* point.speed
			* (elapsed / 1000)
		);
		point.y += (
			(stick.length * stick.normal.y)
			* point.speed
			* (elapsed / 1000)
		);

		if (point.x < point.radius) {
			point.x = point.radius;
		} else if (point.x > (WIDTH - point.radius)) {
			point.x = (WIDTH - point.radius);
		}
		if (point.y < point.radius) {
			point.y = point.radius;
		} else if (point.y > (HEIGHT - point.radius)) {
			point.y = (HEIGHT - point.radius);
		}
	}
};

init();

}());
