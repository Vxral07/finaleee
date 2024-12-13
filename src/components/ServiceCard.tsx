import React from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  imageAlt: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  imageAlt,
}) => {
  return (
    <div
      className="flex flex-col items-center m-3  justify-between mt-20 p-6 bg-[#000000] text-white hover:scale-105 hover:shadow-blue-600/100 rounded-lg shadow-md border border-gray-800"
      style={{
        width: "100%",
        height: "380px", // Ensures a square size visually (can adjust as per width)
        aspectRatio: "1 / 1", // Makes the card a square
      }}
    >
      {/* Larger Image */}
      <div
        className="w-full h-48 flex  items-center justify-center bg-[#040404] rounded-md mb-4"
        style={{
          maxWidth: "180px",
          height: "180px",
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-cyan-400 mb-3 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-white text-center">{description}</p>
    </div>
  );
};
