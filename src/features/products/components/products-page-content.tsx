import { getProducts } from "../actions/get-products";
import { getProductsByCategory } from "../actions/get-products-by-category";
import ProductCard from "./product-card";
import CategoriesSection from "./categories-section";
import AboutSection from "./about-section";
import { ProductCategory } from "../types/product.types";

interface ProductsPageContentProps {
  category?: string;
}

export default async function ProductsPageContent({ category }: ProductsPageContentProps) {
  // Validate category
  const validCategories: ProductCategory[] = ["headphones", "speakers", "earphones"];
  const isValidCategory = category && validCategories.includes(category as ProductCategory);
  
  // Fetch products based on category
  const products = isValidCategory
    ? await getProductsByCategory(category as ProductCategory)
    : await getProducts();
  
  // Determine page title
  const pageTitle = isValidCategory
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "All Products";

  return (
    <div className="min-h-screen bg-white">
      {/* Category Header */}
      <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide uppercase">
              {pageTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No products found in this category.
              </p>
            </div>
          ) : (
            <div className="space-y-16 lg:space-y-32">
              {products.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <div className="pb-[120px] md:pb-40">
        <CategoriesSection />
      </div>

      {/* About Section */}
      <AboutSection />
    </div>
  );
}