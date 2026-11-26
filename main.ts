const fs = require("node:fs");

const LINE =
  "My IT ticket has been escalated three times; " +
  "it now outranks my manager.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
