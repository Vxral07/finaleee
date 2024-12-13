import React from "react";
import { PortfolioCard } from "./PortfolioCard";

const portfolioData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97ae75781c2f751cae24dbe6cc77ca8480f6c3e18679c7a8aff0fae4d9f85eeb?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Entrenched Enterprises",
    description:
      "Entrenched Enterprises offers a selection of established companies with strong market presence and proven track records. These stocks represent stable and reliable investments in well-established industries.",
    basket: "global",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/54e00c433c1b5c359308b6dafd2a35e386897e9dd981b607fb6466462fda3ff2?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Income Generators",
    description:
      "Income Generators focuses on dividend-paying stocks known for their consistent income generation. These stocks provide investors with steady cash flow and potential for long-term wealth accumulation.",
    basket: "global",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/920b85afd2714f91a4ae72908214f4bccf9cff84ba931f24c3fe7cafff91e235?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence comprises stocks of companies at the forefront of AI technology development. These innovative companies leverage AI to drive growth, efficiency, and disruption in various sectors.",
    basket: "global",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ffcd92f77f68d0ac88151b1a1fa324ce45cd7f61a4651ea14276d8deb197db?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    title: "60 40 Portfolios (ETFs)",
    description:
      "The 60/40 Portfolios offer a balanced approach to investment, consisting of a mix of 60% equity ETFs and 40% fixed-income ETFs. This diversified portfolio aims to provide stability and growth potential for investors.",
    basket: "global",
  },
];

export const PortfolioGrid: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-20 bg-black text-white">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-cyan-400 mb-10 text-center">
        Nuqi Global CEP (Curated Equity Portfolios)
      </h2>
      <p className="max-w-3xl text-center text-gray-400 mb-5">
        Our Nuqi Global Basket offers a variety of curated investment themes,
        each catering to specific risk appetite and investment goals:
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-8 px-5 py-10 md:grid-cols-2">
        {portfolioData.map((portfolio, index) => (
          <PortfolioCard key={index} index={index} {...portfolio} />
    ))}
      </div>
    </div>
  );
};
