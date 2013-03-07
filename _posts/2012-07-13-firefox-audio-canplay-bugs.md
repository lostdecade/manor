---
layout: article
title: "Firefox Audio canplay bugs"
author: matt
---
We're getting geared up to launch our new game **Lunch Bug**, so we've (finally) been testing the game more thoroughly in browsers other than Google Chrome. In the process, it looks like I may have found a few audio bugs in Firefox.

There seem to be two bugs. The first bug is that Firefox throws the <code>canplay</code> and <code>canplaythrough</code> events twice when an audio file loads (they should only be thrown once). I could only reproduce this on Mac OS X.

Second, Firefox appears to fire the <code>canplay</code> and <code>canplaythrough</code> events when an audio instance's <code>currentTime</code> property is set. This is unexpected behavior and doesn't happen in other browsers. When talking with Geoff, it came up that there could be a case where this behavior might make sense: for example if <code>currentTime</code> was set to a value past what has loaded so far, perhaps <code>currentTime</code> could tell listeners that it cannot play.

However this behavior doesn't seem intentional, as it doesn't happen in other browsers and isn't mentioned (at least to my knowledge) in the W3C specification.

<a class="download-podcast" href="/demos/firefox_audio_canplay_bugs/">Show me the demonstration!</a>

The ridiculously large button above links to the <a href="/demos/firefox_audio_canplay_bugs/">demo</a> where you can try out the bugs for yourself, and I put the <a href="https://github.com/lostdecade/firefox_audio_canplay_bugs">source code on GitHub</a>.

By taking the time to create a concise demonstration, my hope is to make it easier for other developers to either help me figure out the confusion on my end, or if these are indeed bugs in Firefox, to ease the process of getting those fixed. On that note I've created two tickets using Mozilla's bug tracker:

* [Firefox on Mac throws canplay and canplaythrough events twice per audio load](https://bugzilla.mozilla.org/show_bug.cgi?id=773883)
* [Firefox throws canplay and canplaythrough events when currentTime is set](https://bugzilla.mozilla.org/show_bug.cgi?id=773885)

What do you think? Was the demonstration easy to follow? Do these bugs look legitimate? If so, do you know any Mozilla engineers?
