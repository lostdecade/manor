---
layout: article
title: "Mailbag: Frameworks, Canvas vs DOM, Native mobile"
author: geoff
---
We often get email from readers or podcast listeners asking to expand on certain topics. Many of these questions can be of value to all our readers so I'm going to start posting them Q&A style on the blog now and then. So, without further ado, on to this installment of LDG Mailbag!

## JavaScript Frameworks

> Firstly, I notice you don’t appear to use any Javascript frameworks for your projects.  Is there a particular reason for this?  I tend to use MooTools for the majority of apps as it just means that things are a bit simpler and more straight forward to code but over the past few months have been wondering if this is the right thing to do.

We've developed our own JavaScript game framework over the last year or so, called Djinn. It's a heavily canvas based game framework because we prefer to use canvas rather than DOM (more on that in the next question).

When we started developing HTML5 games, the available canvas based frameworks were few and far between. Since Matt and I have lots of JavaScript experience we decided to roll our own framework tailored exactly to our needs. However, that's not a choice I would recommend to everyone developing HTML5 games. There are a number of mature game frameworks out there these days and developing your own takes time away from actually creating games.

I'd suggest using a game focused framework as opposed to something like jQuery or MooTools because most of them weren't created specifically for browser based games. That said, if you're familiar with a certain framework and you're creating a DOM based game then it could be a good choice for your needs.

If you're looking for a game framework I'd have a look at [ImpactJS][1]. You'll need to purchase a license, but it's totally worth it in my opinion. Checkout our [interview with Domenic Dominic Szablewski][2], the creator of ImpactJS.

There are some open source options available as well, such as [Crafty][3]. Louis Stowasser, the creator, was also [a guest on Lostcast][4].

At the end of the day, you'll want to be using whatever framework fits your particular needs, coding style and project requirements. For example, a side-scrolling action game is much easier to develop building on ImpactJS than jQuery. However, a text or menu based game might be easier to develop using a more DOM centric framework.

## Canvas vs DOM

> The canvas object is featured very heavily in your games.  I played about with canvas coding in 2010(ish) and was put off by the very limited support in some browsers.  I know that the baseline browser has significantly improved but does the canvas offer that much improvement over moving elements on the page?  Generally I will change the position of a div element (or similar) to move something but know the canvas can do this.

Canvas support and performance is definitely much better these days. The canvas API has always been pretty straight-forward which makes browser differences less likely. At it's core, canvas is all about copying pixel data from images to the canvas and isn't as affected by the DOM box model or other browser specific layout quirks.

I find JavaScript to be a very elegant langauge sans the DOM. Instead of our games consisting of a bunch of code spread out across HTML, CSS and JavaScript we have almost no HTML and CSS code to deal with and maintain.

I personally like the canvas approach more because the concepts are closer to traditional game development. Some developers choose to go a hybrid route with canvas and DOM, but I prefer to keep our stack homogeneous. One benefit of that choice is that all our UI elements can be layered and animated in the same way as our in-game sprites.

Canvas also has a bunch of cool features including [filling and stroking paths][5] and [compositing operations][6]. Some of these can be replicated in DOM, but not as cleanly.

A downside to canvas is that being so low-level, you'll have to handle certain tasks yourself that the DOM would provide for free. For example, when rendering text in canvas you'll need to handle text wrapping explicity. User input controls is another area where DOM gives you a leg up, but in my experience it's been pretty easy to create re-usable canvas based input controls with our framework.

I believe that canvas based JavaScript code is more portable as well. There are quite a few native wrappers out there (such as [CocoonJS][8] or [Game Closure][7]) which simply excute your code inside one of the various JavaScript virtual machines (V8, SpiderMonkey, JavaScriptCore, etc) and implement the canvas calls behind the scenes using OpenGL or whatever graphics engine exists on that platform.

Again, using canvas, DOM or both definitely comes down to personal preference and project needs. The closer your game is to a tradional web app, the more you are likely to lean towards the DOM.

## Native mobile

> Finally I read the post about using the Game Closure framework to get Onslaught! Arena running on an iPad.  At the end of last year I had to develop my iPad orientated first web app (an interactive publication for a customer) and although I got quite a few things working OK such as finger swipes and similar, developing for the iPad clearly requires a slightly different approach to a regular web app.  To this end it’s an area that I’m really trying to push myself to learn more and possibly start developing some native apps.  Looking at the Game Closure site, it appears to basically be a development server for static html5 applications and a fully fledged JS framework, plus a compiler.  Did you have to recode parts of your game using their framework or did it largely just import in OK?  Are there any pitfalls you found when using it?

Integrating [Onslaught! Arena][9] with [Game Closure][7]'s tech was pretty easy. We had developed the game with a few main entry points such as handling input, updating the game world and rendering the game. Game Closure's framework took a similar approach so we simply wired up their handlers up to ours and everything mostly just worked.

While it was easy to wire up our existing game code, the end result wasn't extremely maintainable or able to leverage the advanced features of Game Closure's stack. To get the most benefit out of any JavaScript framework or development environment you should really build your game from the ground up on that platform.

I think the primary selling point of using Game Closure would be that it solves the framework, IDE and deployment hurdles in a single tool.

There are some framework agnostic solutions out there as well, such as [CocoonJS][8] or [PhoneGap][10] which will natively wrap pretty much any JavaScript game. My understanding is that PhoneGap embeds a browser which means it can handle CSS and DOM based games, while CocoonJS is better for primarily canvas based games as it maps canvas calls to OpenGL behind the scenes instead of relying on browser rendering.

[1]: http://impactjs.com/
[2]: /lostcast-episode-14-quite-an-impact/
[3]: http://craftyjs.com/
[4]: /lostcast-episode-2-code-like-a-fox/
[5]: https://developer.mozilla.org/en-US/docs/HTML/Canvas/Drawing_Graphics_with_Canvas#Using_Paths
[6]: https://developer.mozilla.org/en-US/docs/HTML/Canvas/Tutorial/Compositing
[7]: http://www.gameclosure.com/
[8]: http://www.ludei.com/tech/cocoonjs
[9]: /games/onslaught-arena
[10]: http://phonegap.com/
