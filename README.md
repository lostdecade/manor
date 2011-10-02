# Lost Decade Games website

This is the source code for the [Lost Decade Games website][1]. Our site is open source and is hosted on [GitHub Pages][3] using the static site generator [Jekyll][4]. Please see our [blog post on using Jekyll][2] for more information.

## Authors

* [Geoff Blair][5]
* [Matt Hackett][6]

## Contact Us

* Email us: [hello@lostdecadegames.com][7]
* Follow us on Twitter: [@lostdecadegames][8]

## License

The following directories and their contents are Copyright Lost Decade Games, LLC. You may not reuse anything therein without our explicit permission:

* [_posts][9]
* [media/images][10]

All other directories and files are MIT Licensed.

## Development Setup

Here are the steps you'll need to take in order to get this site running locally.

First, you will need to install [GSL][12] (Gnu Scientific Library) in order for the latent semantic indexing (`--lsi`) to work well. I installed it via [Homebrew][1]. The catch here is that you'll need version 1.14 in order for the Ruby gsl gem to build correctly. You can install specific versions of packages using the `brew versions` command.

Follow these steps to install gsl via Homebrew:

	# Go into your Homebrew folder (maybe be different if you installed Homebrew elsewhere)
	cd /usr/local
	
	# List out the versions of gsl
	brew versions gsl
	
	# Output will look like this:
	# 1.15     git checkout d0dfc22 Library/Formula/gsl.rb
	# 1.14     git checkout 83ed494 Library/Formula/gsl.rb
	# 1.13     git checkout ea643fe Library/Formula/gsl.rb
	
	# Checkout and install the 1.14 version of gsl
	git checkout 83ed494 Library/Formula/gsl.rb
	brew install gsl

Next, install the following RubyGems:

* jekyll
* pygmentize
* gsl

by using this command:

	sudo gem install jekyll pygmentize gsl

Now just start the `jekyll` server in the repo folder:

	cd /path/to/my/copy/of/ldg/
	jeykll

[1]: http://www.lostdecadegames.com
[2]: http://www.lostdecadegames.com/our-new-blog-is-running-on-jekyll/
[3]: http://pages.github.com/
[4]: https://github.com/mojombo/jekyll/wiki
[5]: http://www.lostdecadegames.com/contact/#geoff
[6]: http://www.lostdecadegames.com/contact/#matt
[7]: mailto:hello@lostdecadegames.com
[8]: http://twitter.com/#!/lostdecadegames
[9]: https://github.com/lostdecade/lostdecade.github.com/tree/master/_posts
[10]: https://github.com/lostdecade/lostdecade.github.com/tree/master/media/images
[11]: https://github.com/mxcl/homebrew
[12]: http://www.gnu.org/s/gsl/
