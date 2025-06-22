import CategoryCard from "./category-card";

interface CategoriesSectionProps {
  onCategoryClick?: () => void;
}

export default function CategoriesSection({
  onCategoryClick,
}: CategoriesSectionProps) {
  const categories = [
    {
      name: "Headphones",
      category: "headphones" as const,
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
      href: "/products?category=headphones",
    },
    {
      name: "Speakers",
      category: "speakers" as const,
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
      href: "/products?category=speakers",
    },
    {
      name: "Earphones",
      category: "earphones" as const,
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
      href: "/products?category=earphones",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-8 lg:gap-8 mt-12 sm:mt-20 max-w-7xl p-8 mx-auto">
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          onCategoryClick={onCategoryClick}
        />
      ))}
    </div>
  );
}
