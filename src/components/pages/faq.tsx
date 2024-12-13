// import { cn } from "@/lib/utils";
// import { useState } from "react";

// const UpArrow = () => {
//     return (
//         <svg
//             className="w-6 h-6 text-gray-400 rotate-180"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//         >
//             <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M19 9l-7 7-7-7"
//             />
//         </svg>
//     );
// };

// const DownArrow = () => {
//     return (
//         <svg
//             className="w-6 h-6 text-gray-400"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//         >
//             <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M19 9l-7 7-7-7"
//             />
//         </svg>
//     );
// };

const Faq = () => {
    // const [accordionIndex, setAccordionIndex] = useState(-1);

    return (
        <section className="py-10 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a] sm:text-4xl lg:text-5xl lg:py-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-secondary">
                        We have answered some common questions you may have when
                        investing with Nuqi for the very first time. Please
                        refer to this section and if you still have any
                        unanswered questions, feel free to write to us
                    </p>
                </div>

                {/* <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                            onClick={() => {
                                if (accordionIndex != 0) setAccordionIndex(0);
                                else setAccordionIndex(-1);
                            }}
                        >
                            <p className="flex text-lg font-semibold">
                                What is Nuqi?
             </p>

                            {accordionIndex === 0 ? <UpArrow /> : <DownArrow />}
                        </button>

                        <div
                            className={cn(
                                "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                {
                                    "max-h-96 mb-4": accordionIndex === 0,
                                }
                            )}
                        >
                            <p>
                                NUQI is an independent advisory platform,
                                licensed by SEBI in India aimed at both
                                first-time investors starting their investment
                                journey and seasoned investors looking to
                                diversify their portfolio.
                                <br />
                                NUQI deploys its in-house expertise to create
                                portfolios tailored for specific Investor
                                profile/ Investment Themes. NUQI has a team of
                                qualified Investment Managers and select
                                financial bodies to independently screen the
                                Universe of Ethical investments with both
                                Domestic and International market exposures. The
                                platform uses multiple criteria to make a
                                selection of Stocks, ETFs, Mutual funds, Sukuks
                                etc. with Social Equity, Ethical operations,
                                good Governance, and Environment protection as
                                core investment themes which are considered as
                                key elements aimed towards Sustainable Growth.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <button
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                            onClick={() => {
                                if (accordionIndex != 1) setAccordionIndex(1);
                                else setAccordionIndex(-1);
                            }}
                        >
                            <span className="flex text-lg font-semibold">
                                Why invest through Nuq                        </span>

                            {accordionIndex === 1 ? <UpArrow /> : <DownArrow />}
                        </button>

                        <div
                            className={cn(
                                "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                {
                                    "max-h-96 mb-4": accordionIndex === 1,
                                }
                            )}
                        >
                            <p>
                                <ul className="ml-6 list-disc [&>li]:mt-2">
                                    <li>
                                        Access diverse portfolio featuring 250+
                                        Indian stocks and 1000+ global stocks,
                                        along with ETFs, mutual funds, and
                                        sukuks.
                                    </li>
                                    <li>
                                        Access to global markets like US, UK,
                                        Europe and more.
                                    </li>
                                    <li>
                                        Access global and local ethical mutual
                                        funds for systematic investment planning
                                        and lumpsum.
                                    </li>
                                    <li>
                                        Pre-designed portfolios by qualified
                                        investment advisors for long term
                                        investing.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 2)
                                        setAccordionIndex(2);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    How does it Work                         </span>

                                {accordionIndex === 2 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>

                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 2,
                                    }
                                )}
                            >
                                <p>
                                    NUQI mobile app is soon available for
                                    Android and iOS devices and is free to
                                    download. You can register for a free
                                    account and browse the how-to-use
                                    instructions, market news, featured
                                    portfolios – all in the app itself. Once you
                                    have filled out the personal assessment
                                    questionnaire, the NUQI platform will assign
                                    an investor profile to you based on your
                                    risk appetite and recommend investment
                                    instruments accordingly. You can always
                                    change your risk profile by re-taking the
                                    questionnaire and NUQI will once again offer
                                    you a list of new recommendations suited to
                                    you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 3)
                                        setAccordionIndex(3);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Where can I Invest                           </span>

                                {accordionIndex === 3 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>

                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 3,
                                    }
                                )}
                            >
                                <p>
                                    With NUQI, now you have the option to invest
                                    in select financial products in India and in
                                    International markets. NUQI takes a cautious
                                    approach and presently will only recommend
                                    investment instruments that have been
                                    pre-screened and carry returns as per your
                                    risk profile.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 4)
                                        setAccordionIndex(4);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Does Nuqi require a mum investment to
                                    get started?
                                </span>
                                {accordionIndex === 4 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 4,
                                    }
                                )}
                            >
                                <p>
                                    You can start your NUQI investment journey
                                    with USD 100 *
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            {" "}
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 5)
                                        setAccordionIndex(5);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Can you buy fractionaares of stocks
                                    through Nuqi?
                                </span>
                                {accordionIndex === 5 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 5,
                                    }
                                )}
                            >
                                <p>YES</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 6)
                                        setAccordionIndex(6);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Does Nuqi offer invest options that
                                    consider social responsibility?
                                </span>
                                {accordionIndex === 6 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 6,
                                    }
                                )}
                            >
                                <p>
                                    YES, our Curated Equity Portfolios (CEP’s)
                                    are based on Ethical / Social & Sustainable
                                    ESS Principles.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 7)
                                        setAccordionIndex(7);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Can you set up automainvesting through
                                    the Nuqi app?
                                </span>
                                {accordionIndex === 7 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 7,
                                    }
                                )}
                            >
                                <p>YES</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            {" "}
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 8)
                                        setAccordionIndex(8);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Does Nuqi perform RISofiling to
                                    understand your investment goals?
                                </span>
                                {accordionIndex === 8 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 8,
                                    }
                                )}
                            >
                                <p>
                                    YES, NUQI performs through RISK profiling
                                    for all clients
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            {" "}
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 9)
                                        setAccordionIndex(9);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Can you adjust your itment plan based on
                                    changing risk tolerance?
                                </span>
                                {accordionIndex === 9 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 9,
                                    }
                                )}
                            >
                                <p>
                                    YES you have the flexibility to change your
                                    RISK profile basis any material change in
                                    your circumstances.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            {" "}
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 10)
                                        setAccordionIndex(10);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Does Nuqi have resourto learn about
                                    investing for beginners?
                                </span>
                                {accordionIndex === 10 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 10,
                                    }
                                )}
                            >
                                <p>
                                    YES NUQI Ethosphere is our research library
                                    to enthusiastic ones.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            {" "}
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 11)
                                        setAccordionIndex(11);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Are there live eventslearn more about
                                    Nuqi's investment strategies?
                                </span>
                                {accordionIndex === 11 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 11,
                                    }
                                )}
                            >
                                <p>
                                    YES live online sessions / Global Event
                                    Participations on the cards.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            {" "}
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 12)
                                        setAccordionIndex(12);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Can you track your inments' performance
                                    live on the Nuqi app?
                                </span>
                                {accordionIndex === 12 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 12,
                                    }
                                )}
                            >
                                <p>
                                    YES our exhaustive portfolio give you 360
                                    Degree View on your investments.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            {" "}
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 13)
                                        setAccordionIndex(13);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Does Nuqi help with a allocation based
                                    on your goals?
                                </span>
                                {accordionIndex === 13 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 13,
                                    }
                                )}
                            >
                                <p>
                                    YES, Asset allocation is the core for
                                    investment advisory.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            {" "}
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 14)
                                        setAccordionIndex(14);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Does Nuqi collaborateh international
                                    brokers to offer a wider range of investment
                                    options?
                                </span>
                                {accordionIndex === 14 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 14,
                                    }
                                )}
                            >
                                <p>
                                    YES collaborations is one of the pillars for
                                    NUQI Wealth to provide.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#3d4957] to-[#282e3a] transition-all duration-200s shadow-lg flex flex-col border border-[#eaeaea] dark:border-neutral-600 rounded-xl text-white">
                        <div className="">
                            {" "}
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => {
                                    if (accordionIndex != 15)
                                        setAccordionIndex(15);
                                    else setAccordionIndex(-1);
                                }}
                            >
                                <span className="flex text-lg font-semibold">
                                    Does Nuqi leverage itrtnerships to
                                    provide access to in-depth research reports?
                                </span>
                                {accordionIndex === 15 ? (
                                    <UpArrow />
                                ) : (
                                    <DownArrow />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 px-4 sm:px-6 mb-2 max-h-0 overflow-hidden",
                                    {
                                        "max-h-96 mb-4": accordionIndex === 15,
                                    }
                                )}
                            >
                                <p>Yes IRIS & Ethosphere keep a watch.</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <p className="text-center text-secondary text-base mt-9">
                    Didn’t find the answer you are looking for?{" "}
                    <a
                        href="contact"
                        className="underline-offset-4 hover:underline text-secondary text-lg font-bold"
                    >
                        Contact us           </a>{" "}
                </p>
            </div>

            <div className="mt-10 grid w-full grid-cols-1 items-start gap-4 md:grid-cols-3 container">
                <div className="grid grid-cols-1 items-start gap-4">
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black leading-3 dark:text-black-200">What is Nuqi?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">NUQI is an independent advisory platform, licensed by SEBI in India aimed at both first-time investors starting their investment journey and seasoned investors looking to diversify their portfolio.
                            NUQI deploys its in-house expertise to create portfolios tailored for specific Investor profile/ Investment Themes. NUQI has a team of qualified Investment Managers and select financial bodies to independently screen the Universe of Ethical investments with both Domestic and International market exposures. The platform uses multiple criteria to make a selection of Stocks, ETFs, Mutual funds, Sukuks etc. with Social Equity, Ethical operations, good Governance, and Environment protection as core investment themes which are considered as key elements aimed towards Sustainable Growth.
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black dark:text-black-200 leading-5">   Does Nuqi offer investment options that consider social responsibility? 
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">YES, our Curated Equity Portfolios (CEP’s) are based on Ethical / Social & Sustainable ESS Principles.</p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black dark:text-black-200 leading-5">Where can I Invest?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">With NUQI, now you have the option to invest in select financial products in India and in International markets. NUQI takes a cautious approach and presently will only recommend investment instruments that have been pre-screened and carry returns as per your risk profile.
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black-700 dark:text-black-200 leading-5">
            Does Nuqi have resources to learn about investing for beginners?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">
                            YES NUQI Ethosphere is our research library to enthusiastic ones.
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)rk:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black-700 dark:text-black-200 leading-5">Does Nuqi help with asset allocation based on your goals?

                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  "> YES, Asset allocation is the core for investment advisory.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-4">
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black dark:text-black-200 leading-5">Why Invest throgh Nuqi?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">Access diverse portfolio featuring 250+ Indian stocks and 1000+ global stocks, along with ETFs, mutual funds, and sukuks.
                            Access to global markets like US, UK, Europe and more.
                            Access global and local ethical mutual funds for systematic investment planning and lumpsum.
                            Pre-designed portfolios by qualified investment advisors for long term investing.
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0. dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black-700 dark:text-black-200 leading-5">Does Nuqi require a minimum investment to get started?

                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">You can start your NUQI investment journey with USD 100 *</p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black dark:text-black-200 leading-5">Can you set up automatic investing through the Nuqi app?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">YES
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">

                        <h3 className="text-lg font-medium text-black dark:text-black-200 leading-5">Does Nuqi perform RISK profiling to understand your investment goals?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">
                            YES, NUQI performs through RISK profiling for all clients.
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">

                        <h3 className="text-lg font-medium text-black dark:text-black-200 leading-5">Are there live events to learn more about Nuqi's investment strategies?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">
                            YES live online sessions / Global Event Participations on the cards.
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">

                        <h3 className="text-lg font-medium text-nel-700 dark:text-black-200 leading-5">Does Nuqi collaborate with international brokers to offer a wider range of investment options?
                        
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">
                        YES collaborations is one of the pillars for NUQI Wealth to provide.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-4">
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black dark:text-black-200 leading-5">How does it work?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">
                            NUQI mobile app is soon available for Android and iOS devices and is free to download. You can register for a free account and browse the how-to-use instructions, market news, featured portfolios – all in the app itself. Once you have filled out the personal assessment questionnaire, the NUQI platform will assign an investor profile to you based on your risk appetite and recommend investment instruments accordingly. You can always change your risk profile by re-taking the questionnaire and NUQI will once again offer you a list of new recommendations suited to you.
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black dark:text-black-200 leading-5">Can you buy fractional shares of stocks through Nuqi?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">Yes
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-nel-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black-700 dark:text-black-200 leading-5">Can you adjust your investment plan based on changing risk tolerance?

                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">YES you have the flexibility to change your RISK profile basis any material change in your circumstances.
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black dark:text-black-200 leading-5">Can you track your investments' performance live on the Nuqi app?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">YES our exhaustive portfolio give you 360 Degree View on your investments.
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-black dark:text-black-200 leading-5">Can you track your investments' performance live on the Nuqi app?
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  ">YES our exhaustive portfolio give you 360 Degree View on your investments.
                        </p>
                    </div>
                    <div className="cursor-pointer rounded-2xl bg-white p-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:bg-neutral-900 dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
                        <h3 className="text-lg font-medium text-nal-700 dark:text-black-200 leading-5">Does Nuqi leverage its partnerships to provide access to in-depth research reports?
                       
                        </h3>
                        <p className="mt-2 text-sm text-black dark:text-black-400  "> Yes IRIS & Ethosphere keep a watch.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Faq;
