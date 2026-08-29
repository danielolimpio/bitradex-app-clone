import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "@/seo/SEO";

const Markets = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const marketOverview = [
    { symbol: "BTX", name: "BTX/USDT", price: "0.3402", change: "-3.34%", isNegative: true },
    { symbol: "BTC", name: "BTC/USDT", price: "123,100.01", change: "+0.45%", isNegative: false },
    { symbol: "ETH", name: "ETH/USDT", price: "4,375.00", change: "-2.21%", isNegative: true },
    { symbol: "ADA", name: "ADA/USDT", price: "0.8120", change: "-0.89%", isNegative: true },
  ];
  const topGainers = [
    { symbol: "STO", name: "STO/USDT", price: "0.2087", change: "+17.44%", isNegative: false },
    { symbol: "ALICE", name: "ALICE/USDT", price: "0.3803", change: "+11.68%", isNegative: false },
    { symbol: "UTK", name: "UTK/USDT", price: "0.02882", change: "+4.36%", isNegative: false },
  ];
  const topVolume = [
    { symbol: "ETH", name: "ETH/USDT", volume: "4,375.00", change: "-2.21%", isNegative: true },
    { symbol: "BTC", name: "BTC/USDT", volume: "123,100.01", change: "+0.45%", isNegative: false },
    { symbol: "SOL", name: "SOL/USDT", volume: "224.20", change: "+1.19%", isNegative: false },
  ];
  const futuresData = [
    { pair: "BTC/USDT", price: "123,055.5", change: "+0.46%", high: "126,169.27", low: "121,081.5", volume: "9,309.7081", vol24h: "1,140,591.814", isNegative: false },
    { pair: "ETH/USDT", price: "4,373.16", change: "-2.20%", high: "4,556.74", low: "4,317.90", volume: "308.16K", vol24h: "1,367,837.04", isNegative: true },
    { pair: "SOL/USDT", price: "224.11", change: "+1.16%", high: "229,627", low: "218.77", volume: "1,773.6K", vol24h: "398,317.94", isNegative: false },
    { pair: "XRP/USDT", price: "2.6207", change: "-1.86%", high: "2,923.0", low: "2,7864", volume: "31,183.00K", vol24h: "88,975.17K", isNegative: true },
    { pair: "BNB/USDT", price: "1,267.92", change: "-2.92%", high: "1,325.18", low: "1,254.70", volume: "237.95K", vol24h: "307,810.94", isNegative: true },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO breadcrumbs={[{ name: "Markets", path: "/markets" }]} />
      <Header />

      <main className="flex-1 container mx-auto px-4 lg:px-8 py-8">
        <section className="mb-12">
          <h1 className="text-3xl text-foreground mb-6 font-medium">{t("markets.title")}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {marketOverview.map((item) => (
              <div key={item.symbol} className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                  <span className={`text-sm font-medium ${item.isNegative ? "text-red-500" : "text-green-500"}`}>{item.change}</span>
                </div>
                <div className="text-2xl font-bold text-foreground mb-2">{item.price}</div>
                <div className="h-12 flex items-center">
                  <div className="w-full h-full bg-muted/20 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl text-foreground mb-4 font-normal">{t("markets.topGainers")}</h2>
              <div className="space-y-3">
                {topGainers.map((item) => (
                  <div key={item.symbol} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium">{item.symbol.substring(0, 2)}</div>
                      <span className="text-sm text-foreground">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{item.price}</div>
                      <div className="text-xs text-green-500 flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3" />
                        {item.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl text-foreground mb-4 font-normal">{t("markets.topVolume")}</h2>
              <div className="space-y-3">
                {topVolume.map((item) => (
                  <div key={item.symbol} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium">{item.symbol.substring(0, 2)}</div>
                      <span className="text-sm text-foreground">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{item.volume}</div>
                      <div className={`text-xs flex items-center gap-1 ${item.isNegative ? "text-red-500" : "text-green-500"}`}>
                        {item.isNegative ? <ArrowDownRight className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
                        {item.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-6 mb-6">
            <button className="text-muted-foreground hover:text-foreground transition-colors">{t("markets.tabs.fav")}</button>
            <button className="text-foreground font-medium border-b-2 border-primary pb-1">{t("markets.tabs.futures")}</button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">{t("markets.tabs.spot")}</button>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/5">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">{t("markets.table.tradingPair")}</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">{t("markets.table.price")}</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">{t("markets.table.change24h")}</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">{t("markets.table.highLow")}</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">{t("markets.table.vol24h")}</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">{t("markets.table.vol24h")}</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">{t("markets.table.action")}</th>
                  </tr>
                </thead>
                <tbody>
                  {futuresData.map((item, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{item.pair}</span>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{t("common.perpetual")}</span>
                        </div>
                      </td>
                      <td className="text-right py-4 px-4">
                        <div className="text-foreground font-medium">{item.price}</div>
                      </td>
                      <td className="text-right py-4 px-4">
                        <span className={`font-medium ${item.isNegative ? "text-red-500" : "text-green-500"}`}>{item.change}</span>
                      </td>
                      <td className="text-right py-4 px-4">
                        <div className="text-sm text-foreground">{item.high}/{item.low}</div>
                      </td>
                      <td className="text-right py-4 px-4 text-foreground">{item.volume}</td>
                      <td className="text-right py-4 px-4 text-foreground">{item.vol24h}</td>
                      <td className="text-center py-4 px-4">
                        <button onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")} className="bg-gradient-primary hover:shadow-button px-6 py-2 rounded-md font-medium transition-all duration-300">
                          {t("markets.table.trade")}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Markets;
