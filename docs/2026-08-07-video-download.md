---
title: "Downloading a Video"
layout: docs.html
date: 2026-08-07
tags: docs 
---

A quick guide to downloading videos that are harder than they should be to download.

# Locating a File to Download
1. Toggle *Developer Mode* in any modern full-featured browser. Developer mode can be triggered in Chromium or Firefox by pressing *F12*.
2. Swap to the *Network* tab. 
3. Reload web page if necessary and ensure video playback has been triggered.
4. Monitor for any video files, using URL filters andior the Media category in the Developer menu.
5. Select individual requests and view the headers until a url with a video file is included, the video file will often be obscured, as in the following example: **https://videosite.com/remote_control.php?file=random-title-name.mp4&acctoken=random-token**

# Downloading the Video File 
1. Using either *curl* or *wget* use the full URL to download the video file. 
```bash
curl -L -O "https://videosite.com/remote_control.php?file=random-title-name.mp4&acctoken=random-token"
```
<p class="caption">or</p>

```bash
wget --content-disposition "https://videosite.com/remote_control.php?file=random-title-name.mp4&acctoken=random-token" 
```
<p class="caption"><em>ensure quotes around the video file URL are in place</em></p>

2. Multiple attempts may be neccasary if their are multiple video files located (ads in front of video, *et cetera*), however once the curl or wget process has started the file-size is usually a pretty good giveaway (18MB vs 250MB is a pretty clear difference and easy to discriminate against). 
3. When the download is complete, often times you will be left with something other than a video file, example: *remote_control.php* would most likely be the filename if downloading a video with the previously referenced sample URL. The file-size here is once again a pretty clear give-away, as most .php files won't be several hundred megabytes. 
4. Change the file-name and extension as you will, ensuring that the .php extension is changed to a video container. I have found that *.mp4* or *.mov* will almost always result in a playable video, but depending on the format of the original file, a few tries might be necessary. In any case, simply matching the file extension of the original file should always work.
