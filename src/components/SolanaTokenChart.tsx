import { useEffect, useRef, useState } from "react";
import { createChart, ColorType, CandlestickSeriesOptions } from "lightweight-charts";

interface SolanaTokenChartProps {
  tokenMint: string;
  defaultResolution?: "15m" | "1h" | "4h" | "1d";
  lookbackDays?: number;
}

const SolanaTokenChart = ({ 
  tokenMint, 
  defaultResolution = "15m",
  lookbackDays = 7 
}: SolanaTokenChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<any>(null);
  const candleSeriesRef = useRef<any>(null);
  const pollTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const [currentResolution, setCurrentResolution] = useState(defaultResolution);
  const [price, setPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);
  const [currentPairId, setCurrentPairId] = useState<string | null>(null);

  const REFRESH_MS = 25000;

  const toUnixSeconds = (date: Date) => Math.floor(date.getTime() / 1000);

  const rangeFromDays = (days: number) => {
    const to = new Date();
    const from = new Date(to.getTime() - days * 24 * 3600 * 1000);
    return { from: toUnixSeconds(from), to: toUnixSeconds(to) };
  };

  const niceNumber = (n: number | null | undefined) => {
    if (n === null || n === undefined || Number.isNaN(n)) return "—";
    const abs = Math.abs(n);
    const decimals = abs >= 1 ? 4 : abs >= 0.01 ? 6 : 8;
    return Number(n).toFixed(decimals);
  };

  const getPairsForToken = async (mint: string) => {
    const url = `https://api.dexscreener.com/latest/dex/tokens/${mint}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load token pairs");
    const data = await res.json();
    const pairs = (data.pairs || [])
      .filter((p: any) => p.chainId === "solana")
      .sort((a: any, b: any) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0));
    return pairs;
  };

  const getCandles = async (pairId: string, resolution: string, fromSec: number, toSec: number) => {
    const url = `https://api.dexscreener.com/latest/dex/candles/${encodeURIComponent(
      resolution
    )}/${encodeURIComponent(pairId)}?from=${fromSec}&to=${toSec}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to load candles");
    const data = await res.json();
    return data.candles || [];
  };

  const loadAndRender = async (resolution: string) => {
    try {
      let pairs = [];
      let pairId = currentPairId;

      if (!pairId) {
        pairs = await getPairsForToken(tokenMint);
        if (!pairs.length) throw new Error("No Solana pairs found for this token.");
        pairId = pairs[0].pairAddress;
        setCurrentPairId(pairId);
        setPrice(Number(pairs[0].priceUsd || 0));
        setPriceChange(Number(pairs[0].priceChange?.h24 ?? null));
      } else {
        pairs = await getPairsForToken(tokenMint);
        setPrice(Number(pairs[0].priceUsd || 0));
        setPriceChange(Number(pairs[0].priceChange?.h24 ?? null));
      }

      const { from, to } = rangeFromDays(lookbackDays);
      const raw = await getCandles(pairId, resolution, from, to);
      const seriesData = raw
        .map((c: any) => ({
          time: Math.floor(c.t / 1000),
          open: Number(c.o),
          high: Number(c.h),
          low: Number(c.l),
          close: Number(c.c),
        }))
        .sort((a: any, b: any) => a.time - b.time);

      if (candleSeriesRef.current) {
        candleSeriesRef.current.setData(seriesData);
        chartRef.current?.timeScale().fitContent();
      }
    } catch (err) {
      console.error(err);
      setPrice(null);
      setPriceChange(null);
    }
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "#ffffff" },
        textColor: "#374151",
      },
      grid: {
        vertLines: { color: "#f1f5f9" },
        horzLines: { color: "#f1f5f9" },
      },
      rightPriceScale: { borderColor: "#e5e7eb" },
      timeScale: { borderColor: "#e5e7eb" },
      width: chartContainerRef.current.clientWidth,
      height: 460,
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#7fcf9a",
      downColor: "#f09a9a",
      borderUpColor: "#6fbf9a",
      borderDownColor: "#e58e8e",
      wickUpColor: "#6fbf9a",
      wickDownColor: "#e58e8e",
    } as CandlestickSeriesOptions);

    chartRef.current = chart;
    candleSeriesRef.current = candleSeries;

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    window.addEventListener("resize", handleResize);

    loadAndRender(currentResolution);

    pollTimerRef.current = setInterval(() => {
      loadAndRender(currentResolution);
    }, REFRESH_MS);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (pollTimerRef.current) clearInterval(pollTimerRef.current);
      chart.remove();
    };
  }, []);

  useEffect(() => {
    loadAndRender(currentResolution);
  }, [currentResolution]);

  const resolutions = ["15m", "1h", "4h", "1d"] as const;

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <span className="font-bold tracking-wide">Solana Token</span>
          <span className="font-mono text-xs text-gray-500 px-2 py-1 bg-gray-50 border border-gray-200 rounded-full">
            {tokenMint.slice(0, 6)}…{tokenMint.slice(-6)}
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">
            {price !== null ? `$${niceNumber(price)}` : "—"}
          </span>
          <span
            className={`text-xs px-2 py-1 rounded-lg border ${
              priceChange && priceChange > 0
                ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                : priceChange && priceChange < 0
                ? "bg-red-50 text-red-900 border-red-200"
                : "bg-white text-gray-700 border-gray-200"
            }`}
          >
            {priceChange !== null && Number.isFinite(priceChange)
              ? `${priceChange > 0 ? "+" : ""}${priceChange.toFixed(2)}%`
              : "—"}
          </span>
        </div>
      </div>

      <div className="flex gap-1.5 bg-gray-50 border border-gray-200 p-1.5 rounded-xl mb-3">
        {resolutions.map((res) => (
          <button
            key={res}
            onClick={() => setCurrentResolution(res)}
            className={`px-3 py-1.5 rounded-lg border text-sm transition-colors ${
              currentResolution === res
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
            }`}
          >
            {res}
          </button>
        ))}
      </div>

      <div
        ref={chartContainerRef}
        className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white"
        style={{ height: "460px" }}
      />

      <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
        <div>
          Data via{" "}
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            DexScreener
          </a>
        </div>
        <div className="opacity-80">Green = up, Red = down</div>
      </div>
    </div>
  );
};

export default SolanaTokenChart;
