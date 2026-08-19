# Principles

Conclusions that hold **independently of the tool**.

This directory is deliberately separate from `.claude/`. Roughly half of what I learn working
with Claude Code transfers to any agent — context engineering, verification loops, where the
boundary of delegation sits — and half does not, because `SKILL.md` frontmatter and
`PreToolUse` matchers belong to one product. Keeping the transferable layer apart from day one
means that when this repository grows past Claude Code, nothing has to be excavated.

## What earns a file here

A principle is promoted from the logbook, never written directly. The test is:

- It survived contact with reality more than once.
- It would still be true if the tool were replaced tomorrow.
- It is stated as a constraint on how I work, not as a description of a feature.

"Use subagents for investigation" fails the third test — that is a feature. "Delegate work
whose output is smaller than its input" passes: it explains *why* subagents, and it survives
the subagent being renamed.

## Format

Short. One idea per file. Name the file after the idea, not the topic:
`context-is-the-scarce-resource.md`, not `context.md`.

Each file ends with **Where this came from** — a link to the logbook entries that produced it.
A principle with no provenance is something I read, not something I learned, and it should be
a link to someone else's writing instead of a file here.

## Current

- [Context is the scarce resource](context-is-the-scarce-resource.md)
- [Give the agent a way to verify](give-the-agent-a-way-to-verify.md)

Both are seeded from the official documentation rather than earned, and both are marked as
such. They are here to be tested against practice and rewritten in my own terms — or deleted
if practice does not support them.
