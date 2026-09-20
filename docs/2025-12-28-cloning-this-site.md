---
title: "Cloning This Webiste & Getting Set-up for Development with Eleventy"
layout: docs.html
date: 2025-12-28
updated: 2026-09-21
tags: docs 
subject: ["webDev", "linux", "software"]
---

A quick guide for cloning this site's repository via git & getting set up for development on a new system. I use [Eleventy (11ty)](https://github.com/11ty/eleventy/) as a static site generator & [Airtable](https://airtable.com/) as a *sort of a CMS solution*. This documentation will walk through cloning this website's repository from [GitHub](https://github.com/makccr/makccr.github.io), installing all required dependencies, insuring all NPM plugins are installed, and testing to ensure that the new machine is ready for further development.

## Install Required Packages
```shell
#### Arch
sudo pacman -Syu git nodejs npm

#### Fedora
sudo dnf upgrade && sudo dnf install git nodejs npm

#### Ubuntu
sudo apt update && sudo apt upgrade; curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash - && sudo apt install -y nodejs; sudo apt install git npm

#### Free BSD
su -c "pkg update && pkg upgrade && pkg install git node npm"
```

## Clone the Site's Repository
1. Navigate to a suitable location, typically I will use a *~/Documents* folder
2. Clone the site from GitHub either via HTTPS or SSH: 

```shell
git clone git@github.com:makccr/makc.co
or
git clone https://github.com/makccr/makc.co
```

### Install 11ty & Required Plugins
```shell
npm install @11ty/eleventy @11ty/eleventy-img striptags @11ty/eleventy-plugin-rss @11ty/eleventy-plugin-syntaxhighlight; npm install luxon --save-dev
```

### Verify the New Instance is Ready for Development
The easiest way to verify that everything is working properly, is simply to attempt to compile and serve the eleventy site: 

```shell
npx @11ty/eleventy --serve
```

If all went well, a local version of the site can now be reached at *http://localhost:8080* in any web browser. So long as this command is running the site will continually recompile as changes are made. You can also manually compile the site with: 

```shell
npx @11ty/eleventy
```

When ready to commit changes to the site, just use the normal git process for doing so. The site is hosted on Netlify & any changes pushed to the *master* branch will go live immediately.

```shell
git add -A; git commit -m "message"; git push
```

--- 

## Helpful Formatting Blocks
### New Essay Header
```markdown
---
title: "TITLE TEXT"
layout: essay.html
date: YYYY-MM-DD
tags: essay 
subject: ["subject1", "subject2"]
---
```
### New Doc Header
```markdown
---
title: "TITLE"
layout: docs.html
date: YYYY-MM-DD
updated: YYYY-MM-DD
tags: docs
subject: ["subject1", "subject2"]
---
```
