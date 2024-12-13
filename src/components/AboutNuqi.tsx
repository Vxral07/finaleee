import * as React from "react";

interface AboutNuqiProps {
  title: string;
  description: string;
}

const AboutNuqi: React.FC<AboutNuqiProps> = () => {
  return (
    <div>
      {/* About Nuqi Container */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-5 text-center text-cyan-400 max-md:text-3xl max-sm:text-2xl">
          FAQs
        </h2>
      </div>

      <div className="flex overflow-hidden flex-col items-center mx-20 px-16 pb-14 text-center text-white border border-solid border-white border-opacity-40 rounded-[61px] max-lg:mx-10 max-md:mx-5 max-sm:mx-2 max-md:px-5">
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center text-white max-md:text-3xl max-sm:text-2xl">
            What Is Nuqi?
          </h2>
        </div>

        <p className="mt-14 text-xl leading-8 max-md:mt-10 max-md:max-w-full max-lg:text-lg max-md:text-base max-sm:text-sm max-sm:leading-6">
          NUQI is an independent advisory platform, licensed by SEBI in India
          aimed at both first-time investors starting their investment journey
          and seasoned investors looking to diversify their portfolio. NUQI
          deploys its in-house expertise to create portfolios tailored for
          specific Investor profile/ Investment Themes. NUQI has a team of
          qualified Investment Managers and select financial bodies to
          independently screen the Universe of Ethical investments with both
          Domestic and International market exposures. The platform uses
          multiple criteria to make a selection of Stocks, ETFs, Mutual funds,
          Sukuks etc. with Social Equity, Ethical operations, good Governance,
          and Environment protection as core investment themes which are
          considered as key elements aimed towards Sustainable Growth.
        </p>
      </div>
    </div>
  );
};

export default AboutNuqi;
