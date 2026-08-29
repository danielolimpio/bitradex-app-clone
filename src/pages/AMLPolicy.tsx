import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import LegalLanguageNotice from "@/components/LegalLanguageNotice";

const AMLPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "AML Policy", path: "/aml-policy" }]} />
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Anti-Money Laundering (AML) Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Our commitment to preventing money laundering and terrorist financing
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
                BitradeX is committed to maintaining the highest standards of compliance with anti-money laundering (AML) and counter-terrorist financing (CTF) regulations. This policy outlines our approach to preventing, detecting, and reporting suspicious activities on our platform.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We have implemented a comprehensive AML/CTF program designed to comply with applicable laws and regulations, including the Financial Action Task Force (FATF) recommendations and local regulatory requirements in jurisdictions where we operate.
              </p>
            </section>

            {/* Policy Statement */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Policy Statement</h2>
              <div className="bg-card/30 border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  BitradeX has a zero-tolerance policy toward money laundering and terrorist financing. We are committed to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Preventing our platform from being used for money laundering or terrorist financing activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Implementing robust customer due diligence and know-your-customer (KYC) procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Monitoring transactions for suspicious activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Reporting suspicious transactions to relevant authorities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Maintaining comprehensive records and audit trails</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Training our staff on AML/CTF obligations and best practices</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* KYC Procedures */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Know Your Customer (KYC) Procedures</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Customer Identification Program</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All users must complete our KYC verification process before accessing our full range of services. Our identification program requires:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Full legal name</li>
                    <li>• Date of birth</li>
                    <li>• Residential address</li>
                    <li>• Valid government-issued photo identification</li>
                    <li>• Proof of address (utility bill, bank statement, etc.)</li>
                    <li>• Selfie or liveness verification</li>
                  </ul>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Verification Levels</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We implement tiered verification levels based on risk assessment:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Level 1 - Basic Verification</h4>
                      <p className="text-sm text-muted-foreground">Email verification and basic personal information. Limited deposit and withdrawal amounts.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Level 2 - Intermediate Verification</h4>
                      <p className="text-sm text-muted-foreground">Government ID verification and proof of address. Higher transaction limits.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Level 3 - Advanced Verification</h4>
                      <p className="text-sm text-muted-foreground">Enhanced due diligence for high-value accounts. Video verification and source of funds documentation.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Enhanced Due Diligence (EDD)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enhanced due diligence is applied to high-risk customers, including politically exposed persons (PEPs), customers from high-risk jurisdictions, and accounts with unusually high transaction volumes. EDD may include additional documentation requirements, source of wealth verification, and ongoing monitoring.
                  </p>
                </div>
              </div>
            </section>

            {/* Transaction Monitoring */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Transaction Monitoring</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Automated Monitoring Systems</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We employ sophisticated automated monitoring systems that analyze all transactions in real-time to detect potentially suspicious activities. Our systems monitor for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Unusual transaction patterns or volumes</li>
                    <li>• Rapid movement of funds</li>
                    <li>• Transactions involving high-risk jurisdictions</li>
                    <li>• Structuring or layering activities</li>
                    <li>• Transactions inconsistent with customer profile</li>
                    <li>• Connections to known sanctioned entities or individuals</li>
                  </ul>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Manual Review Process</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transactions flagged by our automated systems undergo manual review by our dedicated compliance team. Our specialists analyze the context, customer history, and available information to determine whether a transaction requires further investigation or reporting to authorities.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Suspicious Activity Reporting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When suspicious activity is identified, we file Suspicious Activity Reports (SARs) or equivalent reports with relevant financial intelligence units and regulatory authorities as required by law. We maintain strict confidentiality regarding the filing of such reports.
                  </p>
                </div>
              </div>
            </section>

            {/* Sanctions Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Sanctions Compliance</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sanctions Screening</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All customers and transactions are screened against international sanctions lists, including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• United Nations Security Council Sanctions Lists</li>
                    <li>• Office of Foreign Assets Control (OFAC) lists</li>
                    <li>• European Union Sanctions Lists</li>
                    <li>• Financial Action Task Force (FATF) High-Risk Jurisdictions</li>
                    <li>• National sanctions lists from relevant jurisdictions</li>
                  </ul>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Prohibited Jurisdictions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not offer services to individuals or entities located in, or residents of, jurisdictions subject to comprehensive sanctions. We maintain a list of prohibited jurisdictions and regularly update our screening systems to comply with new sanctions designations.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Ongoing Monitoring</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sanctions screening is performed not only at account opening but continuously throughout the customer relationship. We regularly re-screen existing customers against updated sanctions lists and take immediate action when matches are identified.
                  </p>
                </div>
              </div>
            </section>

            {/* Risk Assessment */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Risk Assessment</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Risk-Based Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We employ a risk-based approach to AML/CTF compliance, allocating resources according to the level of risk presented by different customers, products, and jurisdictions. Our risk assessment considers factors including customer type, transaction patterns, geographic location, and product usage.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Risk Categories</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Customers are assigned risk ratings that determine the level of due diligence and monitoring applied:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Low Risk:</strong> Standard verification and monitoring procedures</li>
                    <li><strong className="text-foreground">Medium Risk:</strong> Enhanced monitoring and periodic reviews</li>
                    <li><strong className="text-foreground">High Risk:</strong> Enhanced due diligence, senior management approval, and intensive ongoing monitoring</li>
                  </ul>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Periodic Review</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Risk assessments are reviewed periodically and updated based on changes in customer behavior, transaction patterns, or regulatory requirements. High-risk customers are subject to more frequent reviews.
                  </p>
                </div>
              </div>
            </section>

            {/* Record Keeping */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Record Keeping</h2>
              
              <div className="bg-card/30 border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We maintain comprehensive records of all customer identification data, transactions, and compliance activities for a minimum of seven (7) years, or as required by applicable law. Our records include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Customer identification documents and verification records</li>
                  <li>• Transaction records and supporting documentation</li>
                  <li>• Risk assessment documentation</li>
                  <li>• Suspicious activity reports and investigations</li>
                  <li>• Communications with customers regarding compliance matters</li>
                  <li>• Staff training records</li>
                  <li>• Audit trails and system logs</li>
                </ul>
              </div>
            </section>

            {/* Staff Training */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Staff Training and Awareness</h2>
              
              <div className="bg-card/30 border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All BitradeX employees receive regular AML/CTF training appropriate to their roles. Our training program covers:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li>• AML/CTF regulations and requirements</li>
                  <li>• Identification of suspicious activities and red flags</li>
                  <li>• KYC and customer due diligence procedures</li>
                  <li>• Transaction monitoring and reporting obligations</li>
                  <li>• Sanctions compliance</li>
                  <li>• Data protection and confidentiality</li>
                  <li>• Internal escalation procedures</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Training is conducted annually at minimum, with additional training provided when regulations or procedures change.
                </p>
              </div>
            </section>

            {/* Compliance Officer */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Compliance Officer and Governance</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Money Laundering Reporting Officer (MLRO)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    BitradeX has appointed a qualified Money Laundering Reporting Officer (MLRO) responsible for overseeing our AML/CTF program, ensuring compliance with applicable regulations, and serving as the primary contact with regulatory authorities on AML matters.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Independent Audits</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our AML/CTF program is subject to regular independent audits to assess its effectiveness and identify areas for improvement. Audit findings are reported to senior management and the board of directors, and corrective actions are implemented as necessary.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Continuous Improvement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to continuously improving our AML/CTF program in response to evolving risks, regulatory changes, and industry best practices. We regularly review and update our policies, procedures, and systems to maintain the highest standards of compliance.
                  </p>
                </div>
              </div>
            </section>

            {/* User Obligations */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">User Obligations</h2>
              
              <div className="bg-card/30 border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All users of BitradeX are required to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Provide accurate and complete information during the registration and verification process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Update their information promptly when changes occur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cooperate with our KYC and verification procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Provide additional documentation when requested</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Not use the platform for illegal activities or money laundering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Comply with all applicable laws and regulations</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Enforcement */}
            <section className="bg-gradient-primary/10 border-2 border-primary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Enforcement Actions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to take the following actions to enforce this AML Policy:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Requesting additional information or documentation from users</li>
                <li>• Delaying or blocking transactions pending verification</li>
                <li>• Freezing accounts suspected of involvement in illegal activities</li>
                <li>• Reporting suspicious activities to relevant authorities</li>
                <li>• Terminating accounts that fail to comply with KYC requirements</li>
                <li>• Cooperating fully with law enforcement investigations</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="text-center bg-card/30 border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Compliance Inquiries</h2>
              <p className="text-muted-foreground mb-6">
                For questions about our AML Policy or to report suspicious activities, please contact our compliance team.
              </p>
              <div className="text-primary font-medium">
                Email: compliance@bitradex.app
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

export default AMLPolicy;
