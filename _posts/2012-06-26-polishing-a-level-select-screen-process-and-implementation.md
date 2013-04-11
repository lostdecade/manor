---
layout: article
title: "Polishing a Level Select screen: process and implementation"
author: matt
tags: [lunchbug]
---
We're just about ready to launch **Lunch Bug**, which means I've been polishing every rough edge until it shines. One of the roughest edges until just recently was the "level select" screen, where players progress through the game.

<div class="full-frame">
	<img alt="Lunch Bug level select (before)" src="/media/images/posts/lunch_bug/level_select/before_landscape.png">
</div>

The level select screen was simple and worked fine, but it wasn't much to look at and certainly wasn't fun to interact with. Also the number of rows in each column were uneven in portrait mode. We can do better!

<div class="full-frame">
	<img alt="Lunch Bug level select (before)" src="/media/images/posts/lunch_bug/level_select/before_portrait.png">
</div>

## The plan

After <a href="/media/images/posts/lunch_bug/level_select/sketch.jpg">some brainstorming</a>, I came up with this plan of attack:

1. Break up this single screen into multiple pages to enhance the feeling of progression.
2. Improve the user interface regarding current goal and level unlocking.
3. Polish up the screens with unique graphics and animations.

<div class="full-frame">
	<a href="/media/images/posts/lunch_bug/level_select/sketch.jpg">
		<img alt="Brainstorming" src="/media/images/posts/lunch_bug/level_select/sketch_thumb.jpg">
	</a>
</div>

## 1. Break it up

The first step was to split the level select screen into separate pages. Since **Lunch Bug** has 20 levels, 4 screens displaying 5 levels each felt like a good separation. Once the buttons were positioned correctly, I converted them into simple images instead of buttons.

<div class="full-frame">
	<img alt="Step 1: break up the screen into multiple pages" src="/media/images/posts/lunch_bug/level_select/button_org.png">
</div>

In this first iteration, I also threw in "back" and "next" buttons to allow users to navigate through the pages. The steps I take are deliberately small, in an attempt to isolate potential issues early on and avoid tripping on bugs as I get deeper into the implementation.

Once I removed the large majority of buttons from the design, I noticed that the screen looked especially bare. Always on the lookout for ways to give our graphics longer legs, it occurred to me that the overhanging leaves from the title screen would work here too.

<div class="full-frame">
	<img alt="Lunch Bug level select (old)" src="/media/images/posts/lunch_bug/level_select/title.png">
</div>

## 2. Better user interface

The previous level select screen wasn't just unpolished, it also had a clunky user interface. When players unlocked a new level, the button representing the next level would simply become enabled (changing its color from grey to black). Pretty lame, not very rewarding, and worst of all, not a very clear message to the player.

To fix this, I highlighted the current level button with what I ended up calling "guide bugs." I positioned these little guys in a circle around the highlighted button. This clearly messages to the player which level is next, and since they dance around, it makes the screen more entertaining to look at too.

<div class="full-frame">
	<img alt="Step 2: better user interface" src="/media/images/posts/lunch_bug/level_select/button_highlight.png">
</div>

I also added tweening animations when players unlock levels. The guide bugs swarm in on the button of the level the player just beat, then tween to the next level's button. It's a little reward to the player for finishing a level and reinforces what the player's next goal is.

## 3. Graphics and animation

The final step was graphical work. In place of the buttons which were only ever enabled or disabled, I wanted images with three states (locked, unlocked and current) that fit the game's theme. To solve this I opted for picnic baskets. Since they already have "closed" and "opened" states, they're easily visually mapped to "locked" and "unlocked." To represent the "current" state, I filled it with a berry and made it glow.

I also rendered the paths between levels in the same style as the background tiles in the game. This draws a visual path between the levels and helps fill the design out.

<div class="full-frame">
	<img alt="Step 3: graphics and animation" src="/media/images/posts/lunch_bug/level_select/path_dirt.png">
</div>

Lastly, nothing says polish like parallax scrolling! With a little Photoshop work, I made the leaves image into a repeating pattern. I then added a second leaves image stacked to the right, and after some easy tweening math, had them slowly scrolling along with the background. Parallax scrolling can be one of the simplest and most impactful visual effects to add when polishing your game.

## Take it further

Polish is one of those deep holes that you can spend tons of time on, but you'll always want to add more! Once I had the paginated level select screen in place, it created the perfect situation to introduce new graphics and music to the game.

<div class="full-frame">
	<img alt="Lunch Bug tiles" src="/media/images/posts/lunch_bug/level_select/tiles.png">
</div>

The first step was to add new repeating tile graphics to the mix. This rewards the player for progressing through the game with interesting new graphics to enjoy. Since **Lunch Bug**'s composer <a href="http://jmflava.com/">Joshua Morse</a> had already made four songs for the gameplay, it was easy to load those on the fly too.

<div class="full-frame">
	<img alt="Step 3: graphics and animation" src="/media/images/posts/lunch_bug/level_select/gameplay_rug.png">
</div>

As a strategic puzzle game, **Lunch Bug** can take a long time to master. The hope is that these new pages of levels will enhance the feeling of progression. Changing up the look and feel should also reinvigorate players to keep enjoying the game.

## Summary

Polish can be hard work but it is absolutely mandatory if you want your game to shine. This process took about one entire week of development, but I think it was well worth it. When a part of your game isn't polished shiny, the overall experience of playing it can suffer.

**Lunch Bug** is the next HTML5 game from **Lost Decade Games**, soon to be released on Facebook, Pokki, the Chrome Web Store, Mac App Store, iOS, Android and the open web. [Follow us on Twitter](https://twitter.com/#!/lostdecadegames) and we'll let you know when it's ready to play!
