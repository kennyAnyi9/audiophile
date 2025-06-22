import AboutSection from "@/features/products/components/about-section";
import CategoriesSection from "@/features/products/components/categories-section";
import FeaturedProducts from "@/features/products/components/featured-products";
import HeroSection from "@/features/products/components/hero-section";

export default function HomePage() {
  return (
    <div className="min-h-screen space-y-30">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <AboutSection />
    </div>
  );
}
