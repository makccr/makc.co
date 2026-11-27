---
title: "Data Integrity Rules & When to Break Them"
layout: docs.html
date: 2026-11-25
tags: docs
subject: [ "System Administration" ]
description: "Some file backup philsophies, as well as explanations of why they exist."
---

Some systems and philosophies around file backups and data integrity that are often not said out loud, but very important none the less. 

## 3-2-1 -- Backup!
There is a reason that this is the gold standard in the SysAdmin world. Having backups organized in the manor described below protects against file-system corruption, natural disaster, user error and just about every other circumstance that could lead to the destruction or corruption of our precious bits. That being said, 3-2-1 is not a one stop shop for data integrity, and is not always necessary. Any back-up is better than no back-up, and no one should put off having even an imperfect back-up of their data simply because they can't afford to, or don't have the technological knowledge required to set up a state of the art back-up system.

### **3** Different Copies of Data
The military claims to have coined the phrase: "Two is one and one is none". The conventional wisdom in the tech world is to outdo the us army and make sure that there are three copies of any important data. 

### **2** Different File-types

### **1** Off-site Copy

## RAID is Not a Backup
Raid is about up-time, not back-up

## Pull, Don't Push
Production machines are cattle not, pets - should do nothing but what they need to

## Snapshots, Not Clones
### Varied Backups
Hourly and Daily


## Verify Your Back-ups

## Don't Chain Your Back-ups
Never A to B to C, Always B to A, and C to A

---

## TLDR: 
1. 3-2-1 Backups
    * Don't let perfect be the enemy of the good, back-up your data even if it's not perfect.
2. RAID is not a back-up
    * RAID is fully capable of preventing data loss, but should be considered an up-time improvement not a true data backup.
3. Pull, don't push
    * Unless all your server's are offline
4. Snapshots, not clones
    * Unless you happen to want clones
5. Verify your back-ups
    * This isn't one of the rules to break
6. Don't Chain Your Back-ups
    * This isn't one of the rules to break
