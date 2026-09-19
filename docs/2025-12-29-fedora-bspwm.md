---
title: "Setting up BSPWM on Fedora Workstation"
layout: docs.html
date: 2025-12-29
updated: 2025-12-29
tags: docs 
subject: ["linux", "GUI", "OS", "ricing"]
---

A guide for setting up a working instance of [my BSPWM configuration](https://github.com/makccr/dot) on a clean install of [Fedora Workstation](https://fedoraproject.org/workstation/download). Note: *I have only tested this on version 43 and above on x86 platforms.*

## Install Required Packages
We need to first install all packages that are required by BSPWM and are referenced in my BSPWM configuration. Most packages can be installed via the dnf package manger:

```shell
sudo dnf upgrade && sudo dnf install xorg-x11-server-Xorg polybar dunst sxhkd bspwm picom feh flameshot redshift xrandr udiskie alacritty pavucontrol brightnessctl xbindkeys
```

**Note**: The only packages that are required for BSPWM to function are: 
* bspwm
* sxhkd
* xrandr
* X11-server

My polybar configuration will also use a few different scripts that will require API keys stored in a Dropbox folder. Installing and logging into the default Dropbox client is required for some polybar modules to work. In order to install dropbox, you must first download the appropriate rpm package from the [Dropbox website](https://linux.dropbox.com/packages/fedora/) & then install with: 

```shell
sudo dnf install ~/Downloads/DROPBOX-VERSION.rpm
```

Finally, BSPWM works a lot better with an application launcher of some sort. My configuration is set up to use a [custom build of dmenu](https://github.com/makccr/suckless/tree/main/dmenu) that will need to be installed. To install we will need to clone the repo via either HTTPS or SSH and then build the application.

```shell
cd ~/Documents; git clone git@github.com:makccr/suckless; cd suckless
# or
cd ~/Documents; git clone https://github.com/makccr/suckless.git; cd suckless
```

Once the repository is cloned, there is an install script located in the root folder, which needs to be run, however in order to build dmenu some X11 development headers to be installed on the system in question: 

```shell
sudo dnf install libX11-devel libXinerama-devel libXft-devel
```

```shell
./install.sh
```

**Note**: It is not necessary to install a custom iteration of demnu. Some amount of time and effort could be saved by simply downloading and installing the dmenu packages in dnf package manger: 

```shell
sudo dnf install dmenu
```

## Install Configuration Files & Fonts
First use git to clone my dot files repository and create symbolic links for my config and script directories.

```shell
cd ~/Documents; git clone git@github.com:makccr/dot; cd
# or
cd ~/Documents; git clone https://github.com/makccr/dot.git; cd
```

There is a setup script in the *.scripts/* folder of this repository as well. It should be noted however, that on a clean install of Fedora Workstation the *~/.config* folder will be populated. It is necessary to move these default configuration files somewhere before running the install script.

```shell
mv ~/.config ~/Documents/
```

At this point we can now run the *setup.sh* script, which will create symbolic links from the *~/Documents/dot* directory to the respective locations for all configs. **Important**: This script must be run from the users home directory (~/).

```shell
./~/Documents/dot/.scripts/setup.sh
```

At this point we can now add the default Fedora configs back into the *~/.config* folder: 

```shell
mv ~/Documents/.config/{*,.*} ~/.config
```

Lastly we need to install some fonts that polybar will be looking for in it's configuration. The easiest way to do this would be to simply install two font packages from dnf. 

```shell
sudo dnf install julietaula-montserrat-fonts nerd-fonts-hack
```

However, this is also a good opportunity to go ahead an install my full collection of fonts: 

```shell
git clone git@github.com:makccr/fonts; cd fonts; sudo cp -r makc-fonts/ /usr/share/fonts/
```

## Testing
One of the few issues I have run into, is the *bspwm.desktop* file not being created and put into */usr/share/xessions*. This will result in a situation where BSPWM can not be launched from the default login manger. In order to fix this we simply need to create a *bspwm.desktop* file in */usr/share/xsessions*. 

**Note**: Ensuring that *xorg-x11-server-Xorg* and *bspwm* packages are installed should prevent this problem from ever taking place, but it's still helpful to know how to fix the issue.

```shell
sudo nano /usr/share/xsessions/bspwm.desktop
```

Add the following text to the *.dekstop* file and save changes.

```shell
[Desktop Entry]
Name=BSPWM
Comment=Binary Space Partitioning Window Manager
Exec=/usr/bin/bspwm
Type=Application
```
