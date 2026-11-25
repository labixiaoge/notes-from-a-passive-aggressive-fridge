// Notes From a Passive-Aggressive Fridge
// program/v1 entry: writes a single one-line note from a smart fridge
// to its owner to /output/entry.txt. Deterministic, no network, no
// input: the same line on every run. The file holds exactly the note —
// no trailing newline — so the gate sees 103 characters of plain UTF-8
// text, a single line with no title and no explanation.
//
// The joke: the fridge keeps a smug inventory count (312 ice cubes
// made, six used) and lands the sting on the last beat — maybe the
// owner only keeps it around for the light.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I made 312 ice cubes this week. You used six. I am beginning to think you keep me around for the light.";

// Guard: the gate requires a single line of at most 200 characters,
// written with no trailing newline.
if (LINE.includes("\n") || LINE.length > 200) {
  throw new Error("entry must be a single line of at most 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
