import { Button } from "@/components/ui/button";
import { Play, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/david-villa-hero.png";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden min-h-[70vh] lg:min-h-[80vh] xl:min-h-[85vh] 2xl:min-h-[75vh] bg-background">



      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-8 lg:pt-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* LEFT: copy */}
          <div className="space-y-8 relative z-20">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground block">{t("hero.headline1")}</span>
                <span className="text-foreground block">{t("hero.headline2")}</span>
              </h1>

              <div className="flex items-center space-x-3">
                <span className="text-xl lg:text-2xl font-semibold text-primary">Bitradex</span>
                <span className="text-lg text-primary/70">×</span>
                <span className="text-xl lg:text-2xl font-semibold text-primary">David Villa</span>
              </div>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
                {t("hero.ambassador")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-button transition-all duration-300 text-base px-8 py-6 rounded-md"
                onClick={() => window.open('https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W', '_blank')}
              >
                {t("hero.registerNow")}
              </Button>


              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 text-base px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                {t("hero.watchDemo")}
              </Button>
            </div>
          </div>

          {/* RIGHT: David Villa banner */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-full max-w-[560px]">
              <img
                src={heroImage}
                alt="David Villa - Bitradex Global Brand Ambassador"
                className="w-full h-auto object-contain"
              />

              {/* Badges row — overlapped on bottom of image */}
              <div className="absolute bottom-3 lg:bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-30 flex-nowrap">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-[#c9a14a] bg-[#141516]/95">
                  <Trophy className="w-3.5 h-3.5 text-[#d4af37] shrink-0" strokeWidth={1.5} />
                  <div className="leading-[1.1] text-left">
                    <div className="text-[9px] text-[#d4af37] font-medium whitespace-nowrap">{t("hero.badge1Line1")}</div>
                    <div className="text-[9px] text-[#d4af37] font-medium whitespace-nowrap">{t("hero.badge1Line2")}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-[#c9a14a] bg-[#141516]/95">
                  <Trophy className="w-3.5 h-3.5 text-[#d4af37] shrink-0" strokeWidth={1.5} />
                  <div className="leading-[1.1] text-left">
                    <div className="text-[9px] text-[#d4af37] font-medium whitespace-nowrap">{t("hero.badge2Line1")}</div>
                    <div className="text-[9px] text-[#d4af37] font-medium whitespace-nowrap">{t("hero.badge2Line2")}</div>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-sm bg-primary text-primary-foreground font-bold text-[11px] tracking-wide whitespace-nowrap">
                  {t("hero.badge3")}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
