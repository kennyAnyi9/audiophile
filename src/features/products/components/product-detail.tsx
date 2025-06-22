"use client";

import Image from "next/image";
import { Product } from "@/features/products/types/product.types";
import AddToCartSection from "./add-to-cart-section";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const cleanImagePath = (path: string) => path.replace("./", "/");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 items-center">
      {/* Product Image */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        <div className="aspect-square md:aspect-[4/5] lg:aspect-square relative">
          <Image
            src={cleanImagePath(product.image.desktop)}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 560px"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6 md:space-y-8">
        {product.new && (
          <p className="text-primary text-sm font-normal tracking-[10px] uppercase">
            New Product
          </p>
        )}
        
        <h1 className="text-[28px] md:text-[40px] font-bold text-black tracking-[1px] md:tracking-[1.4px] uppercase leading-[32px] md:leading-[44px]">
          {product.name}
        </h1>

        <p className="text-[15px] leading-[25px] text-black/50">
          {product.description}
        </p>

        <p className="text-[18px] font-bold text-black tracking-[1.3px]">
          $ {product.price.toLocaleString()}
        </p>

        <AddToCartSection product={product} />
      </div>
    </div>
  );
}