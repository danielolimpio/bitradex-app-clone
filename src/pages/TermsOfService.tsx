import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import LegalLanguageNotice from "@/components/LegalLanguageNotice";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Terms of Service", path: "/terms-of-service" }]} />
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <LegalLanguageNotice /><h1 className="text-4xl md:text-5xl font-bold mb-8">BitradeX Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Effective Date: January 2025</p>

        <section className="space-y-8">
          <p>
            Welcome to BitradeX. These Terms of Service ("Terms") constitute a legally binding agreement between you ("you," "your," or "User") and BitradeX ("we," "us," or "our"), the operator of the BitradeX platform accessible at www.bitradex.app, including our mobile applications, APIs, and all related services (collectively, the "Platform" or "Services").
          </p>

          <p>
            By accessing or using the Platform, you confirm that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy, Risk Disclosure, Fee Schedule, and any applicable Product Terms, all of which are incorporated herein by reference.
          </p>

          <p className="font-semibold">
            If you do not agree with these Terms, do not access or use the Platform.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Eligibility & Representations</h2>
            <p className="mb-4">To use the Services, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years old (if an individual);</li>
              <li>Have full legal capacity to enter into binding agreements;</li>
              <li>Not be located in a Restricted Jurisdiction (see Section 2);</li>
              <li>Not be a Restricted Person (e.g., listed on sanctions lists such as OFAC, UN, EU);</li>
              <li>Not have a suspended or terminated BitradeX account;</li>
              <li>Comply with all applicable laws in your jurisdiction.</li>
            </ul>
            <p className="mt-4">If you act on behalf of a legal entity, you represent that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The entity is duly organized and validly existing;</li>
              <li>You are authorized to bind the entity to these Terms;</li>
              <li>The entity accepts full liability for your use of the Services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Restricted Jurisdictions & Persons</h2>
            <p className="mb-4">BitradeX does not offer Services in the following jurisdictions, either fully or for specific products:</p>
            <p className="font-semibold mb-2">Fully Restricted:</p>
            <p className="mb-4">
              Afghanistan, Algeria, Bangladesh, Bolivia, Canada, China (including Hong Kong), Crimea, Cuba, Iran, North Korea, Singapore, Sudan, Syria, the United States (including all territories), and others as updated from time to time.
            </p>
            <p className="font-semibold mb-2">Partially Restricted (certain services limited):</p>
            <p className="mb-4">
              Australia, Bahamas, Brazil, Eritrea, Russia, South Korea, United Kingdom, and others.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Prohibited Activities & Businesses</h2>
            <p className="mb-4">You agree not to use the Platform for any of the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Money laundering, terrorist financing, fraud, or financial crime;</li>
              <li>Gambling, betting, lotteries, or games of chance;</li>
              <li>Sale of illegal goods (e.g., drugs, weapons, counterfeit items);</li>
              <li>Adult content or services;</li>
              <li>Market manipulation (e.g., wash trading, spoofing, pump-and-dump);</li>
              <li>Unauthorized resale or commercialization of Services;</li>
              <li>Any activity violating applicable laws or BitradeX policies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Services Overview</h2>
            <p className="mb-4">BitradeX provides a digital asset trading platform offering:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Spot Trading: Buy/sell digital assets (e.g., BTC, ETH);</li>
              <li>Derivatives: Perpetual contracts, margin trading (where permitted);</li>
              <li>C2C Services: Peer-to-peer fiat-to-crypto exchange;</li>
              <li>Digital Wallet: Custodial storage for supported assets.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Account Management</h2>
            <h3 className="text-xl font-semibold mb-3">Registration & Verification</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You must complete KYC/AML verification to open an account.</li>
              <li>Only one individual account per person is permitted.</li>
              <li>Corporate accounts require verification of beneficial owners and authorized representatives.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3">Security & Responsibility</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are solely responsible for safeguarding your login credentials, 2FA, and API keys.</li>
              <li>Immediately notify us of any unauthorized access or suspected breach.</li>
              <li>Enable two-factor authentication (2FA) for enhanced security.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Trading & Transactions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All trades are final and irreversible once executed.</li>
              <li>You are responsible for verifying order details (price, quantity, asset) before submission.</li>
              <li>We do not guarantee execution at requested prices, especially during high volatility or system disruptions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Fees & Taxes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Applicable fees (trading, withdrawal, etc.) are published in our Fee Schedule.</li>
              <li>Fees may change with notice; continued use implies acceptance.</li>
              <li>You are solely responsible for all taxes (income, capital gains, VAT, etc.) arising from your transactions.</li>
              <li>BitradeX may report transaction data to tax authorities as required by law.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Digital Assets</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Digital assets are not legal tender and are not backed by any government or central bank.</li>
              <li>We may add, suspend, or delist assets at our discretion.</li>
              <li>Unsupported assets sent to your wallet may be lost permanently.</li>
              <li>We are not obligated to support forks, airdrops, or new token launches.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">9. Risk Disclosure</h2>
            <p className="mb-4">Trading digital assets involves substantial risk, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Extreme price volatility;</li>
              <li>Potential loss of your entire investment;</li>
              <li>Regulatory uncertainty;</li>
              <li>Cybersecurity threats (hacking, phishing);</li>
              <li>Liquidity constraints;</li>
              <li>Technical failures or platform outages.</li>
            </ul>
            <p className="mt-4 font-semibold">
              BitradeX is not your financial advisor. We do not provide investment, legal, or tax advice. You are solely responsible for your trading decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">10. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All Platform content, software, and trademarks are owned by BitradeX.</li>
              <li>You receive a limited, non-exclusive, non-transferable license to use the Platform for personal trading purposes.</li>
              <li>You may not reverse engineer, copy, distribute, or create derivative works from our technology.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
            <p className="mb-4">To the fullest extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>BitradeX's total liability for any claim shall not exceed the fees you paid to us in the prior 12 months (or USD 100, whichever is lower).</li>
              <li>We disclaim all liability for market losses, third-party actions, system outages, or force majeure events.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless BitradeX from any claims, losses, or expenses (including legal fees) arising from your use of the Services, breach of these Terms, or infringement of third-party rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">13. Amendments</h2>
            <p>
              We may update these Terms at any time. Changes will be posted on bitradex.app and may be communicated via email. Continued use = acceptance. If you disagree, close your account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">14. Governing Law & Dispute Resolution</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>These Terms are governed by the laws of Hong Kong.</li>
              <li>Disputes must first be submitted in writing to legal@bitradex.app.</li>
              <li>If unresolved within 30 days, disputes will be resolved by binding arbitration under the Hong Kong International Arbitration Centre (HKIAC) rules.</li>
              <li>Arbitration is individual only—no class actions permitted.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">15. General Provisions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Notices: Sent to your registered email; deemed received upon sending.</li>
              <li>Assignment: You may not transfer your rights; BitradeX may assign its rights.</li>
              <li>Severability: If any clause is unenforceable, the rest remains valid.</li>
              <li>Entire Agreement: These Terms supersede all prior agreements.</li>
              <li>Language: The English version controls in case of discrepancy.</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>
            <p className="text-sm text-muted-foreground">© 2025 BitradeX. All rights reserved.</p>
            <p className="text-sm text-muted-foreground mt-2">For questions or support, contact: <strong>support@bitradex.app</strong></p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default TermsOfService;
