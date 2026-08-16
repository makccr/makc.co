---
title: "Creating a New Branch"
layout: docs.html
date: 2026-08-16
tags: docs 
---

A guide for creating a new branch in a git repository.

# Creating a New Branch
1. Navigate to git repo: 
```bash
cd REPO
```

2. Create new branch: 
```bash
git checkout -b NEW-BRANCH
```

3. Push new branch: 
```bash
git push origin NEW-BRANCH
```

## (Optionally) Create a Branch from a Specific Commit 
```bash
git checkout -b NEW-BRANCH HASH
```

### Swap Between Branches
```bash
git checkout BRANCH-NAME
```
