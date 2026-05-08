---
title: "Creating a Private Git Server"
layout: docs.html
date: 2026-05-08
tags: docs
---

As [GitHub](https://github.com) becomes [increasingly less reliable](https://mrshu.github.io/github-statuses/) (not to mention riddled with AI slop), many are looking for alternatives. This documentation will walk through the process of setting up a private Git server for any non public-facing repositories.

## Required Hardware
* A server. The required software is available on virtually every OS and should run on any modern CPU architecture. This documentation provides instructions for a POSIX-style shell.
* A client machine to *push* to the server, once again, virtually any OS or CPU architecture will work.

## Required Software 
* [Open SSH](https://www.openssh.org/)
* [Git](https://git-scm.com/)
* A VPN software, this guide uses: [Tailscale](https://tailscale.com/)

# Required set-up for both devices
On both the server and any machine you intend to push changes from, you will need to set-up a VPN connection and install OpenSSH, as well as an *optional* SSH key. The process is identical for each system: 

### Install Tailscale
```bash 
curl -fsSL https://tailscale.com/install.sh | sh
```

Authenticate your user account when prompted, or set up a new account on first use.

### Install OpenSSH
```bash
sudo pacman -S openssh  # Arch Linux

sudo apt update && sudo apt install openssh-server # Debian & Ubuntu

sudo dnf install openssh-server  # Fedora

sudo pkg install openssh  # FreeBSD

brew install openssh  # Homebrew

nix profile install nixpkgs#openssh  # Nix

```

# Server Set-up 
Remote into the server using SSH and the server's Tailscale generated IP address. This documentation will use the user name: "user" & a fake IP address of "100.27".

```bash
tailscale status  # To locate the server's IP

ssh user@100.27
```

1. Set up a location in which to store Git repositories
2. Create a directory with the name of the repository
3. Initiate a bare git repository

```bash
mkdir Repos && cd Repos
mkdir "REPO-NAME" && cd "REPO-NAME"

git init --bare
```

# Client Set-up
Create an empty directory with the same name (REPO-NAME) anywhere on the client system. 

```bash
mkdir REPO-NAME && cd REPO-NAME
```

Once inside of that directory run the following commands: 

```bash
git init  # Initiates the new repository
git add -A   # Stages all files
git commit -m "Initial commit"  # Commit's those changes

git remote add origin user@100.27:/home/user/Repos/REPO-NAME/

git branch  # Depending on Git version, changes might be commited to the "main" or "master" branch by default. Note which branch this repository defaulted to.

git push -u origin master 
# or
git push -u origin main
```

After this set-up any new changes can be pushed to the private server with the standard *git push* command, with no additional flags or options required.

**Note**: Git will only accept one origin to push to. If a typo or other error is made while running *remote add origin*, this can be fixed by running: 

```bash
git remote set-url origin user@server:/home/user/Repo/REPO-NAME/

git remote -v  # Can be used to confirm that a typo was made upon initial set-up as well
```

# Cloning Repo on a New Client
Ensure SSH and Tailscale are installed and configured on any new machine, and then run: 

```bash
git clone user@100.27:/home/user/Repos/REPO-NAME/
```

---

## Authentication with a SSH key
Authenticating transfers and remote operation via SSH keys is not only much more secure than a standard password, but also much better for any sort of CI, CD or cron job automation that a user might want to set up in the future. Luckily the *ssh-keygen* utility is packaged with *OpenSSH* upon install. This makes it very easy to create a SSH key on both the server and client.

```bash
ssh-keygen -t ed25519 -C "you@mail.com"

# if you are using a legacy system that does not support the Ed25519 hash algorithm use rsa
ssh-keygen -t rsa -b 4096 -C "you@mail.com"
```

After creating the key, add the client's public SSH key to the server's list of authorized keys. This can be done by manually copying and pasting the full public key, but OpenSSH has a built in utility that makes the process much easier.

```bash
ssh-copy-id user@100.27
```

**Note**: If a repository was initially cloned or initiated using HTTPS, it might be necessary to add the *ssh://* prefix to the URL. This is not necessary when using the instructions provided here and pushing to origin via a VPN connection, but still helpful information to have access to.

```bash
git remote set-url origin ssh://makc@100.27:/home/user/Repo/REPO-NAME/
```
