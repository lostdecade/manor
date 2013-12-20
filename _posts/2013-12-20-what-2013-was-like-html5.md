---
layout: article
title: "What it was like making HTML5 games fulltime in 2013"
author: matt
---
<div class="full-frame">
	<a href="http://www.lostdecadegames.com/">
		<img alt="What it was like making HTML5 games fulltime in 2013" src="/media/images/posts/2013/header.jpg" width="500" height="340">
	</a>
</div>

As the year comes to an end, we at [Lost Decade Games][1] like to take a step back to check our progress. One of the (few) unique aspects about our game studio is that we have chosen HTML5 as our development platform, a highly controversial technology. Let’s take a look and see how HTML5 has served us this year.

# How was HTML5 as a platform?

Technology is arguably the most important consideration when choosing a platform to develop on. If the tech is too hard to work with, it could compromise your ability to ship a quality experience. If the tech isn’t stable and robust, surely it’ll crack under the pressure of a large gaming audience!

The good news is that HTML5 on desktop is “ready” for prime time. Using the fantastic open source framework [node-webkit][2], we’ve been distributing desktop binaries on Windows, Mac OS X, and Linux for most of this year. All of our video, audio, input, and rendering demands have been met by HTML5. Performance is reasonable, development is fast, and our customers’ feedback has been overwhelmingly positive.

<div class="full-frame">
	<a href="http://www.wizardslizard.com/">
		<img alt="A Wizard's Lizard running in its own desktop wrapper" src="/media/images/posts/2013/awl.png" width="500" height="345">
	</a>
</div>

I’m happy to report that our current mountain of problems on desktop has nothing to do with the technology, and everything to do with design, marketing, and distribution. The same problems everyone has!

To distribute our HTML5 games on Google Play and the iOS App Store, we use Ludei’s [CocoonJS][3], which is an impressive and powerful product. Our HTML5 games work great for the most part, but performance can be a problem if your game is doing tons of computing or image compositing (which games tend to do). Simple 2d HTML5 games can be made quickly and efficiently, and distributed on native mobile stores. We’re very close to that “holy grail” of easy cross-platform development (and it’s pretty great).

<div class="full-frame">
	<img alt="Lava blade on iPhone?" src="/media/images/posts/2013/lavaBlade.png" width="500" height="258">
</div>

# How was the tooling?

HTML5 tooling has a long way to go. Flash developers are accustomed to having a rich IDE at their fingertips, and many of these developers making the move to HTML5 may be sorely disappointed by the lack of mature tools available.

We’ve been iterating on our own internal tools for about three years now, including a full-featured game engine, build scripts, and a skeletal animation editor. These things we’ve built for ourselves are good enough for our specific purposes, but studios new to the HTML5 scene will likely want to use pre-existing tools.

<div class="full-frame">
	<a href="https://twitter.com/richtaur/status/391264175474757632/photo/1">
		<img alt="Lost Decade Games' Doll Animation Tool" src="/media/images/posts/2013/dat.png" width="500" height="333">
	</a>
</div>

Regarding engines, [ImpactJS][4] was the leader of the pack, despite the $99 USD price tag. [Phaser][5] has been picking up steam as an open source alternative, and there are many other solid choices. The tooling has a long way to go, but things are looking bright for the future, with offerings like Intel’s [XDK][6] and PlayCanvas’s [cloud-based IDE][7] pushing forward every day.

# How did we make money?

As with any technology, there are many different approaches to monetizing an application. HTML5 doesn’t really have any limitations here, as it’s perfectly capable of supporting premium downloads, F2P with IAP, subscription models, or probably any other crazy scheme. That said, monetizing consumer products is hard, and this year it was easier for HTML5 games to make money through B2B deals.

Below is a pie chart breakdown of our revenue from 2013:

<div class="full-frame">
	<img alt="Lost Decade Games 2013 revenue pie chart" src="/media/images/posts/2013/revenue.png" width="500" height="300">
</div>

## Development Contracts

