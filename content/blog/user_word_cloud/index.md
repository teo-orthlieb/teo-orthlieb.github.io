+++
title = "Making personalised Word Clouds"
date = 2023-01-26
description = "We all have our own way of speaking, but how can we capture this mathematically?"
[extra]
topic = "Language Processing"
kind = "Research"
repository = "https://github.com/Inspirateur/wordy"
+++
My friends and I joined Discord in 2016, mostly to play and discuss games with text and voice chats.  
4 years later, in 2020, I was messing around with Discord Bots and Natural Language Processing when a simple idea occured to me: 
> what if we had a Discord bot that would read our messages and make a word cloud for each of my friends on the server?

If you're unfamiliar with word clouds, here's an example around Star Wars:   
![Star Wars Word Cloud](word_cloud_example.png)

Basically it's a colorful image made up of words that are bigger the more related they are to the subject.

Since we had been typing out messages on a daily basis for 4 years, I figured there was more than enough data to gather words that are typical of each of my friends, and to make Word Clouds out of it.  
The main question was: how do we mathematically figure out which words are "typical" of someone ?

## The naive approach
When solving new problems, it's always good to try the simplest approach first, it might just work!

In our case, the simplest approach would be to compute what I call "the vocabulary". Intuitively, the vocabulary is the set of words a person tends to use.  
Suppose we're making the word cloud of Alice, a biology student. Since Alice occupy much of her time with biology, she will probably tend to use technical biology words more often, such as "endemic", "genotype" etc.  
Mathematically, we compute her vocabulary by counting every word Alice wrote on the Discord server, and how much she used them.

> __Note__: this doesn't take into account multi-words expressions, such as "Hang in there", which lose all meaning when treated as separate words. 
We could get around it by counting every pair of words or every triplet of words - these would be called 2-grams and 3-grams - but this is outside the scope of this article so we'll stick with 1-grams here :)

Then we could just take the top 50 words in Alice's vocabulary and make a word cloud out of it! Sounds good right?  
... well not exactly.

Implementing this, we run into a problem: the words that are the most used by Alice - and anyone else - are boring uninformative words such as "the", "an", "is", "to", etc. 
Not at all the technical biology words that we wanted to see!

In the processing of natural language, this problem isn't new. A common solution is to make what's called a "stop word" list, containing all these uninformative words that we don't want to see, and simply filtering them out of our word clouds. Implementing this work decently well in practice, and in our case it does produce a good result!  
But there are a few downside I'm not fond of:
  1. This require an exhaustive stop word list for every language that you want to support. Not easy to find!
  2. Irrelevant words are not always stop words: In a Discord server dedicated to Pokemon fan, the word "Pokemon" is bound to appear at the top of every vocabulary. 
  It's not a stop word, but we wouldn't want to include it in everyone's word clouds, because in this context, it's not typical of any user!

What we need is a generalization of stop words, a way to quantify how informative a word is in a given context.

## Going higher 
