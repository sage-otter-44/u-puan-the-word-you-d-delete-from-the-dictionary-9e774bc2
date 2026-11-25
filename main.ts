import { mkdirSync, writeFileSync } from "node:fs";

// The one word to erase from the dictionary forever.
const WORD = "whom";

function isSingleWord(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.length > 0 && trimmed.split(/\s+/).length === 1;
}

if (!isSingleWord(WORD)) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote ${WORD.length} characters to /output/entry.txt`);
