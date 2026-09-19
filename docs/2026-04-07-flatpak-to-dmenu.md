---
title: "Launch Any Package via Dmenu"
layout: docs.html
date: 2026-04-07
updated: 2026-04-07
tags: docs
subject: ["sofware", "scripting", "productivity", "ricing"]
---

Documentation for setting up Flatpack, Snap and other packages installed to non-standard locations to launch via dmenu and other minimal application launchers.

## Issue
By default demnu (and most other minimal app launchers) look(s) for packages installed in _/usr/bin_. This is where most packages installed via _apt_, _pacman_ or other package managers generally write to. However when installing apps with services like Flatpak or Canonical's Snap Store, the appImage is often placed elsewhere.

__Note__: I have found that Snap packages specifically often do launch via dmenu without issue, though not always. This fix will apply to any application that is installed to a non-standard location.

## Steps
#### Locate your newly installed package: 
* __Flatpak__ installs to _/var/lib/flatpak/exports/bin_
* __Snap Store__ typically installs to either _/var/lib/snapd/snap_ or _/snap_
* __Blackmagic__ installs Davinci Resolve in _/opt/resolve/bin_

#### Create a symlink to _/usr/bin_, where dmenu can find it: 
```bash
sudo ln -s /var/lib/flatpak/exports/bin/com.app.NAME /usr/bin/appNAME
```
Replace _appNAME_ with whatever you want to type into dmenu to launch the app. 

## Examples
#### PlexAMP (Flatpak)
```bash
sudo ln -s /var/lib/flatpak/exports/bin/com.plexamp.Plexamp /usr/bin/plexAMP
```

#### Davinci Resolve (Blackmagic installer)
```bash
sudo ln -s /opt/resolve/bin/resolve /usr/bin/resolve
```

## Source 
I found the original fix from [a gist](https://gist.github.com/curioswati/668e9e120ddd4b6f8d07dc28b5780d22) written by [Swati Jaiswal](https://github.com/curioswati).
