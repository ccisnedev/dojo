/**
 * Shopping cart.
 *
 * Money is handled in the store's display currency. Totals are charged to a card, so they
 * must come out as a value that can actually be charged — no fractions of a cent.
 */

/**
 * @param {{ taxRate?: number }} [options]
 */
export function createCart({ taxRate = 0.21 } = {}) {
  return { items: [], coupon: null, taxRate };
}

/**
 * Add a line to the cart. A cart holds one line per SKU.
 *
 * @param {object} cart
 * @param {{ sku: string, name: string, unitPrice: number, quantity?: number }} line
 */
export function addItem(cart, { sku, name, unitPrice, quantity = 1 }) {
  cart.items.push({ sku, name, unitPrice, quantity });
  return cart;
}

/**
 * Remove units of a SKU. A line that reaches zero units is no longer in the cart.
 *
 * @param {object} cart
 * @param {string} sku
 * @param {number} [quantity]
 */
export function removeItem(cart, sku, quantity = 1) {
  const item = cart.items.find((i) => i.sku === sku);
  if (!item) return cart;
  item.quantity -= quantity;
  return cart;
}

/**
 * @param {object} cart
 * @param {{ code: string, amountOff: number }} coupon A flat amount off the goods.
 */
export function applyCoupon(cart, coupon) {
  cart.coupon = coupon;
  return cart;
}

/** Value of the goods, before any coupon and before tax. */
export function subtotal(cart) {
  return cart.items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
}

/**
 * What the customer is charged.
 *
 * A coupon discounts the goods, so tax is owed on the discounted amount — the same way a
 * receipt reads: goods, minus discount, plus tax on what is left.
 */
export function total(cart) {
  const taxed = subtotal(cart) * (1 + cart.taxRate);
  const discount = cart.coupon ? cart.coupon.amountOff : 0;
  return taxed - discount;
}
