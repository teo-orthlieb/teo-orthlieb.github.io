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
1. automatically identify those fixed and variable parts
2. provide you a template name in the form of:  
[VOSTFR].Some.Random.Serie.s`/a/`e`/b/`.(MULTi).1080p.x264.mkv  
with `/a/` and `/b/` representing variables in the file names
3. allow you to rename it to something like:  
Some Random Serie - S`/a/`E`/b/`.mkv
4. apply this renaming on files that follows this template

This hypothetical program would allow anyone to rename a batch of files without using regexes! So I looked for it, thinking this idea was too simple to not have already been implemented.

I couldn't find it.

Sure, there was some batch renaming freewares with [tons](https://www.bulkrenameutility.co.uk/assets/img-bru/mainscr.png) of functionnalities, but as far as I could see, all of them used Regex, and where way too complex for my purposes. I had a eureka moment when I found the native Windows feature to rename multiples file, quickly followed by disappointement when I realised that it was just giving every file the same name succeeded by a (n) denoting the number. 

Thus, in true programmer fashion, I spent 50+ hours making this hypothetical program just to save myself a dozen seconds of renaming.

## The first version
