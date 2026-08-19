# Dojo

> 道場 — the place where the *Do* is cultivated.

A dojo is not a classroom. It is the space where a practice is repeated until it becomes
capability. This repository is mine for one specific *Do*: **the engineering path of working
with AI agents.**

It starts with Claude Code. It will not end there.

## The thesis

**The work is delegated. The accountability is not.**

An agent writes the code, runs the tests, opens the pull request. None of that transfers
responsibility. If it ships broken, that is on me — not on the model, not on the prompt, not
on the tool. This repository exists so that the skill behind that responsibility is something
I can point at, version, and prove, instead of something I claim.

That is why nothing here lives in a chat history. Sessions are volatile memory. A repository
is durable memory, and it has something no conversation has: `git diff`. Six months from now
I will be able to see exactly how my judgment changed, not just remember that it did.

## Two rules

These are constraints, not aspirations. They are the reason this repo will not rot into a
pile of notes.

**1. Nothing enters the repo unless it produces an artifact that runs or applies.**

A note saying *"today I learned about subagents"* is worth close to nothing. A
`.claude/agents/kata-reviewer.md` that I have actually used three times is worth a lot.
Documentation *about* practice is not practice.

**2. Every kata carries its own pass criteria.**

"Practice plan mode" is not falsifiable. "Here is a repo with four failing tests; fix it
using plan mode and one subagent; `npm test` must be green and the diff must match the
saved plan" is a repetition. Without a check the agent can run, *looks done* is the only
signal available — and then the verification loop is me, forever.

## Structure

```
.claude/     Tool configuration — skills, subagents, hooks, settings.
             This is the crown jewel: it is simultaneously my working setup
             and the tangible evidence of where I am.
code/
  katas/     Numbered exercises. Each one states its constraint and its pass criteria.
  labs/      Deliberately broken projects. The resistance to train against.
docs/
  adr/       Architecture Decision Records. Dated, immutable, one decision each.
  logbook/   Append-only entries. Mostly failures — see below.
  principles/  Distilled conclusions, tool-agnostic. Where the transferable part lives.
  roadmap/   The learning path itself.
CLAUDE.md    Project instructions loaded into every session.
```

Two notes on why it looks like this.

`.claude/` sits at the root next to `.gitignore`, not under `code/`. Claude Code discovers
project configuration at the repository root; buried anywhere else it simply does not apply.
Same category as `.gitignore`: one configures git, the other configures the agent. Repo
infrastructure at the root, content in `code/` and `docs/`. See
[ADR-0002](docs/adr/0002-repository-macro-architecture.md).

`docs/principles/` is deliberately separate from `.claude/`. When this repo grows past Claude
Code, roughly half of what I learn transfers — context engineering, verification loops,
delegation boundaries — and half does not, because `SKILL.md` frontmatter is Claude Code's
and nobody else's. Keeping the tool-agnostic layer apart from day one means not rewriting
the repository later.

## The logbook is for failures

The entries that compound in value are not the wins. They are: *the prompt that failed, why
it failed, and the prompt that worked instead.* A log of victories is self-congratulation.
A log of failures is a manual.

This repository is public from day one, which raises the bar on that honestly — writing a
failure where colleagues can read it forces me to actually understand it first. It also
means a hard boundary: no secrets, no client code, no internal information. That boundary is
enforced by a hook, not by my discipline. See `.claude/hooks/block-secrets.mjs`.

## Running the labs

Node 22+ only. No dependencies, no install step — the labs use Node's built-in test runner.

```bash
cd code/labs/broken-cart
npm test
```

## Where to start

1. Read [`docs/roadmap/claude-code.md`](docs/roadmap/claude-code.md) — the six phases.
2. Do [`code/katas/001-plan-before-code`](code/katas/001-plan-before-code/).
3. Write a logbook entry. Include what went wrong.

## License

MIT. Take the skills, the hooks, the katas — all of it. If any of it is useful to you,
that is the point.
