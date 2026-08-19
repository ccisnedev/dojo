# ADR-0004 — Labs are plain subdirectories

**Status:** Accepted
**Date:** 2026-08-19

## Context

Labs are self-contained practice projects with their own manifest, tests, and lifecycle. They
look like independent repositories, which invites treating them as such.

They also have an unusual requirement: `main` must hold the **broken** state, because a kata
is a repetition and the resistance has to be resettable. `git checkout -- <path>` needs to
restore brokenness, not a solution.

## Decision

Labs are ordinary subdirectories of `code/labs/`, tracked in this repository. No submodules,
no subtrees, no separate repositories.

Solutions are never committed to `main`. They live on `solution/<kata-number>` branches, or
nowhere — usually nowhere, because the plan and the logbook entry are the artifacts worth
keeping.

## Alternatives considered

**Git submodules.** Genuine independence and clean version pinning. Rejected: every clone
needs `--recurse-submodules`, every reset becomes two operations, and a detached HEAD at the
wrong moment silently loses work. The repository is public and meant to be cloned by
colleagues in one command; submodules make the first five minutes hostile for a benefit
nobody here needs.

**Separate repositories, referenced by URL.** Same independence, worse: labs and katas would
version-drift, and a kata could stop being reproducible because its lab moved underneath it.

**Generating labs from a script instead of committing them.** Keeps `main` clean by
construction. Rejected as premature — it adds a build step to a repository whose selling
point is that it clones and runs.

## Consequences

One clone gets everything, and `npm test` works with no install step. That is the property
that decides whether labs get used or quietly abandoned.

The cost: this repository accumulates unrelated projects, and its history mixes lab code with
documentation. Acceptable while labs are small and few. If a lab ever grows large enough to
dominate the history, that is the trigger to revisit this — with a superseding ADR, not a
quiet migration.

A standing risk worth naming: committing a fixed `cart.js` to `main` destroys the lab's
purpose for every future repetition. `code/labs/README.md` says so, but a note is advice. If
it happens twice, replace the note with a hook.
