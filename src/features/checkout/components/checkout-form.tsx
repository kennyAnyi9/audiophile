"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import BillingDetailsSection from "./billing-details-section";
import ShippingInfoSection from "./shipping-info-section";
import PaymentDetailsSection from "./payment-details-section";
import OrderConfirmationModal from "./order-confirmation-modal";
import { processCheckout } from "../actions/checkout";
import { useCart } from "@/features/cart/stores/cart-store";
import type { OrderConfirmation } from "../types/checkout";

export default function CheckoutForm() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderData, setOrderData] = useState<OrderConfirmation | null>(null);
  
  const { items, clearCart } = useCart();
  const router = useRouter();

  function handleSubmit(formData: FormData) {
    // Add cart items to form data
    formData.append("cartItems", JSON.stringify(items));

    startTransition(async () => {
      try {
        const result = await processCheckout(formData);
        
        if (result.success) {
          // Clear cart
          clearCart();
          
          // Prepare order confirmation data
          const confirmation: OrderConfirmation = {
            orderId: result.orderId || `ORDER-${Date.now()}`,
            items: items.map(item => ({
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              image: item.image,
            })),
            grandTotal: items.reduce((total, item) => total + item.price * item.quantity, 0) + 50 + Math.round(items.reduce((total, item) => total + item.price * item.quantity, 0) * 0.2),
            customerEmail: formData.get("email") as string,
          };
          
          setOrderData(confirmation);
          setShowConfirmation(true);
          setErrors({});
        } else {
          // Handle form errors
          if (result.details) {
            const formErrors: Record<string, string> = {};
            result.details.forEach((error: { path: (string | number)[]; message: string }) => {
              const path = error.path.join(".");
              formErrors[path] = error.message;
            });
            setErrors(formErrors);
          } else {
            setErrors({ general: result.error || "An error occurred" });
          }
        }
      } catch (error) {
        console.error("Checkout error:", error);
        setErrors({ general: "Something went wrong. Please try again." });
      }
    });
  }

  function handleCloseConfirmation() {
    setShowConfirmation(false);
    setOrderData(null);
    router.push("/");
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-black mb-4">Your cart is empty</h2>
        <p className="text-black/50 mb-8">Add some products to your cart to proceed with checkout.</p>
        <Button onClick={() => router.push("/products")}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <>
      <form action={handleSubmit} className="space-y-12">
        {/* General Error */}
        {errors.general && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 font-medium">{errors.general}</p>
          </div>
        )}

        {/* Billing Details */}
        <BillingDetailsSection 
          errors={{
            name: errors["billingDetails.name"],
            email: errors["billingDetails.email"],
            phone: errors["billingDetails.phone"],
          }}
        />

        {/* Shipping Info */}
        <ShippingInfoSection 
          errors={{
            address: errors["shippingInfo.address"],
            zipCode: errors["shippingInfo.zipCode"],
            city: errors["shippingInfo.city"],
            country: errors["shippingInfo.country"],
          }}
        />

        {/* Payment Details */}
        <PaymentDetailsSection 
          errors={{
            paymentMethod: errors["paymentDetails.paymentMethod"],
            cardNumber: errors["paymentDetails.cardNumber"],
            cardPin: errors["paymentDetails.cardPin"],
          }}
        />

        {/* Submit Button */}
        <Button 
          type="submit" 
          size="default" 
          className="w-full"
          disabled={isPending}
        >
          {isPending ? "Processing..." : "Continue & Pay"}
        </Button>
      </form>

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        isOpen={showConfirmation}
        onClose={handleCloseConfirmation}
        orderData={orderData}
      />
    </>
  );
}