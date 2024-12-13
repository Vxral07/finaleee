import { GooglePlay, AppStore } from "./pages/advisory";
import { Highlight } from "./ui/hero-highlight";

const Hero_ = () => {
    const features = [
        {
            title: "Curated Equities",
            description: `Explore a diverse
                portfolio created by
                our Qualified
                Investment Advisors
                Our rigorous screening
                ensures alignment with
                Ethical, Social, and
                Sustainable Principles.`,
        },
        {
            title: "Prescreened investments",
            description: `Explore a vast selection
            of over 3000 meticulously
            vetted individual stocks,
            along with access to 11
            expertly curated equity 
            portfolios.`,
        },
        {
            title: "Robo Advisory",
            description: `Robo Advisory service
            coupled with a team of
            successful qualified
            Investment advisors to
            advice on individual
            investment portfolios`,
        },
        {
            title: "Regulated and secure",
            description: `A DFSA licensed and
                regulated company
                partnered with
                leading financial
                institutions and
                backed by strong data
                encryptions. Seamless and
                secure execution
                with our broker
                partners`,
        },
    ];
    return (
        <div className="conatiner mt-16">
            <div className="flex flex-col gap-10 sm:gap-0 824px:flex-row  items-center justify-around container">
                <div className=" lg:mt-0 mt-10  items-center text-center">
                    <div className="max-w-xl">
                        <h1 className="text-black text-3xl sm:text-5xl md:text-5xl font-sf-pro-display lg:text-6xl font-extrabold tracking-tighter">
                            Namaste, India!
                            {/* Ahlan, UAE! */}
                            <br />
                            <span className="text-black  ">
                                We are Nuqi Wealth.
                            </span>{" "}

                        </h1>
                        <div className="mt-6 text-[1rem]  sm:text-[1.6rem]" id="downloadSection">
                            <Highlight >
                                {/* Nuqi Wealth is UAE’S Own
                                Ethical Investment Advisory App. */}
                                India’s first SEBI registered ethical investment advisory app.
                            </Highlight>
                            <br />
                            100% Made in India. For Indians, By Indians.{" "}
                            {/* <div className="text-xl lg:text-3xl font-extrabold">
                                <span className="inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                                    <ul className="block text-center leading-tight [&_li]:block">
                                        <li className="animate-slide text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a]">
                                            Curated Equity Portfolio
                                        </li>
                                        <li className="animate-slide text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a]">
                                            Global Market Access
                                        </li>
                                        <li className="animate-slide text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a]">
                                            Qualified Investment Advisors
                                        </li>
                                        <li className="animate-slide text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a]">
                                            Pre-Screened Stocks
                                        </li>
                                        <li className="animate-slide text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a]">
                                            ETFs and Funds
                                        </li>
                                    </ul>
                                </span>
                            </div> */}
                        </div>

                        <div className="mt-6 flex gap-6 items-center justify-center">
                            <GooglePlay  />
                            <AppStore  />
                        </div>
                    </div>
                </div>
                {/* <div className="flex-1 flex justify-center items-center"> */}
                    <div className="grid grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            return (
                                <div key={index} className="w-[190px] h-[254px] rounded-[30px] bg-gradient-to-t from-black to-black shadow-[15px_15px_30px_rgba(255,255,255,0.5),-20px_-20px_15px_rgba(0,0,0,0.2)]">
                                    <div className="md:aspect-square flex flex-col pt-4 px-1 text-center gap-2">
                                        <div className="aspect-square flex justify-center items-center mx-auto max-w-20">
                                            <img src={`/features/feature-${index + 1}.png`} className="w-6" />

                                        </div>
                                        <span className="font-semibold text-lg pt-2 text-[#F5DEB3]">{feature.title}</span>
                                        <span className="tracking-tight text-sm text-[#fff]">{feature.description}</span>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default Hero_;
