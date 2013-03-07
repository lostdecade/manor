---
layout: article
title: Blog author attribution using Jekyll
author: geoff
---
{% assign lb = "{" %}
{% assign rb = "}" %}
{% assign lblb = "{{" %}
{% assign rbrb = "}}" %}
Since [converting our website/blog to use Jekyll][1] we've had a chance to dig a bit deeper into the usage of the framework. One of the first features we tackled was author attribution in blog posts. In this post I'll cover our approach in detail.

Our goal was to display, at the very least, the author's name and [Gravatar][2] on each blog post. Originally, we hard-coded these values in the [YAML Front Matter][3]. For example:

{% highlight yaml %}
---
layout: article
title: Catchy blog post title
post_author: Geoff Blair
post_gravatar: 76dbcc74021b8039f14c7b583978b56d
---
This is the post content.
{% endhighlight %}

Rendering this data was very straightforward:

{% highlight html %}
<div class="post">
	<div class="meta">
		<img src="http://www.gravatar.com/avatar/{{lblb}} page.post_gravatar {{rbrb}}?s=40">
		<span class="author">{{lblb}} page.post_author {{rbrb}}</span>
	</div>
	{{lblb}} content {{rbrb}}
</div>
{% endhighlight %}

This approach worked decently but has some obvious drawbacks. We found ourselves opening previous blog posts by the desired author and copy/pasting the author data into a new file. While this doesn't take up an extraordinary amount of time, there certainly had to be a more elegant solution.

Ideally, specifying an author would be as simple as adding a key `author: geoff` or `author: matt` to a blog post and looking up the rest of the info defined elsewhere.

After some reading the [Jekyll wiki page on Template Data][4] I found that Jekyll exposes anything in `_config.yml` through the `site` variable:

> As of 0.5.2, all data inside of your &#95;config.yml is now available through the site variable. So for example, if you have url: http://mysite.com in your configuration file, then in your posts and pages it can be used like so: \{\{ site.url \}\}.

With that in mind, I created a data structure in `_config.yml` to represent post authors:

{% highlight yaml %}
authors:
  matt:
    display_name: Matt Hackett
    gravatar: 60fd5218fff6927c0ed376cce01c5460
    email: matt@lostdecadegames.com
    web: http://www.richtaur.com/
    twitter: richtaur
    github: richtaur
  geoff:
    display_name: Geoff Blair
    gravatar: 76dbcc74021b8039f14c7b583978b56d
    email: geoff@lostdecadegames.com
    web: http://www.geoffblair.com/
    twitter: geoffblair
    github: geoffb
{% endhighlight %}

Rendering author information is almost as easy as before, we just need to grab a reference to the current author's data in our post template:

{% highlight html %}
{{lb}}% assign author = site.authors[page.author] %{{rb}}
<div class="post">
	<div class="meta">
		<img src="http://www.gravatar.com/avatar/{{lblb}} author.gravatar {{rbrb}}?s=40">
		<span class="author">{{lblb}} author.display_name {{rbrb}}</span>
	</div>
	{{lblb}} content {{rbrb}}
</div>
{% endhighlight %}

Nice and clean!

Another benefit of this setup is that we can use the author data elsewhere, too. Take a look at [the source for our about page][5] for an example.

We're pretty happy with this approach. Let us know on [Twitter][6] or by [email][7] if you know of a better way!

[1]: http://www.lostdecadegames.com/our-new-blog-is-running-on-jekyll/
[2]: http://en.gravatar.com/
[3]: https://github.com/mojombo/jekyll/wiki/yaml-front-matter
[4]: https://github.com/mojombo/jekyll/wiki/Template-Data
[5]: https://github.com/lostdecade/manor/blob/master/about/index.html
[6]: https://twitter.com/#!/lostdecadegames
[7]: mailto:hello@lostdecadegames.com
