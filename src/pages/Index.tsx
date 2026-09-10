import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import MarketOverview from "@/components/MarketOverview";
import AIBotSection from "@/components/AIBotSection";
import TradingEcosystem from "@/components/TradingEcosystem";
import TrustedBySection from "@/components/TrustedBySection";
import AppDownloadSection from "@/components/AppDownloadSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import CookieConsent from "@/components/CookieConsent";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import SEO from "@/seo/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "@id": "https://bitradex.app/#service",
            name: "Bitradex AI Trading",
            provider: { "@id": "https://bitradex.app/#organization" },
            areaServed: "Worldwide",
            serviceType:
              "AI-powered crypto exchange, spot trading, futures trading, AI trading bot",
            url: "https://bitradex.app",
          },
        ]}
      />
      <Header />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <MarketOverview />
        <AIBotSection />
        <TradingEcosystem />
        <TrustedBySection />
        <AppDownloadSection />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
      <CookieConsent />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
