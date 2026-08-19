# ADR-0002 — Repository macro architecture

**Status:** Accepted
**Date:** 2026-08-19

## Context

The repository holds several kinds of thing at once: exercises, broken practice projects,
written conclusions, decisions, and the agent configuration itself. A structure that grows
organically around those categories ends up unique to this repo, and a structure unique to
this repo costs every reader — including me in six months — a tour before they can find
anything.

Separately, there is a hard technical constraint: Claude Code discovers project configuration
at the **repository root**. Configuration placed anywhere else does not load. This is not a
preference and it cannot be arranged away.

## Decision

The macro architecture is the same one used across my other repositories:

```
code/
docs/
README.md
.gitignore
```

Everything else nests inside those. Exercises are `code/katas/`, practice projects are
`code/labs/`, decisions are `docs/adr/`, entries are `docs/logbook/`, conclusions are
`docs/principles/`.

Tool configuration — `.claude/` and `CLAUDE.md` — sits at the root alongside `.gitignore`
and `LICENSE`, not under `code/`.

## Alternatives considered

**A structure expressive of this repository's specific subject** — top-level `katas/`,
`labs/`, `adr/`, `logbook/`. More self-describing at a glance. Rejected because consistency
across a portfolio is worth more than expressiveness within one repo: a colleague opening any
of my repositories should not have to learn a new layout, and this one is public precisely so
that colleagues open it.

**`.claude/` under `code/`**, for the purity of keeping the root to four entries. Rejected
because it does not work — the configuration would simply not load.

## Consequences

Paths are one level deeper than they would otherwise be: `code/katas/001-plan-before-code/`
rather than `katas/001-plan-before-code/`. Accepted.

The root-level exception for `.claude/` is coherent rather than a compromise, and worth
stating in those terms: `.gitignore` configures git, `.claude/` configures the agent, and both
are repository infrastructure. The invariant is not "only four entries at the root" — it is
**infrastructure at the root, content in `code/` and `docs/`**. That invariant answers where
future additions go without needing a new decision each time.

`docs/principles/` is deliberately separate from `.claude/`. When this repository grows past
Claude Code, the tool-agnostic layer needs to already exist, or extracting it later means
rewriting the structure.
