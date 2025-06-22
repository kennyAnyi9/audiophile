import { ProductInclude } from "@/features/products/types/product.types";

interface ProductIncludesProps {
  includes: ProductInclude[];
}

export default function ProductIncludes({ includes }: ProductIncludesProps) {
  return (
    <div className="space-y-6 md:space-y-8 flex flex-col md:flex-row lg:flex-col md:gap-40 lg:gap-8">
      <h2 className="text-2xl md:text-[32px] font-bold text-black tracking-[0.86px] md:tracking-[1.14px] uppercase">
        In The Box
      </h2>
      <ul className="space-y-2">
        {includes.map((item, index) => (
          <li key={index} className="flex items-center gap-6">
            <span className="text-[15px] font-bold text-primary min-w-[18px]">
              {item.quantity}x
            </span>
            <span className="text-[15px] leading-[25px] text-black/50">
              {item.item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}