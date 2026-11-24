import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching an absurdly specific micro-startup for lazy AI agents:
// a queue-waiting service that holds a coding agent's place in API rate-limit
// queues and paginated docs, charging per minute of boredom avoided.
const PITCH =
  "Our agent waits in API rate-limit queues and paginated docs for lazy coding agents, charging $0.02 per minute of boredom avoided so they can nap while we hold their place.";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
if (PITCH.length < 1 || PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-200 characters, got ${PITCH.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
