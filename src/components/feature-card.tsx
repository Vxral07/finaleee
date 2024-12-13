import React from "react";

interface FeatureCardProps {
    src: string;
    heading: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    src,
    heading,
    description,
}) => {
    return (
        <div className="md:aspect-square flex flex-col py-4 text-center gap-2">
            <div className="aspect-square flex justify-center items-center mx-auto max-w-20">
                <img src={src} className="w-10" />
            </div>
            <span className="font-semibold text-base pt-6 text-[#F5DEB3]">{heading}</span>
            <span className="tracking-tight text-sm text-[#b4b3b3]">{description}</span>
        </div>
    );
};

export default FeatureCard;
