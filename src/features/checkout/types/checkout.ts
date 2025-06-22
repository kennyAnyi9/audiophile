import { z } from "zod";

// Zod schema for billing details
export const billingDetailsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(1, "Phone number is required"),
});

// Zod schema for shipping info
export const shippingInfoSchema = z.object({
  address: z.string().min(1, "Address is required"),
  zipCode: z.string().min(1, "ZIP Code is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

// Zod schema for payment details
export const paymentDetailsSchema = z.object({
  paymentMethod: z.enum(["card", "cash"], {
    required_error: "Please select a payment method",
  }),
  // Card fields - only required when payment method is card
  cardNumber: z.string().optional(),
  cardPin: z.string().optional(),
});

// Complete checkout form schema
export const checkoutFormSchema = z.object({
  billingDetails: billingDetailsSchema,
  shippingInfo: shippingInfoSchema,
  paymentDetails: paymentDetailsSchema,
}).refine((data) => {
  // If payment method is card, require card fields
  if (data.paymentDetails.paymentMethod === "card") {
    return data.paymentDetails.cardNumber && 
           data.paymentDetails.cardNumber.length >= 16 &&
           data.paymentDetails.cardPin &&
           data.paymentDetails.cardPin.length >= 3;
  }
  return true;
}, {
  message: "Card details are required when paying with card",
  path: ["paymentDetails"],
});

// TypeScript types derived from schemas
export type BillingDetails = z.infer<typeof billingDetailsSchema>;
export type ShippingInfo = z.infer<typeof shippingInfoSchema>;
export type PaymentDetails = z.infer<typeof paymentDetailsSchema>;
export type CheckoutForm = z.infer<typeof checkoutFormSchema>;

// Order summary types
export interface OrderSummary {
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}

// Order confirmation types
export interface OrderConfirmation {
  orderId: string;
  items: OrderSummary["items"];
  grandTotal: number;
  customerEmail: string;
}

// Payment method type
export type PaymentMethod = "card" | "cash";