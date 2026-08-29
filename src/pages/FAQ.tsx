import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle } from "lucide-react";

const FAQ = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = (t("faq.categories", { returnObjects: true }) as Array<{
    title: string;
    items: Array<{ q: string; a: string }>;
  }>) || [];

  const filtered = categories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (it) =>
          it.q.toLowerCase().includes(query.toLowerCase()) ||
          it.a.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  // JSON-LD FAQPage schema for SEO
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((c) =>
      c.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "FAQ", path: "/faq" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-bitradx-darker to-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              {t("faq.badge")}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t("faq.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 font-light">
            {t("faq.subtitle")}
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("faq.searchPlaceholder")}
              className="pl-12 h-14 bg-background/50 border-border text-base"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              {t("faq.noResults")}
            </p>
          )}

          {filtered.map((cat, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                {cat.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`${idx}-${i}`}
                    className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/40"
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bitradx-darker border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("faq.ctaTitle")}
          </h3>
          <p className="text-muted-foreground mb-6 font-light">
            {t("faq.ctaSubtitle")}
          </p>
          <a
            href="https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:shadow-button transition-all"
          >
            {t("faq.ctaButton")}
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default FAQ;
