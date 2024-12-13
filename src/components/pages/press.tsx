import { X } from "lucide-react";
import { Logo } from "../footer";
import { PressCards } from "../ui/press-cards";

export const projects = [
    {
        title: "NUQI Digital Wealth attains DFSA license",
        description:
            "Nuqi is gearing up to launch its revolutionary Wealth Advisory mobile app",
        date: "January 23, 2024",
        press: "Gulf News",
        link: "https://gulfnews.com/business/corporate-news/nuqi-digital-wealth-attains-dfsa-license-1.1705932392422",
        image: "gulf.png",
    },
    {
        title: "Nuqi Digital Wealth granted DFSA licence",
        description:
            "Bolstering its position as a leading ethical financial advisory firm in the UAE",
        date: "January 25, 2024",
        press: "Khaleej Times",
        link: "https://www.khaleejtimes.com/kt-network/nuqi-digital-wealth-granted-dfsa-licence",
        image: "khallej.png",
    },
    {
        title: "Empowering Gen Z",
        description:
            "Nuqi Digital Wealth’s Approach to Sustainable Investing for the Younger Generation",
        date: "January 22, 2024",
        press: "Daily Guardian",
        link: "https://dailyguardian.ae/empowering-gen-z-nuqi-digital-wealths-approach-to-sustainable-investing-for-the-younger-generation/",
        image: "daily.png",
    },
    {
        title: "Nuqi Digital Wealth secures DFSA licence",
        description:
            "The DFSA licence follows the Securities and Exchange Board licence, giving Nuqi Digital Wealth UAE the green light to introduce its wealth management advisory services in India",
        date: "February 02, 2024",
        press: "Zawya",
        link: "https://www.zawya.com/en/business/fintech/nuqi-digital-wealth-secures-dfsa-licence-spinmed8",
        image: "zawya.png",
    },
    {
        title: "Discover NUQI WEALTH",
        description:
            "A team of top-tier financial experts and elite technology talent come together to shape a personalised investment journey",
        date: "January 25, 2024",
        press: "DIFC",
        link: "https://www.linkedin.com/posts/difc_nuqiwealth-wechosedifc-activity-7160164331937017857-U_1H/?utm_source=share&utm_medium=member_desktop",
        image: "difc.png",
    },
];

const Press = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a] sm:text-4xl lg:text-5xl">
                        Press | Newsroom
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-secondary">
                        Explore the latest insights and news coverage of Nuqi
                        Wealth through our press section. Stay informed with
                        articles and press releases that highlight Nuqi Wealth's
                        financial expertise and innovative solutions.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center px-2">
                <PressCards items={projects} />
            </div>

            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-10 pb-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a] sm:text-3xl lg:text-4xl">
                        Nuqi Collaborations
                    </h2>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto container">
                <div className="relative p-6 flex items-center justify-between mt-6 bg-gradient-to-br from-[#3d4957] to-[#282e3a] text-white shadow-md bg-clip-border rounded-xl max-w-xl text-center">
                    <Logo className="size-16" />
                    <X className="size-8" />
                    <img src="/ifa.png" className="max-w-[10rem]" />
                </div>
                <div className="relative p-6 flex items-center justify-between mt-6 bg-gradient-to-br from-[#3d4957] to-[#282e3a] text-white shadow-md bg-clip-border rounded-xl max-w-xl text-center">
                    <Logo className="size-16" />
                    <X className="size-8" />
                    <img
                        src="/gefi.png"
                        className="max-w-[10rem] object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Press;
