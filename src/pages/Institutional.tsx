import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, TrendingUp, Zap, Users, Globe, Lock, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "@/seo/SEO";

const Institutional = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const featureIcons: Record<string, JSX.Element> = {
    infra: <Building2 className="w-12 h-12 text-primary" />,
    security: <Shield className="w-12 h-12 text-primary" />,
    liquidity: <TrendingUp className="w-12 h-12 text-primary" />,
    api: <Zap className="w-12 h-12 text-primary" />,
    support: <Users className="w-12 h-12 text-primary" />,
    global: <Globe className="w-12 h-12 text-primary" />,
    compliance: <Lock className="w-12 h-12 text-primary" />,
    analytics: <BarChart3 className="w-12 h-12 text-primary" />,
  };
  const featureKeys = ["infra", "security", "liquidity", "api", "support", "global", "compliance", "analytics"];
  const serviceKeys = ["prime", "otc", "custody", "marketMaking"];
  const apiKeys = ["rest", "ws", "fix", "docs"];

  const stats = [
    { value: "$50B+", label: t("institutional.stats.volume") },
    { value: "500+", label: t("institutional.stats.clients") },
    { value: "50ms", label: t("institutional.stats.latency") },
    { value: "99.99%", label: t("institutional.stats.uptime") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("institutional.title")}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">{t("institutional.subtitle")}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <Button size="lg" onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")}>
                {t("institutional.contactTeam")}
              </Button>
              <p className="text-xs text-muted-foreground">{t("institutional.getStartedHelp")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("institutional.whyChoose")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("institutional.whyChooseSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureKeys.map((key) => (
              <div key={key} className="text-center">
                <div className="flex justify-center mb-4">{featureIcons[key]}</div>
                <h3 className="text-lg mb-2 font-normal">{t(`institutional.features.${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground font-normal">{t(`institutional.features.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("institutional.ourServices")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("institutional.ourServicesSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceKeys.map((key) => {
              const benefits = t(`institutional.services.${key}.benefits`, { returnObjects: true }) as string[];
              return (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-2xl mb-3 font-medium">{t(`institutional.services.${key}.title`)}</h3>
                    <p className="text-muted-foreground mb-4 font-normal">{t(`institutional.services.${key}.description`)}</p>
                    <ul className="space-y-2">
                      {benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-sm font-normal">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t("institutional.apiTitle")}</h2>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {apiKeys.map((key) => {
                    const items = t(`institutional.api.${key}.items`, { returnObjects: true }) as string[];
                    return (
                      <div key={key}>
                        <h3 className="text-xl mb-4 font-normal">{t(`institutional.api.${key}.title`)}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground font-normal">
                          {items.map((it, i) => (
                            <li key={i}>• {it}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("institutional.secCompTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("institutional.secCompSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { key: "security", icon: <Shield className="w-16 h-16 text-primary mx-auto mb-4" /> },
              { key: "compliance", icon: <Lock className="w-16 h-16 text-primary mx-auto mb-4" /> },
              { key: "insurance", icon: <Building2 className="w-16 h-16 text-primary mx-auto mb-4" /> },
            ].map(({ key, icon }) => {
              const items = t(`institutional.secComp.${key}.items`, { returnObjects: true }) as string[];
              return (
                <Card key={key} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    {icon}
                    <h3 className="text-xl mb-3 font-normal">{t(`institutional.secComp.${key}.title`)}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground text-left font-normal">
                      {items.map((it, i) => (
                        <li key={i}>• {it}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("institutional.ctaTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("institutional.ctaSubtitle")}</p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")}>
              {t("institutional.scheduleConsultation")}
            </Button>
            <p className="text-xs text-muted-foreground">{t("institutional.contactSales")}</p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Institutional;
