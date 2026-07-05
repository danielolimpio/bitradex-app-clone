import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import spotIcon from "@/assets/ecosystem/spot.svg";
import futuresIcon from "@/assets/ecosystem/futures.svg";
import aiBotIcon from "@/assets/ecosystem/ai-bot.svg";
import btxCardIcon from "@/assets/ecosystem/btx-card.svg";

const TradingEcosystem = () => {
  const { t } = useTranslation();
  const features = [
    { icon: spotIcon, key: "spot" },
    { icon: futuresIcon, key: "futures" },
    { icon: aiBotIcon, key: "aiBot" },
    { icon: btxCardIcon, key: "btxCard" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("ecosystem.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("ecosystem.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, key }) => (
            <div key={key} className="group relative bg-[#0f1114] border border-border/60 rounded-xl p-8 hover:border-primary/40 transition-all duration-300">
              <div className="mb-6">
                <img src={icon} alt="" className="w-12 h-12" />
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {t(`ecosystem.items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-normal">
                  {t(`ecosystem.items.${key}.description`)}
                </p>
              </div>

              <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={() => window.open("https://wa.me/5512982519116?text=I%20would%20like%20to%20know%20more%20about%20Bitradex", "_blank")}>
                {t(`ecosystem.items.${key}.cta`)}
              </Button>

              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl text-foreground mb-4 font-medium">
              {t("ecosystem.ctaTitle")}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("ecosystem.ctaSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col items-center">
                <Button size="lg" className="bg-gradient-primary hover:shadow-button transition-all duration-300 text-lg px-8 py-6" onClick={() => window.open("https://www.bitradex.com/en/account/register?inviteCode=7UII2W", "_blank")}>
                  {t("ecosystem.createAccount")}
                </Button>
                <p className="text-xs text-muted-foreground mt-1">{t("common.signupMobile")}</p>
              </div>
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6">
                {t("ecosystem.exploreFeatures")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingEcosystem;
