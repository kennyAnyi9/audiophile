"use server";

import { db } from "@/server/db";
import { products } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { unstable_cache } from "next/cache";

export async function getProductBySlug(slug: string) {
  try {
    const product = await db.query.products.findFirst({
      where: eq(products.slug, slug)
    });

    if (!product) {
      return null;
    }

    return {
      id: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image as {
        mobile: string;
        tablet: string;
        desktop: string;
      },
      category: product.category,
      categoryImage: product.categoryImage as {
        mobile: string;
        tablet: string;
        desktop: string;
      },
      new: product.new,
      price: parseFloat(product.price),
      description: product.description,
      features: product.features,
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
    };
  } catch (error) {
    console.error("Failed to fetch product by slug:", error);
    return null;
  }
}

// With Next.js caching
export const getCachedProductBySlug = unstable_cache(
  getProductBySlug,
  ["product-by-slug"],
  {
    tags: ["products"],
    revalidate: 3600 // 1 hour
  }
);