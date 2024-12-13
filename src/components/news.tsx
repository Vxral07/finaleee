// import { useNavigate } from "react-router-dom";
import * as React from "react";
import { NewsCard } from "./NewsCard";

const newsData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/efc2cd1e18b64cb1917ba0d95e13dd7a6403861d6eeeac5ae5d902e064d56162?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Nuqi Digital Wealth attains DFSA license",
    imageAlt: "Nuqi Digital Wealth DFSA license announcement"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f877d4fa14b9776bb91ba2e76410ead82ac4d8f5f0a22e6d8dab98d4a8ec5b9c?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Discover NUQI WEALTH",
    imageAlt: "NUQI WEALTH discovery presentation"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b367d6a828c05b3c006f81cd046ffeadd487811a9061ca0fc3f9d824f9615de?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Nuqi Digital Wealth secures DFSA license",
    imageAlt: "Nuqi Digital Wealth DFSA license security announcement"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/be4457d7fbb826cadc89ca9b6a85977daabbe691adf0bfd88325245b34fcc843?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Empowering Gen Z",
    imageAlt: "Generation Z empowerment initiative"
  }
];

export const News: React.FC = () => {
  return (
    
      <div className="flex flex-col items-center justify-center mt-10 py-10">
      {/* Header */}
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Nuqi in the News
      </h2>
      <div className="flex gap-5 max-md:flex-wrap">
        
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            imageSrc={news.imageSrc}
            title={news.title}
            imageAlt={news.imageAlt}
          />
        ))}
      </div>
    </div>
  );
};