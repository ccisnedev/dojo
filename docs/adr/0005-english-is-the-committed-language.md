# ADR-0005 — English is the committed language

**Status:** Accepted
**Date:** 2026-08-19

## Context

I think and speak in Spanish, and the sessions that produce this repository are in Spanish.
The logbook depends on nuance — the difference between "the prompt was vague" and "the prompt
left the acceptance criterion implicit" is the entire value of an entry — and nuance is
cheaper in a first language.

Against that: the repository is public, the tooling's vocabulary is English
(`SKILL.md`, `PreToolUse`, `subagent`, `plan mode`), and the audience for a public agent-
engineering repo is not limited to people who read Spanish.

## Decision

Everything committed is in English: README, ADRs, logbook entries, katas, code comments,
commit messages. Conversation stays in Spanish.

## Alternatives considered

**Spanish throughout.** Better entries, smaller reach, and constant friction where Spanish
prose has to carry English technical terms mid-sentence.

**Mixed — Spanish prose, English identifiers.** Pragmatic and what happens by default if
nothing is decided. Rejected because "by default" is exactly how a repository ends up
half-translated: some ADRs in one language, some in the other, and no rule to point at when
it drifts. A uniform rule is enforceable; a pragmatic blend is not.

## Consequences

Writing is slower, and the logbook will lose some precision at first. Watch specifically for
entries that get vaguer because the English was harder — that is the failure mode, and it
attacks the most valuable content in the repository.

If it turns out that entries are being flattened by the language rather than sharpened by the
audience, supersede this. The logbook's honesty outranks its reach.
