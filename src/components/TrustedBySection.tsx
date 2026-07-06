import { useTranslation } from "react-i18next";
import aveAiLogo from "@/assets/partners/ave-ai.png";
import binanceLogo from "@/assets/partners/binance.png";
import tokenPocketLogo from "@/assets/partners/token-pocket.png";
import trustpilotLogo from "@/assets/partners/trustpilot.png";
import bitgetLogo from "@/assets/partners/bitget.png";
import coinmarketcapLogo from "@/assets/partners/coinmarketcap.png";
import tracxnLogo from "@/assets/partners/tracxn.png";
import odailyLogo from "@/assets/partners/odaily.png";
import chainalysisLogo from "@/assets/partners/chainalysis.png";
import certikLogo from "@/assets/partners/certik.png";
import chaincatcherLogo from "@/assets/partners/chaincatcher.png";
import rootdataLogo from "@/assets/partners/rootdata.png";

const rowOne = [
  { name: "Trustpilot", logo: trustpilotLogo },
  { name: "Bitget", logo: bitgetLogo },
  { name: "CoinMarketCap", logo: coinmarketcapLogo },
  { name: "AVE.AI", logo: aveAiLogo },
  { name: "Binance", logo: binanceLogo },
  { name: "Token Pocket", logo: tokenPocketLogo },
];

const rowTwo = [
  { name: "RootData", logo: rootdataLogo },
  { name: "Tracxn", logo: tracxnLogo },
  { name: "ODaily", logo: odailyLogo },
  { name: "Chainalysis", logo: chainalysisLogo },
  { name: "CertiK", logo: certikLogo },
  { name: "ChainCatcher", logo: chaincatcherLogo },
];

const LogoRow = ({
  items,
  reverse = false,
}: {
  items: { name: string; logo: string }[];
  reverse?: boolean;
}) => {
  // Duplicate enough times for a seamless marquee
  const track = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-4 md:gap-6 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {track.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex items-center justify-center h-24 md:h-28 w-56 md:w-64 flex-shrink-0 rounded-xl bg-[#1a1c20] border border-white/5"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-10 md:max-h-12 w-auto object-contain opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const TrustedBySection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("trustedBy.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("trustedBy.subtitle")}
          </p>
        </div>
      </div>

      {/* Full-width marquee rows */}
      <div className="space-y-4 md:space-y-6">
        <LogoRow items={rowOne} />
        <LogoRow items={rowTwo} reverse />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mt-20 bg-gradient-card border border-border rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500K+</div>
              <div className="text-sm text-muted-foreground">{t("trustedBy.stats.activeTraders")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">$2.5B</div>
              <div className="text-sm text-muted-foreground">{t("trustedBy.stats.dailyVolume")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">{t("trustedBy.stats.tradingPairs")}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">{t("trustedBy.stats.uptime")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
