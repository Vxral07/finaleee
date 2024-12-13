import * as React from "react";
import { ArticleCardProps } from "..";

export const ArticleCard: React.FC<ArticleCardProps> = ({
  date,
  title,
  imageUrl,
  readMoreLink
}) => {
  return (
    <div className="flex overflow-hidden flex-col border border-solid border-zinc-800 rounded-[30px]">
      <div className="flex relative flex-col w-full aspect-[0.833]">
        <img
          loading="lazy"
          src={imageUrl}
          alt={title}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-start px-9 pt-10 pb-64 bg-black bg-opacity-70 rounded-[30px] max-md:px-5 max-md:pb-24">
          <div className="px-4 py-1.5 bg-black rounded-md border border-solid border-zinc-800">
            {date}
          </div>
          <div className="self-stretch mt-3.5 text-xl">
            {title}
          </div>
          <a 
            href={readMoreLink}
            className="mt-2 mb-0 text-cyan-400 max-md:mb-2.5"
            tabIndex={0}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};