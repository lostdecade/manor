---
layout: page
title: "How to edit Lostcast"
author: matt
---
<div class="full-frame">
	<img alt="Lostcast logo" src="/media/images/lostcast/custom/pokki.png">
</div>

If you've been linked to this page, it's because you've expressed interest in helping with [Lostcast][1]. Thanks a lot! Here's a brief overview of the editing process. Some of this stuff is kinda technical, so please don't hesitate to [contact me][2] with any questions.

## First pass

The **first pass** consists of listening to the raw recording, taking **show notes**, and removing lots of stuff. While I listen, I make thees cuts:

* Remove **dead air** (Silence, as well as useless words like "ah", "um", "uh", etc.)
* Remove **mistakes** (We make a lot of them!)
* Remove **profanity** (I also add bleeping sound effects right away so I don't have to look for the profanity again later.)

Additionally, the first pass helps me find **breaks** in the conversation or **topic changes**. To separate these a little more clearly for the listener, I'll add **sound effects** like _pause_ or _unpause_. If the show currently has a sponsor, I'll also include the **sponsor's bumper** between one of these breaks.

Compiling show notes is easy enough. Whenever a topic comes up that's either timely, notable, or obscure, I jot it down and include it in the "Show notes" section of that episode's blog post. You can see an example [here][3]. Since our blog platform supports it, I use [markdown][4], but even just a plain ol' text file works.

During the initial listen, I also find the best mistake or otherwise hilarious-when-out-of-context moment, and save it for the [Moment of Zen][5], which is a short clip I include at the end of each episode.

This first pass is easily the most time-consuming step. Lostcast episodes usually only last ~50 minutes, so in theory a very effective editor could finish editing in about an hour. But from my experience, after all that editing, it takes 2-3 times as long as the recording itself.

## Sound effects and music

Just like a game, Lostcast is better with sound and music! The first thing I usually add is the show introduction, optionally including the sponsor mention. Then I'll add pause/unpause sounds to split up the breaks and "pickup-coin" sound effects over the profanity. I'll also optionally include the sponsor bumper somewhere within a break.

Near the end of each episode, we'll start to say sad things like, "Well, thanks for listening" or similar. Right before this stuff starts I like to include a glorious [Joshua Morse][6] song. Just a little bit into the song, at an appropriate moment, I'll fade it down and play it in the background while Geoff and I say our goodbyes. Then I fade it back in and let it play out. Lastly, I stick the "moment of Zen" at the end and that's finally it for editing.

## Post-production effects

[Compression][7] can be a difficult thing but is very important. Whenever you hear a podcast where anyone is too quiet, compression should have been used. I typically attach separate compression modules to myself and Geoff (and whoever else is on the show), and tweak primarily the _ratio_, _threshold_, and _gain_ until each person sounds nice and audible (close to 0dB overall) at normal volumes. (I know this isn't super helpful, but it's a complicated subject, sorry!)

**Limiting** is also crucial to ensure the audio isn't popping. Fortunately it's very easy to add. In Logic, for example, you can include a global limiter (typically set to 0dB) and you're done.

## Bouncing

I usually bounce from Logic as a .wav file and then use [LAME][8] at a variable bitrate. The command is something like this:

	lame -V 4 lostcast_episode_10_cromulence.wav

(But the program you use may have its own .mp3 export feature.)

Phew, I think that's it! If you're still interested, here's a bunch of useful downloads to play with:

* [Lostcast Sound Pack (6.7MB)][9] - contains the default intro (with no sponsor mention) and standard sound effects.
* [Lostcast Pokki sponsor pack (11MB)][10] - contains the intro with the Pokki mention as well as Pokki bumpers from Geoff and me.
* [Lostcast 22 raw bounce (746MB)][11] - contains two giant .wav files of the [episode 22][13] show.
* [Lostcast 22 Logic project (741MB)][12] - the fully edited and finished Logic file, so you can dig around and see how it's done. (Might be compatible with Garbage Band?)

If you're _still_ still interested, hopefully you'll be in touch. Thanks for reading!

[1]: http://lostcast.fm/
[2]: /contact/
[3]: https://raw.github.com/lostdecade/manor/master/_posts/2011-11-18-lostcast-episode-1-hello-world.md
[4]: http://daringfireball.net/projects/markdown/
[5]: http://www.thedailyshow.com/videos/tag/Moment+of+Zen
[6]: http://jmflava.com/
[7]: http://en.wikipedia.org/wiki/Dynamic_range_compression
[8]: http://lame.sourceforge.net/
[9]: http://media.lostdecadegames.com/zip/lostcast_sound_pack.zip
[10]: http://media.lostdecadegames.com/zip/lostcast_sponsor_pokki.zip
[11]: http://media.lostdecadegames.com/zip/lostcast_22_raw.zip
[12]: http://media.lostdecadegames.com/zip/lostcast_22_logic.zip
[13]: http://www.lostdecadegames.com/lostcast-22-htmld5/
