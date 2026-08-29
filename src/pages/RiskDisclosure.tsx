import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import LegalLanguageNotice from "@/components/LegalLanguageNotice";

const RiskDisclosure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Risk Disclosure", path: "/risk-disclosure" }]} />
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Risk Disclosure Statement
            </h1>
            <p className="text-lg text-muted-foreground">
              Important information about risks associated with digital asset trading
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Last Updated: October 2025
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-card/30 border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trading digital assets, including cryptocurrencies, tokens, and derivatives, involves substantial risk of loss and may not be suitable for all investors. Before engaging in digital asset trading on BitradeX, you should carefully consider your investment objectives, level of experience, and risk appetite.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Risk Disclosure Statement outlines the principal risks associated with digital asset trading. Please read this document carefully and ensure you fully understand the risks involved before using our platform.
              </p>
            </section>

            {/* Market Risks */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Market Risks</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Price Volatility</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digital assets are subject to extreme price volatility. The value of your holdings can fluctuate significantly over short periods, potentially resulting in substantial gains or losses. Historical price movements are not indicative of future performance.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Market Liquidity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digital asset markets may experience periods of low liquidity, making it difficult to execute trades at desired prices. During times of market stress, liquidity can disappear rapidly, potentially preventing you from exiting positions or resulting in significant slippage.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Market Manipulation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digital asset markets are susceptible to manipulation, including pump-and-dump schemes, wash trading, and other fraudulent activities. These activities can result in artificial price movements and losses for unsuspecting traders.
                  </p>
                </div>
              </div>
            </section>

            {/* Trading Risks */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Trading Risks</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Leverage and Margin Trading</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Leverage amplifies both potential profits and losses. While leverage can magnify gains, it can also result in rapid and substantial losses, potentially exceeding your initial investment. Margin calls may force you to liquidate positions at unfavorable prices.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Losses can exceed your initial deposit</li>
                    <li>Positions may be automatically liquidated</li>
                    <li>Funding rates may significantly impact profitability</li>
                    <li>Market gaps can result in slippage beyond stop-loss levels</li>
                  </ul>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Derivatives and Futures</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trading derivatives, including futures and perpetual contracts, involves complex financial instruments with high risk. These products may not be suitable for all investors and require a thorough understanding of their mechanics, including funding rates, liquidation prices, and settlement procedures.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Automated Trading and Bots</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While our AI-powered trading tools are designed to assist in trading decisions, they are not infallible. Automated trading systems may malfunction, produce unexpected results, or fail to adapt to changing market conditions. You remain responsible for all trading decisions and their consequences.
                  </p>
                </div>
              </div>
            </section>

            {/* Technology Risks */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Technology and Operational Risks</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Platform Availability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our platform may experience downtime due to maintenance, technical issues, or external factors beyond our control. During such periods, you may be unable to access your account, execute trades, or manage positions, potentially resulting in losses.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cybersecurity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digital assets and online platforms are vulnerable to cyberattacks, including hacking, phishing, and malware. While we implement industry-leading security measures, no system is completely immune to security breaches. You are responsible for maintaining the security of your account credentials.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Blockchain Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digital assets rely on blockchain technology, which may experience forks, consensus failures, or other technical issues. Such events can result in delays, loss of assets, or the creation of competing versions of digital assets.
                  </p>
                </div>
              </div>
            </section>

            {/* Regulatory Risks */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Regulatory and Legal Risks</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Regulatory Uncertainty</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The regulatory landscape for digital assets is evolving and varies significantly across jurisdictions. Changes in laws or regulations may adversely affect the value of digital assets, restrict their use, or limit platform operations. You are responsible for complying with applicable laws in your jurisdiction.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Tax Implications</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digital asset transactions may have tax consequences in your jurisdiction. You are solely responsible for determining and fulfilling any tax obligations arising from your trading activities. We recommend consulting with a qualified tax advisor.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Jurisdiction-Specific Restrictions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services may not be available in all jurisdictions. It is your responsibility to ensure that your use of our platform complies with local laws and regulations. We reserve the right to restrict or terminate services in specific jurisdictions at any time.
                  </p>
                </div>
              </div>
            </section>

            {/* Financial Risks */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Financial Risks</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Loss of Capital</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You may lose some or all of your invested capital. Digital asset trading is highly speculative, and past performance is not indicative of future results. Only invest funds that you can afford to lose without affecting your financial stability.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Counterparty Risk</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While we strive to maintain robust operations, there is a risk that BitradeX or other counterparties may default on their obligations. In such scenarios, you may not be able to recover your assets or may experience significant delays.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Custody Risks</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digital assets held on our platform are subject to custody risks. While we employ industry-standard security measures, there is always a risk of theft, loss, or unauthorized access to assets held in custody.
                  </p>
                </div>
              </div>
            </section>

            {/* Specific Product Risks */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Specific Product Risks</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Perpetual Contracts</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Perpetual contracts do not have an expiration date and require continuous funding payments. These payments can significantly impact profitability and may result in losses even if the market moves in your favor.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Options Trading</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Options are complex derivatives that can expire worthless, resulting in a total loss of the premium paid. Options strategies may involve significant risk and are not suitable for all investors.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Staking and Yield Products</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Staking and yield-generating products involve risks including loss of principal, slashing penalties, smart contract vulnerabilities, and the potential for lower-than-expected returns. Locked assets may not be accessible during market downturns.
                  </p>
                </div>
              </div>
            </section>

            {/* Risk Management */}
            <section className="bg-card/30 border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Risk Management Recommendations</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Never invest more than you can afford to lose</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Diversify your portfolio across different assets and strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Use stop-loss orders to limit potential losses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Start with small positions and gradually increase as you gain experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Understand the products you are trading before committing capital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Keep informed about market developments and regulatory changes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Maintain secure account practices and enable two-factor authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Consider seeking professional financial advice before trading</span>
                </li>
              </ul>
            </section>

            {/* Acknowledgment */}
            <section className="bg-gradient-primary/10 border-2 border-primary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Acknowledgment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using BitradeX's services, you acknowledge that:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• You have read and understood this Risk Disclosure Statement</li>
                <li>• You are aware of the risks associated with digital asset trading</li>
                <li>• You accept full responsibility for your trading decisions</li>
                <li>• You understand that BitradeX does not provide investment advice</li>
                <li>• You have the financial capacity to bear potential losses</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                This Risk Disclosure Statement does not disclose all possible risks. You should carefully consider whether digital asset trading is appropriate for your financial situation and risk tolerance.
              </p>
            </section>

            {/* Contact */}
            <section className="text-center bg-card/30 border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about this Risk Disclosure Statement or need clarification on any risks, please contact us.
              </p>
              <div className="text-primary font-medium">
                Email: legal@bitradex.app
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default RiskDisclosure;
