---
layout: article
title: "HTML5 Games on Desktop, Part 1: node-webkit"
author: geoff
---
One of the strengths of HTML5 is portability. The web is _pretty close_ to the "write once, run anywhere" platform dreamed of by developers. However, there are a few things holding back HTML5 games.

Even though many devices (PCs, mobile phones and tablets) can run web content pretty well, the major app stores aren't web friendly. Even on the desktop where HTML5 performance is great across most browsers, [Chrome Web Store][7] can't compete with [Steam][8] in terms of distribution and monetization.

Deploying games for desktop browsers and web-based stores (such as CWS and [Mozilla Marketplace][9]) is easy and you should absolutely do it. However, there are lots of other distribution channels on desktop that require native applications.

Demand for running web apps as desktop apps isn't new and there are quite a few solutions out there. I've personally tried [Adobe AIR][2], [Titanium][3] and [TideSDK][4]. All of them were too slow to be considered for games that require good canvas performance. [AppJS][5] looks promising, but I haven't really put it to the test yet.

With Chrome's stellar performance for canvas games, we _knew_ there had to be a solution that would simply run apps in a chrome-less webkit instance. And there was...

## The White Knight: node-webkit

A couple months back we discovered [node-webkit][1] by [Roger Wang][6]. The first thing I noticed about node-webkit was that our games were running **fast**. Google Chrome fast. Given that speed has historically been the deal-breaker with other desktop wrappers, this was very encouraging.

In addition to speed, node-webkit is very easy to use. Simply drop a `package.json` [manifest file][10] into the root of your HTML files, zip them up and your app is ready to run inside the node-webkit environment.

Here's an example of the manifest we use for our latest game, [Lava Blade][12]:

{% highlight js %}
{
	"name": "Lava Blade",
	"main": "index.html",
	"version": "1.0.6",
	"nodejs": false,
	"window": {
		"title": "Lava Blade",
		"width": 960,
		"height": 640,
		"toolbar": false,
		"position": "center",
		"icon": "media/images/icons/256.png"
	}
}
{% endhighlight %}

I've tweaked our build tools to output a node-webkit package along with our other builds. A typicaly node-webkit package starts with the following files:

* index.html (Minified JavaScript game source)
* media/ (Folder with assets such as images, fonts and sounds)
* pacakge.json (node-webkit manifest)

These files are then zipped up and named with the `.nw` extension using the following command:

{% highlight sh %}
zip -vr game-1.0.0.nw index.html media package.json
{% endhighlight %}

With [node-webkit binaries][13] installed on your system, you should be able to run this

[1]: https://github.com/rogerwang/node-webkit
[2]: http://www.adobe.com/products/air.html
[3]: http://www.appcelerator.com/platform/titanium-sdk/
[4]: http://www.tidesdk.org/
[5]: http://appjs.org/
[6]: https://github.com/rogerwang
[7]: https://chrome.google.com/webstore/category/home
[8]: http://store.steampowered.com/
[9]: https://marketplace.firefox.com/
[10]: https://github.com/rogerwang/node-webkit/wiki/Manifest-format
[11]: https://github.com/rogerwang/node-webkit/wiki/How-to-package-and-distribute-your-apps
[12]: http://www.lavablade.com
[13]: https://github.com/rogerwang/node-webkit#downloads
