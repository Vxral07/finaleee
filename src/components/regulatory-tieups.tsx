// import Autoplay from "embla-carousel-autoplay";
// import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
// import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

const tieups = [
  "Dfsa1.png",
  "ib1.png",
  "uqudo1.png",
  "ir1.png",
  "sp1.png",
  "six1.png",
];

const RegulatoryTieups = () => {
  return (
    <div className="flex flex-col gap-8  px-14 mt-10 py-12 items-center justify-center antialiased container">
      <div className="flex flex-col justify-between items-center w-full">
        <div className="flex flex-col justify-between items-center w-full">
          <div className="flex flex-col gap-4 mb-16">
            <h1 className="text-center pb-5 font-bold leading-tight font-poppins text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-white">Build</span>{" "}
              <span className="text-cyan-500">trust</span>{" "}
              <span className="text-cyan-500">through</span>{" "}
              <span className="text-cyan-500">collaboration</span>
            </h1>
            <p className="text-center text-white font-poppins">
              Our partnerships with esteemed financial institutions like
              regulatory body like DFSA foster trust in our commitment to
              security <br /> and responsible financial practices, ensuring your
              investments are managed in a secure and reliable environment.
            </p>
          </div>
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
            <div key={index} className="flex mb-16 min-w-52 justify-center">
              <img
                src={`/tieups/${image}`}
                className=" h-[1.5rem] mx-5 object-cover"
              />
            </div>
          ))}
        </Marquee>
        <Marquee direction="right">
          {tieups.reverse().map((image, index) => (
            <div key={index} className="flex mb-16 min-w-52 justify-center">
              <img
                src={`/tieups/${image}`}
                className="h-[1.5rem]  mx-5 object-fill"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default RegulatoryTieups;
