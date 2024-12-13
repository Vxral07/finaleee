import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Symbol = () => {
    const widgetContainerRef = useRef<HTMLDivElement | null>(null);
    const [searchParams] = useSearchParams();
    const symbol = searchParams.get("symbol");

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
        script.innerHTML = JSON.stringify({
            symbol: symbol,
            width: "100%",
            locale: "en",
            colorTheme: "dark",
            isTransparent: true,
        });
        widgetContainerRef.current?.appendChild(script);

        return () => {
            // Cleanup when component unmounts
            widgetContainerRef.current?.removeChild(script);
        };
    }, [symbol]);

    return (
        <div>
            <div
                className="tradingview-widget-container"
                ref={widgetContainerRef}
            >
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
    );
};

export default Symbol;
