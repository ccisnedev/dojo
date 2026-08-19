# Give the agent a way to verify

> **Status: seeded, not earned.** Taken from the official documentation on day one, before any
> repetitions. It is written here to be tested against practice and rewritten in my own terms —
> or deleted if practice does not support it.

## The principle

An agent stops when the work *looks* finished. Absent a check it can run itself, "looks
finished" is the only signal available to it — and the verification loop becomes me. Every
mistake then waits for a human to notice it, which caps the work at the length of my
attention and makes unattended runs a gamble rather than a delegation.

Give it something that returns a pass or a fail it can read, and the loop closes without me:
act, check, read the result, iterate. A test suite, a build exit code, a linter, a script that
diffs output against a fixture, a screenshot compared to a design. The form does not matter;
being machine-readable and unambiguous does.

Once the check exists, how hard it gates the stop is a separate choice, and the cost is
attention traded for setup:

| Gate | Cost | Buys |
|------|------|------|
| Stated in the prompt | nothing | works today, on any task |
| A standing goal condition | a sentence | survives across turns |
| A stop hook | a script | deterministic; the turn cannot end until it passes |
| A second agent, fresh context | a subagent | the one doing the work is not the one grading it |

The last row is the one that matters most and gets skipped most. The agent that wrote the code
is the worst available judge of whether it is correct, for the same reason I am a bad judge of
my own prose — it is reasoning from the transcript that produced the mistake.

## The corollary that is easy to miss

Demand the evidence, not the claim. "Tests pass" is an assertion; the test output is a fact.
Reviewing evidence is faster than re-running the verification myself, and it is the only thing
that works for a session I was not watching.

## The failure mode on the other side

A reviewer asked to find gaps will find some, whether or not they exist — that is what it was
asked to do. Chasing every finding produces defensive code, extra abstraction, and tests for
cases that cannot occur. Scope the reviewer to correctness and stated requirements, and treat
the rest as optional.

## Why it survives a change of tool

It is not a feature, it is the difference between an open loop and a closed one. Any system
that acts autonomously needs a termination signal it can evaluate itself; otherwise the
signal is a human, and it is not autonomous.

## Where this came from

Seeded from [Claude Code best practices](https://code.claude.com/docs/en/best-practices),
2026-08-18. No logbook provenance yet.
