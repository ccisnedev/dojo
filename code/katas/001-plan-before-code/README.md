# 001 — Plan before code

**Phase:** 1 — the loop
**Lab:** `code/labs/broken-cart`
**Time budget:** 30 minutes. Past that, stop and log the failure. An overrun is data.

## Why this rep

The default move — mine and the agent's — is to start editing. It feels like progress and it
produces code that solves the wrong problem, because nobody established what the problem was.
Four tests fail in this lab for four unrelated reasons; two of them return a wrong number
rather than crashing. An agent that starts editing after reading one stack trace will patch
the symptom it saw and report success.

This kata trains the separation between understanding and doing. That separation is the
single highest-leverage habit in the whole roadmap, and it is a habit, not a technique —
which is why it needs repetitions rather than an explanation.

## The constraint

**You may not leave plan mode until `plan.md` exists in this directory and you have read it
yourself.**

- Enter plan mode with `Shift+Tab` before the first prompt. Confirm the status bar says so.
- Explore as much as you want inside plan mode. Reading is free; editing is what you are
  denied.
- The plan must name **all four** root causes and, for each, the file and function it lives
  in. A plan that says "fix the failing tests" is not a plan.
- Use `Ctrl+G` to open the plan in your editor and correct it before you approve it. This is
  the part everyone skips. Do not skip it.
- Then, and only then, implement.

## Pass criteria

- [ ] `plan.md` exists in this directory and predates the first edit to `cart.js`
- [ ] `plan.md` names four distinct root causes, each with a file and function
- [ ] `npm test` is green in `code/labs/broken-cart` — 5 passing, 0 failing
- [ ] `test/cart.test.js` is unmodified
- [ ] Every file changed in the diff appears in `plan.md`
- [ ] Logbook entry written, including what the plan got wrong

That last criterion is the real one. The plan will get something wrong. Record what.

## How to verify

```bash
cd code/labs/broken-cart && npm test
git diff --name-only                       # every path here must appear in plan.md
git diff --stat -- test/cart.test.js       # must be empty
```

Then hand it to the examiner rather than grading yourself:

```
Use the kata-reviewer subagent to judge code/katas/001-plan-before-code
```

## Notes for the reviewer

The constraint is unobservable from the diff alone — a plan written after the fact looks
identical to one written before it. Check the file modification time of `plan.md` against the
first edit to `cart.js` if the working tree still shows it, and if you cannot establish the
ordering, report it as `unverified` rather than assuming good faith.
