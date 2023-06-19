+++
title = "Assigning students to semester projects"
date = 2021-09-05
description = "[🚧 WIP] My attempt at solving a real world problem in a game creation school !"
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
So we want to assign students to projects based on their preferences and such that the game ideas are sufficiently staffed to be made into a prototype.
If we take a look at the existing problems related to what we're doing we find that this kind of pairing problem has been heavily studied already! As an introduction to the field, we find the [stable marriage problem](https://en.wikipedia.org/wiki/Stable_marriage_problem) (sorry for the heteronormativiy):
> Given `n` men and `n` women, where each person has ranked all members of the opposite sex in order of preference, marry the men and women together such that no 2 person prefer each other to their partner.

And associated to this problem, we are handed down the simple yet remarkably effective Gale-Shapley algorithm, that goes like this:

Repeat until everyone is paired:
1. Each unpaired man proposes to the woman he wants most (and that he hasn't proposed to yet)
2. Each woman (temporarily) selects the man she wants most out of the propositions she has

In this setting, there is an equal number of "proposants" (in this case men) and "acceptants" (in this case women), but this procedure is extendable to University acceptation problems, if we treat each available seat as an individual "acceptant". Additionnally, it offers us 2 strong guarantees:
- It's **stable**: no 2 person will prefer each other over their partner (thus solving the problem)
- It's **truthful**: being honnest about your preferences is the best strategy to get what you want! 

It's also worth noting that there are often multiples stable solutions and that the Gale-Shapley algorithm yields the best solution for the **proposing** group, so in the marriage example the men have it best. 
Both stability and truthfulness are highly desirable properties for our usecase of assigning students to projects, but with great guarantees come great restrictions ...

First, the stability breaks if we allow "same-sex marriage" (if the group of proposants is the same as the group of acceptants) because of [love triangles](https://en.wikipedia.org/wiki/Stable_roommates_problem#Solution). This is an interesting observation but it doesn't affect our use case, because students and project seats are 2 separate groups, so it's fine. 

The real bummer is the second restriction: if either group has no preferences the process is no longer truthful. You can see why this is the case in the marriage problem: if the women had no preferences for men then they would just stick with the first that proposed (no reason to swap) and men's wishlists would become strategic. This really hurts our plan, because the video game pitches have no preference for who makes them, there just needs to be enough developpers, artists, etc. to make a prototype. One way to get the truthfulness back would be to create random preferences towards the students but that would be unfair and we don't want that either.

For this reason and other concerns with flexibility, I chose not to continue with the Gale-Shapley algorithm even though it seemed to fit our needs at first. Maths are cruel.

## The bacteria
### WIP
Come back later :D