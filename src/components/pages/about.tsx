import { LinkedinIcon } from "lucide-react";
import "../../index.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const CARDS = [
//     {
//         id: 1,
//         name: "Imran Farooqui",
//         designation: "Founder & CEO",
//         description:
//             "Over two decades in the banking and financial sector across geographies. He specialises in Investment Strategies, Asset Allocation, Private Wealth management, and ESG investments.",
//     },
//     {
//         id: 2,
//         name: "Shreemohan Chauhaan",
//         designation: "Co-Founder & COO",
//         description:
//             "23 years of Global Banking Experience, MBA in marketing , Alternative Investment from Harvard Business School & Climate Finance from CFA Institute . Has been actively associated with India / GCC / Africa and Southeast Asian financial markets.",
//     },
//     {
//         id: 4,
//         name: "Irfan Mulla",
//         designation: "Head of Marketing",
//         description:
//             "Advertising and Marketing lead with focussed digital eco system marketing experience across AMEA regions. Statistics graduate with over 25 years of industry experience.",
//     },
//     {
//         id: 5,
//         name: "Osama Sharif",
//         designation: "Head of Technology",
//         description:
//             "10+ Years experience in IT Digital Transformation in Saudi Arabia, UAE & India. Certified Project Management Professional (PMP) and Oracle Certified Programmer (OCP) to lead Product Implementation & development projects for large organizations. Part of the Vision 2030 (VRO Project) of KSA for Digital Transformation",
//     },
//     {
//         id: 6,
//         name: "Sonell Kanyal",
//         designation: "Head of Investment Advisory",
//         description:
//             "Certified Financial Risk Manager (GARP US), CFA Level 3 candidate (Chartered Financial Analyst, CFA Institute US), skilled in diverse asset classes, Capital Markets, Financial planning and Risk management.",
//     },
// ];

const AboutPage = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a] sm:text-4xl lg:text-5xl">
                        About us
                    </h2>
                    <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-secondary">
                        Nuqi boasts top-tier financial experts and elite
                        technology talent, striving to execute proven investment
                        tactics and craft a bespoke investment journey for you.
                        Our skilled team, with decades of experience from
                        esteemed institutions like Citibank, Standard Chartered,
                        Credit Suisse, Dubai Islamic Bank, Microsoft, IBM, ICICI
                        Bank and EY is committed to your financial growth.
                    </p>
                </div>
                <h2 className="text-3xl text-center mt-8 font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a]">
                    Meet Our Team
                </h2>
                <div className="flex flex-col justify-center items-center mt-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="abtWrap flex flex-col md:flex-row gap-2 abt-1 justify-items-center">
                            <div className="leftWrp">
                                <h6>
                                    <strong>Imran Farooqui</strong>
                                    <br /> Founder & CEO
                                </h6>
                                <img
                                    src="/team/abt-1.png"
                                    alt="Imran Farooqui"
                                />
                            </div>
                            <div className="rigtWrp">
                                <p>
                                    <Link
                                        to={
                                            "https://www.linkedin.com/in/imran-farooqui-baa2b7208/"
                                        }
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-secondary" />
                                    </Link>
                                    Over two decades in the banking and
                                    financial sector across geographies. He
                                    specialises in Investment Strategies, Asset
                                    Allocation, Private Wealth management, and
                                    ESG investments.
                                </p>
                            </div>
                        </div>

                        <div className="abtWrap flex flex-col md:flex-row justify-center gap-2 abt-2 ">
                            <div className="leftWrp">
                                <h6>
                                    <strong>Shreemohan Chauhaan</strong>
                                    <br />
                                    Co-Founder & COO
                                </h6>
                                <img
                                    src="/team/abt-2.png"
                                    alt="Shreemohan Chauhaan"
                                />
                            </div>
                            <div className="rigtWrp">
                                <p>
                                    <Link
                                        to={
                                            "https://www.linkedin.com/in/shremohan/"
                                        }
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-secondary" />
                                    </Link>
                                    23 years of Global Banking Experience, MBA
                                    in marketing , Alternative Investment from
                                    Harvard Business School & Climate Finance
                                    from CFA Institute . Has been actively
                                    associated with India / GCC / Africa and
                                    Southeast Asian financial markets.
                                </p>
                            </div>
                        </div>

                        <div className="abtWrap flex flex-col md:flex-row justify-center gap-2 abt-4 ">
                            <div className="leftWrp">
                                <h6>
                                    <strong>Irfan Mulla</strong>
                                    <br />
                                    Head of Marketing
                                </h6>
                                <img src="/team/abt-4.png" alt="Irfan Mulla" />
                            </div>
                            <div className="rigtWrp">
                                <p>
                                    Advertising and Marketing lead with focussed
                                    digital eco system marketing experience
                                    across AMEA regions. Statistics graduate
                                    with over 25 years of industry experience.
                                </p>
                            </div>
                        </div>

                        <div className="abtWrap flex flex-col md:flex-row justify-center gap-2 abt-5 ">
                            <div className="leftWrp">
                                <h6>
                                    <strong>Osama Sharif</strong>
                                    <br />
                                    Head of Technology
                                </h6>
                                <img src="/team/abt-5.png" alt="Osama Sharif" />
                            </div>
                            <div className="rigtWrp">
                                <p>
                                    10+ Years experience in IT Digital
                                    Transformation in Saudi Arabia, UAE & India.
                                    Certified Project Management Professional
                                    (PMP) and Oracle Certified Programmer (OCP)
                                    to lead Product Implementation & development
                                    projects for large organizations. Part of
                                    the Vision 2030 (VRO Project) of KSA for
                                    Digital Transformation
                                </p>
                            </div>
                        </div>

                        <div className="abtWrap flex flex-col md:flex-row justify-center gap-2 abt-6 ">
                            <div className="leftWrp">
                                <h6>
                                    <strong>Sonell Kanyal</strong>
                                    <br />
                                    Head of Investment Advisory
                                </h6>
                                <img
                                    src="/team/abt-6.png"
                                    alt="Sonell Kanyal"
                                />
                            </div>
                            <div className="rigtWrp">
                                <p>
                                    <Link
                                        to={
                                            "https://www.linkedin.com/in/sonell-kanyal-frm-privatebanker-uae/"
                                        }
                                        target="_blank"
                                    >
                                        <LinkedinIcon className="my-2 text-secondary" />
                                    </Link>
                                    Certified Chartered Financial Analyst (CFA
                                    Institute US) Financial Risk Manager (GARP
                                    US), 17+ years’ experience in financial
                                    markets, skilled in diverse asset
                                    classNamees, Capital Markets, Financial
                                    planning and Risk management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
