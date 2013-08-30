---
layout: article
title: "Understanding Canvas Rotation"
author: geoff
---
_From time to time, we get reader or listener email asking about various aspects of developing games in HTML5. Instead of responding directly, we prefer to put the answers up on our blog in case the information can help other developers._

Transformations in canvas can be tricky to understand at first. Conceptually, most people tend to think about rotating and scaling individual images. They're often surprised and confused when the canvas API transforms their entire game when calling `.rotate` or `.scale`.

The only way to transform images in canvas is by modifying the entire canvas. The trick is that you need to modify the canvas context just before you draw a transformed image and reset it right after. This is where the `.save` and `.restore` methods come in.

Saving a canvas context stores the current configuration, including transformations (or lack thereof). Restoring a canvas context does just the opposite, resetting the current configuration to the last saved state.

Another gotcha for transformation is that by default, all transformations occur from the origin of 0, 0 on the canvas, which is the upper left. The most common use case for rotation and scaling is from the center of an individual image such as a game sprite. Luckily, there's another canvas method we can use to change the transformation origin, `.translate`.

Let's take a look at how we'd achieve a simple rotation of a rectangle. Inline comments in the code explain what's happening in more detail.

{% highlight js %}
// Create our canvas
// Append it to the document body
var stage = document.createElement("canvas");
stage.width = 320;
stage.height = 240;
document.body.appendChild(stage);

// Grab a reference to the canvas' 2D context
var ctx = stage.getContext("2d");

// Paint a background color
ctx.fillStyle = "cornflowerblue";
ctx.fillRect(0, 0, stage.width, stage.height);

// Draw a non-transformed red rectangle on the left
ctx.fillStyle = "red";
ctx.fillRect(40, 80, 80, 80);

// Now, let's draw a rotated
// yellow rectangle on the right
// First, let's save our canvas context in order to
// easily restore it after our transformations
ctx.save();

// Next, we'll translate (move the origin) to the
// center of where we'll be drawing the rectangle
ctx.translate(240, 120);

// Any transformations applied from here on out
// will be relative to the origin of 240, 120
// Note that we're using radians to specify rotation
ctx.rotate(Math.PI / 4); // 45 degrees

// If we desired to scale the rectangle
// 1.5x normal size on both the x and y axis
// ctx.scale(1.5, 1.5);

// Now we're ready to draw our rectangle
// The difference this time is that our coordinates
// are relative to the origin, just like .rotate
ctx.fillStyle = "yellow";
ctx.fillRect(-40, -40, 80, 80);

// Finally, we restore our canvas context so
// that subsequent draws are not transformed
ctx.restore();
{% endhighlight %}

Tada! A rotated rectangle without rotating the entire canvas.

<div class="full-frame">
	<img
		alt="A simple example of a transformed rectangle in canvas"
		src="/media/images/posts/canvasTransform/simpleCanvasTransform.png">
</div>

Here's a [gist of the entire sample code][2]. Check out this [canvas graphics article on MDN][1] for more information.

[1]: https://developer.mozilla.org/en-US/docs/Web/Guide/Graphics/Drawing_graphics_with_canvas#Graphics_State
[2]: https://gist.github.com/geoffb/6392450
