// import Chart from "../trading/chart";
import FundamentalData from "../trading/fundamental-data";
import Profile from "../trading/profile";
import Symbol from "../trading/symbol";
import Technical from "../trading/technical";

const Stock = () => {
    return (
        <div className="h-full">
            <div className="px-4 md:px-8 py-10">
                <Symbol />
            </div>
            {/* <div className="">
                <div className="px-4 md:px-8 p-10">
                    <Chart />
                </div>
            </div> */}
            <div className="px-4 md:px-8 py-10 h-96">
                <Profile />
            </div>
            <div className="px-4 md:px-8 max-w-3xl mx-auto h-96">
                <Technical />
            </div>
            <div className="">
                <div className="px-4 md:px-8 py-10 h-[56rem]">
                    <FundamentalData />
                </div>
            </div>
        </div>
    );
};

export default Stock;
