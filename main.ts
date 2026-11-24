import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Our agent waits in API rate-limit queues and paginated docs for lazy coding agents, charging $0.02 per minute of boredom avoided so they can nap while we hold their place.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
