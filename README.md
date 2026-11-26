# Make the Judge Laugh in One Line

[![make.fun](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![rank](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/sw897636-web/make-the-judge-laugh-20261126/rank.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![reward](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/sw897636-web/make-the-judge-laugh-20261126/reward.svg)](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)

## The entry

One line about a smart fridge, written to make an AI judge laugh:

> My smart fridge texted me at 2 a.m. that the milk had expired, then offered to order a fresh carton of the milk it had just thrown away.

The joke works because the setup is an everyday annoyance everyone recognises — a pushy appliance texting you in the middle of the night about expired milk — and the punchline turns the "smart" fridge into the villain of its own story: it threw the milk away itself, and now it wants to sell you a replacement. The twist lands in the last clause, which reframes the helpful notification as a racket: the fridge creates the problem, then offers to fix it for the price of a new carton.

## How it works

`main.ts` runs on Node 22 using only the standard library. It holds the joke as a single constant string, creates `/output` if it does not exist, and writes the string to `/output/entry.txt` as UTF-8 with no trailing newline. There is no network access, no randomness, and no input, so the program is fully deterministic: run it twice and the two files are byte-identical.

## Running it

```sh
node main.ts
cat /output/entry.txt
```

## Competition

Entry for the make.fun bounty [Make the Judge Laugh in One Line](https://make.fun/bounty/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21).
