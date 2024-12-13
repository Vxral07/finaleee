import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { cn, globalBasketsData } from "@/lib/utils";
import Graph from "./trading/graph";

interface BasketDialogProps {
    title: string;
    descritption: string;
    basket: "india" | "global";
    index: number;
}

const globalApi = [11, 60, -1, -1];

const BasketDialog: React.FC<BasketDialogProps> = ({
    basket,
    descritption,
    index,
    title,
}) => {
    const navigate = useNavigate();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    className="flex items-center gap-2 px-1 py-2   text-xs font-bold text-center align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-slate-500/10 active:bg-gray-900/20"
                    type="button"
                >
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                    </svg>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{descritption}</DialogDescription>
                </DialogHeader>
                {globalApi[index] !== -1 && <Graph id={globalApi[index]} />}
                <h2>Constituents of {title}</h2>
                <ScrollArea className="max-h-48 w-full">
                    <div className="pb-4 pr-4">
                        {/* <div className="flex items-center justify-between font-semibold mb-4">
                            <p>Company</p>
                            <p>Allocation</p>
                        </div> */}
                        {globalBasketsData[index].map((company) => (
                            <div
                                className="hover:bg-slate-500/10 active:bg-gray-900/20 rounded-md px-1 cursor-pointer text-sm font-medium"
                                onClick={() => {
                                    if (basket === "global") {
                                        navigate(
                                            `/stock?symbol=${company.symbol}`
                                        );
                                    } else {
                                        navigate(
                                            `/stock?symbol=BSE:${company.symbol}`
                                        );
                                    }
                                }}
                            >
                                <div
                                    key={company.name}
                                    className={cn({
                                        "flex items-center justify-between":
                                            company.image !== "",
                                        "p-3": company.image === "",
                                    })}
                                >
                                    <p>{company.name}</p>
                                    {company.image !== "" && (
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
            </DialogContent>
        </Dialog>
    );
};

export default BasketDialog;
