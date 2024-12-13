import * as React from "react";

interface InvestmentCardProps {
  title: string;
  description: string;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({ title, description }) => {
  return (
    <div className="flex overflow-hidden flex-col px-10 py-20 text-center text-white border border-solid border-white border-opacity-40 max-w-[455px] rounded-[61px]">
      <div className="self-center text-2xl font-semibold leading-none">
        {title}
      </div>
      <div className="mt-14 text-base leading-7">
        {description}
      </div>
    </div>
  );
};