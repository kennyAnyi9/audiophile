// Calculate order totals helper
export function calculateOrderTotals(items: Array<{ price: number; quantity: number }>) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 50 : 0;
  const vat = Math.round(subtotal * 0.2); // 20% VAT
  const grandTotal = subtotal + shipping + vat;

  return {
    subtotal,
    shipping,
    vat,
    grandTotal,
  };
}