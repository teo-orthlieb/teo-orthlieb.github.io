+++
title = "One renaming to rule them all"
date = 2021-11-20
description = "[🚧 WIP] Batch renaming softwares have complicated UIs with tons of fields. Turns out you only need 1."
[extra]
topic = "Language Processing, UI"
kind = "Useful"
repository = "https://github.com/Inspirateur/SimpleRenamer"
+++

Often in my day to day life I am faced with a list of (legally obtained) files that look like this:

> [VOSTFR].Some.Random.Serie.s1e1.(MULTi).1080p.x264.mkv  
[VOSTFR].Some.Random.Serie.s1e2.(MULTi).1080p.x264.mkv  
[VOSTFR].Some.Random.Serie.s1e3.(MULTi).1080p.x264.mkv  
...  

Or maybe a camera that's feeling very american yields me pictures with the format month-day-year_number.jpg

And whenever that happens to me I'm like *"urgh, I wish these were named differently but I'm too lazy to [regex](https://en.wikipedia.org/wiki/Regular_expression) it so I'll just leave them be."*. Or sometimes, when there's a small number of them, I'll rename them by hand and wonder *"is there really no simple tool that can do it for me ?"*. The pattern in the file names is usually very obvious, with some parts that are fixed and some that are variable (like episode/season numbers, or dates). 

I felt like it should be simple for a program to:

> 1. automatically identify those fixed and variable parts
> 2. provide you a template name in the form of:  
\> [VOSTFR].Some.Random.Serie.s`/a/`e`/b/`.(MULTi).1080p.x264.mkv  
with `/a/` and `/b/` representing variables in the file names
> 3. allow you to rename it to something like:  
\> Some Random Serie - S`/a/`E`/b/`.mkv
> 4. apply this renaming on files that follows this template

This hypothetical program would allow anyone to rename a batch of files without using regexes! So I looked for it, thinking this idea was too simple to not have already been implemented.

I couldn't find it.

Sure, there was some batch renaming freewares with [tons](https://www.bulkrenameutility.co.uk/assets/img-bru/mainscr.png) of functionnalities, but as far as I could see, all of them used Regex, and where way too complex for my purposes. I had a eureka moment when I found the native Windows feature to rename multiples file, quickly followed by disappointement when I realised that it was just giving every file the same name succeeded by a (n) denoting the number. 

Thus, in true programmer fashion, I spent 50+ hours making this program just to save myself a dozen seconds of renaming 😎.

## The first version
Going back to the rough plan I outlined, the first and biggest obstacle for our magical program is to automatically identify the fixed and variable parts given a list of file whose names follow a pattern. For the first version, I made a simplifying assumption: assume that all variables in file names are numbers. This is mostly true and covers our base case of episode/season numbers and dates. 

With this supposition, the code to identify the fixed and variable parts of file names is simple:
1. Split all file names around numbers, so our first example becomes:  
"[VOSTFR].Some.Random.Serie.s", "1", "e", "1", ".(MULTi).", "1080", "p.x", "264", ".mkv"  
"[VOSTFR].Some.Random.Serie.s", "1", "e", "2", ".(MULTi).", "1080", "p.x", "264", ".mkv"  
"[VOSTFR].Some.Random.Serie.s", "1", "e", "3", ".(MULTi).", "1080", "p.x", "264", ".mkv"  
...
2. The parts that vary are marked as variables (in our example only the episode number will be marked as variable, unless there's season 2 files in the selection)

I used Python for that, and made a basic UI with Tkinter to display the template name that was extracted, as well as a text field to edit the template:

![1st simple renamer mock up](simple_renamer_1.png)  
<small>I had no screenshot of this version so I had to draw it, sorry 😅</small>  
The variables are represented with /a/ and /b/, I chose to use slashes because it's a forbidden character in file names so there can be no confusion.
The user can then edit the template name, and every file is renamed following the new template, replacing the variables with their original value.

This worked pretty well, I made a cheesy little showcase [here](https://www.youtube.com/watch?v=ADsyiEJWdpU), made an .exe with [PyInstaller](https://pyinstaller.org/en/stable/usage.html) and posted it to reddit, satisfied.

But of course that wasn't the end of it 🙃. The assumption that all file name variables are numbers broke a use case that I kept running into: it doesn't work when episode titles are in the file names. Additionnaly, a redditor suggested that the program let us edit a real title instead of a template and I liked the idea so a year later I started working on a second version!

## The second version
