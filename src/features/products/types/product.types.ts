/**
 * Product-related type definitions
 */

import { BaseEntity, ResponsiveImage } from "@/lib/types/common.types";

export type ProductCategory = "headphones" | "speakers" | "earphones";

export interface ProductInclude {
  quantity: number;
  item: string;
}

export interface ProductGallery {
  first: ResponsiveImage;
  second: ResponsiveImage;
  third: ResponsiveImage;
}

export interface ProductRecommendation {
  slug: string;
  name: string;
  image: ResponsiveImage;
}

export interface Product extends BaseEntity {
  name: string;
  slug: string;
  description: string;
  price: number;
  category: ProductCategory;
  new: boolean;
  features: string[];
  includes: ProductInclude[];
  gallery: ProductGallery;
  others: ProductRecommendation[];
  image: ResponsiveImage;
  categoryImage: ResponsiveImage;
}

export interface ProductListItem {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: ProductCategory;
  new: boolean;
  description: string;
  image: ResponsiveImage;
}

export interface ProductFilters {
  category?: ProductCategory;
  priceRange?: {
    min: number;
    max: number;
  };
  isNew?: boolean;
  search?: string;
}

export interface ProductSortOptions {
  field: "name" | "price" | "createdAt";
  order: "asc" | "desc";
}

export interface CategoryInfo {
  name: string;
  category: ProductCategory;
  image: string;
  href: string;
  productCount?: number;
}

export interface ProductCardProps {
  product: Product;
  index: number;
  variant?: "default" | "featured" | "compact";
  showDescription?: boolean;
  showPrice?: boolean;
}

export interface ProductDetailProps {
  product: Product;
}

export interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  emptyMessage?: string;
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export interface CategoryCardProps {
  category: CategoryInfo;
  onCategoryClick?: () => void;
}
