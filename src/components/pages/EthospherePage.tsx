import * as React from "react";

import { ArticleCard } from "../ArticleCard";
// import { FooterLink } from "../FooterLink";
// import { footerLinks } from "@/data";
import { articles } from "@/articles";

export const EthospherePage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-black">
      {/* <Navbar /> */}
      <div className="self-center mt-14 text-5xl font-medium tracking-tighter leading-loose text-center text-cyan-400 max-md:mt-10 max-md:text-4xl">
        Ethosphere
      </div>
      <div className="flex flex-col pl-20 mt-16 w-full text-white max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-9 self-start text-2xl leading-3 whitespace-nowrap">
          <div className="flex gap-2 py-5 pr-3.5 pl-7 rounded-2xl border border-solid border-zinc-800 max-md:pl-5">
            <div className="grow">2024</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/90a6c499055862e8c0cb8a82729e270cdd0ea722ba710abd614dc669feafe4af?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
              alt="Year selector"
              className="object-contain shrink-0 rounded-sm aspect-[1.9] w-[38px]"
            />
          </div>
          <div className="flex gap-3 py-5 pr-2 pl-7 rounded-2xl border border-solid border-zinc-800 max-md:pl-5">
            <div>Month</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/90a6c499055862e8c0cb8a82729e270cdd0ea722ba710abd614dc669feafe4af?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
              alt="Month selector"
              className="object-contain shrink-0 rounded-sm aspect-[1.9] w-[38px]"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start mt-24 text-sm leading-9 max-md:mt-10">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
      {/* <div className="flex flex-wrap gap-10 items-center mt-20 text-lg text-white max-md:mt-10">
            {footerLinks.map((link, index) => (
              <FooterLink key={index} {...link} />
            ))}
          </div> */}
    </div>
  );
};