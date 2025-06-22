import Image from "next/image";
import { ProductGallery as ProductGalleryType } from "@/features/products/types/product.types";

interface ProductGalleryProps {
  gallery: ProductGalleryType;
  productName: string;
}

export default function ProductGallery({ gallery, productName }: ProductGalleryProps) {
  const cleanImagePath = (path: string) => path.replace("./", "/");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
      <div className="lg:col-span-2 space-y-4 lg:space-y-6">
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden h-44 lg:h-72 w-full">
          <Image
            src={cleanImagePath(gallery.first.desktop)}
            alt={`${productName} gallery image 1`}
            fill
            className="object-cover h-44"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </div>
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden h-44 lg:h-72 w-full">
          <Image
            src={cleanImagePath(gallery.second.desktop)}
            alt={`${productName} gallery image 2`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </div>
      </div>
      <div className="lg:col-span-3">
        <div className="relative aspect-square lg:aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden h-[368px] lg:h-[602px] w-full">
          <Image
            src={cleanImagePath(gallery.third.desktop)}
            alt={`${productName} gallery image 3`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </div>
    </div>
  );
}