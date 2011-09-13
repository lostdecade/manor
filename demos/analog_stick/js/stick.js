function Stick (maxLength, active) {
	this.active = active;
	this.atLimit = false;
	this.length = 1;
	this.maxLength = maxLength;
	this.limit = {
		x: 0,
		y: 0
	};
	this.input = {
		x: 0,
		y: 0
	};
};

Stick.prototype.getRadians = function (x, y) {
	return Math.atan2(x, -y);
};

Stick.prototype.getVectorFromRadians = function (radians, length) {
	length = (Number(length) || 1);
	return {
		x: (Math.sin(radians) * length),
		y: (-Math.cos(radians) * length)
	};
};

Stick.prototype.getVectorLength = function (v) {
	return Math.sqrt((v.x * v.x) + (v.y * v.y));
};

Stick.prototype.getVectorNormal = function (v) {
	var len = this.getVectorLength(v);
	if (len === 0) {
		return v;
	} else {
		return {
			x: (v.x * (1 / len)),
			y: (v.y * (1 / len))
		};
	}
};

Stick.prototype.setLimitXY = function (x, y) {
	this.limit = {
		x: x,
		y: y
	};
};

Stick.prototype.setInputXY = function (x, y) {
	this.input = {
		x: x,
		y: y
	};
};

Stick.prototype.subtractVectors = function (v1, v2) {
	return {
		x: (v1.x - v2.x),
		y: (v1.y - v2.y)
	};
};

Stick.prototype.update = function () {
	var diff = this.subtractVectors(this.input, this.limit);
	var length = this.getVectorLength(diff);

	if (Math.round(length) >= this.maxLength) {
		length = this.maxLength;

		var rads = this.getRadians(diff.x, diff.y);

		this.atLimit = true;
		this.input = this.getVectorFromRadians(rads, length);
		this.input.x += this.limit.x;
		this.input.y += this.limit.y;
	} else {
		this.atLimit = false;
	}

	this.length = length;
	this.normal = this.getVectorNormal(diff);
};
