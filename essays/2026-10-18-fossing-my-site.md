---
title: "Open-Sourcing My Open-Source Website"
layout: essay.html
date: 2026-10-18
tags: essay 
subject: ["webDev"]
description: "An essay discussing my crusade to swap off of all bloated, AI-injected or otherwise compromised pieces of my web development toolkit, in favor of open-source solutions to the problems."
---

A few years ago I was stricken with a desire to move away from any and all Google services, after it became clear to me that the company had no interest in doing anything other than collecting and selling user data to anyone willing to buy it. I didn't personally love using services that attempted to steal all of my own personal data, and when I started developing my personal website more intentionally, I also didn't love the idea of subjecting my site's users to the same tracking and data collection that annoyed me. Specifically the services that I used and tried to get away from were [YouTube](https://www.youtube.com/@makc) and [Google Analytics](https://analytics.google.com). Both of these services have since been replaced or had their tracking mitigated with alternative open-source solutions. I've also found replacing bloated web services with open alternatives to be a genuinely fun hobby and an educational mission to dedicate my time to, and so have spent quite a bit of time investigating, experimenting with and implementing *better* solutions to common web development problems.

## TL;DR

| Old Service | New Tool or Process | Status | Implementation Notes | 
| ----------- | ------------------- | ------ | -------------------- | 
| [YouTube](https://youtube.com) | [Odysee](https://odysee.com/) & [Invidious](https://invidious.io/) | All are still in use. | Invidious requires zero setup, it's just a YouTube front-end. Odysee's set-up is easy but often stops working. |
| [Airtable](https://airtable.com) | Self-hosted | Fully replaced. | I used Airtable as a back-end for my [videos page](https://makc.co/videos). A JSON table is way easier and faster. | 
| [Google Fonts](https://fonts.google.com) | Self-hosted | Fully replaced. | Super easy to set up, as all you need is a font folder and some CSS definitions. 
| [Google Analytics](https://analytics.google.com) | [Umami](https://umami.is) | Fully replaced. | All that is required is making an account and adding one line to the `<head>` of your HTML. |
| [Font Awesome](https://fontawesome.com/), [Bootstrap Icons](https://icons.getbootstrap.com/) & [Nerd Fonts](https://www.nerdfonts.com/) | Self-hosted | Fully replaced. | It's comically easy to set up self-hosted fonts and icons.

### YouTube
I have been looking for a real alternative to YouTube for as long as I have been publishing videos online. As early as 2012 when I started my YouTube channel I posted to both YouTube and [Vimeo](https://vimeo.com/). When it became clear that Vimeo wasn't a real alternative, I posted only to YouTube for a while. Eventually I ended up creating an [Odysee](https://odysee.com) channel, as this service offered automatic synchronization between a YouTube and an Odysee channel. Largely, my experience with Odysee has been great, other than the fact that YouTube's API often breaks the synchronization between the two platforms, and the only way to solve the problem when this happens is to either manually upload videos to both platforms, or send emails to Odysee's support to get them to manually fix things for you. My experience with Odysee's support however has been great, so I wouldn't let that be the thing that stops anyone from dual posting to YouTube and Odysee. I do not however consider Odysee to be a true replacement for YouTube.

More recently I have also started including links to [Invidious](https://invidious.io) on my website. Invidious is simply an alternative front-end for YouTube that removes ads, tracking and is much more privacy focused than YouTube (obviously). Invidious is an open source project and doesn't actually host the front-end itself. Specifically my site links to the [nadeko.net](https://inv.nadeko.net/feed/popular) server, which happens to be the best for me geographically, but certainly might not be the best for all users of this site, in fact it almost certainly is. For this reason, I'm also not fully satisfied with Invidious as a solution and am a bit stuck in terms of the best move. For now at least, I simply list links to watch any video I create on YouTube, Odysee and Invidious. 

#### Watching YouTube
For my part, my watching of YouTube videos has fallen off almost as much as my uploading of YouTube videos (I think I've averaged one video a year for the past five or so years). Around the time that YouTube shorts was introduced and took over the platform, I found myself much less interested in viewing any content on YouTube. This is however a mistake that I have more recently tried to remedy, as I know there is still quite a bit of content worth watching on YouTube if you are willing to look for it. I am still unwilling to put the YouTube app on my cell phone, or watch YouTube anywhere other than on a proper desktop or laptop computer, where I can implement tools like Invidious or the [Unhook extension](https://unhook.app/) to heavily restrict tracking and/or YouTube's algorithm. I do find the much more pared down, nearly no algorithm version of YouTube provided by Unhook to be much more desirable, even if it does make it harder to find content from creators I'm not already familiar with. Much the same as my experience as a publisher on YouTube, I'm also deeply unsatisfied as a consumer of content on YouTube.

### Airtable
I used Airtable in the past, more to track my video creation pipeline than anything else. But when I first began developing my site with [11ty](https://www.11ty.dev/), I did also use Airtable as the back-end source for my site's [video page](https://makc.co/videos). I did this purely out of convenience as Airtable has a JavaScript API that makes this kind of integration pretty easy. However, it was clear from the start that this was a pretty dumb idea, as it made my site take significantly longer to build. Airtable, as a platform only ever got worse from the day I started using it. 

When I finally got around to looking for a replacement for Airtable, I found that a simple JSON table is more than powerful enough to do everything I need. My site now builds in a second or two, as I don't need to call out to Airtable's API every time I change my site, and the videos page in question also loads noticeably faster in development and on the live site. For anyone looking for more specific technical details, I wrote an [essay detailing the process](https://makc.co/essays/airtable-to-json/) of setting up JSON with 11ty, and [documentation](https://makc.co/docs/csv-to-json/) detailing the process of exporting an Airtable `.csv` file and converting it to JSON.

### Google Analytics
The swap off of Google Analytics is perhaps the easiest that I have yet to initiate, as there is zero effort beyond changing HTML headers required. There are several good alternatives to what is the standard analytic platform for web developers, but the one that I ended up choosing is an open source service called [Umami](https://umami.is/). Beyond simply making soy sauce taste delicious, Umami does precisely what it claims on the tin: provides simple tracking of web traffic events. Unlike services like [OpenPanel](https://openpanel.dev) however, Umami has a [free tier](https://umami.is/pricing) that they claim will be free forever for one site and up to 100,000 monthly events. To be clear I am not criticizing services like OpenPanel simply because they are paid services, especially since OpenPanel's pricing on low-traffic sites like mine is exceedingly reasonable, I'm just cheap.

In the case of Umami, setup could not possibly be simpler: 

1. Register an account on [umami.is](https://umami.is). 
2. Add your website's url in the site dashboard. 
3. Paste one line into your site's HTML header section: 
```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="YOUR-SITE-ID"></script>
```

### Google Fonts, Nerd Fonts, Bootstrap Icons & Font Awesome
I do want to be clear that I don't actually have a real problem with any of the font or icon services that I used to use. They all are fairly straightforward as parts of a solid web development toolkit, and I don't know of anything to gripe about, beyond Font Awesome being in the beginning stages of their own AI-injection phase. I used Google Fonts to serve all the fonts to my website for years, and used some combination of Bootstrap Icons, Font Awesome and Nerd Fonts to serve icons for the same amount of time. I would also certainly recommend any and all of these services to anyone who wants to get started in web development, but doesn't want to faff about with hosting everything themselves. 

The real issue is that over the past few years I have developed a real axe to grind against most of the big players in the tech world, not just Google. When it comes to Google, Meta, X, Microsoft or Amazon, I refuse to use any of their products or services, with the notable exception of YouTube (and MS Teams when I used to get paid to use it). This resentment alone is what filled me with a desire to move away from Google Fonts, and it just so happened that self-hosting fonts and icons is an easy enough process that I don't see the need to rely on any of these services anymore. 

Hosting fonts is as easy as creating a folder in your site's root directory and dropping in all the fonts you want to use, in my case `/_fonts/`. From there, all one needs to do is define each font in a CSS file, and reference it with the `font-family` name as it is defined in CSS: 

```css
@font-face {
  font-family: '3270';
  src: url('/_fonts/3270NerdFont-Regular.ttf') format('truetype');
}
@font-face {
  font-family: 'Jost Light';
  src: url('/_fonts/Jost-ExtraLight.ttf') format('truetype');
}
```

Replacing the icons, at least the way I did it, is a bit more complex, as you have to create a font and download a bunch of SVGs. However, the actual font can easily be generated with [Font Forge](https://fontforge.org/en-US/). And once a font has been made it can be defined in CSS, only requiring the extra step of assigning each character (icon) a CSS class to reference in your site: 

```css
/* Defining Icons*/
@font-face {
  font-display: auto;
  font-family: "MAKC Icons";
  font-style: normal;
  font-weight: 400;
  src: url("/_fonts/makc-icons.ttf") format('truetype');
}

/* Setting up an "icon" class to select the icon in the site*/
[class="icon"], [class^="icon-"], [class*=" icon-"] {
  display: inline-block;
  font-family: "MAKC Icons" !important;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: inherit; 
  vertical-align: middle; 
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

/* Defining the first few icons and assigning the class*/
.icon-youtube:before {
  content: "\e000";
}

.icon-sitemap:before {
  content: "\e002";
}
```

The icon can then be referenced at any point in the site with an empty `<i>` tag, with the proper class selected. Examples: 

```html
<i class="icon icon-youtube"></i>
<!-- OR -->
<i class="icon icon-sitemap"></i>
```

<img src="/essays/img/2026-10-18.jpg" alt="Font Forge in action" class="thirds">
<p class="caption">
A screenshot of me using Font Forge to import SVGs and define each one as an individual character in my icon font.
</p>

---

## Finding Alternatives
There are a few services that I would like to shout out for finding alternatives to web services, and software in general. Both [OpenAlternative](https://openalternative.co/) and [It's FOSS](https://itsfoss.com/) have been instrumental in helping me find alternatives to test and eventually implement. That being said, I also have to encourage anyone interested in ending their reliance on bloated or evil services to investigate self-hosting options where they are available. Well over 50% of the services that I have replaced on this site alone, have been replaced not by a better open-source service, but simply a tool of my own design. 

### Potential Future Chopping Block Items
I use [Netlify](https://www.netlify.com/) to host this, and a few other websites, most of which are published to a sub-domain of [makc.co](https://makc.co). I have however become increasingly frustrated with Netlify's AI injection into what is still an insanely powerful platform for hosting sites and managing DNS. At this point, Netlify still works well enough that I very rarely even have to touch my site's dashboard, so it's not something that actively annoys me enough that I have started experimenting with alternatives. I would however love for either Netlify to return to its former glory, or to start using an alternative that has near enough feature parity that I wouldn't need to turn maintaining my site into a full-time job.

As any readers might have guessed, I would also love a real alternative to YouTube, both as a viewer and as an occasional content creator. Unfortunately I have yet to come across anything that even claims to be a true alternative to YouTube. The only things that seem likely to even have the potential to compete with YouTube in the near future are either owned by another business that I would like to boycott altogether (Facebook or *the artist formerly known as Twitter*), or are owned/controlled by a government ([BiliBili](https://www.bilibili.com/)); neither of these are scenarios that excite me. It is possible to return to the glory days of everyone hosting their own videos online. It wasn't all that many years ago that I was personally rushing to [Video Copilot](https://www.videocopilot.net/) to watch videos that were hosted there and nowhere else. But it does seem like that phase of the internet might have seen its end.
