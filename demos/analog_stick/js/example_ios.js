(function () {

var canvas = document.getElementById("stage");
var context = canvas.getContext("2d");
var WIDTH = canvas.offsetWidth;
var HEIGHT = canvas.offsetHeight;

var limitSize = 64;
var inputSize = 36;
var lastTime = Date.now();
var sticks = [new Stick(inputSize), new Stick(inputSize)];
var threshold = 4;
var point = {
	radius: 20,
	speed: 10,
	x: (WIDTH / 2),
	y: (HEIGHT / 2)
};

function draw () {
	context.clearRect(0, 0, WIDTH, HEIGHT);
	drawSticks();
	drawPoint();
};

function drawPoint () {
	var stick = sticks[1];

	context.save();

	context.moveTo(point.x, point.y);
	context.beginPath();
	context.lineTo(stick.input.x, stick.input.y);
	context.moveTo(point.x, point.y);

	var diff = stick.subtractVectors(stick.input, stick.limit);
	var length = stick.getVectorLength(diff);
	var rads = stick.getRadians(diff.x, diff.y);
	var input = stick.getVectorFromRadians(rads, length);

	context.lineTo(point.x + (input.x * length), point.y + (input.y * length));

	context.lineWidth = 3;
	context.strokeStyle = "rgb(0, 200, 0)";
	context.stroke();

	context.beginPath();
	context.arc(point.x, point.y, point.radius, 0, (Math.PI * 2), true);
	context.lineWidth = 3;
	context.strokeStyle = "rgb(0, 200, 0)";
	context.stroke();

	context.restore();
};

function drawSticks () {
	for (var i = 0; i < sticks.length; ++i) {
		var stick = sticks[i];

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
	}
};

function init () {
	canvas.addEventListener("touchstart", function (e) {
		e.preventDefault();

		for (var i = 0; i < e.touches.length; ++i) {
			var stick = sticks[i];
			var touch = e.touches[i];

			stick.setLimitXY(touch.pageX, touch.pageY);
			stick.setInputXY(touch.pageX, touch.pageY);
			stick.active = true;
		}
	});

	document.addEventListener("touchmove", function (e) {
		e.preventDefault();

		for (var i = 0; i < e.touches.length; ++i) {
			var stick = sticks[i];
			var touch = e.touches[i];

			stick.setInputXY(touch.pageX, touch.pageY);
		}
	});

	document.addEventListener("touchend", function (e) {
		var touches = e.changedTouches;
		for (var i = 0; i < touches.length; ++i) {
			var stick = sticks[i];
			stick.active = false;
		}
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
	for (var i = 0; i < sticks.length; ++i) {
		sticks[i].update();
	}

	var stick = sticks[0];

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
