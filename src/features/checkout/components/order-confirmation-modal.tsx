"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import type { OrderConfirmation } from "../types/checkout";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: OrderConfirmation | null;
}

export default function OrderConfirmationModal({
  isOpen,
  onClose,
  orderData,
}: OrderConfirmationModalProps) {
  const cleanImagePath = (path: string) => path.replace("./", "/");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !orderData) return null;

  const firstItem = orderData.items[0];
  const otherItemsCount = orderData.items.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg mx-4 w-full max-w-[540px] max-h-[90vh] overflow-y-auto">
        <div className="p-8 md:p-12">
          {/* Success Icon */}
          <div className="mb-6 md:mb-8">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#D87D4A"/>
              <path d="M20.5 33.5L28.5 41.5L43.5 26.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Heading */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-[32px] font-bold text-black uppercase tracking-[1.14px] md:tracking-[1.14px] leading-[28px] md:leading-[36px] mb-4">
              Thank you<br />for your order
            </h1>
            <p className="text-[15px] leading-[25px] text-black/50">
              You will receive an email confirmation shortly.
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-6 md:mb-8">
            <div className="p-6">
              {/* First Item */}
              <div className="flex items-center gap-4 pb-3">
                <div className="relative w-12 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={cleanImagePath(firstItem.image)}
                    alt={firstItem.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold text-black truncate">
                    {firstItem.name}
                  </h3>
                  <p className="text-sm font-bold text-black/50">
                    $ {firstItem.price.toLocaleString()}
                  </p>
                </div>
                
                <div className="text-[15px] font-bold text-black/50 flex-shrink-0">
                  x{firstItem.quantity}
                </div>
              </div>

              {/* Other Items Count */}
              {otherItemsCount > 0 && (
                <>
                  <hr className="my-3 border-black/10" />
                  <p className="text-xs font-bold text-black/50 text-center">
                    and {otherItemsCount} other item{otherItemsCount > 1 ? "s" : ""}
                  </p>
                </>
              )}
            </div>

            {/* Grand Total */}
            <div className="bg-black p-6">
              <div className="text-center">
                <p className="text-[15px] font-medium text-white/50 uppercase mb-2">
                  Grand Total
                </p>
                <p className="text-[18px] font-bold text-white">
                  $ {orderData.grandTotal.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link href="/" onClick={onClose}>
            <Button size="default" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}