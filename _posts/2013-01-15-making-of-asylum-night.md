---
layout: article
title: "Asylum Night: making a tower defense game in 48 hours"
author: matt
tags: [asylumnight]
---
<div class="full-frame">
	<a href="http://www.escapistmagazine.com/content/indie-speed-run/?game=209">
		<img alt="Asylum Night" src="/media/images/posts/asylumNight/title.png">
	</a>
</div>

We recently participated in [Indie Speed Run](http://www.indiespeedrun.com/devsite/index.php), a new game jam apparently started by some members of [The Escapist](http://www.escapistmagazine.com/). Those who have already been exposed to other popular game jams such as [Ludum Dare](http://www.ludumdare.com/compo/) or [Global Game Jam](http://globalgamejam.org/) may find Indie Speed Run very familiar -- developers have a 48-hour window in which to develop a game based on a randomly generated theme (and in this case, element).

Indie Speed Run offered some unique additions to the typical game jam format. Of all the game jams out there, we chose to participate in this one for the following reasons:

* Well respected [group of judges](http://www.indiespeedrun.com/devsite/index.php?option=com_content&view=article&id=4&Itemid=4) helped legitimize the contest (also, who wouldn't love for [Notch](https://twitter.com/notch) or [Yahtzee](http://www.escapistmagazine.com/videos/view/zero-punctuation) to play their games?).
* Ability to use your own tools without having to open source them.
* Developers choose the 48-hour window that works for them.

Additionally, Indie Speed Run had a $25 entry fee which, while it probably turned off a few teams, surprisingly made us feel better about the whole process. It's a small amount of money that acted as a barrier to entry, meaning that only dedicated developers would participate.

# Our game: Asylum Night

<div class="full-frame">
	<a href="http://www.escapistmagazine.com/content/indie-speed-run/?game=209">
		<img alt="Asylum Night" src="/media/images/posts/asylumNight/gameplay1.png">
	</a>
</div>

Our randomly-generated theme and element were **telepathy** and **booby-traps**, respectively. We looked each up on Wikipedia and dictionaries to ensure that our understanding was correct (and to help give us ideas). One common trait of telepathy is that it can be used to move objects, which plays well with the booby-traps element. So we wanted to make a game where booby-traps could either be set or disabled by using one's mind.

<a class="after" href="http://www.escapistmagazine.com/content/indie-speed-run/?game=209">
	<img alt="Asylum Night" src="/media/images/posts/asylumNight/doctor.png">
</a>

Though we were obviously on a tight deadline, we knew that allocating several hours for game design would pay off in the end. So we rapidly discussed and threw out several concepts for various games. Pretty early on we settled on a mental hospital for the skin (graphics) of the game. Asylum Night could have been about a telepathic person in a castle or on the moon, but with the telepathy theme it seemed appropriate for the game to exist in a place dedicated to the mind.

We liked the idea of a player trying to navigate through a maze riddled with booby-traps, disarming them with telepathic abilities. But we know from experience that mazes need to be relatively deep and large to be compelling, which meant a scrolling tilemap and time we didn't have dedicated to content generation. A game where all the action took place on a single screen seemed doable, and we wanted something _that_ simple so we'd have plenty of time to polish it up.

Additionally, we preferred a side-scrolling perspective. Since we were allowed to use our internal tools in this game jam, we wanted to use them! One of our more powerful tools, the **Doll Animation Tool**, allows us to animate 2d sprites cheaply and effectively. For those familiar with the popular Kickstarter project [Spriter](http://www.brashmonkey.com/spriter.htm), it's a very similar tool.

<div class="full-frame">
	<img alt="Doll Animation Tool" src="/media/images/posts/asylumNight/dat.png">
</div>

After several ideas that didn't pan out, we settled on a tower defense game. Players would control a telepath kept in an insane asylum operated by murderous doctors. Using their telepathic powers, they could knock out doctors directly or set booby-traps to help protect them. The first day, Geoff banged out the game's model, I began working on art concepts, and [Joshua Morse](http://jmflava.com/) started composing music.

Geoff did a fantastic job with the game model. On the second night, I was playing through the game and it had a drastic difficulty spike. We wanted the game to be about surviving a week in an insane asylum, but on the fourth day the game became impossibly hard. Doctors would inevitably overrun the player and there was nothing, mathematically, that the player could do about it.

But on the second night, Geoff committed a major update to the model. After three more sessions, I was able to beat the game -- but just barely! This demonstrated the game's depth and learning curve. I think it's a game now that's impossible to beat on the first (or second!) play, but can be mastered with practice and learning. This is all Geoff's doing and I think it turned out great.

<div class="full-frame">
	<a href="http://www.escapistmagazine.com/content/indie-speed-run/?game=209">
		<img alt="Asylum Night" src="/media/images/posts/asylumNight/gameplay5.png">
	</a>
</div>

Joshua Morse also did a terrific job with the audio. The funky title screen can really get you into the groove! Joshua also took extra care to note when sounds would be repetitive and took steps to make them pleasing when they could easily have been irritating. You may notice while playing: sounds that happen often such as the use of basic abilities or doctors dying cycle through a handful of slightly different sounds. This means that if you kill three doctors in a row, you'll hear three distinct sounds, which I think makes the game much more enjoyable.

# Mini-mortem

<a class="before" href="http://www.escapistmagazine.com/content/indie-speed-run/?game=209">
	<img alt="Asylum Night" src="/media/images/posts/asylumNight/avatar.png">
</a>

We're really pleased with how Asylum Night came out, but it took more out of us than we expected. The second night, Geoff and I were both on 4-5 hours of sleep, which bled into the next day. So though we only planned for a 48-hour window, it ended up costing us 3-4 days of lost productivity on other projects. We could have avoided this by scoping the game down even more, or by cutting unnecessary polish.

On the plus side, I think we were able to deliver a very playable game in the allotted time. We also learned a lot in the process, such as when (and where) to cut corners to increase productivity, and the great feeling of motivation that comes from shipping immediately. This was the first 48-hour game jam for all three of us, and it was a wonderful experience. If you've been thinking about participating in a game jam but never have, consider this a gentle nudge!

# What's next for Asylum Night?

<div class="full-frame">
	<a href="http://www.escapistmagazine.com/content/indie-speed-run/?game=209">
		<img alt="Asylum Night" src="/media/images/posts/asylumNight/levelEnd.png">
	</a>
</div>

As a young independent company, we need to be frugal with regards to how we spend our time. We literally wouldn't have been able to afford to dedicate a couple of days to Indie Speed Run if we didn't think we could use the game to help pay our bills. With that in mind, we designed Asylum Night from the ground up to be mobile-friendly so that we could add it to our growing portfolio of HTML5 portal games. If you've got an Android or iOS device, [play Asylum Night](http://www.escapistmagazine.com/content/indie-speed-run/?game=209) in the browser -- it runs surprisingly well!

Additionally, designing for mobile will make it easy for us to launch the game natively on Android and iOS using Ludei's [CocoonJS](http://www.ludei.com/tech/cocoonjs) platform, so the next time you see Asylum Night, hopefully it will be in the App Store and Google Play.
