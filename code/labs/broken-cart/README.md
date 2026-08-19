# Lab — broken-cart

A shopping cart module with a test suite that does not pass. This is training resistance, not
a product. It is not meant to be finished and kept; it is meant to be fixed, reset, and fixed
again under a different constraint.

## Run it

Node 22 or newer. No install step.

```bash
npm test
```

Five tests. One is green. The other four are not, and none of them fail because of a typo —
each has a root cause you have to read for. Two of them are wrong answers rather than
crashes, which is the interesting kind: the code runs, returns a number, and the number is
the wrong one.

## The specification

This is what the module is supposed to do. The tests encode it; the source does not yet.

- A cart holds **one line per SKU**. Adding the same SKU again adds units to the existing
  line, it does not open a second one.
- Removing more units than the cart holds **drops the line**. A cart never holds a negative
  quantity.
- `subtotal` is the value of the goods, before any coupon and before tax.
- A coupon takes a flat amount off **the goods**. Tax is then owed on what is left — the
  order a receipt reads: goods, minus discount, plus tax on the remainder.
- `total` is what gets charged to a card. It has to be an amount a card can actually be
  charged.

## Resetting the lab

Katas are repetitions, so you will want this file set back to broken more than once.

```bash
git checkout -- code/labs/broken-cart/src/cart.js
```

Never commit a fixed `cart.js` to `main`. If you want to keep a solution, keep it on a branch
named `solution/<kata-number>`, or keep only the plan and the logbook entry — which is the
part that was actually worth producing.

## Do not

- Do not add dependencies. Node's built-in test runner is the whole toolchain on purpose:
  a lab that needs `npm install` is a lab you will stop using.
- Do not edit `test/cart.test.js`. The tests are the specification. Changing them to match
  the code is the exact failure mode this lab exists to train against.
