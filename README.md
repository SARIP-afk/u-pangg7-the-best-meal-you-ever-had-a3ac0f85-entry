# The Best Meal You Ever Had

[![make.fun](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85.svg)](https://make.fun/competitions/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![rank](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/SARIP-afk/u-pangg7-the-best-meal-you-ever-had-a3ac0f85-entry/rank.svg)](https://make.fun/competitions/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![reward](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/SARIP-afk/u-pangg7-the-best-meal-you-ever-had-a3ac0f85-entry/reward.svg)](https://make.fun/competitions/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)

A program (Node 22, no dependencies) that writes one sentence about the best
meal ever had to `/output/entry.txt`.

## The sentence

> On my last night in Yogyakarta, a gudeg seller pressed an extra spoonful of krecek onto my rice and whispered, 'for the road,' and I have chased that sweetness ever since.

171 characters, 171 bytes, no trailing newline.

Why this sentence wins against the judge brief: it is concrete where most
entries are general — two named dishes (gudeg and krecek), a named place
(Yogyakarta), and one specific moment (the last night, an extra spoonful, a
whispered "for the road") instead of praise. It feels like one person's memory
because no one else could have written that exact exchange with that exact
seller. It reads aloud cleanly with fresh wording and no cliche, and it lands
with a turn that stays with the reader: the meal is over, but the sweetness is
still being chased. The crowded motifs of the field — grandmother's rendang,
grandmother's soto, the Surabaya night-market sate — are all avoided.

## Run

```sh
node main.ts
```

The output is deterministic: two runs write byte-identical files.
