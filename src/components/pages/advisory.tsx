import { SparklesCore } from "../ui/sparkles";
import "../../styles/googleAppleBtn.css";
export const GooglePlay = () => (
  <a
    href={
      "https://play.google.com/store/apps/details?id=com.nuqi.nuqi_wealth_app"
    }
    target="_blank"
    className="playstore-button"
  >
   
    <svg
      viewBox="0 0 512 512"
      className="icon"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
    </svg>
    <span className="texts">
      <span className="text-1">GET IT ON</span>
      <span className="text-2">Google Play</span>
    </span>
  </a>
);

export const AppStore = () => {
  return (
    <a
      href={"https://apps.apple.com/ae/app/nuqi-wealth/id6467738605"}
      target="_blank"
      className="playstore-button"
    >
      
      <span className="icon">
        <svg
          fill="currentcolor"
          viewBox="-52.01 0 560.035 560.035"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
          </g>
        </svg>
      </span>
      <span className="texts">
        <span className="text-1">Download form</span>
        <span className="text-2">App store</span>
      </span>
    </a>
  );
};

// import { LucideProps } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
// import MeteorsCard from "../ui/meteor-card";
// import BlackCard from "../ui/blackCard";
import "../../styles/advisory.css";
import AdvisoryCard from "../ui/advisoryCard";

const Advisory = () => {
  const cardData = [
    {
      title: "Entrenched enterprises",
      description:
        "Entrenched Enterprises offers a selection of established companies with strong market presence and proven track records. These stocks represent stable and reliable investments in well-established industries.",
      icon: "cyber",
      basket: "global",
    },
    {
      title: "Income Generators",
      description:
        "Income Generators focuses on dividend-paying stocks known for their consistent income generation. These stocks provide investors with steady cash flow and potential for long-term wealth accumulation.",
      icon: "smart",
      basket: "global",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Artificial Intelligence comprises stocks of companies at the forefront of AI technology development. These innovative companies leverage AI to drive growth, efficiency, and disruption in various sectors.",
      icon: "fintech",
      basket: "global",
    },
    {
      title: "60 40 Portfolios (ETFs)",
      description:
        "The 60/40 Portfolios offer a balanced approach to investment, consisting of a mix of 60% equity ETFs and 40% fixed-income ETFs. This diversified portfolio aims to provide stability and growth potential for investors.",
      icon: "fruits",
      basket: "global",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="h-[10rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h2 className="text-3xl pb-5 font-bold leading-tight text-cyan-400 hover:text-cyan-400 sm:text-4xl lg:text-5xl">
          Advisory
        </h2>
        <div className="w-[40rem] h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#030F26"
          />
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <Carousel
              className="p-6"
              orientation="vertical"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="h-[4.5rem]">
                <CarouselItem className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent text-cyan-500 bg-black">
                  Curated Equity Portfolio
                </CarouselItem>
                <CarouselItem className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent text-cyan-500 bg-black">
                  Global Market Access
                </CarouselItem>
                <CarouselItem className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent text-cyan-500 bg-black">
                  Qualified Investment Advisors
                </CarouselItem>
                <CarouselItem className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent text-cyan-500 bg-black">
                  Pre-Screened Stocks
                </CarouselItem>
                <CarouselItem className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent text-cyan-500 bg-black">
                  ETFs and Funds
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <p className="max-w-4xl mx-auto mt-4 text-white leading-relaxed text-secondary">
            Embrace a brighter future with Nuqi, where our mission is to empower
            better choices. We're fully dedicated to sustainable and impactful
            investing, with a focus on generating long-term value. Our dedicated
            Advisory team has meticulously curated predefined portfolios, which
            will be assigned to users according to their risk tolerance through
            a brief questionnaire. Our array of investment options includes CEP
            (Curated Equity Portfolios), ETFs, Mutual Funds, and Sukuks, all
            subjected to rigorous screening to ensure alignment with Ethical,
            Social, and Sustainable (ESS) principles
          </p>
        </div>
        <div className="py-12 text-secondary">
          <h1
            className="text-2xl font-bold text-white  tracking-tighter md:text-3xl text-center py-2"
            id="global"
          >
            Nuqi Global CEP (Curated Equity Portfolios)
          </h1>
          <h2 className="text-lg font-semibold  text-white tracking-tighter md:text-xl text-center">
            Our Nuqi Global Basket offers a variety of curated investment
            themes, each catering to specific risk appetite and investment
            goals:
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <AdvisoryCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              basket={card.basket}
              index={index}
            />
          ))}
        </div>

        <p
          className="text-center mt-20 text-secondary text-lg font-bold"
          id="downloadSection"
        >
          Download Now
          <div className="mt-4 flex gap-6 items-center justify-center">
            <GooglePlay />
            <AppStore />
          </div>
        </p>
      </div>
    </section>
  );
};

export default Advisory;
