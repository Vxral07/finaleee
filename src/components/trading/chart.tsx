/* eslint-disable react-refresh/only-export-components */
// TradingViewWidget.jsx
import { useEffect, useRef, memo } from "react";
import { useSearchParams } from "react-router-dom";

const Chart = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const [searchParams] = useSearchParams();
    const symbol = searchParams.get("symbol")
    console.log(symbol)

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
            "symbols": [
            [
              NSE:RELIANCE | 1D
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": auto,
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
          }`;
        container.current?.appendChild(script);
    }, []);

    return (
        <div
            className="tradingview-widget-container"
            ref={container}
        >
            <div
                className="tradingview-widget-container__widget"
                style={{ height: "calc(100% - 32px)", width: "100%" }}
            ></div>
        </div>
    );
};

export default memo(Chart);
