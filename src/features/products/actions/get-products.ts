"use server";

import { db } from "@/server/db";
import { products } from "@/server/db/schema";
import { Product } from "../types/product.types";

export async function getProducts(): Promise<Product[]> {
  try {
    const result = await db.select().from(products).orderBy(products.new);
    
    // Transform database results to match Product type
    return result.map(product => ({
      id: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image as { mobile: string; tablet: string; desktop: string },
      category: product.category,
      categoryImage: product.categoryImage as { mobile: string; tablet: string; desktop: string },
      new: product.new,
      price: parseFloat(product.price),
      description: product.description,
      features: product.features as string[],
      includes: product.includes as { quantity: number; item: string }[],
      gallery: product.gallery as {
        first: { mobile: string; tablet: string; desktop: string };
        second: { mobile: string; tablet: string; desktop: string };
        third: { mobile: string; tablet: string; desktop: string };
      },
      others: product.others as {
        slug: string;
        name: string;
        image: { mobile: string; tablet: string; desktop: string };
      }[],
      createdAt: product.createdAt,
      updatedAt: product.updatedAt
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products");
  }
}