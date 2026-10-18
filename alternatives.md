---
layout: main.html
title: Alternative Software
description: This page is dedicated to tracking alternatives that I have swapped to in order to escape web platforms that I view as being loaded down with legacy corporate tracking and cruft, or AI injections into what should be simple tooling. 
---
<h1>{{ title }}</h1>

<p class='caption'>
This page was originally adapted from an <a href="http://makc.co/essays/fossing-my-site/">essay that I wrote</a> on the 18th of October in 2026. I created this page to maintain one source where I can track all the services that I end up replacing over this site's history.<br><br>
    <strong>Last Updated:</strong><br>{{ page.inputPath | lastModified }}<br><br>
    The full history of changes to this page can be tracked <a href="https://github.com/makccr/mak
c.co/commits/master/alternatives.md" target="_blank">here</a>.                     
</p>

{{ description }}

Originally what prompted this idea was a desire to move away from any and all Google services, after it became clear to me that the company had no interest in doing anything other than collecting and selling user data to anyone willing to buy said data. I didn't personally love using services that attempted to steal all of my own personal data, and when I started developing my personal website more intentionally, I also didn't love the idea of subjecting my site's users to the same tracking and data collection that annoyed me. Specifically the services that I used (and still use to a limited extent) were/are [YouTube](https://www.youtube.com/@makc) and [Google Analytics](https://analytics.google.com). 

As has been the case for several years at this point, my site's entire source code is version controlled and [publicly accessible](https://github.com/makccr/makc.co) for anyone who wants to audit the code. However this essay will attempt to (a) make the process of learning how my site works easier for web developers and normal users alike and (b) solicit advice from people more knowledgeable than myself on the subject. As should be assumed of any content on my [website](https://makc.co), [YouTube](https://youtube.com/@makc) or anywhere else; I do not claim to be an expert and recommend that any consumer validate anything I have said elsewhere, but I also freely welcome any criticism, constructive [or otherwise](https://makc.co/essays/good-advice-delivered-poorly/). 

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
