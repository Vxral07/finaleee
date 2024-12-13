import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const FundamentalData = () => {
    const widgetContainerRef = useRef<HTMLDivElement | null>(null);
    const [searchParams] = useSearchParams();
    const symbol = searchParams.get("symbol");

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
        script.innerHTML = JSON.stringify({
            isTransparent: true,
            largeChartUrl: "",
            displayMode: "adaptive",
            width: "100%",
            height: "100%",
            colorTheme: "dark",
            symbol: symbol,
            locale: "en",
        });
        widgetContainerRef.current?.appendChild(script);

        return () => {
            // Cleanup when component unmounts
            widgetContainerRef.current?.removeChild(script);
        };
    }, [symbol]);

    return (
        <div className="tradingview-widget-container" ref={widgetContainerRef}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default FundamentalData;
