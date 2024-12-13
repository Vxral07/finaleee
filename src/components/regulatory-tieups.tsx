// import Autoplay from "embla-carousel-autoplay";
// import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
// import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

const tieups = ["Dfsa1.png", "ib1.png", "uqudo1.png", "ir1.png", "sp1.png", "six1.png"];


const RegulatoryTieups = () => {
    return (
        <div className="flex flex-col gap-8 px-14 mt-10 py-12 items-center justify-center antialiased container">
            <div className="flex flex-col justify-between items-center w-full">
                <div className="flex flex-col gap-4 mb-16">
                    <h1 className="text-3xl font-semibold  text-center tracking-tighter text-cyan-500 md:text-3xl">
                        Building trust through collaboration
                    </h1>
                    <p className="text-center text-white">
                        Our partnerships with esteemed financial institutions
                        like regulatory body like DFSA foster trust in
                        our commitment to security and responsible financial
                        practices, ensuring your investments are managed in a
                        secure and reliable environment.
                    </p>
                </div>
                {/* <Carousel
                    className="w-full p-6 bg-black"  // Ensures the carousel takes full width
                    orientation="horizontal"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent className="flex h-64">
                        {tieups.map((image, index) => (
                            <CarouselItem
                                key={index}
                                className={cn(
                                    "flex justify-center items-center w-1/4 p-4", // Adjust the width to 1/4th of the container
                                )}
                            >
                                <img src={`/tieups/${image}`} className="max-h-full max-w-sm object-contain" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel> */}
                <Marquee direction="left">
                    {tieups.map((image, index) => (
                        <div
                            key={index}
                            className="flex mb-16 min-w-52 justify-center"
                        >
                            <img src={`/tieups/${image}`} className=" h-[1.5rem] mx-5 object-cover" />
                        </div>
                    ))}
                </Marquee>
                <Marquee direction="right">
                    {tieups.reverse().map((image, index) => (
                        <div
                            key={index}
                            className="flex mb-16 min-w-52 justify-center"
                        >
                            <img src={`/tieups/${image}`} className="h-[1.5rem]  mx-5 object-fill" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default RegulatoryTieups;
