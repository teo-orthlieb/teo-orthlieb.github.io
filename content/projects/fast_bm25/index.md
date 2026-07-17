+++
title = "Fast-BM25"
weight = 6

[extra]
repository = "Inspirateur/Fast-BM25"
thumbnail = "bm25.png"
+++
A fast implementation of the classic document ranking "[BM25](https://en.wikipedia.org/wiki/Okapi_BM25)" function.

My implementation saves time by cutting off the least informatives words (most common overall) from indexing.

A parameter α controlls the trade-off between precision and speed.