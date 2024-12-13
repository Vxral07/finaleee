import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`p-6 bg-[#131313] text-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50 ${className}`}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};
