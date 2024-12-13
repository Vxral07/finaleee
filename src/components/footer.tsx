import { Facebook, Instagram, Linkedin, LucideProps, Mail } from "lucide-react";

export const Logo = (props: LucideProps) => {
    return (
        <div>
            <img
                alt="Nuqi Logo"
                src={"/logo2.png"}
                className={props && props.className ? props.className : "h-14 w-auto p-2 object-contain"}
            />
        </div>
    );
};

export function Footer() {
    return (
        <footer className="bg-[#000] text-white">
            <div className="container mx-auto px-4 py-10">
                {/* Logo and Social Media Section */}
                <div className="flex flex-col items-center mt-20 text-center text-white gap-10">
                    <Logo className="h-14 w-auto" />
                    <div className="flex gap-4">
                        <a
                            aria-label="Contact by Mail"
                            className="text-primary hover:text-primary-foreground transition"
                            href="mailto:support@nuqiwealth.in"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                        <a
                            aria-label="Follow on Instagram"
                            className="text-primary hover:text-primary-foreground transition"
                            href="https://www.instagram.com/nuqi_wealth/"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a
                            aria-label="Follow on Facebook"
                            className="text-primary hover:text-primary-foreground transition"
                            href="https://www.facebook.com/Nuqiadvisory"
                        >
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a
                            aria-label="Follow on Linkedin"
                            className="text-primary hover:text-primary-foreground transition"
                            href="https://www.linkedin.com/company/nuqi-wealth"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="  mt-10 grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center gap-4 text-lg  text-center ">
                    <a href="/" className="text-white ">
                        Home
                    </a>
                    <a href="/advisory" className="text-whitw ">
                        Advisory
                    </a>
                    <a href="/prive" className="text-whitw ">
                        Prive
                    </a>
                    <a href="/IRIS" className="text-white ">
                        IRIS
                    </a>
                    <a href="/ethosphere" className="text-whitw ">
                        Ethosphere
                    </a>
                    <a href="/Privacy" className="text-white ">
                        Legal
                    </a>
                    {/* <a href="/blogs" className="text-white ">
                        Blogs
                    </a>
                    <a href="/news" className="text-white ">
                        News
                    </a> */}
                    <a href="/ContactsPage" className="text-white ">
                        Contact Us
                    </a>
                </div>

                {/* Address Section */}
                <div className="mt-6 text-center text-gray-400 text-sm ">
                    <p>UAE: Office 501, 05th Floor, Innovation One, DIFC, Dubai, UAE</p>
                </div>

                {/* Disclaimer Section */}
                <div className="mt-10 text-center text-xs text-gray-400 leading-relaxed">
                    <p>
                        © 2023 Nuqi Digital Wealth Limited. All rights reserved. <br />
                        Nuqi Digital Wealth Limited is regulated by the Dubai Financial Services Authority
                        (“DFSA”) in the Dubai International Financial Center (“DIFC”) and holds a Category 3C
                        license with a Retail Client Endorsement. Arranging and advising of financial services
                        and managing assets. Nuqi Digital Wealth Ltd is not authorised to hold client money.
                        Therefore, the client money rules do not apply to the business currently undertaken by
                        Nuqi Digital Wealth Limited. <br />
                        Nuqi Digital Wealth Limited’s registered address is Unit IH-00-01-05-OF-01, Level 5,
                        Innovation Hub, DIFC, Dubai, United Arab Emirates. <br />
                        <span>
                            Please visit our{" "}
                            <a
                                href="/disclaimer"
                                target="_blank"
                                className="underline underline-offset-2"
                            >
                                Disclaimer Notice page
                            </a>{" "}
                            for further information.
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}