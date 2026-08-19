# Labs

Deliberately broken projects. They exist to be resistance for the katas, not to be finished.

A lab is good when it fails for reasons you have to read for. A lab where the bug is a typo
teaches nothing, because the agent finds it instantly and so would you. The interesting
failures are the ones that run cleanly and return the wrong answer.

## Rules

- **Plain subdirectories, never git submodules.** Submodules are powerful and they are pain,
  and here they buy nothing. See [ADR-0004](../../docs/adr/0004-labs-are-plain-subdirectories.md).
- **Zero install steps.** Node's built-in test runner and nothing else. A lab that needs
  `npm install` is a lab that goes stale and stops getting used.
- **The tests are the specification.** A lab is only usable if "correct" is defined by
  something other than my opinion.
- **`main` holds the broken state.** Reset with `git checkout -- <path>`. Solutions live on
  `solution/<kata-number>` branches, or nowhere — usually nowhere, because the plan and the
  logbook entry were the parts worth keeping.

## Available

| Lab | Language | Tests | State |
|-----|----------|-------|-------|
| [broken-cart](broken-cart/) | JavaScript (Node 22) | 5 | 1 passing, 4 failing |
