+++
title = "Assigning students to semester projects"
date = 2021-09-05
description = "[WIP] My attempt at solving a real world problem in a game creation school !"
[extra]
topic = "Evolutionnary algorithm"
kind = "Useful"
repository = "https://github.com/Inspirateur/PitchAssignment"
+++

A friend of mine studying at a video game creation school once told me about the following situation:  
For a school project, students had to come up with video game ideas, pitch them to a jury, and then team up to make working prototypes for those pitch. Since there was more pitches than what was possible to make, the pitches also had to be selected. The solution in place was in 2 stages: 
  1. Students rate the pitches which are then sorted by avg rating and trimmed down so that a manageable number of pitches is left.
  2. Students make a wishlist of up to 6 pitches they want to work on, and then they are manually assigned by a comitee of students in Project Management. 

While this may seem like a sensible solution at first glance, it definitely has some issues that my friend wasn't satisfied with. The first vote of selection is harmful and un-needed in the process: it may leave out game ideas backed by a full team of students just because it isn't appreciated as much by the others, and it may also select game ideas that no developper want to work on just because it was popular among game designers and artists. 
The second step is also not ideal, because manual assignment is prone to human error and unfairness.

Understanding this, I took the challenge to make a software that would solve this problem more appropriately. Let's dive into how I went about it and how we tried it out for real the following year!

## The stable marriage problem

### WIP
Come back later :D