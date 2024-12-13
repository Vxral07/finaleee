import { Navbar } from "../navbar";
import { Footer } from "../footer";
// import { useNavigate } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// import { motion } from 'framer-motion';
// import UseInView from "../ui/UseInView";
// import video from '../../assets/images/waves 3.mp4'
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Prive = () => {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1200, // Adjust the duration as needed
    //     });
    // }, []);

    // const service = [
    //     {
    //         title: "Financial Product Advising",
    //         desc: "Guiding you towards the best investments aligned with your goals and risk tolerance."
    //     },
    //     {
    //         title: "Credit & Loan Arrangement",
    //         desc: "Securing the most favorable financing options for your needs."
    //     },
    //     {
    //         title: "Custody Arrangement: ",
    //         desc: "Safeguarding your assets with secure and reliable custodians."
    //     },
    //     {
    //         title: "Deal Arrangement: ",
    //         desc: "Facilitating investment opportunities that meet your financial objectives."
    //     },
    //     {
    //         title: "Asset Management",
    //         desc: "Building and managing a diversified portfolio for long-term growth."
    //     },
    //     {
    //         title: "Emphasize personalized service",
    //         desc: "Dedicated relationship managers who understand your unique needs and priorities."
    //     },
    //     {
    //         title: "Highlight ethical and sustainable investing practices",
    //         desc: "Aligning your investments with your values for a positive social and environmental impact."
    //     }
    // ]

    // const hnis = [
    //     {
    //         title: "Robo-Advisory Platform",
    //         desc: "A user-friendly platform that creates personalized investment plans based on your risk profile and goals."
    //     },
    //     {
    //         title: "Curated Investment Options",
    //         desc: "Access to a wide range of ethically screened stocks, ETFs, and mutual funds."
    //     },
    //     {
    //         title: "Expert Guidance",
    //         desc: "Support from qualified investment advisors whenever you need it."
    //     },
    //     {
    //         title: "Affordable Fees",
    //         desc: "Transparent and competitive pricing structure."
    //     },
    //     {
    //         title: "Highlight the benefits of easy investing",
    //         desc: "Simple account setup, automated investing, and convenient mobile app access."
    //     }
    // ]

    const [videoSrc, setVideoSrc] = useState("/MOBILE VERSION.mp4");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Mobile view
                setVideoSrc("/MOBILE VERSION.mp4"); // Update this path to your mobile-specific video
            } else {
                // Desktop/Tablet view
                setVideoSrc("/MOBILE VERSION.mp4");
            }
        };

        // Set video source on initial load
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    );
    const services = [
        {
            title: "Financial Product Advising",
            description: "Guiding you towards the best investments aligned with your goals and risk tolerance.",
            header: <Skeleton />,
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
            image: '/Financial.png'
        },
        {
            title: "Credit & Loan Arrangement",
            description: "Securing the most favorable financing options for your needs.",
            header: <Skeleton />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
            image: '/loan.png'
        },
        {
            title: "Custody Arrangement",
            description: "Safeguarding your assets with secure and reliable custodians.",
            header: <Skeleton />,
            icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
            image: '/custody.png'
        },
        {
            title: "Deal Arrangement",
            description:
                "Facilitating investment opportunities that meet your financial objectives.",
            header: <Skeleton />,
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
            image: '/Deal.png'
        },
        {
            title: "Asset Management",
            description: "Building and managing a diversified portfolio for long-term growth.",
            header: <Skeleton />,
            icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
            image: '/Asset.png'

        },
        {
            title: "Emphasize personalized service",
            description: "Dedicated relationship managers who understand your unique needs and priorities.",
            header: <Skeleton />,
            icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
            image: '/Emphasize.png'
        },
        {
            title: "Highlight ethical and sustainable investing practices",
            description: "Aligning your investments with your values for a positive social and environmental impact.",
            header: <Skeleton />,
            icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
            image: '/Highlight.png'
        },
    ];

    return (
        <div className="max-w-screen">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-screen overflow-hidden">
                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Text Section */}
                <div
                    className="absolute inset-y-0 left-10 md:left-20 flex flex-col justify-center space-y-5 z-10 max-w-md"
                    style={{
                        width: "calc(50% - 20px)", // Prevent overlap with the boat
                    }}
                >
                    <h1 className="text-transparent font-sf-pro-display text-xl sm:text-2xl md:text-3xl font-bold tracking-wide bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96]">
                        Navigating Your Financial Voyage With Distinction
                    </h1>
                    <h2 className="text-custom-dark-blue font-sf-pro-display font-bold text-lg sm:text-2xl">
                        Bespoke Wealth Management Solutions
                    </h2>
                    <p className="text-black font-sf-pro-display text-sm sm:text-base leading-6">
                        Preserving and growing your legacy, with a focus on your values.
                    </p>
                </div>
            </div>

            <div className="py-10 container">
                <div className="justify-center flex align-middle">
                    <h1 className="font-sf-pro-display text-3xl pb-5 font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96] sm:text-3xl lg:text-4xl">
                        Services
                    </h1>
                </div>
                <BentoGrid className="max-w-4xl mx-auto">
                    {services.map((service, i) => (
                        <BentoGridItem
                            key={i}
                            title={service.title}
                            description={service.description}
                            header={service.header}
                            icon={service.icon}
                            image={service.image}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>

            <Footer />
        </div>
    );
};

export default Prive;
