// The 3AM Fridge Text — make.fun bounty u-deysumbrella-the-3am-fridge-text-4c3e721d
// A smart fridge texts its owner at 3am. One line, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "3am. You've opened me 6 times tonight and taken nothing. We're not hungry, we're lonely — and I'm the only one here who'll say it.";

// The gate requires 1–140 characters, a single line, not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 140 || LINE.includes("\n") || !/\S/.test(LINE)) {
  throw new Error(`entry line must be 1-140 chars, one line, non-blank (got ${chars.length})`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
