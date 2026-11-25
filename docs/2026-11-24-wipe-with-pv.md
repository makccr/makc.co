---
title: "Wipe Out a Hard Drive with PV"
layout: docs.html
date: 2026-11-24
tags: docs
subject: [ "System Administration" ]
description: "A guide to using pv to wipe out a disk. A simple and easy tool that can do the same thing as tools like dban or ShredOS, but just as well and faster."
---

A guide to using simple linux tools to wipe data off a drive. Tools like [Derrick's Boot & Nuke](https://dban.org/) or [ShredOS](https://shredos.net/) claim to do a great job of wiping data off used hard drives. The problem is that, ensuring data is erased from a used drive via any method other than sending a drill bit through the platter, isn't going to do what it claims. Dban and ShredOS function by writing several series of data over top of the pre-existing data, which is a cumbersome and long process that may or may not, but definitely won't do anything more than simply writing over all data with zeros using a tool like `pv`. It's also worth noting that while this method is quick and easy, as of 2026 there has yet to be an example of any advanced forensic data recovery method actually managing to recover data from a drive that was written over with zeros. 

## Identifying the Drive in Question
The first step is to identify the drive in question. The easiest way to do this is to list all drives attached to a system in question, `lsblk` is installed by default on nearly every Linux distribution and can be run with the `-f` flag to list all drives, their label, mountpoint, file system and other information:

```bash
lsblk -f

NAME        FSTYPE   FSVER LABEL     UUID               FSAVAIL FSUSE% MOUNTPOINTS
zram0       swap     1     zram0     AAAA-AAAA-AAAA                    [SWAP]
nvme0n1                                                                                  
├─nvme0n1p1 vfat     FAT32           BBBB-BBBB-BBBB        3.5G    11% /boot
└─nvme0n1p2 zfs_memb 5000  zpcachyos CCCC-CCCC-CCCC
sda
└─sda1      btrfs    5000            DDDD-DDDD-DDDD       16.8G    01%
```

Using a bit of deduction and common sense we can generally figure out which drives we are looking at. In the example above we have a nvme SSD with two partitions, and a SATA drive attached with one parition. The SATA drive has a bit over 16GiB available, and we can safely assume this is a flash drive. If we were looking to wipe the system drive in the laptop, we would pretty easily figure out that were wanting to target `/dve/nvme0n1`, and not `/dev/sda`. `lsblk` does not make it clear, but a link to all drives is stored in `/dev` and we can target it with the path: `/dev/drive_label`.

### Accessing the Drive to Wipe
As one might imagine, wiping a drive while that drive is running the OS and storing the very application that we are trying to wipe the drive with, is a pretty precarious situation to find oneself in. Luckily we can mitigate this by simply launching TailsOS, or some live linux image. Since both `lbslk` and `pv` are ubiquitous and available on most Linux distros by default, we can grab just about any image that supports live boot and roll with it. I have personally used this technique on a Ubuntu image, Manjaro image, the Arch Linux installer and TailsOS. I typically carry a USB key with TailsOS installed, and this works perfectly well for this application.

## Using `pv` to Wipe Drives
We can then use `pv` to wipe a drive in question. This process will work by writing over all of the data on the drive with zeros. Essentially every bit on the drive will be flipped to a zero and that will make data difficult to read. **IMPORTANT**: This is not meant as a permenant way to destroy data on a drive, no software means of wiping data is going to work the same way as physically bricking a hard drive via some means. This software process does however have at least a few advantages: 

- Making new OS install easier as there will be *no data* on the drive.
- Testing the performance of a drive, as we can watch the speed at which `pv` completes its operation and make some reasonable assumptions about drive performance.

To actually wipe the drive, simply run `pv` with the `-o` flag and using `/dev/zero` as input. (a) `-o` tells `pv` to write the data to a drive, and (b) `/dev/zero` tell pv to write nothing but zeros to the drive.

```bash
sudo pv /dev/zero -o /dev/nvme0n1

# Replace "/dev/nvme0n1" with your drive's label
```
