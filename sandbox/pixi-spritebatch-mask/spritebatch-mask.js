var renderer = new PIXI.autoDetectRenderer(400, 400);
document.body.appendChild(renderer.view);

var stage = new PIXI.Stage(0x0000FF);

var container = new PIXI.DisplayObjectContainer();
stage.addChild(container);

var spriteBatch = new PIXI.SpriteBatch();
stage.addChild(spriteBatch);

var mask = new PIXI.Graphics();
mask.beginFill();
mask.drawRect(0, 0, 400, 200);

var texture1 = PIXI.Texture.fromImage("bunny.png");
var texture2 = PIXI.Texture.fromImage("tinyMaggot.png");

for (var i = 0; i < 100; ++i) {
	var sprite = new PIXI.Sprite(texture1);
	sprite.mask = mask;
	sprite.position.x = Math.random() * 200 - sprite.width;
	sprite.position.y = Math.random() * 400 - sprite.height;
	container.addChild(sprite);
}

for (var i = 0; i < 100; ++i) {
	var sprite = new PIXI.Sprite(texture2);
	sprite.mask = mask;
	sprite.position.x = 200 + Math.random() * 200 - sprite.width;
	sprite.position.y = Math.random() * 400 - sprite.height;
	spriteBatch.addChild(sprite);
}

var update = function () {
	renderer.render(stage);
	requestAnimationFrame(update);
};

requestAnimationFrame(update);
