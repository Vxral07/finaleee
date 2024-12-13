import React, { useEffect, useState } from "react";
import { YAxis, CartesianGrid, AreaChart, Area } from "recharts";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

interface Chart {
    Table: { TransactionDate: string; DynINdex: number }[];
}

interface Graph {
    Data: Chart;
}

interface GraphProps {
    id: number;
}

const Graph: React.FC<GraphProps> = ({ id }) => {
    const [apiData, setApiData] = useState<Graph | null>(null);

    const [timeframe, setTimeframe] = useState("1Y");

    useEffect(() => {
        fetch(
            `https://api.nuqiwealth.in/GetEquityPortfolioBasketDetails?ID=${id}&type=${timeframe}`
        )
            .then((response) => response.json())
            .then((data) => setApiData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [timeframe, id]);

    if (!apiData) {
        return (
            <div className="flex justify-center items-center">
                <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            </div>
        );
    }

    const chartData = apiData.Data.Table.map((item) => ({
        name: new Date(item.TransactionDate),
        DynINdex: item.DynINdex,
    }));

    return (
        <>
            <div className="w-full overflow-hidden flex justify-center items-center relative">
                <p className="text-xs">Price</p>
                <AreaChart
                    width={400}
                    height={150}
                    data={chartData}
                    className="mr-10"
                >
                    <YAxis className="text-sm" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Area
                        type="monotone"
                        dataKey="DynINdex"
                        stroke="#e7ca64"
                        fill="#e9e4db"
                    />
                </AreaChart>
            </div>
            <p className="text-center text-xs">Duration</p>
            <ToggleGroup type="single" defaultValue="1Y">
                {/* <ToggleGroupItem
                    className="text-xs p-2 sm:p-3"
                    onClick={() => setTimeframe("W")}
                    value="W"
                >
                    1 Week
                </ToggleGroupItem>
                <ToggleGroupItem
                    className="text-xs p-1 sm:p-3"
                    onClick={() => setTimeframe("M")}
                    value="M"
                >
                    1 Month
                </ToggleGroupItem> */}
                <ToggleGroupItem
                    className="text-xs p-2 sm:p-3"
                    onClick={() => setTimeframe("6M")}
                    value="6M"
                >
                    6 Month
                </ToggleGroupItem>
                <ToggleGroupItem
                    className="text-xs p-2 sm:p-3"
                    onClick={() => setTimeframe("1Y")}
                    value="1Y"
                >
                    1 Year
                </ToggleGroupItem>
                <ToggleGroupItem
                    className="text-xs p-2 sm:p-3"
                    onClick={() => setTimeframe("5Y")}
                    value="5Y"
                >
                    5 Year
                </ToggleGroupItem>
                {/* <ToggleGroupItem
                    className="text-xs p-2 sm:p-3"
                    onClick={() => setTimeframe("1")}
                    value="1"
                >
                    Max
                </ToggleGroupItem> */}
            </ToggleGroup>
        </>
    );
};

export default Graph;
