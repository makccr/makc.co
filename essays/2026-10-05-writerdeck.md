---
title: "My Writerdeck"
layout: essay.html
date: 2026-10-05
tags: essay 
subject: ["CLI", "writing"]
description: "Based pretty heavily on a Writerdeck concept from Veronica Explains using Debian Trixie in a CLI only mode as a writerdeck, I detail how I use various CLI and TUI tools to create a distraction free writing environment."
---

**Note**: The core concepts for this project were heavily inspired by the [Veronica Explains](https://veronicaexplains.net/my-first-writerdeck/) article on the same topic. Good artists borrow, great artists steal. I'm a good artist.

## The Idea
The ideal *writerdeck* as it is defined by me, is a device that can be used to write with as little distraction as possible. It's not hard to see why the idea is idealized by so many, but in my experience using a designated device to write that only is capable of writing is every bit as helpful as one might imagine. My first experience writing in this type of environment was using a mechanical Smith Corona typewriter that I bought because I read that Hemmingway used the [same one](https://www.ithacajournal.com/story/news/local/2016/04/29/hemingway-groton-and-corona-typewriter/78308130/). The typewriter was a great experience, other than the fact that mechanical typewriters aren't nearly as good at capturing input as modern laptops and force you to type much slower. In the year of our lord 2026, there are much less pretentious ways to build a distraction free space for writing that are much more effective than a fifteen pound hunk of metal from the 70s (even if it is an objectively cool thing to own).

### Device Choice
The most important factor however, is the device choice for our writerdeck. For my part, I have long found that a simple desktop with a good mechanical keyboard is just about the best writing set-up possible. But the older I've gotten, the more I've found my time spread across multiple activities, and more generally chaotic, resulting in a reality in which I am far less likely to actually end up sitting in front of that *ideal* desktop set-up than I would have been even a few years ago. Thus, life has mandated that I find a more portable solution that allows me to write from whatever environment I might find myself in. While I wasn't thrilled about the idea of writing full-time on a laptop, I have been able to write from the beach, from the middle of the woods and from the roof of a tower in down-town Houston that's still under construction, so I guess that's cool. 

There are two giant factors that must be considered when selecting one's laptop of choice for this mission (and several smaller factors):

1. The keyboard
2. Battery life

There are a whole lot of laptops to consider, and a lot of trade-offs to be made. MacBooks for example will offer supreme battery life, but not without sacrificing keyboard quality. Also much of the battery life gains are lost if replacing MacOS with Linux, and I'm not willing to run MacOS on a writing machine. Old Thinkpads have amazing keyboards (for a laptop), but have limited battery life and are pretty cumbersome when compared with anything even close to modern. E-ink laptops are an interesting consideration, as battery life is almost guaranteed to be great, but build quality is often lacking here. Truth be told I have yet to find the perfect device for a dedicated writerdeck, and have opted to just use my EDC laptop of choice, the Thinkpad P1 as a general purpose laptop, and a writerdeck for the time being. This laptop is not ideal, as it has a fifteen inch screen (a bit bigger than I'd like), dedicated graphics and an older Intel chipset that isn't nearly as efficient as modern options. It's OLED screen and reasonably large built in battery however, make it more than acceptable for temporary use.

<img class="full" alt="My writerdeck" src="/essays/img/2026-10-05-deck.jpg"/>

<p class="caption">
My writerdeck in action on the front porch of a cabin in the middle of the woods. 
</p>