Contracts are primarily what kept us afloat in 2013. This essentially equates to other companies that have either already figured out the best way to monetize HTML5 games or (more often) they are flush with capital and eager to experiment in the space. These contracts tend to pay similar to what we used to make as web developers in Silicon Valley, but they also take up the lion’s share of our time. It’s closer to “employment” than we’d like to be, and probably where a lot of indies find themselves these days.

There's lots of interest in HTML5 from companies with money, and from what we've seen, they're spending more on contracts each year.

## Licenses

HTML5 gaming portals are popping up everywhere. They typically pay a one-time non-exclusive licensing fee for a quality mobile HTML5 game, ranging drastically in price. From what we’ve seen, an individual license could earn between $350-$2k USD, depending on the quality of the game and success of the partner. These numbers will likely decrease as more developers saturate the market. Many portals offer revenue split only, from which we’ve never seen better pay than the one-time fee.

These licenses seem like easy money on the surface, and once in a blue moon they are. The vast majority of licenses, however, end up being bloody time vampires. Portals usually want support for a dozen or more devices, going back as far as Android 2.1 and iOS 3. Since many of these portals are brand new, they tend to be very volatile. We’ve experienced companies switching contacts multiple times, pivoting away from HTML5, and even shutting down entirely during discussions.

<div class="full-frame">
	<a href="http://www.escapistmagazine.com/content/indie-speed-run/?game=250">
		<img alt="Lost Decade Games' Doll Animation Tool" src="/media/images/posts/2013/rttj.jpg" width="500" height="333">
	</a>
</div>

Still, licenses were the easiest way to make money with HTML5 games in 2013.

## Consumers

Developing and marketing HTML5 games directly to consumers? Good luck! You’re in the same crowded market as the rest of the world. HTML5 has some advantages, such as being able to provide a demo instantly in the browser, but are [demos even worthwhile][8] for developers? We got a big spike in this category by running our [Kickstarter][9] for <strike>Crypt Run</strike> [A Wizard’s Lizard][10] earlier this year. Additional sales have all come through Humble widgets.

# What games did we make?

One way to measure the effectiveness of a platform is to look at how productive its developers have been. So what was our output from 2013? Here is an incomplete list of the games we made:

<div class="full-frame">
	<img alt="LDG games in 2013" src="/media/images/posts/2013/games.jpg" width="500" height="611">
</div>

1. **Lava Blade** (turn-based strategy RPG, launched via our own [Humble widget][11])
1. **Rampart Rush** (unreleased, got tied up in publishing deals)
1. **Retreat to the Jeep!** ([Indie Speed Run 2013 entry][12])
1. **Midtown Mayhem** (unreleased, also tied up in publishing deals)

These games were developed while handling dozens of licenses and creating many [prototypes][13] to sharpen our skills and tools. Additionally, throughout almost the entire year we were developing [A Wizard’s Lizard][10] in one form or another. Any studio can always be more productive, but we're satisfied with what we were able to build on HTML5 this year.

# Summary

I believe 2013 was the year we started to see the gradual transition from experimental HTML5 games to production-quality HTML5 games. The tooling has a long way to go, but the money is there if you do quality work. Overall, it was a good year for HTML5 gaming.

[1]: /
[2]: https://github.com/rogerwang/node-webkit
[3]: https://www.ludei.com/cocoonjs/
[4]: http://impactjs.com/
[5]: http://phaser.io/
[6]: http://xdk-software.intel.com/
[7]: http://playcanvas.com/
[8]: http://www.gamasutra.com/blogs/CaspianPrince/20130605/193709/The_Demo_Is_Dead_Part_2.php
[9]: http://www.kickstarter.com/projects/richtaur/crypt-run-death-is-just-the-beginning
[10]: http://www.wizardslizard.com/
[11]: http://www.lavablade.com/
[12]: http://www.escapistmagazine.com/content/indie-speed-run/?game=250
[13]: https://chrome.google.com/webstore/detail/treasure-goblin/jgjgnceamhgknelfkpbhebhnphaeefho?hl=en-US
