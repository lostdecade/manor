(function () {

var TYPE_DEAD = 0;
var TYPE_GRASS = 1;
var TYPE_FIRE = 2;
var TYPE_WATER = 3;

var LIMIT_FIRE = 5000;
var LIMIT_DEAD = 30000;

var cells = [];
var ctx;
var interval;
var showBurn;
var showFade;
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
	} else if (predator.type == TYPE_WATER) {
		getCellAt(predator.x - 1, predator.y)._burn -= (elapsed / 4);
		getCellAt(predator.x + 1, predator.y)._burn -= (elapsed / 4);
		getCellAt(predator.x, predator.y - 1)._burn -= (elapsed / 4);
		getCellAt(predator.x, predator.y + 1)._burn -= (elapsed / 4);
	}
};

var hasFire = function () {
	for (var i = 0, cell; cell = cells[i]; ++i) {
		if (cell.type == TYPE_FIRE) {
			return true;
		}
	}
	return false;
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
	ctx.fillStyle = "rgb(200, 200, 200)";
	ctx.fillRect(0, 0, 295, 295);
	ctx.restore();

	for (var i = 0, cell; cell = cells[i]; ++i) {
		ctx.save();
		ctx.shadowBlur = 5;
		ctx.shadowColor = "rgba(0, 0, 0, 0.75)";
		ctx.shadowOffsetX = 2;
		ctx.shadowOffsetY = 2;

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
		ctx.restore();

		if (showFade.checked && (cell._burn > 0)) {
			ctx.save();
			if (cell.type == TYPE_GRASS) {
				ctx.fillStyle = "rgb(200, 0, 0)";
				ctx.globalAlpha = (cell._burn / LIMIT_FIRE);
				ctx.fillRect(cell.x * gridSize, cell.y * gridSize, cellSize, cellSize);
			} if (cell.type == TYPE_FIRE) {
				ctx.fillStyle = "rgb(0, 0, 0)";
				ctx.globalAlpha = (cell._burn / LIMIT_DEAD);
				ctx.fillRect(cell.x * gridSize, cell.y * gridSize, cellSize, cellSize);
			}
			ctx.restore();
		}

		if (showBurn.checked) {
			ctx.save();
			ctx.fillStyle = "rgb(255, 255, 255)";
			ctx.font = "8px arial";
			ctx.textBaseline = "top";
			ctx.fillText(Math.round(cell._burn), cell.x * gridSize, cell.y * gridSize);
			ctx.restore();
		}
	}

	ctx.restore();
};

var restart = function () {
	cells = [];
	clearInterval(interval);
	init();
};

var stop = function () {
	clearInterval(interval);
};

var update = function (elapsed) {
	for (var i = 0, cell; cell = cells[i]; ++i) {
		affectNeighbors(cell, elapsed);

		if (cell.type == TYPE_GRASS) {
			if (cell._burn >= LIMIT_FIRE) {
				cell.type = TYPE_FIRE;
			}
		} else if (cell.type == TYPE_FIRE) {
			cell._burn += elapsed;
			if (cell._burn >= LIMIT_DEAD) {
				cell.type = TYPE_DEAD;
			}
		}
	}

	if (!hasFire()) {
		stop();
	}
};

document.getElementById("restart").addEventListener("click", restart, false);
showBurn = document.getElementById("show_burn");
showFade = document.getElementById("show_fade");
stage = document.getElementById("stage");
ctx = stage.getContext("2d");

init();

}());
