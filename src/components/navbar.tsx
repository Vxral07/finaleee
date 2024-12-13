import { Popover, Transition } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavItem({
    href,
    children,
    isActive,
    onClick,
}: {
    href: string;
    children: ReactNode;
    isActive: boolean;
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) {
    return (
        <li className="px-4">
            <a
                href={href}
                onClick={onClick}
                className={`block px-4 py-2 text-sm font-semibold transition ${
                    isActive
                        ? " text-cyan-400 "
                        : "text-white hover:text-cyan-400 "
                }`}
            >
                {children}
            </a>
        </li>
    );
}

function DesktopNavigation() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string>(location.pathname);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    const handleScrollToSection = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        targetHash: string
    ) => {
        event.preventDefault();

        if (window.location.pathname !== "/") {
            // Navigate to home page with hash
            window.location.href = `/${targetHash}`;
        } else {
            // Scroll directly to the section
            const target = document.querySelector(targetHash);
            target?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center text-sm ">
                <NavItem
                    href="/"
                    isActive={activeTab === "/"}
                    onClick={() => setActiveTab("/")}
                >
                    Home
                </NavItem>
                <NavItem
                    href="/advisory"
                    isActive={activeTab === "/advisory"}
                    onClick={(e) => handleScrollToSection(e, "#advisory")}
                >
                    Advisory
                </NavItem>
                <NavItem
                    href="/prive"
                    isActive={activeTab === "/prive"}
                    onClick={(e) => handleScrollToSection(e, "#nuqiprive")}
                >
                    Prive
                </NavItem>
                <NavItem
                    href="/iris"
                    isActive={activeTab === "/iris"}
                    onClick={() => setActiveTab("/iris")}
                >
                    IRIS
                </NavItem>
                <NavItem
                    href="/ethosphere"
                    isActive={activeTab === "/ethosphere"}
                    onClick={() => setActiveTab("/ethosphere")}
                >
                    Ethosphere
                </NavItem>
            </ul>
        </nav>
    );
}

function MobileNavigation() {
    const handleScrollToSection = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        targetHash: string
    ) => {
        event.preventDefault();

        if (window.location.pathname !== "/") {
            // Navigate to home page with hash
            window.location.href = `/${targetHash}`;
        } else {
            // Scroll directly to the section
            const target = document.querySelector(targetHash);
            target?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="md:hidden">
            <Popover>
                <Popover.Button>
                    <Menu className="h-6 w-6 text-white" />
                </Popover.Button>
                <Transition.Root>
                    <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel className="absolute top-0 left-0 w-full bg-black p-4">
                            <div className="flex justify-between items-center">
                                <Popover.Button>
                                    <X className="h-6 w-6 text-white" />
                                </Popover.Button>
                            </div>
                            <nav className="mt-4">
                                <ul className="space-y-4">
                                    <NavItem href="/" isActive={false} onClick={() => {}}>
                                        Home
                                    </NavItem>
                                    <NavItem
                                        href="/advisory"
                                        isActive={false}
                                        onClick={(e) => handleScrollToSection(e, "#advisory")}
                                    >
                                        Advisory
                                    </NavItem>
                                    <NavItem
                                        href="/prive"
                                        isActive={false}
                                        onClick={(e) => handleScrollToSection(e, "#nuqiprive")}
                                    >
                                        Prive
                                    </NavItem>
                                    <NavItem href="/iris" isActive={false} onClick={() => {}}>
                                        IRIS
                                    </NavItem>
                                    <NavItem
                                        href="/ethosphere"
                                        isActive={false}
                                        onClick={() => {}}
                                    >
                                        Ethosphere
                                    </NavItem>
                                </ul>
                            </nav>
                        </Popover.Panel>
                    </Transition.Child>
                </Transition.Root>
            </Popover>
        </div>
    );
}

function HomeLogo() {
    return (
        <Link to="/" className="block">
            <img
                src="/logo2.png"
                alt="Nuqi Logo"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
        </Link>
    );
}

export function Navbar() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            target?.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 bg-black shadow-lg">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <HomeLogo />
                </div>

                {/* Navigation */}
                <div className="hidden md:flex flex-grow justify-center">
                    <DesktopNavigation />
                </div>

                {/* Right Section (Sign Up / Login) */}
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-transparent border border-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black">
                        Sign Up
                    </button>
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-cyan-400  rounded-md hover:opacity-90">
                        Login
                    </button>
                </div>

                {/* Mobile Navigation */}
                <MobileNavigation />
            </div>
        </header>
    );
}
