---
layout: post
title: "Lava Sword Dev Diary (part 1)"
author: matt
---

<div class="full-frame"><img alt="Lava Sword environment #2" src="/media/images/posts/lava_sword/lava_sword_02.png"></div>

So I'm working on a new game tentatively titled **Lava Sword**. The goals of the game are pretty specific: we want an **arcade-style action game optimized for mobile browsers**. I've been thinking about [Jeff Vogel's recent blog][1] about how indie game devs should be looking at some of their favorite games for inspiration, so I decided to revisit some of mine.

## Influence

A few of my favorite arcade-style games when growing up include [Golden Axe][2], [Altered Beast][3] and [Magic Sword][4]. (As one of the few gamers into Turbo Duo back in the day, there's also some [Legendary Axe][5] influence, but that's pretty obscure!) These are mostly story-based fighting games with tight controls and complex battles. That's really not good for mobile!

Is there another approach I could take? Essentially I want to **capture the spirit of these games** on a mobile device. Beyond the advanced controller input, I thought about what else makes these games what they are. Big sprites is one. Vibrant, open, scrolling environments is another. Really, the **simplest** version of these games would consist of just moving around the environment and attacking. Hell, mobile can do that. So I got to work.

## Prototyping

<img alt="First pass: rectangles!" src="/media/images/posts/lava_sword/rectangles.png">

That's's the **first screenshot**, taken as early as there was anything to to take a screenshot of. As you can see, the game starts very simple. On a plain green background, I represent the player with a blue rectangle and monsters with red rectangles. Gold and other treasures are represented by yellow rectangles. This is the prototyping stage of game development where your game should **begin to be fun**. _If you can't find something entertaining at this stage, you shouldn't move on to the next stage._ You should **focus on making it fun**.

## Spriting

After finding the fun, I started working on some basic graphics. Nothing too complicated like animations and stuff; I'm not ready for that yet. For the time being, I mostly wanted to see about getting **parralax scrolling** into the mix, because if I run into some brick wall along the way, the game's basically a no-go. (…though mostly I just love parralax scrolling and couldn't resist.) I also wanted to make sure I wouldn't hit an inspirational brick wall, and graphics really help with that.

<div class="full-frame"><img alt="Lava Sword environment #1" src="/media/images/posts/lava_sword/lava_sword_01.png"></div>

It would be cool if eventually there were many environments, but this is adequate for now. And that's all I've got so far! So what's next for **Lava Sword**? Let's take a look at the ol' TODO list:

* Implement player/monster health
* Item/weapon drops
* Difficulty progression
* Game flow (title screen/gameplay/paused/game over)
* Player/monster animations
* Polish polish polish

Lots more graphics are in the works too! None of them has been "final" so far (especially the warrior, he needs a new approach). Here's where I'm currently at:

<img alt="More Lava Sword graphics coming" src="/media/images/posts/lava_sword/more_gfx_coming.png">

## More to come

If you find this kind of stuff interesting, you should [subscribe to our blog][6] and/or [follow us on Twitter][7], because I'll be posting another **Lava Sword** dev diary again soon (maybe with video). Thanks for reading!

[1]: http://www.gamasutra.com/view/feature/6698/principles_of_an_indie_game_bottom_.php
[2]: http://www.youtube.com/watch?v=hU6E8ZuTMxA
[3]: http://www.youtube.com/watch?v=9N93qVpk1Wc
[4]: http://www.youtube.com/watch?v=SKRXg0AISG4
[5]: http://www.youtube.com/watch?v=wrp5gsfqckU
[6]: {{ site.blog_feed_url }}
[7]: https://twitter.com/#!/LostDecadeGames
