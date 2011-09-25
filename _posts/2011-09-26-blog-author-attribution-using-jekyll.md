---
layout: post
title: Blog author attribution using Jekyll
author: geoff
published: false
---
Since [converting our website/blog to use Jekyll][1] we've had a chance to dig a bit deeper into the usage of the framework. One of the first features we tackled was author attribution in blog posts. In this post I'll cover our approach in detail.

Our goal was to display, at the very least, the author's name and [Gravatar][2] on each blog post. Originally, these values were hard-coded in the [YAML Front Matter][3]. For example:

{% highlight yaml %}
layout: post
title: Catchy blog post title
post_author: Geoff Blair
post_gravatar: 76dbcc74021b8039f14c7b583978b56d
{% endhighlight %}

Rendering this data was very straightforward:

{% highlight html %}
{% raw %}
<div class="post">
	<div class="meta">
		<img src="http://www.gravatar.com/avatar/{{ page.post_gravatar }}?s=40">
		<span class="author">{{ page.post_author }}</span>
	</div>
	{{ content }}
</div>
{% endraw %}
{% endhighlight %}

This approached worked decently but has some drawbacks. We found ourselves opening previous blog posts by the desired author and copy/pasting the author data into a new file. While this doesn't take up an extraordinary amount of time, I am a programmer after all and knew there had to be a better way. Ideally, specifying an author would be as simple as adding a key `author: geoff` or `author: matt` to a blog post and looking up the rest of the info defined elsewhere.

After some reading the [Jekyll wiki page on Template Data][4] I found that Jekyll exposes anything in `_config.yml` through the `site` variable:

{% raw %}
> As of 0.5.2, all data inside of your &#95;config.yml is now available through the site variable. So for example, if you have url: http://mysite.com in your configuration file, then in your posts and pages it can be used like so: {{ site.url }}.
{% endraw %}

[1]: http://www.lostdecadegames.com/our-new-blog-is-running-on-jekyll/
[2]: http://en.gravatar.com/
[3]: https://github.com/mojombo/jekyll/wiki/yaml-front-matter
[4]: https://github.com/mojombo/jekyll/wiki/Template-Data
