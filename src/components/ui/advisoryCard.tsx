import { useState, useRef, useEffect } from "react";
// import { DollarSignIcon, IndianRupeeIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
// import { ScrollArea } from "./ui/scroll-area";
import { useNavigate } from "react-router-dom";
// import Graph from "./trading/graph";
import { globalBasketsData } from "@/lib/utils";
import { ScrollArea } from "./scroll-area";
import Graph from "../trading/graph";

interface AdvisoryCardProps {
    title: string;
    description: string;
    icon: string;
    basket: string;
    index: number;
}

const globalApi = [11, 60, -1, -1];

export default function AdvisoryCard({
    title,
    description,
    icon,
    basket,
    index,
}: AdvisoryCardProps) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                handleClose();
            }
        }

        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="cards max-w-[20rem] hover:cursor-pointer" onClick={handleOpen}>
                <div className="data-container">
                    <div className="data min-h-[15rem] max-w-[20rem]">
                        <div className="text px-[1.2rem] pt-[1.5rem]">
                            <div className="flex justify-between w-full">
                                <div className="rounded-full flex items-center justify-center mb-2">
                                    <img src={`/baskets/${icon}.png`} width={40} />
                                </div>
                                {/* {basket === "global" ? (
                                    <DollarSignIcon className="text-primary mb-4" />
                                ) : (
                                    <IndianRupeeIcon className="text-primary mb-4" />
                                )} */}
                            </div>
                            <h2 className="font-bold text-lg text-[#000] mb-2 relative">
                                {title}
                            </h2>
                            <p className="font-normal text-left text-sm text-black/80 relative">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="descriptions cards">
                        <button className="titles font-semibold">Learn More</button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <div className="fixed bg-white inset-0 h-screen z-50 overflow-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            ref={containerRef}
                            layoutId={`card-${title}`}
                            className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 md:p-10 rounded-3xl   relative"
                        >
                            <button
                                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center mb-2"
                                onClick={handleClose}
                            >
                                <span onClick={handleClose} className="h-6 w-6 text-neutral-100 dark:text-neutral-900">X</span>
                            </button>
                            <div>
                                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                                <p className="text-sm mb-4">{description}</p>
                                {globalApi[index] !== -1 && <Graph id={globalApi[index]} />}
                                <h3 className="text-xl font-semibold mt-6">Constituents of {title}</h3>
                                <ScrollArea className="max-h-48 w-full">
                                    <div className="pb-4 pr-4">
                                        {globalBasketsData[index].map((company) => (
                                            <div
                                                key={company.name}
                                                className="hover:bg-slate-500/10 active:bg-gray-900/20 rounded-md px-1 cursor-pointer text-sm font-medium"
                                                onClick={() => {
                                                    if (basket === "global") {
                                                        navigate(`/stock?symbol=${company.symbol}`);
                                                    } else {
                                                        navigate(`/stock?symbol=BSE:${company.symbol}`);
                                                    }
                                                }}
                                            >
                                                <div className={`flex items-center justify-between`}>
                                                    <p>{company.name}</p>
                                                    {company.image && (
                                                        <div className="w-10 h-10">
                                                            <img
                                                                src={`/scrips/${company.image}.png`}
                                                                className="object-contain w-full h-full"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <hr className="my-2" />
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
