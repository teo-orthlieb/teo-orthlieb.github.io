+++
title = "The scientific research game"
date = 2022-08-07
description = "Have you ever wondered what it's like to be a scientist discovering a deep secret of the Universe ? Find out with this card game."
[extra]
topic = "Science"
kind = "Game"
+++

I have done quite a lot of problem solving, but rarely have I got the chance to do actual science. Observations, building theory, experiments, ultimately leading to understanding the unknown! (modern) Science has come a long way since its birth in the 16th century, to build further upon it now requires years of learning what is known. Which is why the few occasions I had to do proper science was not by studying reality but Man made universes, video games such as [Minecraft](https://en.wikipedia.org/wiki/Minecraft) or [Dofus](https://en.wikipedia.org/wiki/Dofus), in which I uncovered advanced mechanics that were not explained by the developpers. 

Doing science is really exciting to me, it's a unique feeling of exploring unknown territories, every little piece of info you get feels so important! [Eleusis](https://en.wikipedia.org/wiki/Eleusis_(card_game)) is a unique card game that's all about that. I've linked the Wikipedia page if you're curious, but I've found the original scoring rules overcomplicated so I made my own and I'm sharing it with you.

## Rules

1. One player plays *God*, the other are dealt 5 cards, 
the game ends when a player reaches 0 cards
2. *God* thinks of a rule that define valid card plays 
<small>(see examples)</small>
3. *God* draws a card until a valid one is found, they play the card as the first card of the sequence  
<small>(the other are returned to the draw)</small>
4. Taking turns in clockwise order, each player can either:
    1. Attempt to play `n` cards to continue the sequence:
        1. if *God* approves, the sequence stays
        2. otherwise, it is put in the column below and the player draws* `2n` cards
    2. Claim that they have no valid card to play
        1. if *God* approves, the player is dealt a new hand with `2` cards less
        2. otherwise, *God* plays a valid card and the player draws* `4` cards
5. At the end of their turn, the player can choose to become the *Prophet:*
The *Prophet* stops playing cards and must do the approving/disapproving instead of god until they commit an error or the game ends.  
<small>A *marker* is placed after the current last card (used for scoring)</small>  
→ If the *Prophet* is wrong, the marker is removed and they draw* `4` cards; 
this player cannot become *Prophet* again in this game. 

<small>* *If there’s no more cards to draw, directly add them as points in the scoring instead*</small>

### Examples of God rule

*“Black cards must be odd, Red cards must be even”*

*“A new card must have either the same value or the same color as the previous one”*

*“Black cards must be higher than the previous one, Red cards must be lower”*

*“Cards played by players on the left side of the table are valid, the other are not”*

### Scoring (less points is better 📉)

→ The amount of valid cards before the *marker* is noted `#BC`

→ The amount of rejected cards after the *marker* is noted `#AD`

At the end of a game:

- *God* gains `#BC - #AD`
- The *Prophet* gains `min(0, #BC - #AD)`
- Other players gains as much points as they have cards left

## Observations from playing it
Eleusis mimics the scientific process so closely that playing it gives us a real insight into our own way of thinking. The first thing that was obvious to me is that God tend to overestimate the ability of the players to find its secret rule. Many times I've seen a new God make a rule that was absolutely impossible to find in practice while thinking that it was reasonable. I don't know how this bias is called, but my explanation of it is that while the amount of possible rules is enormous, when thinking of a new rule we only go through very few possibilities before selecting one. This tricks us into thinking our new rule is obvious because it took a small amount of time to come up with it, whereas from an outside perspective it's only one possibility among thousands.

The second observation that I made playing Eleusis was that the "researchers" tend to naturally go against [Occam's razor](https://en.wikipedia.org/wiki/Occam%27s_razor) in practice. Occam's razor is the principle that a simpler theory is better than a complex one, because the less assumptions you have to make, the less likely the theory is to be wrong. This is a respected principle in statistical modeling, if 2 different models have the same accuracy on training data (analogous to "explaining the observations"), then the simpler one will usually perform better on unseen data (analogous to "predicting new observations"). I think this tendency to build overly complex rules is a consequence of our theory building process:
1. we first make a simple observation about the sequence of cards; eg: there's an alternation of red and black cards
2. the observation seems to hold on at first but at some point an exception is encountered; eg: 2 red cards next to each other
3. instead of looking for another pattern we continue with the one we found, feeling that it is too valuable to toss away because it worked at the beginning, and somehow twist it to make the exception "valid" in our theory; eg: there's an alternation of red and black only when the value is below 10
4. repeat until the rule becomes bloated with exceptions

In the end, it often turns out that the first track we chose was a dead-end, because there's simply so many, and that we would have been better off by exploring more tracks instead of going deeper. I'm sure this perseverance has its merits in life, some things really are complicated and full of exceptions. But it's good to be aware of it!

Anyway, I really encourage you to try it yourself, there's no hard limit on the number of player (you can use additionnal decks of cards if there's to many), if anything, the table length is the real limiting factor 😆!