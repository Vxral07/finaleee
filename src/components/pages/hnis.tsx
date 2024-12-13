// // import { useEffect } from "react";


// // const Hnis = () => {

// //     useEffect(() => {
// //         window.scrollTo(0, 0);
// //     }, [])
    

// //     const hnis = [
// //         {
// //             title: "Robo-Advisory Platform",
// //             desc: "A user-friendly platform that creates personalized investment plans based on your risk profile and goals."
// //         },
// //         {
// //             title: "Curated Investment Options",
// //             desc: "Access to a wide range of ethically screened stocks, ETFs, and mutual funds."
// //         },
// //         {
// //             title: "Expert Guidance",
// //             desc: "Support from qualified investment advisors whenever you need it."
// //         },
// //         {
// //             title: "Affordable Fees",
// //             desc: "Transparent and competitive pricing structure."
// //         },
// //         {
// //             title: "Highlight the benefits of easy investing",
// //             desc: "Simple account setup, automated investing, and convenient mobile app access."
// //         }
// //     ]
// //     return (
// //         <div className="">
// //             <div className="flex-col flex md:flex-row  px-10">
// //                 <div className="w-full md:w-2/6 flex flex-col justify-center">
// //                     <h1 className="text-xl text-center pb-2 font-bold leading-tight text-transparent  bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96] sm:text-4xl lg:text-3xl">
// //                         Road to becoming HNI's
// //                     </h1>
// //                     <h2 className="text-xl text-secondary text-center pb-2 font-medium ">
// //                         Aspire. Achieve. Your wealth journey starts now.
// //                     </h2>
// //                     <p className="text-base text-center text-secondary pb-2 font-medium">
// //                         Smart investing made simple, for a brighter tomorrow.
// //                     </p>
// //                 </div>
// //                 <div className="relative  flex flex-row w-full md:w-4/6">
// //                     <div className="container-snap flex flex-col h-full overflow-y-auto scro px-2 py-10">
// //                         {hnis.map((item, index) => (
// //                             <div key={index} className="my-2 px-4 rounded-lg py-2  shadow-sm hover:shadow-md transition-shadow duration-200 "
// //                             style={{ backgroundImage: 'linear-gradient(110deg, #3d4957, 55%, #4a5663)' }}>
// //                                 <h2 className="text-sm font-semibold text-card-heading">{item.title}</h2>
// //                                 <p className="text-slate-300 mt-1 text-sm">{item.desc}</p>
// //                             </div>
// //                         ))}
// //                     </div>
                   
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Hnis;


// "use client";
// // import Image from "next/image";
// // import React from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// export function Hnis() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-auto py-20">
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200  ">
//         Get to know your iSad.
//       </h2>
//       <Carousel items={cards} />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl   max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <img
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
// ];
