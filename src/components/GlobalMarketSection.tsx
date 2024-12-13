import * as React from "react";
import { GlobalMarketHeading } from "./GlobalMarketHeading";
import { GlobalMarketDescription } from "./GlobalMarketDescription";

export const GlobalMarketSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-12 py-16 px-6 max-w-screen-xl mx-auto text-center space-y-8">
      <GlobalMarketHeading />
      <GlobalMarketDescription />
    </div>
  );
};
