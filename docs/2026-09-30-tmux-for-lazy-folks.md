---
title: "Tmux for Lazy Folks"
layout: docs.html
date: 2026-09-30
updated: 2026-09-30
tags: docs 
subject: ["cli", "linux"]
---

Some basic tmux commands, as well as some shortcuts for people who just want a quick multiplexer, but don't want to think about it to much.

## Ensure Tmux is Installed

| OS                   | Install Python             |
| -------------------: | -------------------------- |
| **Arch Linux**       | `sudo pacman -S tmux`    |
| **Ubuntu/Debian**    | `sudo apt install tmux` |
| **Fedora**           | `sudo dnf install tmux` |
| **macOS + Homebrew** | `brew install tmux`      |
| **FreeBSD**          | `su && pkg install tmux`      |

### Create a Main/Master Session andior Connect to It
There are many benefits to using tmux, but perhaps the most salient is the ability to attach and detach from the same terminal session over several machines or several different points in time. For this reason, it's common to create a master or main session in which a user can always connect to. The standard syntax for creating a new tmux session is: 

```bash
tmux new -s main
```

However we can also use the command below to either: 
1. Create a session called `main`, or 
2. Attach to a previously existing session with the name: `main`. 

```bash
tmux new -A -s main
```

<p class="caption">
If one desired to do so, this would be a pretty great usecase for a bash or <a href="https://youtube.com/watch?v=KBh8lM3jeeE" target="_blank">zsh alias.</a>
</p>

The command above (`new -A -s main`) can be used to connect to a pre-existing connection, but it should also be noted that the standard syntax for doing this is: 

```bash
tmux attach -t main
```

### Disconnecting from Main/Master Session
`Ctrl+b`, then `d`.

Tmux will keep sessions alive if a SSH session disconnects (another feature), but it's not great practice to just kill a terminal window with a tmux session running.

### Some Movements and Tiling Stuffs 
| Keybinding | Action | 
| ---------- | -------| 
| `Ctrl+b`, then `arrow keys` | Navigate up, down, left and right. | 
| `Ctrl+b`, then `%` | Tile session vertically. | 
| `Ctrl+b`, then `"` | Tile session horizontaly. |  
| `Ctrl+b`, then `x` | Close selection pane. |  
| `Ctrl+b`, then `c` | New window. | 
| `Ctrl+b`, then `n` | Cycle windows. | 
| `Ctrl+b`, then `&` | Close current window. | 
| `Ctrl+b`, then `d` | Fully detach tmux session. | 

In case you didn't figure it out, `Ctrl+b` is the leader for just about every keybinding in tmux. 

