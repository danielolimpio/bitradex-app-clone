import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, Users, TrendingUp, Heart, Zap, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "@/seo/SEO";

const Careers = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const benefitIcons: Record<string, JSX.Element> = {
    comp: <TrendingUp className="w-8 h-8 text-primary" />,
    health: <Heart className="w-8 h-8 text-primary" />,
    growth: <Zap className="w-8 h-8 text-primary" />,
    remote: <Globe className="w-8 h-8 text-primary" />,
    culture: <Users className="w-8 h-8 text-primary" />,
    tech: <Briefcase className="w-8 h-8 text-primary" />,
  };
  const benefitKeys = ["comp", "health", "growth", "remote", "culture", "tech"];
  const valueKeys = ["innovation", "user", "transparency", "excellence"];
  const processKeys = ["application", "screening", "interviews", "offer"];

  const positions = [
    { key: "backend", department: "engineering", location: "Remote / Paris" },
    { key: "blockchain", department: "engineering", location: "Remote / Singapore" },
    { key: "pm", department: "product", location: "São Paulo / Remote" },
    { key: "security", department: "security", location: "Remote" },
    { key: "ux", department: "design", location: "Remote / Paris" },
    { key: "compliance", department: "legal", location: "Paris" },
    { key: "devops", department: "engineering", location: "Remote" },
    { key: "data", department: "data", location: "Remote / Singapore" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Careers", path: "/careers" }]} />
      <Header />

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("careers.title")}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t("careers.subtitle")}</p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-button">
                {t("careers.viewPositions")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("careers.whyTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("careers.whySubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitKeys.map((key) => (
              <Card key={key} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{benefitIcons[key]}</div>
                  <h3 className="text-xl font-semibold mb-2">{t(`careers.benefits.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`careers.benefits.${key}.description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("careers.valuesTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("careers.valuesSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {valueKeys.map((key) => (
              <Card key={key} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{t(`careers.values.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`careers.values.${key}.description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("careers.openTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("careers.openSubtitle")}</p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {positions.map((pos) => {
              const reqs = t(`careers.positions.${pos.key}.requirements`, { returnObjects: true }) as string[];
              return (
                <Card key={pos.key} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{t(`careers.positions.${pos.key}.title`)}</h3>
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {t(`careers.departments.${pos.department}`)}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {pos.location}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {t("careers.fullTime")}
                          </Badge>
                        </div>
                      </div>
                      <Button className="bg-gradient-primary hover:shadow-button whitespace-nowrap">
                        {t("careers.applyNow")}
                      </Button>
                    </div>

                    <p className="text-muted-foreground mb-4">{t(`careers.positions.${pos.key}.description`)}</p>

                    <div>
                      <h4 className="font-semibold mb-2">{t("careers.requirements")}</h4>
                      <ul className="space-y-1">
                        {reqs.map((req, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("careers.processTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("careers.processSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processKeys.map((key, index) => (
              <div key={key} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold mb-2">{t(`careers.process.${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`careers.process.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("careers.noRoleTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("careers.noRoleSubtitle")}</p>
          <Button size="lg" variant="outline" onClick={() => (window.location.href = "mailto:careers@bitradex.app")}>
            {t("careers.sendApplication")}
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Careers;
