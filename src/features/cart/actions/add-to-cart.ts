"use server";

import { z } from "zod";
import { db } from "@/server/db";
import { carts, cartItems, products } from "@/server/db/schema";
import { eq, and } from "drizzle-orm";

const addToCartSchema = z.object({
  productId: z.number().int().positive(),
  quantity: z.number().int().min(1).max(10),
  userId: z.string().optional(), // Optional for guest carts
});

export async function addToCart(input: z.infer<typeof addToCartSchema>) {
  try {
    const validated = addToCartSchema.parse(input);
    const { productId, quantity, userId } = validated;

    // Verify product exists
    const product = await db.query.products.findFirst({
      where: eq(products.id, productId),
    });

    if (!product) {
      return { success: false, error: "Product not found" };
    }

    // For now, we'll use localStorage on client side for guest carts
    // This action will be used when user is authenticated
    if (!userId) {
      return { success: false, error: "User authentication required" };
    }

    // Find or create user's cart
    let userCart = await db.query.carts.findFirst({
      where: eq(carts.userId, userId),
    });

    if (!userCart) {
      const [newCart] = await db.insert(carts).values({
        userId,
      }).returning();
      userCart = newCart;
    }

    // Check if item already exists in cart
    const existingItem = await db.query.cartItems.findFirst({
      where: and(
        eq(cartItems.cartId, userCart.id),
        eq(cartItems.productId, productId)
      ),
    });

    if (existingItem) {
      // Update quantity (max 10 total)
      const newQuantity = Math.min(existingItem.quantity + quantity, 10);
      await db
        .update(cartItems)
        .set({ quantity: newQuantity })
        .where(eq(cartItems.id, existingItem.id));
      
      return { success: true, data: { quantity: newQuantity, updated: true } };
    } else {
      // Add new item to cart
      await db.insert(cartItems).values({
        cartId: userCart.id,
        productId,
        quantity,
      });

      return { success: true, data: { quantity, updated: false } };
    }
  } catch (error) {
    console.error("Add to cart error:", error);
    return { success: false, error: "Failed to add item to cart" };
  }
}