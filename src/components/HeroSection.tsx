import * as React from "react";
import { HeroSectionProps } from "@/types";

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlightedText,
  imageSrc,
  description, // Pass the description
}) => {
  return (
    <div className="rounded-none">
      <div className="flex gap-10 items-center max-md:flex-col">
        {/* Left Section */}
        <div className="flex flex-col w-[44%] ml-12 max-md:ml-0 max-md:w-full">
          <div className="self-stretch text-5xl ml-5 font-medium tracking-tighter leading-tight text-cyan-500 max-md:mt-10  max-md:max-w-full max-md:text-4xl">
            <span className="text-white">{highlightedText} </span>
            {title}
          </div>
          {/* Description Section */}
          <div className="mt-6 text-lg leading-8 text-white ml-5 max-md:text-base max-md:leading-7">
            {description}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt="Nuqi Prive hero section"
            className="object-contain grow w-full rounded-3xl aspect-[1.41] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};
