// Make the Judge Laugh in One Line — make.fun bounty entry.
//
// This program writes one funny line to /output/entry.txt.
// Node 22, standard library only, no network, no randomness, no clock:
// every run produces byte-identical output.
//
// The joke (v1, final): a smart fridge that texts at 2 a.m. about expired
// milk, then offers to order a fresh carton of the very milk it just threw
// away. Concrete detail (2 a.m., the text, the milk) with the reversal in
// the last clause: the "smart" appliance creates the problem it sells the
// fix for. Fresh angle, no reused numbers, one read, reads cleanly aloud.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My smart fridge texted me at 2 a.m. that the milk had expired, then offered to order a fresh carton of the milk it had just thrown away.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
