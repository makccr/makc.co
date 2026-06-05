---
title: "Copying a ISO Image to a USB Drive"
layout: docs.html
date: 2026-06-05
tags: docs 
---

# Required Items
* [pv](https://linux.die.net/man/1/pv). Don't use [dd](https://linux.die.net/man/1/dd). While it will often work, dd is a 50+ year old command, uses archaic syntax and provides little to no feedback on what it is doing.
* An [ISO image](https://archlinux.org/download/) (usually *.iso*, but the process will also work for *.raw.xz*, and some other archived images). 

# Steps
1. Insert a removable USB drive, and ensure that there is at least one partition large enough for the ISO image.
2. Use [lsblk](https://linux.die.net/man/8/lsblk) to check the drive name & partitions (very often a removable drive will be something like */dev/sda* or */dev/sdb*).
```bash
lsblk -f ## List block devices

## Look for something like the partition tree below

NAME        FSTYPE FSVER LABEL UUID  
sda                                   
└─sda1                                                                             
```
3. If the drive has no partition, [cfdisk](https://linux.die.net/man/8/cfdisk) is a user-friendly TUI tool that can create drive partitions.
```bash
sudo cfdisk /dev/sda
## Ensure changes are written before exiting the application
```
4. Write the ISO image to a partition on the drive:
```bash
sudo pv arch.iso -o /dev/sda1
```

## Optional Improvements
* **--sync** or **-Y** will use [fdatasync](https://linux.die.net/man/2/fdatasync) to synchronize the buffer cache after every write operation. This will sometimes improve the accuracy of pv's progress bar when writing data to a slow disk (like a USB stick). 

```bash
sudo pv arch.iso --sync -o /dev/sda1

## or

sudo pv arch.iso -Y -o /dev/sda1
```

* **--stats** or **-v** will show the transfer rate in bytes per second. 
```bash
sudo pv arch.ios --sync --stats -o /dev/sda1
```
