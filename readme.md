<a href="https://makc.co">
    <img src="https://makc.co/images/github-header.svg" alt="MAKC logo" title="MAKC" align="left" height="50" />
</a>



My personal website. The goal of this site is to act as: 

- A repository for downloading all of the content I have made publicly available over the years. 
- A place to store personal [documentation](https://makc.co/docs) and [essays](https://makc.co/essays). 
- A way to link to YouTube videos, or other external content. 
- A sandbox for me to experiment with new and old web technologies alike.

## History
My personal website has been around for well over a decade now (originally published in 2012 at [mackenziecriswell.com](https://mackenziecriswell.com)), and has utilized just about every web technology in existence. At various points in the site's history is has been a [Wordpress site](https://wordpress.com/), a [Squarespace site](https://www.squarespace.com/), a [Blogger project](https://www.blogger.com/), an [Adobe Muse website](https://www.youtube.com/watch?v=jnGGhMoqcXw) and in 2020 I even made the somewhat ill advised decision to give my site a [ground-up rebuild](https://www.youtube.com/watch?v=avjB5rQMm24&list=PLIYVhRocqRoT6yvieIyNehUz6VnB6hXhF&pp=sAgC) using nothing but vanilla HTML, CSS and JavaScript. While the rebuild of my site forced me to learn a lot, and made me much more familiar with the core technologies that serve the current world wide web; that experiment did not last very long. The simple reality is the for a website that requires any level of complexity beyond a simple homepage, there are frameworks that make building and maintaining much easier these days.

## Current Deployment

The current iteration of my site, [makc.co](https://makc.co), is a static site generated with [11ty](http://11ty.dev/http://11ty.dev/). In the past I have used various *half-ass* CMS solutions like [Airtable](https://airtable.com) to let me have a database without actually having to build one for some larger data sets (my [videos page](https://makc.co/videos) in particular); but more recently I've fully embraced the static site life and replaced even these elements with simple JSON files that eliminate the need for APIs that are slow even when they do work, and allow me to (a) still edit the database on the fly, but (b) deploy the site incredibly quickly. I still continue to toy around with different technologies, simply because I find it fun, but I have arrived at a fairly predictable stack: 

1. Simple markdown pages for writing and most web pages that don't require more complex design.
   - Nunjucks elements to simplify page generation. 
2. HTML for pages that required it. 
3. Structured CSS files that style different elements separately: 
```bash
site
│   build.js 
│   bundle.css      # Main CSS page that links everything together
│
└───style
│   │   header.css  # Styling just the <header> content
│   │   footer.css  # Styling just the <footer> content
│   │   color.css   # Defining color variable under :root, as well as fonts
│   │   body.css    # Styling all page elements
```
4. A static site generator to build the site and tie everything together. I like 11ty myself, but [Astro](https://astro.build/) & [Hugo](https://gohugo.io/) are also very good.
5. Separate branches for my public site and my own experimenting.
6. [Netlify](https://www.netlify.com/) to deploy on `master` and `development` branches, and handle DNS.

### Deployment Status
**makc.co**: Deployed from `master` branch.
   [![Netlify Status](https://api.netlify.com/api/v1/badges/65e8decd-139c-4349-901a-f77fa2183f59/deploy-status)](https://app.netlify.com/projects/makccr/deploys)

**dev.makc.co**: Deployed from `development` branch.
[![Netlify Status](https://api.netlify.com/api/v1/badges/2dafbe5b-4346-46f4-969c-1f6ce2cf5363/deploy-status)](https://app.netlify.com/projects/devmakccr/deploys)
