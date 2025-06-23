import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

function BackButton() {
  return (
    <Link 
      href="/products"
      className="inline-flex items-center text-black/50 hover:text-primary transition-colors text-[15px] font-medium mb-6 lg:mb-8"
    >
      Go Back
    </Link>
  );
}
import ProductDetail from "@/features/products/components/product-detail";
import ProductGallery from "@/features/products/components/product-gallery";
import ProductFeatures from "@/features/products/components/product-features";
import ProductIncludes from "@/features/products/components/product-includes";
import RelatedProducts from "@/features/products/components/related-products";
import CategoriesSection from "@/features/products/components/categories-section";
import AboutSection from "@/features/products/components/about-section";
import { getCachedProductBySlug } from "@/features/products/actions/get-product-by-slug";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getCachedProductBySlug(slug);
  
  if (!product) {
    return {};
  }

  return {
    title: `${product.name} - Premium Audio | Audiophile`,
    description: `${product.description} Experience exceptional sound quality and craftsmanship with this premium audio product from Audiophile.`,
    keywords: [product.name, product.category, 'premium audio', 'audiophile', 'high-quality sound'],
    openGraph: {
      title: `${product.name} - Premium Audio`,
      description: product.description,
      images: [product.image.desktop],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - Premium Audio`,
      description: product.description,
      images: [product.image.desktop],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getCachedProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <BackButton />
      </div>

      {/* Product Detail Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <ProductDetail product={product} />
      </section>

      {/* Features and In The Box Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-32">
          <div className="lg:col-span-2">
            <ProductFeatures features={product.features} />
          </div>
          <div>
            <ProductIncludes includes={product.includes} />
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-32">
        <ProductGallery gallery={product.gallery} productName={product.name} />
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 lg:pb-32">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-10 md:mb-14 lg:mb-16 uppercase tracking-wide">
          You May Also Like
        </h2>
        <RelatedProducts products={product.others} />
      </section>

      {/* Categories Section */}
      <div className="pb-20 md:pb-32 lg:pb-40">
        <CategoriesSection />
      </div>

      {/* About Section */}
      <AboutSection />
    </div>
  );
}