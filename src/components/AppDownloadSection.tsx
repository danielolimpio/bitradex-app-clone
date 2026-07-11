import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import videoAppSrc from "@/assets/video_app.mp4";

const AppDownloadSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                {t("appDownload.badge")}
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                {t("appDownload.title")}
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("appDownload.description")}
              </p>
            </div>

            <div className="bg-gradient-card border border-border rounded-xl p-6">
              <h4 className="text-lg text-foreground mb-2 font-normal">{t("appDownload.platforms")}</h4>
              <p className="text-sm text-muted-foreground">
                {t("appDownload.platformsDesc")}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-button transition-all duration-300 flex items-center space-x-3" onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")}>
                  <Smartphone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">{t("appDownload.appStoreSmall")}</div>
                    <div className="text-sm font-bold">{t("appDownload.appStore")}</div>
                  </div>
                </Button>

                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-3" onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")}>
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">{t("appDownload.googlePlaySmall")}</div>
                    <div className="text-sm font-bold">{t("appDownload.googlePlay")}</div>
                  </div>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{t("common.signupMobile")}</p>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{t("appDownload.rating")}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{t("appDownload.secure")}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <video src={videoAppSrc} autoPlay muted loop playsInline className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
