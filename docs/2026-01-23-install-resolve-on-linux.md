---
title: "Install Davinci Resolve on Linux"
layout: docs.html
date: 2026-01-23
updated: 2026-01-23
tags: docs
subject: ["production", "software"]
---

Documentation for installing Black Magic Design's Davinci Resolve or Davinci Resolve Studio on Linux.

## Required Software
* [Davinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve)
* Proprietary Nvidia, or AMD Drivers
* unzip

**Important Note**: Davinci Resolve requires a GPU with OpenCL or CUDA support. Full compatibility information can be found on the [Khronos Group's list](https://www.khronos.org/conformance/adopters/conformant-products#opencl), but running Resolve on Linux will likely require a discrete GPU & may require configuring a laptop with hybrid graphics to run using only the GPU for display output.

**Important Note:** Resolve is only supported running with proprietary Nvidia drivers. Resolve will not run with [Nouveau](https://nouveau.freedesktop.org/) drivers installed.

**Important Note**: While Resolve included full Wayland support in Resolve 19, many users have reported issues. This documentation covers installing Resolve in an X11 environment.

## Installation
1. Ensure that the appropriate display driver's & unzip are installed.

```bash
# Arch (Nvidia)
sudo pacman -Syu nvidia nvidia-utils cuda opencl-nvidia unzip

# Arch (AMD)
sudo pacman -Syu rocm-opencl-runtime rocm-hip-runtime unzip

# Fedora (Nvida)
sudo dnf install -y \
https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm \
https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

sudo dnf install -y akmod-nvidia xorg-x11-drv-nvidia-cuda

# Fedora (AMD)
sudo dnf install -y rocm-opencl rocm-hip
sudo usermod -aG render,video $USER

# Ubuntu (Nvida)
sudo apt install nvidia-driver-550 nvidia-cuda-toolkit

# Ubuntu (AMD)
sudo apt install rocm-opencl-runtime rocm-hip-runtime
```

2. Download [Davinci Resolve Linux](https://www.blackmagicdesign.com/products/davinciresolve) from Black Magic Design's website. 

**Note**: The process is identical for the free version of Davinci Resole and Davinci Resolve Studio.

3. Extract the installer & make it executable.

```bash
cd ~/Downloads/ # Navigating to Downloads
unzip DaVinci_Resolve_*_Linux.zip # Unzipping zip file
chmod +x DaVinci_Resolve_*_Linux.run # Making install script executable
```

4. Install. 

```bash
sudo SKIP_PACKAGE_CHECK=1 ./DaVinci_Resolve_*_Linux.run
```

### Post Install Fixes
#### Fedora Libraries Fix
If installing on Fedora Linux it may be necessary to replace older libraries that conflict with Fedora workstation: 

```bash
cd /opt/resolve/libs
sudo mkdir disabled-libraries
sudo mv libglib* libgio* libgmodule* disabled-libraries # Move outdated libraries to disabled-libraries

sudo dnf install -y libxcrypt-compat # Instal updated libraries
```

#### Display Scaling Workaround
If using Davinci Resolve on a HiDPI display, scaling issues may be encountered. This is due to the fact that Resolve uses [QT's GUI toolkit](https://www.qt.io/), but often ignores userspace environment variables to control QT apps. A quick workaround is to create a wrapper script that will change the display scaling when launching Resolve, and revert the scaling when Resolve is closed: 

```bash
#!/bin/bash
xrandr --output DP-2 --scale 0.5x0.5 # Scale screen down by 2x
/opt/resolve/bin/resolve # Launch Resolve
xrandr --output DP-2 --scale 1x1 # Restore native scale
```

## Launching
When installing Davinci Resolve in a full Desktop environment, Resolve will most likely not launch. The easiest solution is to [add an entry](http://makc.co/docs/flatpak-to-dmenu/) in _/usr/bin_ for Resolve.

```bash
sudo ln -s /opt/resolve/bin/resolve /usr/bin/resolve
```
