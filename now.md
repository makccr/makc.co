---
layout: main.html
title: Now 
description: Inspired by Derek Sivers and the nownownow website, this page aims to serve two simple purposes; (1) let people know what I'm working on at any given moment & (2) keep me centered and remind me what I'm meant to be working on.
---

<h1>{{ title }}</h1>

<p class="caption">
    Inspired by <a href="https://sive.rs/nowff" target="_blank">Derek Sivers</a> and the <a href="https://nownownow.com/" target="_blank">nownownow website</a>, this page aims to serve two simple purposes; (1) let people know what I'm working on at any given moment & (2) keep me centered and remind me what I'm meant to be working on.
    <br><br><strong>Last Updated: </strong>22 September 2026<br>
</p>

## Projects
### Naomi's China
I am deep into the process of writing my first novel, codenamed "Naomi's China." I'm well over 300,000 words of writing deep, and nearly at the end of a first draft that I can begin to shape into something worth reading. 

I originally started writing this book after leaving my job at [TDCJ Polunsky](https://en.wikipedia.org/wiki/Allan_B._Polunsky_Unit) and realizing that in the five years since I had the idea for a different story altogether, I'd managed to write about 5,000 words. My idea was to write something that I intentionally didn't care that much about, and having just left a job at a max security state prison that housed Death Row inmates, I had no shortage of interesting stories. Of course the story quickly slipped the documentary style limitations that I originally placed on it, and now has very little to do with my time served at TDCJ whatsoever.

I have yet to decide if I don't know if I want to go through the process of trying to publish this book when it's completed. As mentioned earlier, I never had any desire to tell this particular story, and I'm actually not sure that it's the kind of story that would excite publishers even if I did. I am committed to fully finishing this book though, going through the motions, as if I were going to send it to every publisher in the country, if for no other reason than to prove to myself that I can.

### Vim2tor
I'm in the process of maintaining and crafting a major update for the [vim2tor](https://vim2tor.makc.co) app that I released a while ago. The goal of the application is to make learning intermediate to advanced features of the Vim and Neovim apps as easy as learning basic Vim features is with the `vimtutor` app that comes packaged with Vim. I am also working on getting the app into Linux repositories and homebrew, as manual installation is the only way to use the app right now.

### W8 App
I am working on transforming my [W8](https://w8.makc.co) project from a simple online compound interest calculator with sass into an iOS and Android budget app that I can use to help get my finances in order. I've tried many budgeting apps, and think that they all fail by trying to link up with bank accounts and automate everything. I'm the kind of person that needs to be reminded when I'm wasting money on nonsense, and specifically want something that requires me to interact with it every time I spend money.

Most likely I'll be looking to use React to build the first version of the application, as the technology should make it far easier to create a simple and unified experience across different platforms, and make it quite easy to port things over to a web app if I want to. However I am still in the designing process, and have some more research to do before I can commit to any particular technologies.


## Work
I am currently working as a low-voltage technician in the Houston area. I spend my days pulling CAT cable, setting up racks, and installing AV equipment. It's a pretty chill gig with decent enough pay and far less stress and time commitment than some of the [jobs I've had](https://www.linkedin.com/in/makccr/) in the past. 

## Art
A big part of my life is the art that I engage with, so I like to leave some links to stuff that I'm reading, watching, listening to or just can't get out of my head. 

### Books 
* I've been reading Arthur L. Herman's book [The Cave and the Light](https://www.arthur-herman.com/book/the-cave-and-the-light/). The book acts as a decent enough history of philosophers all the way from pre-Socratic thinkers all the way to those operating in the 20th century, but views the work of history's greatest philosophers through the lens of what Herman argues is a fundamental difference of opinion between Plato and Aristotle. 
* [Nikos Kazantzakis](https://www.nikoskazantzakisestate.org/) is quite possibly my favorite fiction author of all time, and I can't help but be in a constant state of rereading his work. Specifically I haven't been able to put down [Saviors of God](http://www.angel.net/~nic/askitiki.html) recently.
* I've been working my way through [The Harvard Classics](https://www.harvardclassics.net/) for the better part of a year now, thoroughly enjoying the classic liberal education that I'm giving myself for the [low price of $1 USD](https://makc.co/essays/harvard-classics/). As of writing this, I'm about to start Adam Smith's [The Wealth of Nations](https://www.gutenberg.org/files/3300/3300-h/3300-h.htm).

### Films & TV
* I watched [Dr. Strangelove](https://www.imdb.com/title/tt0057012/) for the first time a few months ago, I know it's a shame that I hadn't seen it until 2026. This reminded me of all the things I like about Kubrick's work and set me down the path of rewatching all of Stanley Kubrick's films. [Paths of Glory](https://www.imdb.com/title/tt0050825/), in my opinion, is the most underrated.
* I've been rewatching a lot of British comedies, everything from [Fawlty Towers](https://www.imdb.com/title/tt0072500/) to [The Cornetto Trilogy](https://en.wikipedia.org/wiki/Three_Flavours_Cornetto). The sense of humor is different enough that it's a nice change of pace from time to time.
* Like everyone else, I was mesmerized by Nolan's [The Odyssey](https://www.imdb.com/title/tt33764258/) when it came out. I don't think it's his best film by any means, but that didn't stop me from watching it four times in theaters.

### Music & Other stuff
* Since its release, Noah Kahan's album [The Great Divide](https://noahkahan.com/collections/the-great-divide) has been on repeat. 
* More recently I also had a chance to check out Medium Build's newest album, [King of Having Fun](https://www.mediumbuildmusic.com/music/#/). It is also very good. 
* I'm never not listening to Frank Sinatra and Bob Dylan albums.
* I rediscovered [John Martin's](https://en.wikipedia.org/wiki/John_Martin_(painter)) paintings. [Pandemonium](https://upload.wikimedia.org/wikipedia/commons/0/08/John_Martin_Le_Pandemonium_Louvre.JPG) in particular is nearly impossible to look away from. It's a Romantic-style interpretation of Pandemonium as it's described in John Milton's [Paradise Lost](https://www.poetryfoundation.org/poems/45718/paradise-lost-book-1-1674-version) poem, and it's obviously vibrant and beautiful, but as is the case with most great paintings, I can't quite articulate what I find so fascinating about it.

<h2>
Some all-time favorites
</h2>

<div class="now-carousel">
    <div class="now-track">
        {% for classic in classics %}
            <img src="{{ classic.img }}"
                 alt="{{ classic.title }}"
                 loading="lazy"
                 decoding="async">
        {% endfor %}

        {% for classic in classics %}
            <img src="{{ classic.img }}"
                 alt=""
                 aria-hidden="true"
                 loading="lazy"
                 decoding="async">
        {% endfor %}
    </div>
</div>
