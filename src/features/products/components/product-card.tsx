import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import { ProductCardProps } from "@/features/products/types/product.types";

export default function ProductCard({ product, index }: ProductCardProps) {
  const cleanImagePath = (path: string) => path.replace("./", "/");

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      <div
        className={`relative bg-gray-100 rounded-lg overflow-hidden ${
          index % 2 === 1 ? "lg:col-start-2" : ""
        }`}
      >
        <div className="aspect-square relative">
          <Image
            src={cleanImagePath(product.image.desktop)}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <div
        className={`space-y-6 lg:space-y-8 text-center lg:text-left ${
          index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
        }`}
      >
        {product.new && (
          <span className="text-primary text-sm font-medium tracking-[10px] uppercase">
            New Product
          </span>
        )}

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-wide uppercase">
          {product.name}
        </h2>

        <p className="text-gray-600 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
          {product.description}
        </p>

        <Link href={`/products/${product.slug}`}>
          <Button size="lg">See Product</Button>
        </Link>
      </div>
    </div>
  );
}