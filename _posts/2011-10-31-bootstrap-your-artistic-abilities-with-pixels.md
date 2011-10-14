---
layout: post
title: Bootstrap your artistic abilities with pixels
author: matt
published: false
---

So you want to make a game, but maybe there are hurdles blocking you. If you're a programmer like me, you can do everything yourself (to a point) but your game must at least have graphics! This is a problem.

I submit that you _can_ do it yourself, whether you're artistically challenged or not. You just need to bolster your artistic skills with the help of our little friends, pixels. Let's get started!

## Start small

First, start with just two pixels. Open your favorite image editing program (or just grab a sheet of graph paper). Let's make this image 1x2, meaning two pixels tall and 1 pixel wide. (Yes, we are starting extremely basic.)

Now try to draw a person. A man, a woman, or another little character for a game. My guess would be that most people will come up with something like this:

<div class="full-frame">
	<img alt="1x2 sprite" src="/media/images/posts/bootstrap_pixels/1x2.png">
</div>

Almost everyone will draw the same thing because the limitations are so severe. Some people might make a completely clothed character or a completely naked character, like one of these:

<div class="full-frame">
	<img alt="Two 1x2 sprites" src="/media/images/posts/bootstrap_pixels/1x2_x2.png">
</div>

But either way, they're very similar. Even the worst artist will make an image that will be strikingly similar to what the best artist would make under these limitations. This is an interestingly level playing field.

## Kick it up a knotch

Now let's make the canvas a bit bigger and use a reference. For the sake of familiarty and clarity, let's look at an image of Link from [The Legend of Zelda][1].

<div class="full-frame">
	<img alt="Link from Legend of Zelda" src="/media/images/posts/bootstrap_pixels/link.png">
</div>

Try to draw Link in a 4x4 grid. Your image might look something like this:

<div class="full-frame">
	<img alt="Link in 4x4 pixels" src="/media/images/posts/bootstrap_pixels/link_4x4.png">
</div>

Some shape is starting to take form and now we're diverging a little from what other artists might make given the same limitations. But we're still close to the best of what can be done under these restrictions.

Let's double up. Here's my attempt at the previous Link image on an 8x8 canvas:

<div class="full-frame">
	<img alt="Link in 8x8 pixels" src="/media/images/posts/bootstrap_pixels/link_8x8.png">
</div>

My guess is that this might be the sweet spot for many beginning artists to maximize what they can do under a given restriction. But even though you might be happy with your output at this resolution, you may be thinking that the limitation is too extreme to be creative and generate diverse graphics.

Not so! Take a gander at these heavily-used [Creative Commons sprites][2] that can be found in [little games][3] all over the web:

<div class="full-frame">
	<img alt="Spritesheet by oryx" src="/media/images/posts/bootstrap_pixels/spritesheet_by_oryx.png">
</div>

There is such a rich variety that the artist has exposed even with these extreme limitations. If we double up once more to 16x16, then truly the sky is the limit, as you can see in this amazing screenshot from [Final Fantasy VI][4], which employs 16x16 tiles:

<div class="full-frame">
	<img alt="Beautiful sprites from Final Fantasy VI" src="/media/images/posts/bootstrap_pixels/final_fantasy_vi.png">
</div>

Here I've added a 16x16 grid and enlarged a single tile to demonstrate where the boundaries are:

<div class="full-frame">
	<img alt="This time with a 16x16 grid" src="/media/images/posts/bootstrap_pixels/final_fantasy_vi_with_grid.png">
</div>

Working even with 16x16 tiles (that's 256 pixels!) may be beyond the skill level of many developers looking to boostrap their own art. What I'm trying to suggest is that there may be a comfort zone where you can produce decent pixel art -- at 8x8 or 12x12, or whatever feels good and you find acceptable.

Many games feature amazing art that requires the skill and dedication that only natural talent and thousands of hours of practice can produce. But if you're an indie game developer, a hobbyist or if you just want to bang something out quickly, your art doesn't necessarily need to be that fancy. Maybe for now you can make do with what you've got, empowered by the limitations of big, beautiful, blocky pixels.

## Additional resources

* [Depixelizing Pixel Art](http://fileslap.com/2Rm/Depixelizing%20%20Pixel%20%20Art)
* [JWK5's Drawing Tips](http://forums.tigsource.com/index.php?topic=16397.0)
* [Pixel Art tutorials](http://www.firefruitforge.com/?tutorials/Pixel_Art)
* [So you want to be a pixel artist?](http://gas13.ru/v3/tutorials/sywtbapa_almighty_grass_tile.php)
* [The Pixel Tutorial by Derek Yu](http://www.derekyu.com/?page_id=218)
* [The Spriter's Resources](http://www.spriters-resource.com/)

[1]: http://en.wikipedia.org/wiki/The_Legend_of_Zelda
[2]: http://forums.tigsource.com/index.php?topic=8970.0
[3]: https://github.com/richtaur/Valadria
[4]: http://en.wikipedia.org/wiki/Final_Fantasy_VI

Got any additional tips? Please let me know in the comments!
