---
title: "Recording & Transcoding 2:1 Screen-caps on Linux"
layout: docs.html
date: 2026-05-09
tags: docs
---

Some notes on setting up a custom display resolution on X11, transcoding H.264 media using ffmpeg, editing in Davinci Resolve, and then transcoding screen capture videos to the VP9 codec for delivery to YouTube & other video platforms.

## Required Software
* [ffmpeg](https://ffmpeg.org/): For transcoding media
* [xrandr](https://www.x.org/wiki/Projects/XRandR/): For setting a custom display resolution on X11
* [wlr-randr](https://github.com/emersion/wlr-randr): For setting a custom display resolution on Wayland

#### Optional
* [OBS](https://obsproject.com/): For recording screen
* [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve): An all around awesome NLE that runs on Linux, proprietary
* [Kdenlive](https://kdenlive.org/): A less than ideal, but usable NLE that is open-source

## Installation
**Note**: Installing Davinci Resolve on Linux requires a fairly specific process, documentation for installing can be found [here](https://makc.co/docs/install-resolve-on-linux/).

**Note**: *cvt* is used in this documentation and installed with the X11 utilities 

```bash
# Arch Linux
sudo pacman -Syu
sudo pacman -S obs-studio kdenlive ffmpeg xorg-xrandr

# Fedora 
sudo dnf upgrade --refresh -y
sudo dnf install -y \
https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm 

sudo dnf install -y obs-studio kdenlive ffmpeg xorg-x11-server-utils


# Ubuntu
sudo add-apt-repository universe
sudo apt update && sudo apt upgrade -y
sudo apt install -y obs-studio kdenlive ffmpeg x11-xserver-utils
```

## Changing A Display's Native Resolution
Depending on the display, it is sometimes possible to use the *cvt* command to generate a *modeline*, and then use *xrandr*'s *--addmode* flag to create a fully custom display resolution. Basic steps can be found below, or more detailed instructions can be viewed [here](https://youtu.be/IzFdqELyZbA):

```bash
cvt 3840 1920 60 # Generating Modeline at 3840x1920 & 60hz
# 3840x1920 59.97 Hz (CVT) hsync: 119.27 kHz; pclk: 629.75 MHz
Modeline "3840x1920_60.00"  629.75  3840 4144 4560 5280  1920 1923 1933 1989 -hsync +vsync

xrandr --output DP-2 --addmode "3840x1920_60.00"  \ # Adding output to X11 display
629.75  3840 4144 4560 5280  1920 1923 1933 1989 -hsync +vsync 
```


However, if using a display port connection, or a modern laptop that uses an eDP display, it is very often not possible to set a fully custom resolution. However, X11's tools for display scaling can be exploited to achieve virtually the same thing. In the case of the Thinkpad P1 that was used for this documentation, the native resolution is 3840x2160. The desired output video resolution is at a 2:1 aspect ratio, 3840x1920. Dividing the desired vertical resolution by the original vertical resolution, *1920 ÷ 2160*, gives a result of *0.888888888889*, which can be used as the vertical scale factor in *xrandr*.

```bash
xrandr --output DP-2 --mode 3840x2160 --scale 1x0.8889
```

**Notes**: 
    * The *wlr-randr* command functions as a clone of xrandr for Wayland, and will accomplish the same goal in Wayland window managers or desktop environments.
    * The scale factor will have to be reset after any screen recording.

```bash
xrandr --output DP-2 --mode 3840x2160 --scale 1x1
```

## Transcoding H.264
Unless using a [custom *ffmpeg* output](https://obsproject.com/forum/threads/full-custom-ffmpeg-output.99064/), OBS will only output video using the H.264 codec. This is a problem for a number of reasons when building a video creation pipeline on Linux: 
1. Fedora, Ubuntu & many other Linux distributions do not ship an iteration of *ffmpeg* that supports H.264 libraries.
2. Kdenlive will not allow users to edit H.264 video without a transcode. 
3. The free edition of Davinci Resolve will not work with H.264 at all when running on Linux.

Much of this is due to a [licensing fee structure](https://www.zdnet.com/article/a-closer-look-at-the-costs-and-fine-print-of-h-264-licenses/) implemented by [Via-LA](https://via-la.com/)-- but the end result is that, the first step in any editing pipeline has to be a transcode to escape the limitations of the H.264 codec. NLE friendly alternative codecs include, but are not limited to, AVID's [DNxHR](https://en.wikipedia.org/wiki/DNxHR_codec), GoPro's [CineForm](https://gopro.github.io/cineform-sdk/) and Apple's [ProRes](https://support.apple.com/en-us/102207). All three have varying degrees of support across Linux distributions, but ProRes typically works *out of the box* and is what this documentation will recommend.

```bash
ffmpeg -i INPUT.MOV \ # Calls ffmpeg and selects file to transcode 
-c:v prores_ks \ # "c:v" = codec for video, "prores_ks" = ProRes Codec
-profile:v 0 \ # How ProRes sets quality 0=proxy, 1=low, 2=high, 3=lossless
-c:a pcm_s16le \ # "c:a" = codec for audio, "pcm_s16le" is selecting 16-bit audio
OUTPUT.md # Gives a name for output

ffmpeg -i INPUT.MOV -c:v prores_ks -profile:v 0 -c:a pcm_s16le OUTPUT.MOV # Sample ProRes
ffmpeg -i INPUT.MOV -c:v dnxhr -profile:v dnxhr_lb -c:a pcm_s16le OUTPUT.MOV # Sample DNXHQ
ffmpeg -i INPUT.MOV -c:v cfhd -quality medium -c:a pcm_s16le OUTPUT.MOV # Sample Cineform 
```

Depending on use case, it is sometimes worth creating a bash script to handle this process. If this is desired, the use of input variables will make a script run more efficiently: 

```bash
ffmpeg -i $1 -c:v prores_ks -profile:v 0 -c:a pcm_s16le "prefix-$(basename "%1")"

# Usage
./scriptname.sh FILENAME.mov # Outputs a transcoded file named, prefix-FILENAME.mov
```

#### Bonus: Quick Audio Cleanup in Resolve
1. Drag audio onto timeline, select *Fairlight* panel.
2. Right-click audio track, select *Clip Options*, then *Normalize Audio*.
3. When the pop-up window appears, normalize audio to -1db.
4. Navigate to the *Mixer Panel*, select the *Plus sign* to add and effect, *EQ* menu, select *Fairlight EQ*.
5. To set up a basic noise gate: mute or reduce audio output on Band 1 & Band 2, which control 100hz & 120hz wavelengths respectively.
6. If there is any hissing or popping in narration, slightly lower the decibel level of Band 6.

## Transcoding for Delivery
When exporting from Davinci Resolve, once again we run into issues, as Resolve does not support exporting to the H.264 codec. Luckily, Google's [VP9](https://www.webmproject.org/vp9/) codecs has nearly all the same compression advantages as H.264 and none of the licensing issues. Unfortunately, Resolve also can't export to the VP9 codec. The easiest workaround is to export ProRes from Resolve and transcode to VP9 using *ffmpeg* for final delivery to a video sharing site:

```bash
ffmpeg -i INPUT.mov -c:v libvpx-vp9 -crf 35 -b:v 0 -c:a libopus -b:a 512k OUTPUT.webm

# The syntax for using an input variable is slightly different here, due to the changing file extension
ffmpeg -i "$1" -c:v libvpx-vp9 -crf 35 -b:v 0 -c:a libopus -b:a 512k "prefix-$(basename "$1" .mov).webm"
```
