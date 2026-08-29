import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/seo/SEO";
import LegalLanguageNotice from "@/components/LegalLanguageNotice";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Disclaimer", path: "/disclaimer" }]} />
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <LegalLanguageNotice /><h1 className="text-4xl md:text-5xl font-bold mb-8">BitradeX Risk Disclosure and Disclaimer</h1>
        <p className="text-muted-foreground mb-12">Effective Date: January 2025</p>

        <section className="space-y-8">
          <p>
            This Risk Disclosure and Disclaimer ("Disclaimer") is an integral part of the BitradeX Terms of Service ("Terms of Service"). Capitalized terms not defined herein shall have the meanings assigned to them in the Terms of Service. Please read this document carefully to understand the significant risks and compliance considerations associated with using the BitradeX platform.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Purpose</h2>
            <p>
              BitradeX is committed to operating a secure, compliant, and transparent digital asset trading platform. To this end, we have implemented a comprehensive Anti-Money Laundering, Counter-Terrorist Financing, and Sanctions Compliance Program ("AML/CFT/Sanctions Program"). This Program reflects our dedication to upholding legal standards, fostering trust with users and regulators, and maintaining a strong reputation within the global digital asset ecosystem.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Business Model</h2>
            <p className="mb-4">
              The BitradeX platform operates as a global digital asset exchange that connects buyers and sellers—commonly referred to as market makers and market takers. Our core function is to facilitate peer-to-peer transactions between users. However, as outlined in the Terms of Service, certain transactions may involve BitradeX affiliates acting as counterparties under specific circumstances.
            </p>
            <p className="font-semibold mb-2">Risk Disclosure:</p>
            <p>
              Trading and holding digital assets involves substantial risk. The value of digital assets can be highly volatile, and you may lose all or a significant portion of your invested capital. You should carefully assess whether trading digital assets aligns with your financial circumstances, investment objectives, and risk tolerance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Regulatory Environment</h2>
            <p className="mb-4">
              Global regulatory approaches to digital assets vary significantly. Some jurisdictions classify digital assets as "convertible virtual currencies" (e.g., per the U.S. Financial Crimes Enforcement Network – FinCEN) or "virtual commodities" (e.g., in Hong Kong). BitradeX views all digital assets listed on its platform as innovative alternative asset classes—not as legal tender, currency, or money.
            </p>
            <p className="mb-4 font-semibold">Key Disclosures:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Digital assets are not legal tender and are not backed by any government, central bank, or sovereign entity.</li>
              <li>BitradeX complies with all applicable laws and regulations in the jurisdictions where it operates and engages proactively with regulators to support responsible industry standards.</li>
              <li>BitradeX does not serve users in certain Restricted Regions, either fully or for specific services. As of the Effective Date, these include:</li>
            </ul>
            
            <div className="ml-6 mb-4">
              <p className="font-semibold mb-2">Fully Restricted Jurisdictions:</p>
              <p className="mb-4">
                Afghanistan, Algeria, Bangladesh, Bolivia, Canada, Cuba, El Salvador, France and its overseas territories, Hong Kong, Iran, India, Japan, Malaysia, Nepal, Nigeria, North Korea, Syria, Crimea, and the Donetsk and Luhansk regions of Ukraine, the United States of America (including all U.S. territories: Puerto Rico, American Samoa, Guam, Northern Mariana Islands, and U.S. Virgin Islands), and Uzbekistan.
              </p>
              
              <p className="font-semibold mb-2">Partially Restricted Jurisdictions (certain services limited):</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Australia:</strong> Derivatives and centralized exchange services may be restricted.</li>
                <li><strong>Bahamas:</strong> Retail products may be restricted.</li>
                <li><strong>Brazil:</strong> Derivatives and C2C services may be restricted.</li>
                <li><strong>Eritrea:</strong> C2C services may be restricted.</li>
                <li><strong>Russia:</strong> Fiat payment services may be restricted.</li>
                <li><strong>Singapore:</strong> Centralized exchange services are supported (including deposits, withdrawals, and spot trading), but derivatives are not offered.</li>
                <li><strong>South Korea:</strong> Derivatives and C2C services may be restricted.</li>
                <li><strong>United Kingdom:</strong> Derivatives, centralized exchange, and C2C services may be restricted.</li>
              </ul>
            </div>
            
            <p className="mb-4">BitradeX reserves the right to update this list at any time based on legal, regulatory, or risk-based considerations.</p>
            <p>
              As a responsible platform, we cooperate with law enforcement and regulatory authorities where permitted by law to prevent and investigate illicit activity. The BitradeX platform is intended only for law-abiding users, and we expect all users to comply with applicable laws while using our Services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. AML/CFT/Sanctions Compliance Program</h2>
            <p className="mb-4">Our multi-layered, risk-based compliance framework is designed to detect, prevent, and report illicit financial activity:</p>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Layer 1 – Identity Verification:</p>
                <p>We perform rigorous KYC (Know Your Customer) checks on all individual and institutional users. For corporate accounts, we identify and verify beneficial owners in line with international standards, including those set by the Financial Action Task Force (FATF).</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Layer 2 – Sanctions & Risk Screening:</p>
                <p className="mb-2">Users (including beneficial owners) are screened against global sanctions lists, including those published by:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The U.S. Office of Foreign Assets Control (OFAC)</li>
                  <li>The United Nations Security Council</li>
                  <li>The Hong Kong Special Administrative Region Government Gazette</li>
                </ul>
                <p className="mt-2">Additional screening may be conducted based on reputational or jurisdictional risk.</p>
              </div>
              
              <div>
                <p className="font-semibold mb-2">Layer 3 – Ongoing Monitoring:</p>
                <p>We continuously monitor transactions for suspicious activity. Transactions that deviate from a user's expected behavior may trigger internal reviews and, where required by law, Suspicious Activity Reports (SARs) to relevant authorities.</p>
              </div>
            </div>
            
            <p className="mt-4">This system is supported by trained compliance personnel, regular staff training, and a strong culture of integrity driven by our leadership team.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Risks and Specific Disclosures</h2>
            <p className="mb-4">
              Trading digital assets carries a high degree of risk. Prices can fluctuate dramatically in short periods, and there is no guarantee of profit—or even the return of principal.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">5.1 Foreign Exchange Conversion Risk</h3>
                <p>
                  If you fund your account using a credit or debit card in a local currency, your payment will undergo an automated foreign exchange (FX) conversion process. System errors or technical failures during this process—determined at BitradeX's sole discretion—may result in a USD or USDT balance that differs from the expected amount based on the exchange rate at the time of payment. You acknowledge and accept that you bear all risks and costs associated with such FX conversion discrepancies.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">5.2 Digital Payment Token (DPT) Risk Notice (Singapore Users)</h3>
                <p className="mb-4">If you are a customer of BitradeX SG Pte. Ltd., the Monetary Authority of Singapore (MAS) requires the following disclosures:</p>
                <p className="mb-3 font-semibold">You should be aware that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>BitradeX SG operates under a MAS licensing exemption for DPT services. This means your funds and DPTs are not protected by statutory compensation schemes. In the event of insolvency of BitradeX SG or a third party, you may lose all money or DPTs you have deposited.</li>
                  <li>Do not trade DPTs unless you understand how they work, including their creation, transfer mechanisms, and custody arrangements.</li>
                  <li>DPT values can fluctuate significantly. Only invest funds you can afford to lose entirely.</li>
                  <li>BitradeX may offer services related to "stablecoins" (DPTs designed to maintain a stable value), but even these are not risk-free and may depeg or lose value.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">5.3 Custody Arrangements (Singapore Users Only)</h3>
                <p className="mb-4">MAS requires the following disclosure regarding the safeguarding of your assets:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Fiat Currency:</strong> Your SGD or other fiat funds are held in trust in segregated accounts at one or more licensed, third-party banking institutions, solely for the benefit of BitradeX Singapore users.</li>
                  <li><strong>Digital Payment Tokens (DPTs):</strong> Your DPTs are held in secure custody via a combination of cold wallets (≥95%) and hot wallets (≤5%) operated by BitradeX affiliates, under a formal Safeguarding Agreement. Access to these wallets is strictly controlled and monitored.</li>
                  <li><strong>Bankruptcy Protection:</strong> In the unlikely event of BitradeX SG's insolvency, your fiat and DPT assets will not form part of the company's estate and should be protected from claims by general creditors, in accordance with current Singapore law and industry practice.</li>
                  <li><strong>No Unauthorized Activity:</strong> BitradeX SG will not move or use your assets without your explicit instruction.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Fees</h2>
            <h3 className="text-xl font-semibold mb-3">6.1 Trading Fees</h3>
            <p className="mb-4">
              Your trading fee tier is determined by your total trading volume over the past 30 days, calculated daily at 00:00 (UTC+8). All trading volumes are converted to USD using the prevailing market rate at the time of each trade.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Fees are deducted from the asset you receive.<br />
                <span className="text-sm italic">Example: If you buy BTC/USD, fees are charged in BTC.</span>
              </li>
              <li>Rebates (if applicable) are paid in the asset you sold.<br />
                <span className="text-sm italic">Example: If you buy BTC/USD, any rebate is paid in USD.</span>
              </li>
            </ul>
            <p>Fee structures, including maker/taker rates and volume tiers, are published on the BitradeX website and may be updated from time to time.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Final Note</h2>
            <p className="mb-4">
              Digital asset trading is inherently speculative and carries significant financial, regulatory, and operational risks. BitradeX provides a platform for trading but does not offer financial, legal, or tax advice. You are solely responsible for understanding the risks involved and for complying with the laws of your jurisdiction.
            </p>
            <p>
              By using the BitradeX platform, you acknowledge that you have read, understood, and accepted the terms of this Disclaimer and the associated risks.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>
            <p className="text-sm text-muted-foreground">© 2025 BitradeX. All rights reserved.</p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Disclaimer;