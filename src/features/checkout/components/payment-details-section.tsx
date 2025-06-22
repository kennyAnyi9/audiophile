"use client";

import { useState } from "react";
import FormInput from "./form-input";
import type { PaymentMethod } from "../types/checkout";

interface PaymentDetailsSectionProps {
  errors?: {
    paymentMethod?: string;
    cardNumber?: string;
    cardPin?: string;
  };
}

export default function PaymentDetailsSection({ errors }: PaymentDetailsSectionProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  return (
    <div className="space-y-6">
      <h2 className="text-[13px] font-bold text-primary uppercase tracking-[0.93px]">
        Payment Details
      </h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-xs font-bold text-black mb-4">Payment Method</p>
          
          <div className="space-y-4">
            {/* Credit Card Option */}
            <label className={`flex items-center p-[18px] border rounded-lg cursor-pointer transition-colors ${
              paymentMethod === "card" 
                ? "border-primary bg-primary/5" 
                : "border-gray-300 hover:border-gray-400"
            }`}>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                paymentMethod === "card" ? "border-primary" : "border-gray-300"
              }`}>
                {paymentMethod === "card" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                )}
              </div>
              <span className="text-sm font-bold text-black">Credit Card</span>
            </label>

            {/* Cash on Delivery Option */}
            <label className={`flex items-center p-[18px] border rounded-lg cursor-pointer transition-colors ${
              paymentMethod === "cash" 
                ? "border-primary bg-primary/5" 
                : "border-gray-300 hover:border-gray-400"
            }`}>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                paymentMethod === "cash" ? "border-primary" : "border-gray-300"
              }`}>
                {paymentMethod === "cash" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                )}
              </div>
              <span className="text-sm font-bold text-black">Cash on Delivery</span>
            </label>
          </div>
          
          {errors?.paymentMethod && (
            <p className="text-xs font-medium text-red-500 mt-2">{errors.paymentMethod}</p>
          )}
        </div>

        {/* Credit Card Fields */}
        {paymentMethod === "card" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <FormInput
              label="Card Number"
              name="cardNumber"
              type="text"
              placeholder="238521993"
              required={paymentMethod === "card"}
              error={errors?.cardNumber}
              className="md:col-span-2"
            />
            
            <FormInput
              label="PIN"
              name="cardPin"
              type="text"
              placeholder="1891"
              required={paymentMethod === "card"}
              error={errors?.cardPin}
            />
          </div>
        )}

        {/* Cash on Delivery Info */}
        {paymentMethod === "cash" && (
          <div className="flex items-start gap-8 p-8 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#D87D4A"/>
                <path d="M19 23L23 27L29 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-[15px] leading-[25px] text-black/50">
                The &apos;Cash on Delivery&apos; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}