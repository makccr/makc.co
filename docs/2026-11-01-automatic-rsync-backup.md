---
title: "Automatic File Backups with Rsync and Cron"
layout: docs.html
date: 2026-11-01
tags: docs
subject: ["System Administration"]
description: "A guide to creating a system for automatic backups using rsync and cron."
---

This documentation will walk through the process of creating an automatic backup system for a specific folder on a Unix or unix-like system. Specifically this information uses `rsync` and `cronie` to create a backup of an [Immich server](https://makc.co/docs/immich/) on an Arch Linux server, and send it to a FreeBSD sever, but the information should be broad enough that it can be translated to different scenarios with ease. 

## Installing and Starting Applications 
1. Install both `rsync` and `cronie` on the machine that will be sending the backup. 

| Distribution | Install Rsync and Cronie | 
| ---------: | ------------- | 
| Arch Linux | `sudo pacman -Syu cronie rsync` |
| Ubuntu/Debian | `sudo apt update && sudo apt install cron rsync` |
| Fedora | `sudo dnf install cronie rsync` |

2. Enable `cronie` to run as a system service. 

| Distribution | Enable Command | 
| ---------: | ------------- | 
| Arch Linux | `sudo systemctl enable --now cronie` |
| Ubuntu/Debian | `sudo systemctl enable --now cron` |
| Fedora | `sudo systemctl enable --now crond` |

3. Optionally check the status of the cron process with either: `crontab -l` or `systemctl status cron/cronie/crond`.

## Creating a Backup Script
I'll be using a very simple backup script that I adapted a bit, but mostly stole from [İbrahim Korucuoğlu](https://www.siberoloji.com/how-to-set-up-automatic-backups-with-rsync-on-arch-linux/). 

```bash
#!/bin/bash

# Source / Destination
SOURCE="$HOME/immich-app/"
DEST="USER@BACKUP.SERVER.IP:/folder/on/server/backups/"

# Logfile 
LOGFILE="$HOME/.backup_logs/immich_backup_$(date +'%Y-%m-%d_%H-%M-%S').log"

# rsync Magic
rsync -avh --partial --delete "$SOURCE" "$DEST" &> "$LOGFILE"
```

**Some Notes:**

* Here `SOURCE=` is set to the location of my Immich server, simply a folder in the main user's home directory, and the `DEST=` is set to the location of where I want to send my backup. 
* The `--delete` syntax in the `rsync` command removes any files that have been deleted while backing up, `-a` tells rsync to move the entire directory. 
* Flags like `-v` and `-h` make the output more readable to humans, these are not strictly speaking necessary, but including these flags make reading the output of the logfile easier. 
* The script will also create logfiles in `~/.backup_logs/` so that we can ensure the backups are taking place and troubleshoot if need be.
* Both of these servers are on the same LAN, so I can backup simply by passing the IP address of the destination server to `rsync`, if this were not the case it would be necessary to employ a VPN or reverse proxy set-up in order to backup remotely.

## Testing & SSH Key Set-up 
To make the script executable, use `chmod`: 
```bash
chmod +x script_name.sh
```

If a folder to store logs in does not already exist (it probably doesn't), it can be created with: 

```bash
mkdir .backup_logs/
```

The script can then be run with:
```bash
./script_name.sh
```

The immediate issue that will be hit, is that running the script will require password authentication by default. Since I am not completely insane, all the users on any servers on my LAN have passwords. However, having to manually authenticate with each backup, defeats the entire point of having an automated backup process in the first place. Since both of these servers exist on my LAN and don't connect to the outside world via anything but a VPN tunnel, I'm comfortable using a password-less SSH key in order to enable the transfer without authentication.

1. Create an SSH key with: 
```bash
ssh-keygen -t ed25519 -a 100 -C "you@mail.com"
```
When prompted press `[ENTER]` to create a key with no passphrase.

2. Copy the SSH key to the destination server: 
```bash
ssh-copy-id user@DEST-SERVER
```

3. Test the connection to make sure that you can SSH into the destination server without any additional authentication. 
```
ssh user@DEST-SERVER
```

If everything worked well, we now have a script hat will backup our full Immich library anytime it is ran. 

## Automation with Cron/Cronie
1. Run `crontab -e` to create a new process. This command uses `vi` as the default editor, so it might be necessary to install it with `sudo pacman -Syu vi`. 
2. Edit the file to run the script at a designated time every-day (0200 in my case):
```bash
0 2 * * * /home/yourusername/backup.sh
```

### Crontab Time Explained
The `0 2 * * *` in front of the previous command is what sets our script to run at 0200 every morning, but it's not always clear how this actually works if a user is unfamiliar with the crontab syntax. There are existing projects like [Cron Calculator](https://croncalculator.com/) that will abstract away this knowledge, but it's reasonably easy to understand if readers wan't to do so. Some examples that should be self-explanatory are below: 

| Frequency | Expression | 
| --------: | ---------- | 
| **Daily at 0200** | `0 2 * * * PATH-TO-SCRIPT.sh` | 
| **Weekdays at 0900** | `0 9 * * 1-5 PATH-TO-SCRIPT.sh` | 
| **Monthly at 0000 on 1st of Month** | `0 0 1 * * PATH-TO-SCRIPT.sh` | 
| **Every 15 Minues** | `*/15 * * * * PATH-TO-SCRIPT.sh` | 

#### Verbose Definitions
| Minute | Hour | Day of Month | Month | Day of Week | 
| :----: | :--: | :----------: | :---: | :---------: | 
| * | * | * | * | * |
