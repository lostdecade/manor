---
layout: post
title: Obfuscating JavaScript with Closure Compiler Advanced Optimizations
author: geoff
---
While working on our upcoming game, Onslaught! Arena, we wanted to obfuscate the JavaScript code as much as possible. Using tools like [YUICompressor][1] and [Google Closure Compiler][2] (with Standard Optimizations) just weren't enough. Luckily, Closure Complier has an "[Advanced Optimizations][3]" mode. This mode will really make your JavaScript gross and unreadable!

Here are some cases to watch out for along with some tips for those trying to make their JavaScript as unreadable as possible:

## Don't access object properties as string literals

Using Advanced Optimizations has its [pitfalls][4]. Because of it's super aggressive renaming, Closure Compiler will **break your code** if you access object properties using string literals. For example:

{% highlight js %}
var thing.stuff = {
	foo: 10,
	bar: 20
};

// This will break after Advanced Optimization :(
var foo = thing["stuff"].foo;
{% endhighlight %}

Closure will rewrite `thing.stuff` as something like `a.b` and accessing `a["stuff"]` isn't going to work.

## Don't use string literals

Closure Compiler won't obfuscate string literals for obvious reasons so just stay away from them as much as you can! Here's an example:

{% highlight js %}
// Bad. Can't obfuscate well.
myObject.state = "wounded";

// Good!
var States = {
	Wounded: 0,
	Stunned: 1,
	Attacking: 2
};
myObject.state = States.Wounded;
{% endhighlight %}

Instead of seeing `a.b = "wounded";` in your compiled code, you'll get something like `a.b = c.d;`.

## Stay away from built-in JavaScript object property names

If you want to achieve maximum obfuscation, don't use built-in JavaScript object properties such as `.position`, `.left` or `.width` in your custom objects. Here's an example:

{% highlight js %}
// Bad; "type" and "position" won't be obfuscated.
myObject.type = 1;
myObject.position = {x: 0, y: 1};

// Better; "thing" and "coords" will be obfuscated.
myObject.thing = 1;
myObject.coords = {x: 0, y: 1};
{% endhighlight %}

The list of properties such as in this example is pretty long and many of them are common, sensible names for properties. I'm certainly not recommending that you stop using all of them. Find the balance that makes sense to you but keep in mind the more you can refrain from using these properties, the more obfuscated your code will be.

Here's an (incomplete!) list of properties that won't be obfuscated:

{% highlight js %}
add, create, direction, display, execute, height, history, images, layers, left, load, map, normalize, now, paused, play, position, reset, scale, setInterval, setTimeout, size, start, stop, top, type, update, view, width, x, y
{% endhighlight %}

These are the lessons we've learned while obfuscating our code as much as possible to help protect our work. Can you think of any additional best practices to assist in this process?

[1]: http://developer.yahoo.com/yui/compressor/
[2]: http://code.google.com/closure/compiler/
[3]: http://code.google.com/closure/compiler/docs/api-tutorial3.html
[4]: http://code.google.com/closure/compiler/docs/api-tutorial3.html#dangers
