import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, ExternalLink, Calendar, Award, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "@/seo/SEO";

const PressMedia = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const pressReleases = [
    { date: "January 15, 2025", title: "Bitradex Launches Revolutionary AI Trading Bot with 98% Accuracy", excerpt: "Bitradex today announced the launch of its cutting-edge AI trading bot, leveraging advanced machine learning algorithms to achieve unprecedented trading accuracy.", categoryKey: "productLaunch" },
    { date: "December 10, 2024", title: "Bitradex Reaches $50 Billion in Daily Trading Volume", excerpt: "The cryptocurrency exchange platform celebrates a major milestone, cementing its position as one of the leading digital asset trading platforms globally.", categoryKey: "milestone" },
    { date: "November 22, 2024", title: "Bitradex Partners with Leading Institutional Investors", excerpt: "Major financial institutions join Bitradex's institutional trading program, bringing enhanced liquidity and professional trading tools to the platform.", categoryKey: "partnership" },
    { date: "October 5, 2024", title: "Bitradex Expands to Asian Markets", excerpt: "Following successful operations in Europe and Americas, Bitradex announces expansion into key Asian markets with localized support and regulatory compliance.", categoryKey: "expansion" },
    { date: "September 18, 2024", title: "Bitradex Receives SOC 2 Type II Certification", excerpt: "Independent audit confirms Bitradex's commitment to the highest standards of security, availability, and confidentiality.", categoryKey: "compliance" },
    { date: "August 30, 2024", title: "Bitradex Introduces Zero-Fee Trading for Market Makers", excerpt: "New fee structure designed to increase platform liquidity and provide better pricing for all traders.", categoryKey: "productUpdate" },
  ];

  const mediaKit = [
    { name: "Company Logo (PNG)", size: "2.4 MB", type: "Image" },
    { name: "Company Logo (SVG)", size: "156 KB", type: "Vector" },
    { name: "Brand Guidelines", size: "8.1 MB", type: "PDF" },
    { name: "Product Screenshots", size: "12.3 MB", type: "Archive" },
    { name: "Executive Photos", size: "6.7 MB", type: "Archive" },
    { name: "Company Fact Sheet", size: "420 KB", type: "PDF" },
  ];

  const mediaCoverage = [
    { outlet: "Bloomberg", title: "Bitradex: The Rising Star in Cryptocurrency Trading", date: "January 2025", url: "#" },
    { outlet: "TechCrunch", title: "How Bitradex is Democratizing Institutional-Grade Trading", date: "December 2024", url: "#" },
    { outlet: "Forbes", title: "Top 10 Crypto Exchanges to Watch in 2025", date: "November 2024", url: "#" },
    { outlet: "The Wall Street Journal", title: "AI-Powered Trading Platforms Gain Traction Among Retail Investors", date: "October 2024", url: "#" },
    { outlet: "CoinDesk", title: "Bitradex Launches Game-Changing AI Trading Features", date: "September 2024", url: "#" },
    { outlet: "Financial Times", title: "Cryptocurrency Exchanges Embrace Institutional Services", date: "August 2024", url: "#" },
  ];

  const awards = [
    { title: "Best Crypto Exchange 2024", organization: "Crypto Excellence Awards", year: "2024" },
    { title: "Innovation in Fintech", organization: "European Fintech Awards", year: "2024" },
    { title: "Best Trading Platform", organization: "Digital Asset Summit", year: "2024" },
    { title: "Top Security Implementation", organization: "Blockchain Security Forum", year: "2024" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Press & Media", path: "/press-media" }]} />
      <Header />

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("press.title")}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t("press.subtitle")}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-button">
                <Mail className="w-4 h-4 mr-2" />
                {t("press.contactPress")}
              </Button>
              <Button size="lg" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                {t("press.downloadKit")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">{t("press.inquiriesTitle")}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">{t("press.pressContact")}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{t("press.pressContactDesc")}</p>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">{t("press.email")}</span> press@bitradex.app</p>
                      <p><span className="font-medium">{t("press.phone")}</span> +33 1 234 5678</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t("press.partnershipInquiries")}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{t("press.partnershipDesc")}</p>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">{t("press.email")}</span> partnerships@bitradex.app</p>
                      <p><span className="font-medium">{t("press.phone")}</span> +55 1298251-9116</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("press.releasesTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("press.releasesSubtitle")}</p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {pressReleases.map((release, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{release.date}</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {t(`press.categories.${release.categoryKey}`)}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                      <p className="text-muted-foreground">{release.excerpt}</p>
                    </div>
                    <Button variant="outline" className="whitespace-nowrap">
                      {t("common.readMore")}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("press.coverageTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("press.coverageSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {mediaCoverage.map((a, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-primary mb-2">{a.outlet}</p>
                      <h3 className="font-semibold mb-2">{a.title}</h3>
                      <p className="text-sm text-muted-foreground">{a.date}</p>
                    </div>
                    <a href={a.url} className="text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("press.awardsTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("press.awardsSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {awards.map((a, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{a.organization}</p>
                  <p className="text-sm font-medium text-primary">{a.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("press.kitTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("press.kitSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mediaKit.map((item, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.type} • {item.size}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-primary hover:shadow-button">
              <Download className="w-4 h-4 mr-2" />
              {t("press.downloadComplete")}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("press.glance")}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: "$50B+", labelKey: "volume", icon: TrendingUp },
              { value: "500+", labelKey: "clients", icon: Award },
              { value: "2M+", labelKey: "users", icon: Award },
              { value: "150+", labelKey: "pairs", icon: TrendingUp },
            ].map((stat, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{t(`press.stats.${stat.labelKey}`)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default PressMedia;
