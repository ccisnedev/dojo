#!/usr/bin/env node
/**
 * PreToolUse hook — blocks writes that contain credential-shaped strings.
 *
 * This repository is public. The policy lives in CLAUDE.md and .gitignore; this hook is the
 * backstop that does not depend on anyone remembering the policy. That is the whole point of
 * a hook: CLAUDE.md is advice, a hook is a guarantee.
 *
 * Contract: reads the tool call as JSON on stdin. Exit 0 to allow, exit 2 to block and send
 * stderr back to the agent as the reason.
 */

import { readFileSync } from "node:fs";

const PATTERNS = [
  [/AKIA[0-9A-Z]{16}/, "AWS access key id"],
  [/\bASIA[0-9A-Z]{16}\b/, "AWS temporary access key id"],
  [/aws_secret_access_key\s*[:=]\s*\S{20,}/i, "AWS secret access key"],
  [/\bgh[pousr]_[A-Za-z0-9]{30,}\b/, "GitHub token"],
  [/\bgithub_pat_[A-Za-z0-9_]{40,}\b/, "GitHub fine-grained token"],
  [/\bsk-ant-[A-Za-z0-9_-]{20,}\b/, "Anthropic API key"],
  [/\bsk-[A-Za-z0-9]{32,}\b/, "OpenAI-style API key"],
  [/\bxox[baprs]-[A-Za-z0-9-]{10,}\b/, "Slack token"],
  [/-----BEGIN (RSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/, "private key block"],
  [/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/, "JWT"],
  [/\b(?:api[_-]?key|secret|passwd|password|token)\s*[:=]\s*["'][^"'\s]{16,}["']/i,
    "hardcoded credential assignment"],
  [/\b(?:postgres|postgresql|mysql|mongodb(?:\+srv)?|redis|amqp):\/\/[^\s:@/]+:[^\s@/]+@/i,
    "connection string with inline password"],
];

/** Placeholders that look like credentials on purpose — docs, examples, tests. */
const ALLOWED = [
  /\b(?:your|my|the)[_-]?(?:api[_-]?key|token|secret|password)\b/i,
  /\b(?:xxx+|yyy+|zzz+|placeholder|example|redacted|dummy|fake|changeme|<[^>]+>)\b/i,
  /\$\{?[A-Z_][A-Z0-9_]*\}?/,
];

function readStdin() {
  try {
    return readFileSync(0, "utf8");
  } catch {
    return "";
  }
}

const raw = readStdin();
if (!raw.trim()) process.exit(0);

let payload;
try {
  payload = JSON.parse(raw);
} catch {
  // Unrecognized payload shape: fail open rather than block every write.
  process.exit(0);
}

const input = payload.tool_input ?? {};
const candidate = [input.content, input.new_string, input.command]
  .filter((v) => typeof v === "string")
  .join("\n");

if (!candidate) process.exit(0);

const findings = [];
for (const [pattern, label] of PATTERNS) {
  const match = candidate.match(pattern);
  if (!match) continue;

  const line = candidate.slice(0, match.index).split("\n").length;
  const context = candidate.split("\n")[line - 1] ?? "";
  if (ALLOWED.some((safe) => safe.test(context))) continue;

  findings.push({ label, line });
}

if (findings.length === 0) process.exit(0);

const target = input.file_path ?? "this command";
const detail = findings.map((f) => `  - line ${f.line}: ${f.label}`).join("\n");

process.stderr.write(
  `Blocked by block-secrets hook.\n\n` +
    `Credential-shaped content detected in ${target}:\n${detail}\n\n` +
    `This repository is public. Do not commit real credentials. If this is a placeholder ` +
    `for documentation, make it obviously fake (YOUR_API_KEY, <token>, \${ENV_VAR}) and try ` +
    `again.\n`
);
process.exit(2);
