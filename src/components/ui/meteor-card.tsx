// // import { DollarSignIcon, IndianRupeeIcon } from "lucide-react";
// import { cn } from "../../lib/utils";
// // import BasketDialog from "../basket-dialog";
// import './styles.css'

// const Meteors = ({
//     number,
//     className,
// }: {
//     number?: number;
//     className?: string;
// }) => {
//     const meteors = new Array(number || 20).fill(true);
//     return (
//         <>
//             {meteors.map((_el, idx) => (
//                 <span
//                     key={"meteor" + idx}
//                     className={cn(
//                         "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-secondary shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
//                         "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
//                         className
//                     )}
//                     style={{
//                         top: 0,
//                         left:
//                             Math.floor(Math.random() * (400 - -400) + -400) +
//                             "px",
//                         animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
//                         animationDuration:
//                             Math.floor(Math.random() * (10 - 2) + 2) + "s",
//                     }}
//                 ></span>
//             ))}
//         </>
//     );
// };

// interface MeteorCardProps {
//     icon: string;
//     title: string;
//     descritption: string;
//     basket: "india" | "global";
//     index: number;
// }

// const MeteorsCard: React.FC<MeteorCardProps> = (props) => {
//     return (
//         <div className="relative max-w-sm">
//             <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#3d4957] to-[#282e3a] dark:border-neutral-600 transform scale-[0.80] rounded-full blur-3xl" />
//             {/* <div className="relative shadow-xl bg-gradient-to-br from-[#3d4957] to-[#282e3a]  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start text-white">
//                 <div className="flex justify-between w-full">
//                     <div className="h-16 w-16 rounded-full flex items-center justify-center mb-4">
//                         <img src={`/baskets/${props.icon}.png`} />
//                     </div>
//                     {props.basket === "global" ? (
//                         <DollarSignIcon className="text-primary mb-4" />
//                     ) : (
//                         <IndianRupeeIcon className="text-primary mb-4" />
//                     )}
//                 </div>

//                 <h1 className="font-bold text-xl text-background mb-4 relative">
//                     {props.title}
//                 </h1>

//                 <p className="font-normal text-base text-background/50 mb-4 relative">
//                     {props.descritption}
//                 </p>

//                 <BasketDialog
//                     title={props.title}
//                     descritption={props.descritption}
//                     basket={props.basket}
//                     index={props.index}
//                 />

//                 <Meteors number={20} />
//             </div> */}
//             <div className="box">
//                 <span></span>
//                 <div className="content">
//                     {/* <div className="flex justify-between w-full">
//                         <div className=" rounded-full flex items-center justify-center mb-4">
//                             <img src={`/baskets/${props.icon}.png`} />
//                         </div>
//                         {props.basket === "global" ? (
//                             <DollarSignIcon className="text-primary mb-4" />
//                         ) : (
//                             <IndianRupeeIcon className="text-primary mb-4" />
//                         )}
//                     </div> */}
//                     <div>
//                     <h2 className="font-bold text-sm text-black text-background mb-4 relative">
//                         {props.title}
//                     </h2>

//                     <p className="font-xs text-xs  text-background mb-4 relative">
//                         {props.descritption}
//                     </p>
//                     </div>
//                     {/* <BasketDialog
//                     title={props.title}
//                     descritption={props.descritption}
//                     basket={props.basket}
//                     index={props.index}
//                 /> */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MeteorsCard;
