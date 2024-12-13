import React, { useEffect, useRef, useState } from "react";
import { PortfolioCardProps } from "@/types";
import { LearnMoreButton } from "./LearnMoreButton";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { globalBasketsData } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import Graph from "./trading/graph";

const globalApi = [11, 60, -1, -1];

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  icon,
  title,
  description,
  index,
  basket,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

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
      {/* Card */}
      <div
        className="flex flex-col items-center p-6 w-full max-w-[400px] h-[340px] bg-black text-cyan-400 border border-solid border-opacity-40 border-white rounded-[30px] shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={handleOpen}
      >
        {/* Icon */}
        <img
          loading="lazy"
          src={icon}
          alt={title}
          className="object-contain w-[60px] h-[60px] mb-4"
        />

        {/* Title */}
        <h3 className="text-lg font-semibold text-center mb-4">{title}</h3>

        {/* Description */}
        <p className="text-sm text-center text-gray-300 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Learn More Button */}
        <div className="mt-4">
          <LearnMoreButton onClick={handleOpen} />
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center text-black justify-center bg-black/80 backdrop-blur-lg">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={handleClose}
            />
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              ref={containerRef}
              className="relative z-60 max-w-5xl w-full p-6 bg-white dark:bg-neutral-900 rounded-3xl shadow-lg"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                ✕
              </button>

              {/* Modal Header */}
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600 mb-6">{description}</p>

              {/* Graph Section */}
              {globalApi[index] !== -1 && <Graph id={globalApi[index]} />}

              {/* Constituents */}
              <h3 className="text-xl font-semibold mt-6 mb-4">
                Constituents of {title}
              </h3>
              <ScrollArea className="max-h-48">
                <div className="pb-4 pr-4">
                  {globalBasketsData[index].map((company) => (
                    <div
                      key={company.name}
                      className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                      onClick={() => {
                        setOpen(false);
                        if (basket === "global") {
                          const url = `/stock?symbol=${company.symbol}`;
                          navigate(url);
                          window.location.href = url; // Forces refresh
                        } else {
                          const url = `/stock?symbol=BSE:${company.symbol}`;
                          navigate(url);
                          window.location.href = url; // Forces refresh
                        }
                      }}
                    >
                      <p className="text-sm font-medium">{company.name}</p>
                      {company.image && (
                        <img
                          src={`/scrips/${company.image}.png`}
                          alt={company.name}
                          className="w-8 h-8 object-contain"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
