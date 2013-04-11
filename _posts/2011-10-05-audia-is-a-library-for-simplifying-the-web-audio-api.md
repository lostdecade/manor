---
layout: article
title: Audia is a library for simplifying the Web Audio API
author: matt
---
After receiving numerous [requests on Twitter][1], I started working on a tutorial for playing sound in HTML5. You may have read about [previous frustrations with Audio][2] from the HTML5 developer community, and when I dug in recently, the situation was all-too familiar.

## Wrong tool for the job

In the latest version of Chrome, sound playback was unreliable, bits and pieces were missing from the API, and things just did not work as expected. Safari faired better, but it still felt like `Audio` was not ready for prime time. However, I think the problem was more of using the wrong tool for the job. Games need responsive, reliable, sometimes even dynamic sound playback, and because of this, `Audio` is not the best choice for game development.

A good way to think about it is by comparing the `Image` and `Audio` tags. Both are simple HTML elements that really just want `src` attributes, from which they'll fetch the media and display it in the document. For advanced image manipulation, `Canvas` is used, and for advanced audio manipulation, `AudioContext` can be used.

## Enter the Web Audio API

It turns out, the Web Audio API is here today and it is pretty badass. (By "here today" I really just mean Chrome, but it exists and works great even in the [stable channel][3].)

Just about the only documentation I could find was the [W3C Working Draft][4], but this was enough to meet feature parity with `Audio`. Fair warning to developers looking to toy around with it: **the API is extremely low-level** and cumbersome to use (but quite fun if that floats your boat!).

Here's what it takes to simply load up a sound file and play it:

{% highlight js %}
if (typeof AudioContext == "function") {
	var audioContext = new AudioContext();
} else if (typeof webkitAudioContext == "function") {
	var audioContext = new webkitAudioContext();
}

var source = audioContext.createBufferSource();
source.connect(audioContext.destination);

var xhr = new XMLHttpRequest();
xhr.open("GET", "your_sound_file.mp3", true);
xhr.responseType = "arraybuffer";
xhr.onload = function() {
	var buffer = audioContext.createBuffer(xhr.response, false);
	source.buffer = buffer;
	source.noteOn(0);
};
xhr.send();
{% endhighlight %}

That's a lot of code! Let's walk through it.

### 1. Create an instance of AudioContext

{% highlight js %}
if (typeof AudioContext == "function") {
	var audioContext = new AudioContext();
} else if (typeof webkitAudioContext == "function") {
	var audioContext = new webkitAudioContext();
}
{% endhighlight %}

Since this is bleeding-edge technology, we can't guarantee that `AudioContext` exists. Indeed, Chrome currently has the `webkitAudioContext` object (an experimental implementation). So before we can create a new instance we first have to check to see what we have available.

### 2. Create a buffer source and connect it to the audio output

{% highlight js %}
var source = audioContext.createBufferSource();
source.connect(audioContext.destination);
{% endhighlight %}

We request to create a buffer source and store it in the `source` variable. Then we connect the source to the audio context's `destination` property, which will hopefully be our computer's speakers!

### 3. Fetch the mp3 file

{% highlight js %}
var xhr = new XMLHttpRequest();
xhr.open("GET", "your_sound_file.mp3", true);
xhr.responseType = "arraybuffer";
xhr.onload = function() {
	// See step 4
};
xhr.send();
{% endhighlight %}

This might be a tad unexpected for JavaScript programmers who are accustomed to simply setting a property on an HTML node (for example. `myAudio.src = "my_sound.mp3";`), but to fetch our sound file we need to do it via an `XMLHttpRequest` object. This is basic AJAXy stuff, aside from needing to set `responseType` to "arraybuffer".

### 4. Create the sound buffer and play the sound

{% highlight js %}
var buffer = audioContext.createBuffer(xhr.response, false);
source.buffer = buffer;
source.noteOn(0);
{% endhighlight %}

This code makes up the contents of the above `XMLHttpRequest` object's `onload` method. First we create a buffer, passing in the XHR response and `false`. (That second parameter is "mixToMono", and we don't necessarily want our sound in mono, so we pass in `false`.) This buffer gets passed to the source by setting its `buffer` property.

Next, there's a call to the odd method `noteOn`. In simpler English, this would be `play`, but what is going on behind the scenes is much more complicated. The argument represents the time (in seconds) to begin playback. To make our playback begin immediately, we pass `0`.

Pretty involved just to play a sound, right? But the reward is well worth it, because now we have low-level access to our computer's sound and can implement [all kinds of goodies][5] like panning, filters and other neat effects.

## Introducing Audia

_[Jump straight to the demo?][6]_

While experimenting with this new API, I quickly discovered that a library to abstract away all this complication would be nice to have, so I wrote one. Here is what I call [Audia][7], which implements a very [straightforward API][8] while still providing some of the power of the Web Audio API. Here's an example of how it can be used:

{% highlight js %}
if (!Audia.supported) {
	alert("Oops, no AudioContext object found ...");
}

var attackSound = new Audia();
attackSound.onload = function () {
	attackSound.play();
};
attackSound.src = "audio/demoblin_attacks.mp3";
{% endhighlight %}

Or alternatively:

{% highlight js %}
var backgroundMusic = new Audia({
	src: "sewers.mp3",
	loop: true,
	volume: 0.5
});
{% endhighlight %}

Audio (especially as pertains to video games) is a little hobby of mine, so you can bet I'll be exposing more of the power behind the Web Audio API to [Audia][7]'s simple interface. So do [check out the demo][6] and let me know in the comments about any issues, feature requests, etc.

[1]: https://twitter.com/#!/lostdecadegames
[2]: http://www.phoboslab.org/log/2011/03/the-state-of-html5-audio
[3]: http://www.chromium.org/getting-involved/dev-channel
[4]: https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html
[5]: http://chromium.googlecode.com/svn/trunk/samples/audio/
[6]: /demos/audia/examples/
[7]: https://github.com/richtaur/audia
[8]: https://github.com/richtaur/audia#readme
