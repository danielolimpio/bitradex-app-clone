import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "@/seo/SEO";

const AboutUs = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const stats = [
    { value: "100+", label: t("aboutUs.stats.s1") },
    { value: "50K", label: t("aboutUs.stats.s2") },
    { value: "13M", label: t("aboutUs.stats.s3") },
    { value: "400%", label: t("aboutUs.stats.s4") },
  ];
  const advantages = [
    { icon: <TrendingUp className="w-12 h-12 text-primary" />, value: "30M", key: "data" },
    { icon: <Users className="w-12 h-12 text-primary" />, value: "50K+", key: "intel" },
    { icon: <Zap className="w-12 h-12 text-primary" />, value: "Millisecond", key: "speed" },
    { icon: <DollarSign className="w-12 h-12 text-primary" />, value: "$10M", key: "fund" },
  ];
  const reasons = ["r1", "r2", "r3"];

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "About Us", path: "/about-us" }]} />
      <Header />

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("aboutUs.title")}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">{t("aboutUs.subtitle")}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("aboutUs.ai30360")}</h2>
            <p className="text-muted-foreground">{t("aboutUs.ai30360Subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["AI 3000", "AI 1500", "AI 900", "AI 300"].map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{plan}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t("aboutUs.card.dailyEarnings")}</span>
                      <span className="font-semibold">{t("aboutUs.card.variable")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t("aboutUs.card.historicalReturn")}</span>
                      <span className="text-primary font-semibold">+{(index + 1) * 100}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{t("aboutUs.card.participants")}</span>
                      <span className="font-semibold">{(4 - index) * 1000}+</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">{t("common.comingSoon")}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("aboutUs.aiDaily")}</h2>
            <p className="text-muted-foreground">{t("aboutUs.aiDailySubtitle")}</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 font-normal">{t("aboutUs.aiDailyTitle")}</h3>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">{t("aboutUs.metrics.dailyEarnings")}</div>
                    <div className="text-2xl font-bold text-primary">91.23%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">{t("aboutUs.metrics.historicalReturn")}</div>
                    <div className="text-2xl font-bold text-primary">+352.00%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">{t("aboutUs.metrics.orders24h")}</div>
                    <div className="text-xl font-semibold">141</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">{t("aboutUs.metrics.participantsCount")}</div>
                    <div className="text-xl font-semibold">19007</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-sm text-muted-foreground mb-2">{t("aboutUs.metrics.volatility")}</div>
                    <div className="text-xl font-semibold">19.17%</div>
                  </div>
                </div>
                <Button className="w-full" variant="outline">{t("common.comingSoon")}</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("aboutUs.advantagesTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((a, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{a.icon}</div>
                <div className="text-2xl font-bold text-primary mb-2">{a.value}</div>
                <h3 className="text-lg mb-2 font-normal">{t(`aboutUs.advantages.${a.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`aboutUs.advantages.${a.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("aboutUs.reasonsTitle")}</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {reasons.map((key, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 font-normal">{t(`aboutUs.reasons.${key}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`aboutUs.reasons.${key}.description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("aboutUs.moreTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">{t("aboutUs.moreText")}</p>
          <div className="flex flex-col items-center">
            <Button size="lg" onClick={() => window.open("https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W", "_blank")}>
              {t("aboutUs.ctaButton")}
            </Button>
            <p className="text-xs text-muted-foreground mt-2">{t("common.signupMobile")}</p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default AboutUs;
