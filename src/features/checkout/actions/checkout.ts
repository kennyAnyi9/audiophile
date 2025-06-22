"use server";

import { z } from "zod";
import { checkoutFormSchema } from "../types/checkout";

// Process checkout action
export async function processCheckout(formData: FormData) {
  try {
    // Extract form data
    const rawData = {
      billingDetails: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
      },
      shippingInfo: {
        address: formData.get("address") as string,
        zipCode: formData.get("zipCode") as string,
        city: formData.get("city") as string,
        country: formData.get("country") as string,
      },
      paymentDetails: {
        paymentMethod: formData.get("paymentMethod") as "card" | "cash",
        cardNumber: formData.get("cardNumber") as string,
        cardPin: formData.get("cardPin") as string,
      },
    };

    // Validate the form data
    const validatedData = checkoutFormSchema.parse(rawData);

    // Get cart items from form data (JSON string)
    const cartItemsJson = formData.get("cartItems") as string;
    const cartItems = JSON.parse(cartItemsJson);

    // Calculate totals
    const subtotal = cartItems.reduce(
      (total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity,
      0
    );
    const shipping = subtotal > 0 ? 50 : 0; // $50 shipping or free for empty cart
    const vat = Math.round(subtotal * 0.2); // 20% VAT
    const grandTotal = subtotal + shipping + vat;

    // Generate order ID (in real app, this would be from database)
    const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Process payment (mock implementation)
    if (validatedData.paymentDetails.paymentMethod === "card") {
      // In real app, integrate with Stripe or other payment processor
      await simulatePaymentProcessing();
    }

    // Save order to database (mock implementation)
    await saveOrderToDatabase({
      orderId,
      customerData: validatedData,
      items: cartItems,
      totals: { subtotal, shipping, vat, grandTotal },
    });

    // Return success response
    return {
      success: true,
      orderId,
      message: "Order placed successfully!",
    };
  } catch (error) {
    console.error("Checkout error:", error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Please check your form data and try again.",
        details: error.errors,
      };
    }

    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}

// Mock function to simulate payment processing
async function simulatePaymentProcessing() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // In real implementation, this would integrate with Stripe:
  // const paymentIntent = await stripe.paymentIntents.create({...});
  // return paymentIntent;
}

// Mock function to save order to database
async function saveOrderToDatabase(orderData: Record<string, unknown>) {
  // Simulate database save delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  // In real implementation, this would save to your database:
  // const order = await db.insert(orders).values({...}).returning();
  // return order;
  
  console.log("Order saved:", orderData);
}

