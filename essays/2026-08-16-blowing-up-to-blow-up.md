---
title: "<em>Blowing Up</em>, Just to Blow Up"
layout: essay.html
image: img/2026-08-16.jpg
date: 2026-08-16
tags: essay 
---

Recently I began the process of moving all of my [GitHub repositories](https://github.com/makcc/) to [Codeberg](https://codeberg.org/makccr/). I am far from the only person making this move in 2026; if anything, I'm well behind the curve. However, I did want to dedicate some time to detailing (a) how I am conducting my transition to Codeberg, and (b) the reasons why I felt that this move was necessary. 

First, for the foreseeable future my intention is to push my public facing repositories, such as my [dotfiles](https://codeberg.org/makccr/dot), or my [Vim2tor](https://github.com/makccr/vim2tor) project to both GitHub and Codeberg. Largely I view Codeberg as a *back-up plan*, as I still hope that GitHub itself can return to what it, in my view, once was: a reliably easy place to find, learn about and contribute to open-source software projects. My transition to Codeberg is something that feels *thrust upon me*, rather than a deliberate choice. However, even if GitHub returns to it's former pre-Microsoft and pre-unreliable-AI-slop-farm glory, I'll likely still push to both platforms, if for no other reason than to be in compliance with the old prepper one-liner: "Two is one, and one is none."

The process for doing this is very simple: 

```bash
cd REPO

# Ensure empty repository with the same name has been made on Codeberg, and any required SSH keys have been added to Codeberg

git remote set-url --add --push origin git@codeberg.org:USER/REPO
git remote set-url --add --push origin git@github.com:USER/REPO
```

And can be confirmed with: 

```bash
git remote -v

# Example Output
orgin	git@github.com:makccr/dot (fetch)
origin	git@github.com:makccr/dot (push)
origin	git@codeberg.org:makccr/dot (push)
```

However, if you would like more details for setting this up with the best practices in mind, I'll refer any readers interested to [Schalk Neethling's](https://schalkneethling.com/about/) [dedicated guide](https://schalkneethling.com/posts/pushing-to-github-and-codeberg-simultaneously-with-git/).

The more interesting question of course, is why the transition felt necessary now? The easiest answer is to point to the unquestionably degraded [reliability of the GitHub platform](https://mrshu.github.io/github-statuses/). GitHub claims to guarantee [99.9% uptime](https://checkupstream.com/reliability/github/sla) over the course of a calendar month, and while this goal sounds awesome, GitHub hasn't actually delivered on it in years (if ever). This point alone mandates that I look into having back-up options, as much like birth control, even 95% effectiveness, feels like asking for injury. Initially this desire for alternatives took the form of me spinning up a private Git server, but recently it's occurred to me that the proper thing to do, would be to also ensure there is a back-up for the public repositories as well. Codeberg in particular seems like a great choice for this, thanks to their recent commitments to banning both [AI generated code](https://codeberg.org/Codeberg/org/pulls/1253#issuecomment-19820434) & [cryptocurrency related projects](https://codeberg.org/Codeberg/org/pulls/1254) from their platform. Two stances that I am a big fan of, even if I'm unsure exactly how thoroughly these things can realistically be prevented from entering the platform.

This does bring us however to the biggest elephant in the room: the AI and big-business infestation of what used to be trustworthy and helpful projects online. The temptation to blame the constant degradation of online platforms on Artificial Intelligence in The Year of our Lord, 2026 is strong, mostly because AI is to blame for a really big chunk of it. However, there are still examples of projects going downhill for the good ol' fashioned reasons. Most notably for me is [Bitwarden](https://itsfoss.com/news/bitwarden-quiet-changes/), a password-manager who's troubles this year have had absolutely nothing to do with forcing AI into the platform. Rather, Bitwarden's unannounced change in leadership earlier this year, and silent fiddling with the [GRIT acronym](https://davescomputertips.com/bitwardens-new-direction-concerning/) on their website, in a fashion much the same as Google's famous removing ["Do No Evil"](https://en.wikipedia.org/wiki/Don%27t_be_evil) as their motto, was more than enough to push me to close my Bitwarden account and move to [Keepass](https://keepass.info/) a few months ago.

The problem is far bigger indeed than AI: Whether it's Meta buying Instagram and forcing everyone to an algorithmic timeline when I was in high school, or Amazon buying and slowly making [IMDb](https://imdb.com) less and less useful as time goes on, or even my beloved [Plex](https://watch.plex.tv) service insisting on shoving their own "free" TV and movies down my throat, and ignoring the fact that I've already added anything and everything I'd want to watch to my own server and just user their apps as a front-end to access that content - the list of projects that have *blown-up* just to blow up is staggering. In my view it has never been more important to be aware of where the tools you are using come from, and who owns them. Of course a great place to start is trying to shift usage towards open-source software, but even this, is not the golden ticket that it once seemed to be. Increasingly then, I have found my posture forced into a position of *always having a way out*. For just about every service I use to [power this website](https://makc.co/terms/), or just getting through my daily life I've found myself scheming up and documenting an escape plan. My dual pushing to GitHub and Codeberg is simply the first public example of this newfound philosophy.
