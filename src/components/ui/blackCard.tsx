
import { DollarSignIcon, IndianRupeeIcon } from 'lucide-react';
import BasketDialog from '../basket-dialog';
import './blackcard.css'
interface MeteorCardProps {
    icon: string;
    title: string;
    descritption: string;
    basket: "india" | "global";
    index: number;
}

const BlackCard: React.FC<MeteorCardProps> = (props) => {
    return (
        /* From Uiverse.io by Spacious74 */
        <div className="outer">
            <div className="dot"></div>
            <div className="card">
                {/* <div className="ray"></div> */}
                <div className='flex flex-col flex-1 justify-between items-center pb-12'>
                    <div className="text px-[2.2rem] pt-[2.5rem]">
                        <div className="flex justify-between w-full">
                            <div className=" rounded-full flex items-center justify-center mb-2">
                                <img src={`/baskets/${props.icon}.png`} width={40} />
                            </div>
                            {props.basket === "global" ? (
                                <DollarSignIcon className="text-primary mb-4" />
                            ) : (
                                <IndianRupeeIcon className="text-primary mb-4" />
                            )}
                        </div>
                        <h2 className="font-bold text-lg  text-[#F5DEB3] mb-2 relative">
                            {props.title}
                        </h2>

                        <p className="font-normal text-sm  text-white/80 relative">
                            {props.descritption}
                        </p>
                    </div>
                    {/* <div className='font-xs'> */}
                    <BasketDialog
                        title={props.title}
                        descritption={props.descritption}
                        basket={props.basket}
                        index={props.index}
                    />
                    {/* </div> */}
                </div>
                <div className="line topl"></div>
                <div className="line leftl"></div>
                <div className="line bottoml"></div>
                <div className="line rightl"></div>
            </div>
        </div>

    );
};

export default BlackCard;
