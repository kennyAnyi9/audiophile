import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductRecommendation } from "@/features/products/types/product.types";

interface RelatedProductsProps {
  products: ProductRecommendation[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  const cleanImagePath = (path: string) => path.replace("./", "/");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-3 lg:gap-[30px]">
      {products.map((product) => (
        <div key={product.slug} className="text-center group">
          {/* Product Image */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-8 md:mb-10">
            <div className="aspect-square relative">
              <Image
                src={cleanImagePath(product.image.desktop)}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 350px"
              />
            </div>
          </div>

          {/* Product Name */}
          <h3 className="text-2xl font-bold text-black mb-8 uppercase tracking-[1.7px]">
            {product.name}
          </h3>

          {/* CTA Button */}
          <Link href={`/products/${product.slug}`}>
            <Button>See Product</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}