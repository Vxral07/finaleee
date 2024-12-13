// import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ServiceCard } from "./ServiceCard";
import { servicesData } from "@/data";

export const ServicesSection: React.FC = () => {
  // const swiperRef = useRef<any>(null);

  return (
    <div className="rounded-none w-full max-w-[1200px] mx-auto relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={32} // Space between cards
        slidesPerView={1}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="my-swiper"
      >
        {servicesData.services.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceCard
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              imageAlt={service.imageAlt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="swiper-button-next text-white "></div>
      <div className="swiper-button-prev text-white "></div>
    </div>
  );
};

// import { Navbar } from "../navbar";
// import { Footer } from "../footer";
// import { useEffect, useState } from "react";

// const Prive = () => {
//   const [videoSrc, setVideoSrc] = useState("/MOBILE VERSION.mp4");

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         // Mobile view
//         setVideoSrc("/MOBILE VERSION.mp4"); // Update this path to your mobile-specific video
//       } else {
//         // Desktop/Tablet view
//         setVideoSrc("/MOBILE VERSION.mp4");
//       }
//     };

//     // Set video source on initial load
//     handleResize();

//     // Listen for window resize events
//     window.addEventListener("resize", handleResize);

//     // Clean up the event listener on component unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="max-w-screen">
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative h-screen overflow-hidden">
//         {/* Background Video */}
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           playsInline
//           loop
//         >
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Text Section */}
//         <div
//           className="absolute inset-y-0 left-10 md:left-20 flex flex-col justify-center space-y-5 z-10 max-w-md"
//           style={{
//             width: "calc(50% - 20px)", // Prevent overlap with the boat
//           }}
//         >
//           <h1 className="text-transparent font-sf-pro-display text-xl sm:text-2xl md:text-3xl font-bold tracking-wide bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96]">
//             Navigating Your Financial Voyage With Distinction
//           </h1>
//           <h2 className="text-custom-dark-blue font-sf-pro-display font-bold text-lg sm:text-2xl">
//             Bespoke Wealth Management Solutions
//           </h2>
//           <p className="text-black font-sf-pro-display text-sm sm:text-base leading-6">
//             Preserving and growing your legacy, with a focus on your values.
//           </p>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="py-10 container">
//         <div className="justify-center flex align-middle">
//           <h1 className="font-sf-pro-display text-3xl pb-5 font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96] sm:text-3xl lg:text-4xl">
//             Services
//           </h1>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Prive;