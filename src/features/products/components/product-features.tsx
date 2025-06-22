interface ProductFeaturesProps {
  features: string[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  // Features are already an array of paragraphs
  const paragraphs = features.filter(p => p.trim());

  return (
    <div className="space-y-6 md:space-y-8">
      <h2 className="text-2xl md:text-[32px] font-bold text-black tracking-[0.86px] md:tracking-[1.14px] uppercase">
        Features
      </h2>
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className="text-[15px] leading-[25px] text-black/50"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}