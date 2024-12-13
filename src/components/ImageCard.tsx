import * as React from "react";

interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain w-[80px] h-[80px]" // Increased size for visibility
      />
    </div>
  );
};
