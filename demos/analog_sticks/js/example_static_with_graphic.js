(function () {

var canvas = document.getElementById("stage");
var context = canvas.getContext("2d");
var BUFFER = 65;
var WIDTH = canvas.offsetWidth;
var HEIGHT = canvas.offsetHeight;

var image = new Image();
var limitSize = 88;
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
	context.save();

	// Limit
	context.drawImage(
		image,
		0, 0,
		88, 88,
		stick.limit.x - (limitSize / 2), stick.limit.y - (limitSize / 2),
		limitSize, limitSize
	);

	// Input
	var knobSize = 60;
	context.drawImage(
		image,
		89, 14,
		knobSize, knobSize,
		stick.input.x - (knobSize / 2), stick.input.y - (knobSize / 2),
		knobSize, knobSize
	);

	context.restore();
};

function init () {
	stick.setLimitXY(BUFFER, (HEIGHT - BUFFER));
	stick.setInputXY(BUFFER, (HEIGHT - BUFFER));

	canvas.addEventListener("mousedown", function (e) {
		e.preventDefault();
		stick.setInputXY(e.pageX, e.pageY);
		stick.active = true;
	});

	document.addEventListener("mousemove", function (e) {
		e.preventDefault();
		if (stick.active) {
			stick.setInputXY(e.pageX, e.pageY);
		}
	});

	document.addEventListener("mouseup", function (e) {
		stick.active = false;
		stick.setInputXY(stick.limit.x, stick.limit.y);
	});

	image.src = "img/stick.png";
	image.onload = function () {
		setInterval(main, 1);
	};
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
