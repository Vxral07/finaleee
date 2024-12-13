import * as React from "react";
import { NewsCardProps } from "@/types";

export const NewsCard: React.FC<NewsCardProps> = ({ imageSrc, title, imageAlt }) => {
  return (
    <div className="flex flex-col w-3/12 hover:scale-105 hover:shadow-blue-800 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow items-center px-16 pt-11 pb-20 text-xl font-semibold leading-tight border border-solid border-zinc-800 rounded-[30px] max-md:px-5 max-md:mt-10">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-contain self-stretch w-full aspect-[3.28]"
        />
        <div className="mt-7 text-center text-white">
          {title}
        </div>
        {/* Button with consistent alignment */}
        <div className="mt-auto">
          <button
            className="mt-10 text-cyan-400"
            tabIndex={0}
            aria-label={`Learn more about ${title}`}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
