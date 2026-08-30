import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Button } from "@/components/ui/button";
import { Smartphone, Bell, Fingerprint, LineChart, Bot, Wallet, Download, Languages, Cpu, ShieldCheck } from "lucide-react";

const INVITE = "https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W";

const featureIcons = [
  { key: "charts", icon: LineChart },
  { key: "bot", icon: Bot },
  { key: "alerts", icon: Bell },
  { key: "biometrics", icon: Fingerprint },
  { key: "deposits", icon: Wallet },
  { key: "languages", icon: Languages },
];

const specKeys = ["android", "ios", "languages", "darkMode", "updates", "support"];
const stepKeys = ["download", "account", "kyc", "trade"];
const securityKeys = ["twofa", "whitelist", "device", "tls", "lock"];
const faqKeys = ["free", "sameAccount", "botClosed", "safe"];

const MobileApp = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Mobile App", path: "/mobile-app" }]} />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 text-center">
            <Smartphone className="w-16 h-16 text-primary mx-auto mb-6" aria-hidden="true" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("mobileApp.hero.title")}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">{t("mobileApp.hero.subtitle")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="gradient" asChild>
                <a href={INVITE} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" /> {t("mobileApp.hero.ctaPrimary")}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#recursos">{t("mobileApp.hero.ctaSecondary")}</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="recursos" className="container mx-auto px-4 lg:px-8 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t("mobileApp.featuresTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureIcons.map(({ key, icon: Icon }) => (
              <div key={key} className="p-8 rounded-2xl border border-border bg-card/30 hover:border-primary/50 transition-all">
                <Icon className="w-10 h-10 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-foreground mb-2">{t(`mobileApp.features.${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground font-light">{t(`mobileApp.features.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 pb-16 max-w-6xl grid lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-border bg-card/30">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-7 h-7 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-foreground">{t("mobileApp.specsTitle")}</h2>
            </div>
            <ul className="divide-y divide-border/60">
              {specKeys.map((key) => (
                <li key={key} className="flex flex-wrap justify-between gap-2 py-3 text-sm">
                  <span className="text-foreground font-semibold">{t(`mobileApp.specs.${key}.label`)}</span>
                  <span className="text-muted-foreground font-light">{t(`mobileApp.specs.${key}.value`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card/30">
            <h2 className="text-2xl font-bold text-foreground mb-6">{t("mobileApp.stepsTitle")}</h2>
            <ol className="space-y-5">
              {stepKeys.map((key, i) => (
                <li key={key} className="flex gap-4">
                  <span className="font-mono text-primary font-semibold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{t(`mobileApp.steps.${key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground font-light">{t(`mobileApp.steps.${key}.desc`)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 pb-16 max-w-6xl">
          <div className="p-10 rounded-3xl border border-border bg-card/30">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-foreground">{t("mobileApp.securityTitle")}</h2>
            </div>
            <ul className="space-y-3">
              {securityKeys.map((key) => (
                <li key={key} className="flex items-start gap-3 text-muted-foreground font-light">
                  <span className="text-primary mt-1" aria-hidden="true">✓</span>
                  {t(`mobileApp.security.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 pb-20 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t("mobileApp.faqTitle")}</h2>
          <div className="space-y-4">
            {faqKeys.map((key) => (
              <div key={key} className="p-6 rounded-2xl border border-border bg-card/30">
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(`mobileApp.faqs.${key}.q`)}</h3>
                <p className="text-sm text-muted-foreground font-light">{t(`mobileApp.faqs.${key}.a`)}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default MobileApp;
