import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { useTranslation } from "react-i18next";
import SEO from "@/seo/SEO";

const Futures = () => {
  const { t } = useTranslation();
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (chartContainerRef.current && (window as any).TradingView) {
        new (window as any).TradingView.widget({
          autosize: true, symbol: "BINANCE:BTCUSDT", interval: "15", timezone: "Etc/UTC",
          theme: "dark", style: "1", locale: "en", toolbar_bg: "#f1f3f6",
          enable_publishing: false, hide_side_toolbar: false, allow_symbol_change: true,
          container_id: "tradingview_chart",
          studies: ["MASimple@tv-basicstudies", "Volume@tv-basicstudies"],
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
    { price: "123,133.9", quantity: "0.0726", total: "1.4350" },
    { price: "123,131.9", quantity: "0.0137", total: "1.4953" },
    { price: "123,130.4", quantity: "0.0137", total: "1.5269" },
    { price: "123,115.7", quantity: "0.0712", total: "1.5322" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO breadcrumbs={[{ name: "Futures", path: "/futures" }]} />
      <Header />

      <main className="flex-1 container mx-auto px-4 lg:px-8 py-4">
        <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-foreground">BTC/USDT</h1>
                <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">{t("futures.label")}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-red-500 font-bold text-xl">123,133.9</span>
                <span className="text-red-500">↓ -123,173.60</span>
                <span className="text-red-500">-0.52%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div><div className="text-muted-foreground">{t("common.high24h")}</div><div className="text-foreground font-medium">123,193.8</div></div>
            <div><div className="text-muted-foreground">{t("common.low24h")}</div><div className="text-foreground font-medium">123,144.6</div></div>
            <div><div className="text-muted-foreground">24H Vol (BTC)</div><div className="text-foreground font-medium">9,206.9528</div></div>
            <div><div className="text-muted-foreground">24H Vol (USDT)</div><div className="text-foreground font-medium">1,140,519.714</div></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-9">
            <div className="bg-card border border-border rounded-lg overflow-hidden" style={{ height: "600px" }}>
              <div id="tradingview_chart" ref={chartContainerRef} style={{ height: "100%", width: "100%" }}></div>
            </div>

            <div className="mt-4 bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-6 border-b border-border pb-3 mb-4">
                <button className="text-foreground font-medium border-b-2 border-primary pb-1">{t("futures.currentPositions")}</button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">{t("futures.activeOrders")}</button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">{t("futures.orderHistory")}</button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">{t("futures.transactionDetails")}</button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">{t("futures.fundFlow")}</button>
              </div>

              <div className="text-center py-12 text-muted-foreground">
                <div className="mb-2">📂</div>
                <div>{t("futures.noData")}</div>
                <button onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")} className="mt-4 bg-gradient-primary hover:shadow-button px-6 py-2 rounded-md font-medium transition-all duration-300">
                  {t("futures.openPosition")}
                </button>
                <p className="text-xs text-muted-foreground mt-2">{t("common.signupMobile")}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <button className="text-foreground font-medium border-b-2 border-primary pb-1">{t("futures.orderInformation")}</button>
                <button className="text-muted-foreground hover:text-foreground transition-colors text-sm">{t("futures.recentTrades")}</button>
              </div>

              <div className="mb-6">
                <div className="space-y-1">
                  {orderBookData.map((order, index) => (
                    <div key={index} className="flex justify-between text-xs">
                      <span className="text-red-500">{order.price}</span>
                      <span className="text-foreground">{order.quantity}</span>
                      <span className="text-muted-foreground">{order.total}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">{t("futures.quantity")}</label>
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
                  <div className="flex justify-between"><span>{t("futures.maxOpenLong")}</span><span className="text-foreground">0.0000 BTC</span></div>
                  <div className="flex justify-between"><span>{t("futures.maxOpenShort")}</span><span className="text-foreground">0.0000 BTC</span></div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")} className="bg-green-600 hover:bg-green-700 text-white py-3 rounded font-medium transition-colors">
                    {t("futures.openLong")}
                  </button>
                  <button onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")} className="bg-red-600 hover:bg-red-700 text-white py-3 rounded font-medium transition-colors">
                    {t("futures.openShort")}
                  </button>
                </div>
                <p className="text-xs text-center text-muted-foreground">{t("common.signupMobile")}</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="text-sm font-medium text-foreground mb-3">{t("futures.assets")}</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-muted-foreground">{t("futures.accountBalance")}</span><span className="text-foreground">0.0000</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">{t("futures.unrealizedPnl")}</span><span className="text-red-500">0.0000 USDT</span></div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <button onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")} className="bg-gradient-primary hover:shadow-button py-2 rounded text-sm font-medium transition-all duration-300">
                  {t("common.deposit")}
                </button>
                <button className="bg-muted hover:bg-muted/80 py-2 rounded text-sm font-medium transition-colors">{t("common.transfer")}</button>
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

export default Futures;
