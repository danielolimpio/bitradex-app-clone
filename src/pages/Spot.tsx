import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { useTranslation } from "react-i18next";
import SEO from "@/seo/SEO";

const Spot = () => {
  const { t } = useTranslation();
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (chartContainerRef.current && (window as any).TradingView) {
        new (window as any).TradingView.widget({
          autosize: true, symbol: "BINANCE:BTCUSDT", interval: "D", timezone: "Etc/UTC",
          theme: "dark", style: "1", locale: "en", toolbar_bg: "#f1f3f6",
          enable_publishing: false, hide_side_toolbar: false, allow_symbol_change: true,
          container_id: "tradingview_spot_chart",
          studies: ["MASimple@tv-basicstudies", "RSI@tv-basicstudies", "Volume@tv-basicstudies"],
          disabled_features: ["use_localstorage_for_settings"],
          enabled_features: ["study_templates"],
          loading_screen: { backgroundColor: "#000000" },
          overrides: { "mainSeriesProperties.candleStyle.upColor": "#26a69a", "mainSeriesProperties.candleStyle.downColor": "#ef5350" },
        });
      }
    };
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  const orderBookData = [
    { price: "67,842.50", quantity: "0.1245", total: "8,446.39" },
    { price: "67,840.20", quantity: "0.0892", total: "6,051.11" },
    { price: "67,838.75", quantity: "0.2134", total: "14,478.31" },
    { price: "67,835.30", quantity: "0.0567", total: "3,846.26" },
  ];

  const recentTrades = [
    { price: "67,842.50", quantity: "0.0125", time: "14:23:45", type: "buy" },
    { price: "67,840.20", quantity: "0.0892", time: "14:23:42", type: "sell" },
    { price: "67,838.75", quantity: "0.0456", time: "14:23:39", type: "buy" },
    { price: "67,835.30", quantity: "0.1234", time: "14:23:36", type: "sell" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO />
      <Header />

      <main className="flex-1 container mx-auto px-4 lg:px-8 py-4">
        <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-foreground">BTC/USDT</h1>
                <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">{t("spot.label")}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-green-500 font-bold text-xl">67,842.50</span>
                <span className="text-green-500">↑ +1,245.80</span>
                <span className="text-green-500">+1.87%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div><div className="text-muted-foreground">{t("common.high24h")}</div><div className="text-foreground font-medium">68,123.40</div></div>
            <div><div className="text-muted-foreground">{t("common.low24h")}</div><div className="text-foreground font-medium">66,234.50</div></div>
            <div><div className="text-muted-foreground">24H Vol (BTC)</div><div className="text-foreground font-medium">12,456.8934</div></div>
            <div><div className="text-muted-foreground">24H Vol (USDT)</div><div className="text-foreground font-medium">842,567,234.12</div></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-9">
            <div className="bg-card border border-border rounded-lg overflow-hidden" style={{ height: "600px" }}>
              <div id="tradingview_spot_chart" ref={chartContainerRef} style={{ height: "100%", width: "100%" }}></div>
            </div>

            <div className="mt-4 bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-6 border-b border-border pb-3 mb-4">
                <button className="text-foreground font-medium border-b-2 border-primary pb-1">{t("spot.openOrders")}</button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">{t("spot.orderHistory")}</button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">{t("spot.tradeHistory")}</button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">{t("spot.funds")}</button>
              </div>

              <div className="text-center py-12 text-muted-foreground">
                <div className="mb-2">📂</div>
                <div>{t("spot.noOpenOrders")}</div>
                <button onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")} className="mt-4 bg-gradient-primary hover:shadow-button px-6 py-2 rounded-md font-medium transition-all duration-300">
                  {t("spot.startTrading")}
                </button>
                <p className="text-xs text-muted-foreground mt-2">{t("common.signupMobile")}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-foreground font-medium">{t("spot.orderBook")}</h3>
                <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">0.01</button>
              </div>

              <div className="mb-6">
                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-2">
                  <div>{t("spot.priceUSDT")}</div>
                  <div className="text-right">{t("spot.amountBTC")}</div>
                  <div className="text-right">{t("spot.totalCol")}</div>
                </div>
                <div className="space-y-1">
                  {orderBookData.map((order, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 text-xs">
                      <span className="text-red-500">{order.price}</span>
                      <span className="text-foreground text-right">{order.quantity}</span>
                      <span className="text-muted-foreground text-right">{order.total}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <h3 className="text-foreground font-medium mb-3 text-sm">{t("spot.recentTrades")}</h3>
                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-2">
                  <div>{t("spot.priceUSDT")}</div>
                  <div className="text-right">{t("spot.amountBTC")}</div>
                  <div className="text-right">{t("spot.time")}</div>
                </div>
                <div className="space-y-1">
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 text-xs">
                      <span className={trade.type === "buy" ? "text-green-500" : "text-red-500"}>{trade.price}</span>
                      <span className="text-foreground text-right">{trade.quantity}</span>
                      <span className="text-muted-foreground text-right">{trade.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button className="bg-green-600/20 text-green-500 border border-green-600/30 py-2 rounded font-medium">{t("common.buy")}</button>
                <button className="bg-muted text-muted-foreground py-2 rounded font-medium">{t("common.sell")}</button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">{t("common.price")}</label>
                  <div className="flex items-center gap-2">
                    <input type="number" placeholder="67,842.50" className="flex-1 bg-background border border-border rounded px-3 py-2 text-sm text-foreground" />
                    <span className="text-sm text-muted-foreground">USDT</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">{t("common.amount")}</label>
                  <div className="flex items-center gap-2">
                    <input type="number" placeholder="0.0000" className="flex-1 bg-background border border-border rounded px-3 py-2 text-sm text-foreground" />
                    <span className="text-sm text-muted-foreground">BTC</span>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {["25%", "50%", "75%", "100%"].map((p) => (
                      <button key={p} className="flex-1 text-xs bg-muted hover:bg-muted/80 py-1 rounded transition-colors">{p}</button>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-muted-foreground space-y-1">
                  <div className="flex justify-between"><span>{t("common.available")}:</span><span className="text-foreground">0.0000 USDT</span></div>
                  <div className="flex justify-between"><span>{t("common.total")}:</span><span className="text-foreground">0.0000 USDT</span></div>
                </div>

                <button onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-medium transition-colors">
                  {t("spot.buyBTC")}
                </button>
                <p className="text-xs text-center text-muted-foreground">{t("common.signupMobile")}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Spot;
