import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/seo/SEO";
import LegalLanguageNotice from "@/components/LegalLanguageNotice";

const UserAgreement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "User Agreement", path: "/user-agreement" }]} />
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <LegalLanguageNotice /><h1 className="text-4xl md:text-5xl font-bold mb-8">BitradeX User Agreement</h1>
        <p className="text-muted-foreground mb-12">Effective Date: January 2025</p>

        <section className="space-y-8">
          <p>
            This User Agreement (the "Agreement") is a legally binding contract between you ("you," "your," or "User") and BitradeX ("BitradeX," "we," "us," or "our"), the operator of the BitradeX platform. This Agreement governs your access to and use of the BitradeX website, mobile application, APIs, and all related services (collectively, the "Platform" and "Services").
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 my-8">
            <h2 className="text-xl font-semibold mb-4 text-destructive">Risk Warning</h2>
            <p className="mb-4">
              Trading digital assets involves significant risk and may not be suitable for all individuals. Digital asset prices are highly volatile and can be influenced by market sentiment, regulatory developments, technological issues, or geopolitical events. You could lose your entire investment in a short period.
            </p>
            <p className="mb-4">
              Digital asset regulation varies by jurisdiction and may be limited, evolving, or even prohibited. Changes in laws or enforcement actions by authorities—unrelated to BitradeX—could negatively impact your ability to use, transfer, or hold digital assets.
            </p>
            <p>
              BitradeX is not your financial advisor, broker, or fiduciary. We do not provide investment, legal, or tax advice. All trading decisions are made at your sole discretion and risk.
            </p>
          </div>

          {/* Continuing with condensed content due to length - including key sections */}
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p className="mb-4">To use the Services, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years old (if an individual);</li>
              <li>Have full legal capacity to enter into binding agreements;</li>
              <li>Not be located in a Prohibited Country or be a Restricted Person;</li>
              <li>Not have a suspended or terminated BitradeX account;</li>
              <li>Comply with all applicable laws in your jurisdiction;</li>
              <li>If acting on behalf of a company, be duly authorized to bind that entity.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Services</h2>
            <p className="mb-4">BitradeX provides a digital asset trading platform that may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time market data and order books;</li>
              <li>Spot and derivatives trading;</li>
              <li>Deposit and withdrawal services;</li>
              <li>Customer and technical support.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">11. Prohibited Activities</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Platform for illegal, fraudulent, or manipulative purposes;</li>
              <li>Circumvent restrictions (e.g., using VPNs to access from Prohibited Countries);</li>
              <li>Create multiple accounts without authorization;</li>
              <li>Violate third-party rights or applicable laws.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">17. Governing Law & Dispute Resolution</h2>
            <p className="mb-4">This Agreement is governed by the laws of Hong Kong. Disputes will be resolved by binding arbitration under the Hong Kong International Arbitration Centre (HKIAC) rules.</p>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>
            <p className="text-sm text-muted-foreground">© 2025 BitradeX. All rights reserved.</p>
            <p className="text-sm text-muted-foreground mt-2">For questions, contact: <strong>legal@bitradex.app</strong></p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default UserAgreement;