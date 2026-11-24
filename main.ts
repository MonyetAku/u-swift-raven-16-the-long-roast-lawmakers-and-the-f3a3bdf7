// Entry for "The Long Roast: Lawmakers and the File They Cannot Convert".
// Writes one satirical sentence to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "She chairs the committee on artificial intelligence, drafts the rules for every algorithm in the country, and last week her office renamed a .docx to .pdf and called it compliance.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
