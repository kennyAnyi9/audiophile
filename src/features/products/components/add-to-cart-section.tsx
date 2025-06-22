"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/stores/cart-store";
import { Product } from "@/features/products/types/product.types";

interface AddToCartSectionProps {
  product: Product;
}

export default function AddToCartSection({ product }: AddToCartSectionProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  function handleQuantityChange(action: "increment" | "decrement") {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  function getCartImagePath(slug: string): string {
    // Map product slug to cart image path
    const cartImageMap: Record<string, string> = {
      'yx1-wireless-earphones': '/assets/cart/image-yx1-earphones.jpg',
      'xx99-mark-two-headphones': '/assets/cart/image-xx99-mark-two-headphones.jpg',
      'xx99-mark-one-headphones': '/assets/cart/image-xx99-mark-one-headphones.jpg',
      'xx59-headphones': '/assets/cart/image-xx59-headphones.jpg',
      'zx9-speaker': '/assets/cart/image-zx9-speaker.jpg',
      'zx7-speaker': '/assets/cart/image-zx7-speaker.jpg',
    };
    
    return cartImageMap[slug] || product.image.mobile;
  }

  function handleAddToCart() {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: getCartImagePath(product.slug),
      quantity,
    });
    
    // Simple success feedback (you can replace with toast notification later)
    alert(`Added ${quantity} ${product.name} to cart!`);
    setQuantity(1); // Reset quantity after adding
  }

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
      {/* Quantity Selector */}
      <div className="flex items-center bg-gray-100 h-12">
        <button
          onClick={() => handleQuantityChange("decrement")}
          className="px-4 sm:px-5 h-full text-black/25 hover:text-primary transition-colors font-bold text-[13px]"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="px-5 sm:px-6 font-bold text-[13px] text-black min-w-[40px] text-center">
          {quantity}
        </span>
        <button
          onClick={() => handleQuantityChange("increment")}
          className="px-4 sm:px-5 h-full text-black/25 hover:text-primary transition-colors font-bold text-[13px]"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <Button 
        onClick={handleAddToCart}
        size="default"
        className="h-12"
      >
        Add to Cart
      </Button>
    </div>
  );
}