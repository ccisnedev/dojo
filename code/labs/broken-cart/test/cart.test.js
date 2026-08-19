import { test } from "node:test";
import assert from "node:assert/strict";

import {
  createCart,
  addItem,
  removeItem,
  applyCoupon,
  subtotal,
  total,
} from "../src/cart.js";

test("subtotal sums the value of the goods", () => {
  const cart = createCart({ taxRate: 0 });
  addItem(cart, { sku: "TEA", name: "Sencha", unitPrice: 12.5, quantity: 2 });
  addItem(cart, { sku: "POT", name: "Kyusu", unitPrice: 30, quantity: 1 });

  assert.equal(subtotal(cart), 55);
});

test("adding the same sku twice keeps one line and sums the units", () => {
  const cart = createCart({ taxRate: 0 });
  addItem(cart, { sku: "TEA", name: "Sencha", unitPrice: 12.5, quantity: 1 });
  addItem(cart, { sku: "TEA", name: "Sencha", unitPrice: 12.5, quantity: 2 });

  assert.equal(cart.items.length, 1);
  assert.equal(cart.items[0].quantity, 3);
  assert.equal(subtotal(cart), 37.5);
});

test("removing more units than the cart holds drops the line", () => {
  const cart = createCart({ taxRate: 0 });
  addItem(cart, { sku: "TEA", name: "Sencha", unitPrice: 12.5, quantity: 2 });
  removeItem(cart, "TEA", 5);

  assert.equal(cart.items.length, 0);
  assert.equal(subtotal(cart), 0);
});

test("the total is a chargeable amount, not a floating point artifact", () => {
  const cart = createCart({ taxRate: 0 });
  addItem(cart, { sku: "A", name: "Ten cents", unitPrice: 0.1, quantity: 1 });
  addItem(cart, { sku: "B", name: "Twenty cents", unitPrice: 0.2, quantity: 1 });

  assert.equal(total(cart), 0.3);
});

test("a coupon discounts the goods, so tax applies to what is left", () => {
  const cart = createCart({ taxRate: 0.21 });
  addItem(cart, { sku: "POT", name: "Kyusu", unitPrice: 100, quantity: 1 });
  applyCoupon(cart, { code: "WELCOME10", amountOff: 10 });

  // Goods 100, minus 10 = 90. Tax at 21% on 90 = 18.90. Charged: 108.90.
  assert.equal(total(cart), 108.9);
});
