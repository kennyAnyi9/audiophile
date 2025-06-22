"use client";

import Image from "next/image";
import { useCart } from "@/features/cart/stores/cart-store";
import { calculateOrderTotals } from "../utils/order-calculations";

export default function OrderSummary() {
  const { items } = useCart();
  const { subtotal, shipping, vat, grandTotal } = calculateOrderTotals(items);

  const cleanImagePath = (path: string) => path.replace("./", "/");

  return (
    <div className="bg-white rounded-lg p-6 lg:p-8 h-fit">
      <h2 className="text-[18px] font-bold text-black uppercase tracking-[1.3px] mb-8">
        Summary
      </h2>

      {/* Cart Items */}
      <div className="space-y-6 mb-8">
        {items.length === 0 ? (
          <p className="text-black/50 text-center py-8">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              {/* Product Image */}
              <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={cleanImagePath(item.image)}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-bold text-black truncate">
                  {item.name}
                </h3>
                <p className="text-sm font-bold text-black/50">
                  $ {item.price.toLocaleString()}
                </p>
              </div>

              {/* Quantity */}
              <div className="text-[15px] font-bold text-black/50 flex-shrink-0">
                x{item.quantity}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Totals */}
      {items.length > 0 && (
        <div className="space-y-2">
          {/* Subtotal */}
          <div className="flex justify-between items-center">
            <span className="text-[15px] font-medium text-black/50 uppercase">Total</span>
            <span className="text-[18px] font-bold text-black">
              $ {subtotal.toLocaleString()}
            </span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between items-center">
            <span className="text-[15px] font-medium text-black/50 uppercase">Shipping</span>
            <span className="text-[18px] font-bold text-black">
              $ {shipping.toLocaleString()}
            </span>
          </div>

          {/* VAT */}
          <div className="flex justify-between items-center pb-6">
            <span className="text-[15px] font-medium text-black/50 uppercase">VAT (Included)</span>
            <span className="text-[18px] font-bold text-black">
              $ {vat.toLocaleString()}
            </span>
          </div>

          {/* Grand Total */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <span className="text-[15px] font-medium text-black/50 uppercase">Grand Total</span>
            <span className="text-[18px] font-bold text-primary">
              $ {grandTotal.toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}