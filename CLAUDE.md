# Dojo

A public training repository for practicing AI-agent engineering. Its two rules are
non-negotiable and are stated in `README.md`:

1. Nothing enters the repo unless it produces an artifact that runs or applies.
2. Every kata carries its own pass criteria.

## Language

All committed content is in English: docs, ADRs, logbook entries, katas, code comments,
commit messages. Conversation may be in Spanish; what lands in git is not.

## Layout rules

- `.claude/` and `CLAUDE.md` stay at the repository root. Never move them under `code/`.
- Exercises go in `code/katas/NNN-kebab-name/`. Lab projects in `code/labs/<name>/`.
- Labs are plain subdirectories, never git submodules.
- Labs must run with zero install steps. Node's built-in test runner (`node --test`), no
  dependencies.

## Writing rules

- ADRs are immutable once committed. To reverse a decision, write a new ADR that supersedes
  the old one and link both ways. Never edit a merged ADR except to add the superseded link.
- Logbook entries are append-only, filename `YYYY-MM-DD-slug.md`. Never rewrite history in
  an entry — a correction is a new entry.
- Logbook entries must record the failure, not just the outcome: the prompt that failed, the
  reason, and the prompt that worked.
- A kata is not finished until its `README.md` states a pass criterion someone else could
  check without asking me.

## Do not

- Do not commit secrets, tokens, client code, or internal company information. This repo is
  public. A `PreToolUse` hook blocks known credential patterns, but the hook is a backstop,
  not the policy.
- Do not add dependencies to lab projects.
- Do not write documentation about a feature I have not actually used.
