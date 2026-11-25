// Write one sentence about the best meal ever had to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The sentence is a
// fixed string: the program writes exactly these bytes on every run, with no
// trailing newline — the house gate counts characters, so a trailing newline
// would spend one of the 200 on nothing.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "On my last night in Yogyakarta, a gudeg seller pressed an extra spoonful of krecek onto my rice and whispered, 'for the road,' and I have chased that sweetness ever since.";

// Gate mirror: the house gate accepts 1-200 characters of non-whitespace
// text. Fail loudly here rather than write a sentence the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry sentence is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
