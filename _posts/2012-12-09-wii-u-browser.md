---
layout: article
title: "The Wii U web browser's HTML5 gaming capabilities"
author: matt
tags: [lunchbug, onslaughtdefense]
---
<div class="full-frame">
	<img alt="HTML5 games on Wii U" src="/media/images/posts/wiiu/header.png" width="500" height="264">
</div>

_Visit this page in your Wii U browser and [play Onslaught! Defense][1]!_

# HTML5 games on consoles

Several weeks ago Microsoft released Internet Explorer on the 360. In my article [Play our HTML5 games on your Xbox 360][2] I discussed that browser's HTML5 gaming capabilities and the impact it could have on HTML5 game studios like ours. Around the same time, Nintendo launched their next-generation console [Wii U][3], which (after a ~3GB system update) also has its own internet browser.

This isn't the first time web browsers have been available on gaming consoles. Nintendo's previous console ([Wii](http://en.wikipedia.org/wiki/Wii)) featured a version of Opera called [Internet Channel](http://en.wikipedia.org/wiki/Internet_Channel). Sega's [Dreamcast](http://en.wikipedia.org/wiki/Dreamcast) had a web browser more than 10 years ago! But now in 2012, HTML5 games are on the rise. Is Nintendo's new browser capable of running them?

## The GOOD

<div class="full-frame">
	<img alt="Onslaught! Arena" src="/media/images/posts/wiiu/oa.jpg">
</div>

In the Wii U's browser, I visited the [Lost Decade Games arcade](http://arcade.lostdecadegames.com/) and was pleased that at least two of our games are playable out of the box. Here are some of the positive take-aways:

* Nearly **complete 2d canvas API** support.
* The Wii U controller's excellent d-pad **maps perfectly to the arrow keys** (up/down/left/right).
* The **A button is mapped to enter/return**.

Remarkably, the browser also [aced the Acid3 Test](https://twitter.com/richtaur/status/277918286149214210). Its rendering engine is slow but draws everything very well. Unfortunately, there's a lot more to say about what's bad.

## The BAD

<div class="full-frame">
	<img alt="Wii U browser's HTML5 Test score" src="/media/images/posts/wiiu/html5test/score.jpg">
</div>

Using the online [HTML5 Test][4] tool (as well as a few of my own scripts), I compiled the capabilities of the Wii U browser. Here are some of those results:

* [No Audio support](/media/images/posts/wiiu/html5test/audio.jpg)
* [No Web Audio API](/media/images/posts/wiiu/html5test/experimental.jpg)
* [No WebGL, WebSockets, or File API](/media/images/posts/wiiu/html5test/webGLetc.jpg)
* [No AppCache, some security](/media/images/posts/wiiu/html5test/webAppSecurity.jpg)
* [No WebWorkers](/media/images/posts/wiiu/html5test/storageWorkers.jpg)
* [Framerate is very low](/media/images/posts/wiiu/odFPS.jpg) (~10 FPS for tested games)

An `Audio` object exists but it doesn't support any standard audio formats (such as `mp3`, `ogg`, or even `wav`). Sadly there's **no WebGL support** at all. Though the `localStorage` object exists and will accept commands to get and set data, **the local storage data is wiped when the browser is closed**, breaking its functionality completely.

# It DOES play games!

<div class="full-frame">
	<img alt="Onslaught! Defense" src="/media/images/posts/wiiu/od.jpg">
</div>

Although there's no audio, you can't save your game, and the framerate is terrible, two of our games are playable. [Lunch Bug](http://www.lunchbug.com/) is even monetized via Google Wallet, though without a working local storage, there's really no point in buying anything.

If you only end up playing only one HTML5 game in your Wii U browser, make it [Onslaught! Defense][1]. I added keyboard functionality today, and since the Wii U controller's d-pad maps to the arrow keys, you can even play the game with the d-pad.

# Wii U controller's browser commands

Lastly, here's what seem to be the default browser commands of the controller's buttons:

* **A**: mouse click or enter/return key equivalent (USABLE!)
* **B**: `history.back()`
* **Y**: open bookmarks
* **X**: toggle TV visibility
* **d-pad**: arrow keys (USABLE!)
* **Left stick**: pan
* **Right stick**: zoom
* **-**: zoom out
* **+**: zoom in
* **L/R**: history.back/forward
* **LZ/RZ**: previous/next tab

(Feel free to [correct me](/contact/) if I'm wrong about any of these.)

We'll discuss the Wii U and its web browser in the next episode of [Lostcast](http://lostcast.fm/), our independent gamedev podcast. You should tune in!

[1]: http://arcade.lostdecadegames.com/onslaught_defense/
[2]: /play-our-games-on-your-xbox-360/
[3]: http://www.nintendo.com/wiiu
[4]: http://html5test.com/
