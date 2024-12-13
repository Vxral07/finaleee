import React from "react";
import { FAQCard } from "./FAQCard";

export const FAQSection: React.FC = () => {
  return (
    <div className="text-white -mt-5 px-5">
      <h1 className="text-center text-4xl font-bold text-cyan-500 mb-10">FAQs</h1>

      {/* What is Nuqi Section */}
      <div className="bg-black p-8 border border-solid border-white border-opacity-40 hover:scale-105 hover:shadow-blue-500/50 rounded-[61px] shadow-lg text-center mb-10">
        <h2 className="text-2xl font-semibold mb-4">What is Nuqi?</h2>
        <p className="text-sm leading-6">
          NUQI is an independent advisory platform, licensed by SEBI in India aimed at both first-time investors starting their
          investment journey and seasoned investors looking to diversify their portfolio. NUQI deploys its in-house expertise to create
          portfolios tailored for specific investor profiles / Investment Themes. NUQI has a team of qualified Investment Managers and
          select financial bodies to independently screen the Universe of Ethical Investments with both Domestic and International market
          exposures. The platform uses multiple criteria to make a selection of Stocks, ETFs, Mutual funds, Sukuks etc. with Social
          Equity, Ethical operations, good Governance, and Environment protection as core investment themes which are considered as key
          elements aimed towards Sustainable Growth.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Big Box */}
        <FAQCard
          title="Why Invest through Nuqi?"
          description="Access diverse portfolio featuring 250+ Indian stocks and 1000+ global stocks, along with ETFs, mutual funds, and sukuks. Access to global markets like US, UK, Europe and more. Access global and local ethical mutual funds for systematic investment planning and lumpsum. Pre-designed portfolios by qualified investment advisors for long-term investing."
          customStyles="col-span-1 lg:col-span-1 lg:row-span-2 pt-20 min-h-[200px] lg:h-[450px] border border-solid border-white border-opacity-40 rounded-[61px]"
        />

        {/* Big - Small - Small */}
        <FAQCard
          title="Does Nuqi require a minimum investment to get started?"
          description="You can start your NUQI investment journey with USD 100 *"
          customStyles="min-h-[200px] border pt-10 border-solid border-white border-opacity-40 rounded-[61px]"
        />
        <FAQCard
          title="Does Nuqi offer investment options that consider social responsibility?"
          description="YES, our Curated Equity Portfolios (CEP's) are based on Ethical / Social & Sustainable ESS Principles."
          customStyles="min-h-[200px] pt-10 border border-solid border-white border-opacity-40 rounded-[61px]"
        />
        <FAQCard
          title="Where can I invest?"
          description="With NUQI, now you have the option to invest in select financial products in India and in international markets. NUQI takes a cautious approach and presently will only recommend investment instruments that have been pre-screened and carry returns as per your risk profile."
          customStyles="col-span-1 lg:col-span-1 lg:row-span-2 pt-20 min-h-[200px] lg:h-[450px] border border-solid border-white border-opacity-40 rounded-[61px]"
        />

        {/* Small - Big - Small */}
        <FAQCard
          title="Does Nuqi require minimum investment to get started?"
          description="You can start your NUQI investment journey with USD 100 *"
          customStyles="min-h-[200px] pt-10 border border-solid border-white border-opacity-40 rounded-[61px]"
        />
        <FAQCard
          title="Why invest through Nuqi?"
          description="Access diverse portfolio featuring 250+ Indian stocks and 1000+ global stocks, along with ETFs, mutual funds, and sukuks. Access to global markets like US, UK, Europe and more. Access global and local ethical mutual funds for systematic investment planning and lumpsum. Pre-designed portfolios by qualified investment advisors for long-term investing.."
          customStyles="col-span-1 lg:col-span-1 lg:row-span-2 pt-20 min-h-[200px] lg:h-[450px] border border-solid border-white border-opacity-40 rounded-[61px]"
        />
        <FAQCard
          title="Are there live events to learn more about Nuqi's investment strategies?"
          description="YES live online sessions / Global Event Participations on the cards."
          customStyles="min-h-[200px] pt-10 border border-solid border-white border-opacity-40 rounded-[61px]"
        />

        {/* Small - Small - Big */}
        <FAQCard
          title="Does Nuqi require minimum investment to get started?"
          description="You can start your investment with USD 100.."
          customStyles="min-h-[200px] pt-10 border border-solid border-white border-opacity-40 rounded-[61px]"
        />
        <FAQCard
          title="Can you adjust your investment plan based on changing risk tolerance?"
          description="YES, our Curated Equity Portfolios (CEP's) are based on Ethical / Social & Sustainable ESS Principles"
          customStyles="min-h-[200px] pt-10 border border-solid border-white border-opacity-40 rounded-[61px]"
        />
      </div>
    </div>
  );
};