### Operating System
As far as I'm concerned the only real option for OS is Linux (maybe a BSD flavor if you just really wanted native zfs). The whole point of a writerdeck is to foster a distraction free writing environment for one's self, and there's nothing better for this, than a CLI only system. Linux alone as an OS offers the freedom to uninstall a GUI and create the perfect environment. Since we'd be uninstalling a GUI anyway, one of the most compelling choices here is to use [Arch Linux](https://archlinux.org/), as we can just never install a GUI to begin with. For my part, my Thinkpad P1 as already running CachyOS (an Arch derivate), so I just chose to employ Linux's virtual terminals to easily swap over into my writerdeck environment. For readers unfamiliar, nearly ever Linux distribution allows easy swapping between multiple virtual TTYs using the keybinding: `Ctrl+Alt+F*`. For example: `Ctrl+Alt+F3` will load `TTY3` and `Ctril+Alt+F4` will load `TTY4`. Generally, Linux distributions will load the GUI and user space into TTY1 or TTY2, so using TTY3 or above is a safe bet

#### KMSCON and TTY Customization
These virtual terminals, while great for quickly troubleshooting a system, are not exactly built for long term use by the end user. Luckily however there are projects that attempt to solve this problem. The best known of which is an application called `kmscon` which enables theming, font customization, and most importantly: font size scaling with `Ctrl +` & `Ctrl -`. We can install kmscon with: 

```bash
sudo pacman -Syu kmscon
```

Nothing will actually happen until we enable kmscon for either the entire system, or (in my case) just one TTY. If you are using a dedicated writerdeck machine and want kmscon to be enabled system wide, we would need to both (a) disable getty (the default TTY service), and (b) enable kmscon:

```bash
sudo systemctl disable getty@.service &&\
sudo systemctl enable kmsconvt@.service &&\
reboot
```

However, if like me, you want to preserve your ability to use your already installed GUI and simply intend to swap over to TTY3 when you're writing, this can be enabled with: 

```bash
sudo systemctl enable --now kmsconvt@tty3.service
```

After this process has been completed, we should be able to launch TTY3 with `Ctrl+Alt+F3` and be able to scale text with keybindings and use all of kmscon's other features, a reboot may be required though. The only real complaint that I had about kmscon was the fact that it used the default terminal colors, rather than my much subtler colorscheme that set-up for my terminals in hyprland and Neovim. To fix this we need to create a config in `/etc/kmscon/kmscon.conf`. There is a sample config located in `/etc/kmscon/kmscon.conf.example`, but I'll walk through the configuration changes I made below: 

1. I swapped the font to Hack Nerd font with `font-name=Hack Nerd Font` and made the default text size bigger with `font-size=30`. 
2. I incorporated a custom color scheme (Material Ocean). The version of Kmscon currently being shipped through Pacman (v10.0.4 as of writing) does not accept color values defined with hexadecimal, bur rather, requires colors defined with an RGB value, for example: `palette-black=76,86,106` or `palette-foreground=216,222,233`. Additionally I made sure that the kmscon background was set to pure black, `palette-background=0,0,0`, so that I could make sure I was taking advantage of the battery life savings and crispness of my laptop's OLED screen. 

The full config is below: 

```c
# Font
font-engine=freetype
font-name=Hack Nerd Font
font-size=30

# Colors
palette=custom

palette-black=76,86,106
palette-red=191,97,106
palette-green=163,190,140
palette-yellow=235,203,139
palette-blue=129,161,193
palette-magenta=180,142,173
palette-cyan=136,192,208
palette-light-grey=229,233,240

palette-dark-grey=76,86,106
palette-light-red=191,97,106
palette-light-green=163,190,140
palette-light-yellow=235,203,139
palette-light-blue=129,161,193
palette-light-magenta=180,142,173
palette-light-cyan=136,192,208
palette-white=229,233,240

palette-foreground=216,222,233
palette-background=0,0,0
```

#### Tmux
As much as distraction free writing is the goal here, it is nice to have a tiny bit of system metadata available to us from the TTY. Mainly what I'm after is time, date & battery life - the basics. As was done in the article that inspired this project, I'm going to use Tmux and it's built in status bar to accomplish this. We'll need to install Tmux and a utility called `acpi`, along with `grep` to print the battery percentage in the status bar: 

```bash
sudo pacman -Syu tmux acpi grep
```

Once the installation is complete, we can create a tmux config in `~/.tmux.conf` and get to work. The first thing that I'll do is move the tmux status bar to the top of the screen so that it doesn't interfere with my Neovim status bar, and set the background color of the status bar to black: 

```bash
set -g status-position top
set-option -g status-style "bg=black"
```

By default the tmux status bar displays active windows on the left side and the time and data on the right side of the status bar. All I want to do is add the battery to the right side of the status bar with the word-salad looking line that I'll explain below: 

```bash
set-window-option -g status-right "#[bg=green,fg=black] %a %d #[bg=blue] %H:%M #[bg=cyan] #(acpi -b | grep -m1 -o -P '.{0,2}%') "
```

`set-window-option -g status-right` tells the config that we want to edit the right side of the status bar. The sections that include `#[bg=X,fg=X]` are setting background and foreground colors based on the colors as we defined them in the kmscon config earlier. Since we previously set the status bar to black, the entire status bar will be black until we change that with: `#[bg=green,fg=black]`. The status bar will then change to a green background and black text for the command `%a %d` which displays the date and day of the week as **Day 00**. We then change the background the blue with `#[bg=blue]`and print the time in HH:MM format (the black text inherited from the earlier definition). Finally we change the background to cyan and display the battery life with: `#(acpi -b | grep -m1 -o -P '.{0,2}%') `. The grep syntax is a little tricky to wrap your head around, but essentially all this is doing is removing the first part of the `acpi` command's output, and truncating it, so that all that is actually displayed is the battery percentage. By default the command output would look something like: `Battery 0: Discharging, 4%, 00:13:11 remaining`

<img class="thirds" alt="My TMUX status bar customized." src="/essays/img/2026-10-05.jpg"/>

<p class="caption">
My TMUX status bar with the configurations detailed here. 
</p>

Next, we can use Tmux to generate keybindings for brightness control, as the quickest way to run down even a good battery is by running the display at 100% when there is no reason to do so. The `brightnessctl` app in the pacman repositories will add this functionality: 

```sudo
pacman -Syu brightnessctl
```

We can then add some keybindings to our pre-existing Tmux config. By default every keybinding in tmux uses `Ctrl+b` as a leader key, but we can bypass this with the `-n` option, and have the brightness increase with `F9` and decrease with `F8`.

```bash
bind -n F8 run-shell 'brightnessctl -q set 5%-'
bind -n F9 run-shell 'brightnessctl -q set +5%'
```

Last but not least we need to have Tmux automatically launch when a new TTY is launched. For my use case, I don't want Tmux to spawn with every new terminal, so we have to create a more specialized if/then statement. The easiest way to do this is be editing the `.bashrc`, or other shell configuration to make this happen: 

```shell
if [ -z "$TMUX" ] && [ "$(loginctl show-session "$XDG_SESSION_ID" -p Type --value)" = "tty" ]; then
    exec tmux new -A -s main
fi
```

Adding this to the top of our shell config with check the `$XDG_SESSION_ID` to make sure that we are in a new TTY and not a virtual terminal like would be spawned when launching alacritty or foot. After this is verified, Tmux is launched with the `tmux new -A -s main` command. This will either attach to the session called `main` if it exists, or create the `main` session if it does not. For my workflow, I almost always use a main/master session in Tmux, so this will also allow me to start work in my standard userspace and pick things up where I left of in TTY3.

The full Tmux config that I use is below:

```bash
# Setting a quick way to reload config
bind r source-file ~/.tmux.conf

# Allowing mouse control, moving status bar to top
set -g mouse on
set -s escape-time 0
set -g status-position top

# Customizing status bar colors & adding battery percentage to status bar
set-option -g status-style "bg=black"
set-window-option -g status-right "#[bg=green,fg=black] %a %d #[bg=blue] %H:%M #[bg=cyan] #(acpi -b | grep -m1 -o -P '.{0,2}%') "

# Vim keys for navigating panes
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

# Adding keybindings for adjusting brightness
bind -n F8 run-shell 'brightnessctl -q set 5%-'
bind -n F9 run-shell 'brightnessctl -q set +5%'
```

#### Networking and Synchronization
To wrap things up, networking is probably something that will be essential for most writers. If your laptop has an ethernet port, simply installing an enabling `dhcpcd` will be more than enough, and it might be worth actively not enabling WiFi on a trail bases to restrict the writerdeck ever further. However, I'm assuming that I and just about everyone else will eventually want to enable WiFi connectivity for syncing or pushing a git repository.

```bash
sudo pacman -Syu networkmanager
```

Running `nmtui` will allow us to connect to and manage WiFi networks from the TTY.

The final issue to solve is file back-ups and synchronization for which there are far to many options to discuss every single one. In the past I've used services like Dropbox and I know plenty of folks use Syncthing to sync files between devices. We could even set up a simple back-up script with [rsync](https://makc.co/docs/simple-tailscale-setup/) and a passwordless SSH key. I personally opt to use good ol' fashioned git and push changes to a [private git server](https://makc.co/docs/create-your-own-git-server/). The only additional software required for this is a VPN, so that I can securely connect to my private server and push changes. I like using tailscale for this: 

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```
