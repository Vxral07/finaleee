/* eslint-disable react-refresh/only-export-components */
// TradingViewWidget.jsx
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const News = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const [searchParams] = useSearchParams();
    const symbol = searchParams.get("symbol");

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
            "feedMode": "symbol",
            "symbol": "${symbol}",
            "isTransparent": true,
            "displayMode": "adaptive",
            "width": "100%",
            "height": "100%",
            "colorTheme": "light",
            "locale": "en"
          }`;
        container.current?.appendChild(script);
    }, [symbol]);

    return (
        <div ref={container} style={{ height: "100%", width: "100%" }}></div>
    );
};

export default News;
