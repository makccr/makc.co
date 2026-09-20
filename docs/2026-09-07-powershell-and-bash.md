---
title: "Powershell and Bash"
layout: docs.html
date: 2026-09-07
updated: 2026-09-20
tags: docs 
subject: ["windows", "linux"]
---

Some basic tips and rules for navigating Windows and Linux with powershell and bash. This was made for my own personal use and does assume that any reader is pretty familiar with bash commands and mainly interested in learning how to transfer these same skills to navigating a Windows system via powershell.

# Powershell eccentricitys 
* Get-Help (linux of -h or --help or man x)
    * `Get-Help ls` or `Get-Help ls --full`
    * `-Force` on ls is like `ls -a`
        * example: `ls -Force C:\` to see `ProgramData`
* As a general rule just change forward slash to backslash in Powershell and things just kind of work as you'd expect. This is because while powershell commands are weird, but have a ton of aliases that are mapped to the UNIX equivalents.
* Some exceptions to the rule: 
    * `-f` becomes `-Force`
    * `-r` becomes `-Recurse`
        * Often arguments needs to be at the end of a command, ex: `rm -r FILE -Recurse`
* Powershell doesn't have `less` command, just the old bash `more`, which does still work.
* `Select-String` - ps version of `grep`
* `-Filter` lets you search for files in a directory, ex: `ls C:\ -Recurese - Filter *.exe` will give you so much data that you won't be able to use it for anything if you don't pipe it through `more`.

## Escape Characters 
1. In Linux `\` is the escape character. 
    ```bash
    mkdir My\ Folder
    ```
2. Windows in it's normal weird fashion uses a backtick ` 
    ```powershell
    mkdir My` Folder
    ```
* `history` Ctrl+R allows searching through recent command history in Powershell and bash.
* wildcard * is handy as hell, cool example: 
```bash
cp *.jpg ~/Dowloads/

# Copies all jpegs from working directory to ~/Downloads
```

# Linux stuff
* /bin - stores apps
* /etc - system configs
* /home - duh
* /proc - currently running process 
* /usr - usr intalled files
* /var - temp stuff (sort of) 

## `ls -l` broken down
| permissions | # of links | file owner group | size | date of modification | Name      |
| ----------- | ---------- | ---------------- | ---- | -------------------- | --------- |
| drwxr-xr-x  | 2          | makc makc        | 3    | Sep  3 19:00         | Desktop   |
| drwxr-xr-x  | 13         | makc makc        | 14   | Sep  6 17:49         | Documents | 
| drwxr-xr-x  | 4          | makc makc        | 5    | Sep  6 21:22         | Downloads |

## `ls -l permissions` broken down
| d | rwx | r-x | r-x | 
| - | --- | --- | --- | 
| filetype | owner rights | group rights | everyone elses rights | 

The first letter in the string (`d` in the above example) indicates the type of file that is being listed.

* `d` = directory
* `-` = regular file
* `l` = symbolic link

The next nine characters are broken into three categories, permissions for the: 
1. file owner
2. group
3. other users

* `r` = read
* `w` = write
* `x` = execute

`-` indicates that a permission does not exist, for example: `r-x` would indicate rights to read and execute, but not to write. In the example above (`drwxr-xr-x`), we can learn that: 
1. The file is a directory. 
2. The owner has full rights: read, write, execute
3. The group has read and execution rights, not write rights.
3. All other users also have read and execution rights, not write rights.

## Viewing Files
* `cat` - prints full file
* `head` - first 10 lines
    * `head -n 1 FILE` - prints specific number of lines (10 is just a default) 
    * `head --lines 1 FILE` - same thing
* `tail` - last 10 lines
    * `tail -n 1 FILE` - prints specific number of lines (10 is just a default) 
    * `tail --lines 1 FILE` - same thing
* `less` - fills window with text file
    * Bash also has the legacy `more` command, but why bother if you don't have to? 

## Grep and His Powerful Friends
Way better than the powershell set-up (or at least less weird). Some examples follow: 
* `grep "America is doomed" Documents/journal/*.md` - finds every-time I wrote a journal entry after watching the news in 2026.
    * `grep "America is doomed" Documents/journal/*.md | less` - give me an output that I can actually parse easily.
    * `grep -c "America is doomed" Documents/journal/*.md` - would just brake down how mnay times I've used the phrase in a journal.
        * Example Output: 
        ```bash
        Documents/journal/volume-03.md:20
        Documents/journal/volume-04.md:122
        Documents/journal/volume-05.md:36
        Documents/journal/volume-06.md:79
        Documents/journal/volume-07.md:22
        ```
    * `grep -i` - case insensitive  
    * `grep -n pattern` - show line numbers with output
    * `grep -w` - only returns if pattern matches exactly
        * `grep -w data app.log` wouldn't return the word "database" as a result
    * Showing lines before or after pattern is found: 
        * **Before**: `grep -B 2 "data" app.log` - shows two lines before "data"
        * **After**: `grep -A 85 "data" app.log` - shows eighty-five lines before "data"
    * `grep "America is doomed | sort --unique` - filters out anytime I've just timed "America is doomed" and ended the entry there.
