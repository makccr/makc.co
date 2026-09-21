---
title: "Convert a CSV file to JSON"
layout: docs.html
date: 2026-09-21
updated: 2026-09-21
tags: docs 
subject: ["database", "linux"]
---

A guide to converting a CSV (Comma Separated Value) file to a properly formatted JSON file with python, and cleaning up any artifacts that might come up in the process.

## Ensure Python is Installed

| OS                   | Install Python             |
| -------------------: | -------------------------- |
| **Arch Linux**       | `sudo pacman -S python`    |
| **Ubuntu/Debian**    | `sudo apt install python3` |
| **Fedora**           | `sudo dnf install python3` |
| **macOS + Homebrew** | `brew install python`      |

### Clean up CSV
If necessary, use a tool like Libre Office Calc or Microsoft Excel to clean up the `.csv` file, as long as the spreadsheet app can export to CSV, use whatever you like. Remove any columns that contain unnecessary information, as we only want to convert data that we want to end up in the JSON file. Importantly: ensure that the top cell in each column is what you want to become the title of a JSON field. For example, a spreadsheet that looks like: 

| title | date | link |
| ----- | ---- | ---- | 
| Cool video thang | YYYY-MM-DD | makc.co/vid1.mov |
| Antoher vid | YYYY-MM-DD | makc.co/vid2.mov |

Will become a JSON file that looks like: 

```json
[
    {
        "title": "Cool video thang", 
        "date": "YYYY-MM-DD",
        "link": "makc.co/vid1.mov",
    },
    {
        "title": "Another vid", 
        "date": "YYYY-MM-DD",
        "link": "makc.co/vid2.mov",
    }
]
```

## Convert to JSON
Modern versions of Python come with a CSV library built in. We can use this library to convert our `.csv` file to a `.json` database with the proper formatting: 

```python
python -c 'import csv,json,sys; print(json.dumps(list(csv.DictReader(open(sys.argv[1], newline="", encoding="utf-8"))), indent=4))' OLD.csv > NEW.json
```

<p class="caption">
<strong>Note:</strong> This process is very fast, almost immediate on my test CSV file with 176 rows and 5 columns. If the process is taking more than a second or two, there is probably something wrong.
</p>

### Clean up JSON
It may also be necessary to clean up some artifacts from the conversion process. I've found that if an artifact is going to be created, it will almost always be prefaced by either a backslash or a leading space where there shouldn't be one. Using a tool like Vim and searching for patterns like `/\`, `/ "`or `/" ` make finding and fixing these errors very easy.

On my test conversion I also found that the first field in each JSON entry was mangled. The field should have been called: `"title":`, but in every instance, what was actually rendered was: `"\ufefftitle":`. One again however, a simple Vim command was able to clean this up nearly instantly: `:%s/\ufefftitle/title/g`.
