import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const PressCards = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        date: string;
        press: string;
        link: string;
        image: string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 max-w-5xl gap-2",
                className
            )}
        >
            {items.map((item, idx) => (
                <a
                    href={item?.link}
                    key={item?.link}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    target="_blank"
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-primary block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card className="text-center flex">
                        <img
                            src={`news/${item.image}`}
                            className="rounded-2xl aspect-square p-2 mx-auto bg-white object-contain w-full"
                        />
                        <div>
                            <CardTitle>{item.title}</CardTitle>
                            <p className="text-background font-semibold text-md">
                                {item.press} - {item.date}
                            </p>
                            <CardDescription>
                                {item.description}
                            </CardDescription>
                        </div>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-[#3d4957] to-[#282e3a] border border-transparent group-hover:border-[#dbc7a6] relative z-10",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4
            className={cn(
                "text-primary font-bold tracking-wide mt-4",
                className
            )}
        >
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "py-4 text-background tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
