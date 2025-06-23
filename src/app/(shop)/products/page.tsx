import { Suspense } from "react";
import ProductsPageContent from "@/features/products/components/products-page-content";
import { cn } from "@/lib/utils";

function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  };
  
  return (
    <div className={cn(sizeClasses[size], "animate-spin rounded-full border-4 border-gray-300 border-t-primary")} />
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
  
  const categoryDescriptions = {
    headphones: "Immerse yourself in pure audio bliss with our premium headphone collection. From open-back to closed-back designs, find the perfect pair for your listening style.",
    speakers: "Transform your space with our exceptional speaker systems. Experience room-filling sound with pristine clarity and powerful bass response.",
    earphones: "Discover portable audio perfection with our premium earphone selection. Enjoy studio-quality sound wherever your journey takes you.",
    all: "Explore our complete collection of premium audio equipment. From headphones to speakers and earphones, find your perfect sound companion."
  };
  
  const title = categoryName === "all" 
    ? "Premium Audio Products - Audiophile" 
    : `Premium ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} - Audiophile`;
  
  return {
    title,
    description: categoryDescriptions[categoryName as keyof typeof categoryDescriptions] || categoryDescriptions.all,
    openGraph: {
      title,
      description: categoryDescriptions[categoryName as keyof typeof categoryDescriptions] || categoryDescriptions.all,
      type: 'website',
    },
  };
}