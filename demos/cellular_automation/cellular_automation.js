(function () {

var TYPE_DEAD = 0;
var TYPE_GRASS = 1;
var TYPE_FIRE = 2;
var TYPE_WATER = 3;

var cells = [];
var ctx;
var interval;
var showBurn;
var stage;

var Cell = function (conf) {
	this.type = conf.type;
	this.x = conf.x;
	this.y = conf.y;
	this._burn = 0;
};

var map = [
	[1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 3, 3, 1],
	[1, 1, 1, 1, 1, 1, 1, 3, 3, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
	[1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
	[3, 1, 1, 1, 2, 1, 1, 1, 1, 1],
	[1, 3, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 3, 1, 1, 1, 1, 1, 2, 1],
	[1, 1, 1, 3, 1, 1, 1, 1, 1, 1]
];

var getCellAt = function (x, y) {
	for (var i = 0, cell; cell = cells[i]; ++i) {
		if (cell.x == x && cell.y == y) {
			return cell;
		}
	}

	return {};
};

var affectNeighbors = function (predator, elapsed) {
	if (predator.type == TYPE_FIRE) {
		getCellAt(predator.x - 1, predator.y)._burn += elapsed;
		getCellAt(predator.x + 1, predator.y)._burn += elapsed;
		getCellAt(predator.x, predator.y - 1)._burn += elapsed;
		getCellAt(predator.x, predator.y + 1)._burn += elapsed;
	}
};

var init = function () {
	for (var y = 0; y < map.length; ++y) {
		for (var x = 0; x < map[y].length; ++x) {
			cells.push(new Cell({
				type: map[y][x],
				x: x,
				y: y
			}));
		}
	}

	var lastNow = Date.now();

	interval = setInterval(function () {
		var now = Date.now();
		var elapsed = ((now - lastNow));
		lastNow = now;

		update(elapsed);
		render(ctx, elapsed);
	}, 1);
};

var render = function (ctx, elapsed) {
	var cellSize = 25;
	var gridSize = 30;

	ctx.save();
	ctx.fillRect();

	for (var i = 0, cell; cell = cells[i]; ++i) {
		switch (cell.type) {
			case TYPE_DEAD:
				ctx.fillStyle = "rgb(0, 0, 0)";
				break;
			case TYPE_GRASS:
				ctx.fillStyle = "rgb(0, 200, 0)";
				break;
			case TYPE_FIRE:
				ctx.fillStyle = "rgb(200, 0, 0)";
				break;
			case TYPE_WATER:
				ctx.fillStyle = "rgb(0, 0, 200)";
				break;
		}

		ctx.fillRect(cell.x * gridSize, cell.y * gridSize, cellSize, cellSize);

		if (showBurn.checked) {
			ctx.fillStyle = "rgb(255, 255, 255)";
			ctx.font = "8px arial";
			ctx.textBaseline = "top";
			ctx.fillText(Math.round(cell._burn), cell.x * gridSize, cell.y * gridSize);
		}
	}

	ctx.restore();
};

var restart = function () {
	cells = [];
	clearInterval(interval);
	init();
};

var update = function (elapsed) {
	for (var i = 0, cell; cell = cells[i]; ++i) {
		affectNeighbors(cell, elapsed);

		if (cell.type == TYPE_GRASS) {
			if (cell._burn >= 5000) {
				cell.type = TYPE_FIRE;
			}
		} else if (cell.type == TYPE_FIRE) {
			cell._burn += elapsed;
			if (cell._burn >= 30000) {
				cell.type = TYPE_DEAD;
			}
		}
	}
};

stage = document.getElementById("stage");
showBurn = document.getElementById("show_burn");
ctx = stage.getContext("2d");
document.getElementById("restart").addEventListener("click", restart, false);

init();

}());
