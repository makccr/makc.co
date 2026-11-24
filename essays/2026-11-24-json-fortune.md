---
title: "New Release: JSON Fortune"
layout: essay.html
date: 2026-11-24
tags: essay 
subject: [ "Development" ]
description: "Some details on a new bash script that I'm rleasing to make using JSON databases with the fortune app easier."
---

## TLDR
I made a little bash script that I'm releasing to allow users to run `fortune` with a custom database built on JSON, as opposed to the `.dat` file generated with `strfile` that vanilla `fortune-mod` expects when piping in a custom path. The card below provides links to both Codeberg and Github where downloads and install instructions are available.

<center> 
<div class=cardContainer>
    <div class=card data-category="Bash Script">
        <img src="/images/downloads/fortune-json.jpg" alt="hero image"> 
        <h2 class="essays">JSON Fortune</h2>
        <div class="dwnld-preview">
            A script that allows users to run fortune with a custom JSON database.
        </div>
        <a href="https://codeberg.org/makccr/fortune-json" target=_blank><button>Codeberg &nbsp;<i class="icon icon-codeberg"></i></button></a>
        <a href="https://github.com/makccr/fortune-json" target=_blank><button>Github &nbsp;<i class="icon icon-github"></i></button></a>
    </div>
</div>
</center>

### Install Instructions
1. Install dependencies: 

| Distribution | Install Command |
| ------------ | --------------- | 
| Arch Linux | `sudo pacman -Syu git make jq cowfortune` |
| Fedora | `sudo dnf install cowsay fortune-mod git make` |
| Ubuntu | `sudo apt update; sudo apt install cowsay fortune-mod git make` |
2. Clone a repository: 
```bash
git clone https://github.com/makccr/fortune-json
```
3. Build from source: 
```bash
cd fortune-json &&
makepkg -si
```
4. *Optionally* download and use my JSON quotes file: 
```bash wget httpS://makc.co/_data/quotes.json &&
fortune-json ~/Downloads/quotes.json
```

---


