import * as React from "react";
import { FeatureCard } from "./FeatureCard";
import { InvestmentFeature } from "@/types";

const features: InvestmentFeature[] = [
  {
    title: "Curated Equities",
    description:
      "Explore a vast selection of over 3000 meticulously vetted individual stocks, along with access to 11 expertly curated equity portfolios.",
  },
  {
    title: "Prescreened investments",
    description:
      "Explore a vast selection of over 3000 meticulously vetted individual stocks, along with access to 11 expertly curated equity portfolios.",
  },
  {
    title: "Robo Advisory",
    description:
      "Robo Advisory service coupled with a team of successful qualified Investment advisors to advice on individual investment portfolios.",
  },
  {
    title: "Regulated and secure",
    description:
      "A DFSA licensed and regulated company partnered with leading financial institutions and backed by strong data encryptions. Seamless and secure execution with our broker partners",
  },
];

export const InvestmentFeatures: React.FC = () => {
  return (
    <div className="py-16 px-10 bg-black max-md:px-5">
      <div className="flex gap-12 max-md:flex-col items-stretch">
        {/* Image Section */}
        <div className="flex w-[45%] max-md:w-full items-center justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63e44dcaf82232257968e49f9afa818ae116b57609022005000e221acba68586?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104"
            alt="Investment features illustration"
            className="rounded-lg object-contain"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        {/* Feature Cards Section */}
        <div className="flex flex-col w-[50%] max-md:w-full">
          <div className="flex flex-col h-full justify-between">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                className={index > 0 ? "mt-6" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
