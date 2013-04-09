---
layout: article
title: Onslaught! Arena takes 3rd place in the Pokki 1up Game Developer Contest
author: matt
tags: [onslaughtarena]
---
<div class="full-frame">
	<a href="/media/images/posts/pokki/announcement.jpg"><img alt="Onslaught! Arena up on the big screen" src="/media/images/posts/pokki/thumbnails/announcement.jpg"></a>
	<em>Onslaught! Arena up on the big screen at GDC</em>
</div>

Less than a week after [Onslaught! Arena went open source][1], it took home 3rd place in the [Pokki 1up Game Developer Contest][2]. This got us tickets to [GDC][3], a day of awesome fun with the Pokki team, and (last but not least), a cool **$7,000**. (If you listen to [our podcast][4] you know that [we're indie now](http://localhost:4000/lostcast-episode-10-indiependence-day/) so this is a real stress-reliever for us!)

## Developing with Pokki

Gotta say, it was really easy to work with [Pokki's tech](http://developers.pokki.com/) (though granted, we already had a full working game, so all we had to do was stick it into their stack). **It only took about an hour to integrate!** Their platform is basically [Chromium][5] stripped of its user interface, which means it's very similar to developing within Google Chrome. This is great; familiar tools like the Web Inspector are at your fingertips.

<div class="full-frame">
	<a href="/media/images/posts/pokki/3rd_place.png"><img alt="Onslaught! Arena takes 3rd place" src="/media/images/posts/pokki/thumbnails/3rd_place.png"></a>
	<em>Onslaught! Arena takes 3rd place</em>
</div>

We had to switch from mp3 to [ogg][6] for audio to work with Pokki. Can't really blame them here, as who wants to worry about [the crazy mp3 licenses][7]? I've got a handy [VLC-based CLI script][8] I use that made the conversion easier. Audio performance is also buggy and inconsistent (but we all know this is a problem with Chromium and will go away eventually).

We also had to include a minimize button in order to be accepted into their gallery. This was a straight-forward process and only took a few minutes.

## The other winners

<div class="full-frame">
	<a href="/media/images/posts/pokki/1_minotaur.jpg"><img alt="Nicklaus Liow sportin' a horse head" src="/media/images/posts/pokki/thumbnails/1_minotaur.jpg"></a>
	<em>Nicklaus Liow sportin' a horse head</em>
</div>

What about those other games, hm? First place went to [Nicklaus Liow][9] for his delightful game [Four Horsemen][10]. It's a simple puzzle game with a quirky theme and a ton of polish. He really knocked this one out of the park, and that song-and-dance tutorial really takes the edge off of teaching the player to play. Really well executed.

Second place went to [Evgeni Gordejev][11] and his wacky alien-physics game [Tupsu][12]. Evgeni was a particularly interesting developer to chat with, as this was the first game he'd developed. He also has a C++ background but chose to program in Java using Google's cross-platform game library [playn][13].

## Thanks Pokki!

<div class="full-frame">
	<a href="/media/images/posts/pokki/homepage.png"><img alt="The Pokki homepage after the contest" src="/media/images/posts/pokki/thumbnails/homepage.png"></a>
	<em>Anybody else dying to see the rest of those graphics?</em>
</div>

We spent most of Tuesday chatting with the Pokki team. They're a really smart, impressive group of developers who have a history of making impactful technology (some of them having founded [DivX][14]). They're **extremely** developer-friendly, which obviously we are thrilled about. Their plans for Pokki are numerous and ambitious, and I believe that they have the skill and experience do accomplish whatever they put their resources toward. Looking forward to seeing what's next!

[1]: http://www.lostdecadegames.com/an-onslaught-of-onslaught-news/
[2]: http://www.pokki.com/1up/
[3]: http://gdconf.com/
[4]: /lostcast/
[5]: http://www.chromium.org/Home
[6]: http://www.vorbis.com/
[7]: http://www.scirra.com/blog/64/why-you-shouldnt-use-mp3-in-your-html5-games
[8]: https://github.com/richtaur/dotfiles/blob/master/belmont/bash_profile.sh#L13
[9]: http://www.nutcasenightmare.com/
[10]: http://www.pokki.com/1up/#4horsemen
[11]: https://twitter.com/#!/gabumba
[12]: http://www.pokki.com/download/?name=Tupsu&etag=Pokki_Tupsu
[13]: http://code.google.com/p/playn/
[14]: http://www.divx.com/
