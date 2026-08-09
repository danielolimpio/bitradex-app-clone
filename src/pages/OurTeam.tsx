import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "@/seo/SEO";

const OurTeam = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const leadership = [
    { name: "Michael Chen", roleKey: "ceo", bio: "Former Goldman Sachs VP with 15+ years in fintech and blockchain. Led multiple successful exits in the crypto space.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
    { name: "Sarah Martinez", roleKey: "cto", bio: "Ex-Google engineer specializing in distributed systems and high-frequency trading infrastructure.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
    { name: "David Park", roleKey: "coo", bio: "Previously COO at Binance Asia. Expert in regulatory compliance and international market expansion.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
    { name: "Emma Wilson", roleKey: "cfo", bio: "Former CFO at Coinbase Europe. CPA with expertise in crypto asset management and financial regulations.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
  ];

  const departments = [
    {
      titleKey: "engineering",
      members: [
        { name: "Alex Thompson", roleKey: "vpEng", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
        { name: "Lisa Wang", roleKey: "leadBlockchain", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
        { name: "James Rodriguez", roleKey: "srBackend", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
        { name: "Maria Santos", roleKey: "securityEng", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop" },
      ],
    },
    {
      titleKey: "productDesign",
      members: [
        { name: "Oliver Smith", roleKey: "headProduct", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
        { name: "Sophie Anderson", roleKey: "leadUx", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop" },
        { name: "Marcus Lee", roleKey: "pm", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" },
        { name: "Nina Patel", roleKey: "uiDesigner", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop" },
      ],
    },
    {
      titleKey: "businessOps",
      members: [
        { name: "Robert Kim", roleKey: "headBd", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop" },
        { name: "Jennifer Brooks", roleKey: "headCompliance", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop" },
        { name: "Thomas Garcia", roleKey: "csLead", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop" },
        { name: "Isabella Rossi", roleKey: "opsManager", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop" },
      ],
    },
  ];

  const advisors = [
    { name: "Dr. Richard Zhang", roleKey: "strategicAdv", bio: "Former MIT Professor of Computer Science, pioneer in blockchain consensus mechanisms", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop" },
    { name: "Patricia O'Connor", roleKey: "regulatoryAdv", bio: "Ex-SEC Commissioner with deep expertise in securities and crypto regulation", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop" },
    { name: "Hiroshi Tanaka", roleKey: "tradingAdv", bio: "Former Head of Trading at JPMorgan Asia, 20+ years in institutional trading", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              ...leadership.map((p) => ({
                "@type": "Person",
                name: p.name,
                jobTitle: t(`ourTeam.roles.${p.roleKey}`),
                description: p.bio,
                image: p.image,
                worksFor: { "@type": "Organization", name: "Bitradex" },
              })),
              ...departments.flatMap((d) =>
                d.members.map((m) => ({
                  "@type": "Person",
                  name: m.name,
                  jobTitle: t(`ourTeam.roles.${m.roleKey}`),
                  image: m.image,
                  worksFor: { "@type": "Organization", name: "Bitradex" },
                }))
              ),
              ...advisors.map((a) => ({
                "@type": "Person",
                name: a.name,
                jobTitle: t(`ourTeam.roles.${a.roleKey}`),
                description: a.bio,
                image: a.image,
                worksFor: { "@type": "Organization", name: "Bitradex" },
              })),
            ],
          }),
        }}
      />

      <Header />

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("ourTeam.title")}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t("ourTeam.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourTeam.leadershipTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("ourTeam.leadershipSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((m, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{m.name}</h3>
                  <p className="text-sm text-primary mb-3">{t(`ourTeam.roles.${m.roleKey}`)}</p>
                  <p className="text-sm text-muted-foreground mb-4">{m.bio}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {departments.map((dept, deptIndex) => (
        <section key={deptIndex} className={deptIndex % 2 === 1 ? "py-16 bg-muted/30" : "py-16"}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">{t(`ourTeam.departments.${dept.titleKey}`)}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dept.members.map((m, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{m.name}</h3>
                    <p className="text-sm text-muted-foreground">{t(`ourTeam.roles.${m.roleKey}`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourTeam.advisoryTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("ourTeam.advisorySubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advisors.map((a, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{a.name}</h3>
                  <p className="text-sm text-primary mb-3">{t(`ourTeam.roles.${a.roleKey}`)}</p>
                  <p className="text-sm text-muted-foreground">{a.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourTeam.joinTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("ourTeam.joinSubtitle")}</p>
          <a href="/careers" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:shadow-button transition-all duration-300">
            {t("ourTeam.viewPositions")}
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default OurTeam;
