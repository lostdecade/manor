---
layout: article
title: "Goodbye GitHub, Hello AWS"
author: geoff
---
## The Honeymoon

If you follow this blog at all you probably know that we love [GitHub][1]. It's a great service with outstanding UI. GitHub is the reason that I now use git for all my source control needs.

When Matt and I [redesigned the Lost Decade Games website][5] we wanted to have a setup with easy deployment and scaling. [GitHub Pages][2] was a service that fit this bill nicely. Pages hosts your static site (generated via [Jekyll][3]) by simply pushing some code to GitHub.

Given that we were already paying customers, we got custom domain name support as well. Life was good for a time.

## The Breakup

Before long we started hitting some walls with GitHub & Pages.

For starters, GitHub's pricing model is ruthless. $25 a month gets you 10 private repos, which I feel is a complete ripoff. Want more repos? The next plan is $50/month for 20 private repos! Even as a two-person indie shop we hit the 10 private repo limit quite quickly.

In response, we started moving our inactive private repos to [BitBucket][4] which boasts unlimited private repos and monetizes on collaborator count. BitBucket is basically a bad clone of GitHub, which is fine, but we ended up having to deal with two separate repository hosts, and that was too painful to put up with.

Pages is semi-unreliable, as well. This isn't a direct criticism of GitHub; we're aware that keeping services up while [under DDoS attacks][12] is tough. But the fact of the matter is that too often we couldn't update our website because Pages was down.

One day pushes to our website repo stopped working. No error notifications. No push. Nothing. Turns out that if your build doesn't complete within 5 minutes, it fails silently. Bugs happen of course, but I'd much rather be able to jump on the server and figure things out than fire off emails to support and hope for a prompt response.

There are a few other nit-picky issues, but by this time we had decided that we were in dire need of a new solution for our git repo and website hosting.

## The Rebound

After falling out of love with GitHub I made a list of important requirements for our hosting needs:

* Easily scalable! I don't want to worry about spinning up new boxes to handle load for a static website.
* Unlimited (or a large number of) private repos
* Single command deployment with `git push`
* Cost effective!
* Control! Jekyll extensions, etc.

I had heard about [Amazon Web Services][6] (AWS) before, but for some reason I never thought it a practical solution for a company as small as ours.

Thankfully, AWS offers a [Free Usage Tier][7] which lets you get your feet wet with some generous limits. Taking advantage of this free tier I began messing around with various hosting solutions using [EC2][8] and [S3][9].

Straight away I spun up an EC2 micro instance which acted as our git/web server. In the `post-receive` hook for our website's repo I created a simple shell script which builds the site via Jekyll and pushes the result to the Apache document root. The Jekyll wiki has a nice [section on deployment][11] with similar scripts.

Not bad! We had git-push-to-deploy working as well as unlimited repos. However, I felt that the web server and git server shouldn't be combined. Running an EC2 instance for both servers isn't very cost efficient, either. Luckily, I stumbled upon the fact that [static websites can be hosted on S3][10]!

Hosting the website on S3 is great for a couple big reasons:

* No need to run Apache on an EC2 instance. Less complication and less expensive!
* Scaling is taken care of by S3, no messing around with EC2 load balancers, etc.

## Looking Ahead

Our website is now hosted out of S3 and if you're reading this post things are holding together pretty well!

GitHub is a great product but it's not geared towards a small business like ours. We'll still be hosting [our public code][13] there, but I'm much happier with our new stack.

All that said, there are bound to be issues with AWS which I'll likely blog about in the future as we encounter them.

Do you have a preferred setup for hosting static websites? Let us know in the comments!


[1]: https://github.com/
[2]: http://pages.github.com/
[3]: https://github.com/mojombo/jekyll
[4]: https://bitbucket.org/
[5]: /our-new-blog-is-running-on-jekyll/
[6]: http://aws.amazon.com/
[7]: http://aws.amazon.com/free/
[8]: http://aws.amazon.com/ec2/
[9]: http://aws.amazon.com/s3/
[10]: http://aws.typepad.com/aws/2011/02/host-your-static-website-on-amazon-s3.html
[11]: https://github.com/mojombo/jekyll/wiki/Deployment
[12]: https://github.com/blog/1036-about-this-week-s-availability
[13]: https://github.com/lostdecade
