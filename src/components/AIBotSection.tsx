import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import videoBotSrc from "@/assets/video_aibot.mp4";
import oneClickIcon from "@/assets/ai-bot/one-click.png";
import aiStrategyIcon from "@/assets/ai-bot/ai-strategy.png";
import transparentIcon from "@/assets/ai-bot/transparent.png";
import riskIcon from "@/assets/ai-bot/risk.png";

const AIBotSection = () => {
  const { t } = useTranslation();
  const features = [
    { icon: oneClickIcon, key: "oneClick" },
    { icon: aiStrategyIcon, key: "strategy" },
    { icon: transparentIcon, key: "transparent" },
    { icon: riskIcon, key: "risk" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold mb-6">
            {t("aiBot.badge")}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("aiBot.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("aiBot.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <video src={videoBotSrc} autoPlay muted loop playsInline className="w-full h-auto rounded-2xl" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              {features.map(({ icon, key }) => (
                <div key={key} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <img src={icon} alt="" className="w-12 h-12 object-contain" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-foreground group-hover:text-primary transition-colors duration-300 font-normal">
                      {t(`aiBot.features.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-normal">
                      {t(`aiBot.features.${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-card border border-border rounded-2xl p-8 space-y-6">
              <h4 className="text-2xl font-bold text-foreground">{t("aiBot.performance.title")}</h4>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("aiBot.performance.winRate")}</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-400">65%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("aiBot.performance.annualReturn")}</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-green-400">+178%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t("aiBot.performance.availability")}</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-bold text-primary">24/7</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4 font-light">
                {t("aiBot.performance.disclaimer")}
              </p>
            </div>

            <div className="flex flex-col">
              <Button size="lg" className="w-full bg-gradient-primary hover:shadow-button transition-all duration-300 text-lg py-6" onClick={() => window.open("https://www.bitradex.com/en/account/register?inviteCode=7UII2W", "_blank")}>
                {t("aiBot.cta")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-xs text-muted-foreground mt-1 text-center">{t("common.signupMobile")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBotSection;
