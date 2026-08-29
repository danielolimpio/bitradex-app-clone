import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock, MessageSquare, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "@/seo/SEO";

const Contact = () => {
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const methodIcons: Record<string, JSX.Element> = {
    email: <Mail className="w-8 h-8 text-primary" />,
    phone: <Phone className="w-8 h-8 text-primary" />,
    chat: <MessageSquare className="w-8 h-8 text-primary" />,
    vip: <Headphones className="w-8 h-8 text-primary" />,
  };
  const methodContacts: Record<string, string> = {
    email: "contact@bitradex.app",
    phone: "+55 1298251-9116",
    chat: t("contact.methods.chat.contact"),
    vip: "vip@bitradex.app",
  };
  const methodKeys = ["email", "phone", "chat", "vip"];

  const offices = [
    { city: "Paris", country: "France", address: "20 Rue de Penthièvre, Paris, 75008", phone: "+33 1 234 5678", email: "paris@bitradex.app" },
    { city: "São Paulo", country: "Brazil", address: "Av. Paulista, 1578 - Bela Vista", phone: "+55 1298251-9116", email: "saopaulo@bitradex.app" },
    { city: "Singapore", country: "Singapore", address: "1 Raffles Place, #40-02", phone: "+65 6789 0123", email: "singapore@bitradex.app" },
  ];

  const faqKeys = ["create", "fees", "secure", "withdraw"];

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Contact", path: "/contact" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": offices.map((office) => ({
              "@type": "FinancialService",
              name: `Bitradex ${office.city}`,
              parentOrganization: { "@type": "Organization", name: "Bitradex" },
              url: "https://bitradex.app/contact",
              telephone: office.phone,
              email: office.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: office.address,
                addressLocality: office.city,
                addressCountry: office.country,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            })),
          }),
        }}
      />

      <Header />

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("contact.title")}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">{t("contact.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodKeys.map((key) => (
              <Card key={key} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{methodIcons[key]}</div>
                  <h3 className="text-xl font-semibold mb-2">{t(`contact.methods.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{t(`contact.methods.${key}.description`)}</p>
                  <p className="text-sm font-medium text-primary mb-4">{methodContacts[key]}</p>
                  <Button variant="outline" className="w-full">{t(`contact.methods.${key}.action`)}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("contact.form.title")}</h2>
              <p className="text-muted-foreground mb-8">{t("contact.form.subtitle")}</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t("contact.form.firstName")}</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t("contact.form.lastName")}</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">{t("contact.form.email")}</label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">{t("contact.form.subject")}</label>
                  <Input placeholder={t("contact.form.subjectPlaceholder")} />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">{t("contact.form.message")}</label>
                  <Textarea placeholder={t("contact.form.messagePlaceholder")} className="min-h-[150px]" />
                </div>

                <Button className="w-full bg-gradient-primary hover:shadow-button" onClick={(e) => e.preventDefault()}>
                  {t("contact.form.send")}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">{t("contact.offices.title")}</h2>
              <p className="text-muted-foreground mb-8">{t("contact.offices.subtitle")}</p>

              <div className="space-y-6">
                {offices.map((office, i) => (
                  <Card key={i} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{office.city}, {office.country}</h3>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">{t("contact.businessHours.title")}</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>{t("contact.businessHours.weekdays")}</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("contact.businessHours.saturday")}</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("contact.businessHours.sunday")}</span>
                      <span className="font-medium">{t("contact.businessHours.closed")}</span>
                    </div>
                    <div className="pt-3 border-t border-border mt-3">
                      <p className="text-primary font-medium">{t("contact.businessHours.online247")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.faqTitle")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact.faqSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqKeys.map((key) => (
              <Card key={key} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{t(`contact.faqs.${key}.q`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`contact.faqs.${key}.a`)}</p>
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

export default Contact;
