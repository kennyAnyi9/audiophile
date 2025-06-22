import { Suspense } from "react";
import ProductsPageContent from "@/features/products/components/products-page-content";
function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };
  
  return (
    <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-300 border-t-primary`} />
  );
}

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      }
    >
      <ProductsPageContent category={category} />
    </Suspense>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ searchParams }: ProductsPageProps) {
  const { category } = await searchParams;
  const categoryName = category || "all";
  const title = categoryName === "all" 
    ? "All Products" 
    : `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} - Audiophile`;
  
  return {
    title,
    description: `Shop premium ${categoryName} at Audiophile. Experience exceptional audio quality.`
  };
}