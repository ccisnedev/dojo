# ADR-0003 — Public from day one

**Status:** Accepted
**Date:** 2026-08-19

## Context

The obvious default for a personal training repository is private: it will contain unfinished
thinking, wrong conclusions, and a logbook whose whole value depends on recording failures
honestly. Publishing that is uncomfortable, and discomfort is a real cost.

It is also the mechanism. An entry written where colleagues can read it has to be understood
before it can be written; an entry written for nobody can be vague and I will never notice.

## Decision

The repository is public from the first commit, MIT licensed, and shared with colleagues
immediately rather than once it is presentable.

## Alternatives considered

**Private, made public when it is good enough.** The standard plan, and it does not happen —
the bar moves as the repo grows, and "good enough" is never today. It also forfeits the exact
pressure that makes the logbook honest, during the period when the logbook is most fragile.

**Public code, private logbook.** Splits the repository in two and puts the most valuable
half in the dark. The failures are the transferable part; hiding them leaves a repo of tidy
solutions, which is the artifact this project exists to avoid producing.

**No license.** Public but unlicensed means colleagues legally cannot reuse the skills, hooks,
or katas — which defeats the reason for making it public.

## Consequences

A hard boundary applies to everything committed: no secrets, no client code, no internal
company information, no colleagues named without asking. That boundary cannot depend on my
discipline while writing, so it is enforced by a `PreToolUse` hook
(`.claude/hooks/block-secrets.mjs`) that blocks credential-shaped content before it is
written, backed by `.gitignore`.

Choosing the hook over a note in `CLAUDE.md` is itself the point being trained:
`CLAUDE.md` is advice and a hook is a guarantee, and this is a case where advice is not
enough.

The accepted cost is self-censorship — some things will not get written down because they are
public. Watch for it. If it starts hollowing out the logbook, that is grounds for a
superseding ADR, not for quietly writing less.
