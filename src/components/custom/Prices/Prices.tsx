import { useEffect, useRef, useState } from "react";

const symbols = [
  { name: "Bitcoin (BTC)", symbol: "btcusdt" },
  { name: "Ethereum (ETH)", symbol: "ethusdt" },
  { name: "Binance Coin (BNB)", symbol: "bnbusdt" },
  { name: "Cardano (ADA)", symbol: "adausdt" },
  { name: "Solana (SOL)", symbol: "solusdt" },
  { name: "Ripple (XRP)", symbol: "xrpusdt" },
  { name: "Polkadot (DOT)", symbol: "dotusdt" },
  { name: "Dogecoin (DOGE)", symbol: "dogeusdt" },
  { name: "Litecoin (LTC)", symbol: "ltcusdt" },
  { name: "Shiba Inu (SHIB)", symbol: "shibusdt" },
];

export default function Prices() {
  const [prices, setPrices] = useState<any>({});
  const previousPrices: any = useRef({});

  useEffect(() => {
    const streams = symbols.map((s) => `${s.symbol}@miniTicker`).join("/");
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=${streams}`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data).data;
      const symbol = data.s.toLowerCase();
      const price = parseFloat(data.c);

      setPrices((prev: any) => ({
        ...prev,
        [symbol]: price,
      }));
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <section className="prices">
      <h2>Top 10 Crypto Prices</h2>
      <div id="price-list">
        {symbols.map(({ name, symbol }: any) => {
          const price:any = prices[symbol] ?? null;
          const prev = previousPrices?.current[symbol];
          let color = "#f0f0f0";

          if (prev !== undefined && price !== undefined) {
            if (price > prev) {
              color = "#00ff88";
            } else if (price < prev) {
              color = "#ff4d4d";
            }
          }

          // Update previous price for next comparison
          if (price !== undefined) {
            previousPrices.current[symbol] = price;
          }

          return (
            <div key={symbol} className="price-item">
              <span>{name}</span>
              <span
                style={{ color }}
                className={`price ${prev !== undefined ? "blink" : ""}`}
              >
                {price
                  ? `$${price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 6,
                    })}`
                  : "..."}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
