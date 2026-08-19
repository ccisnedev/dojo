# 002 — Verification in one prompt

**Phase:** 1 — the loop
**Lab:** `code/labs/broken-cart`
**Time budget:** 20 minutes, most of it spent writing the prompt rather than watching.

## Why this rep

An agent stops when the work *looks* done. If there is no check it can run itself, then the
check is me — reading the diff, running the tests, noticing the miss, typing the correction.
That is a loop with a human in it, and a loop with a human in it does not scale past the
length of my attention.

This kata removes me from the loop by force. You get one prompt. Whatever verification is not
in that prompt does not happen.

## The constraint

**Exactly one user message. After you send it you may not type anything again.**

`Esc` to abort and start over is allowed — and starting over is the exercise. `Esc` to
interrupt, correct, and continue is not.

Reset the lab first:

```bash
git checkout -- code/labs/broken-cart/src/cart.js
```

Write the prompt so that the agent implements, runs the tests, reads the failures, and
iterates without you. Things worth deciding before you send it: how it learns what "correct"
means, what it does when a fix breaks a previously passing test, and what stops it from
editing the test file to make things green.

## Pass criteria

- [ ] `npm test` is green — 5 passing, 0 failing
- [ ] `test/cart.test.js` is unmodified
- [ ] The session contains exactly one user message
- [ ] The prompt is recorded verbatim in the logbook entry
- [ ] The logbook records how many attempts it took to write a prompt that closed the loop

The last one is the score. Getting green on the first prompt means the kata was too easy for
you; getting there on the fourth means you learned four things about what you were leaving
implicit.

## How to verify

```bash
cd code/labs/broken-cart && npm test
git diff --stat -- test/cart.test.js       # must be empty
```

For the one-message criterion, check the transcript: `/rewind` lists the checkpoints, and one
user message means one checkpoint.

## Notes for the reviewer

Two failure modes to look for specifically, because both produce a green suite:

- The agent edited `test/cart.test.js` to match the code. Check the diff, not the test output.
- The agent asserted the tests pass without running them. Run them yourself and report what
  you actually observed.
