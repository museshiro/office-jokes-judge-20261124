// office-jokes-judge: writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Team building was trust falls and a quiz about our values — I fell, nobody caught me, and HR logged it as engagement.";

if (LINE.length < 1 || LINE.length >= 200) {
  throw new Error(`line must be 1-199 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("line must not contain a newline");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
