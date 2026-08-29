import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Shield, Lock, FileCheck, Users, Globe, CheckCircle2 } from "lucide-react";
import SEO from "@/seo/SEO";
import LegalLanguageNotice from "@/components/LegalLanguageNotice";

const Compliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Compliance", path: "/compliance" }]} />
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Regulatory Compliance
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              BitradeX maintains the highest standards of regulatory compliance and operational integrity
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Last Updated: October 2025
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card/30 border border-border rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Regulatory Compliance</h3>
              <p className="text-sm text-muted-foreground">Adherence to global financial regulations</p>
            </div>
            <div className="bg-card/30 border border-border rounded-xl p-6 text-center">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Security Standards</h3>
              <p className="text-sm text-muted-foreground">Industry-leading security protocols</p>
            </div>
            <div className="bg-card/30 border border-border rounded-xl p-6 text-center">
              <FileCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground">Clear reporting and disclosure practices</p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section className="bg-card/30 border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Compliance Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BitradeX is committed to operating in full compliance with applicable laws and regulations in all jurisdictions where we offer our services. Our comprehensive compliance framework ensures that we meet the highest standards of regulatory oversight, customer protection, and market integrity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work closely with regulatory authorities, industry organizations, and compliance experts to ensure our operations align with evolving regulatory requirements and industry best practices in the digital asset space.
              </p>
            </section>

            {/* Regulatory Framework */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Regulatory Framework</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Financial Services Compliance</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    BitradeX operates under the regulatory oversight of financial services authorities in relevant jurisdictions. We maintain licenses and registrations as required, including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Virtual Asset Service Provider (VASP) registrations</li>
                    <li>• Money Services Business (MSB) licenses</li>
                    <li>• Payment Services licenses</li>
                    <li>• Digital asset exchange authorizations</li>
                  </ul>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">AML/CFT Compliance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain a robust Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) program that complies with Financial Action Task Force (FATF) recommendations and local regulatory requirements. This includes comprehensive KYC procedures, transaction monitoring, and suspicious activity reporting.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Data Protection and Privacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our data protection practices comply with major privacy regulations including GDPR (General Data Protection Regulation), CCPA (California Consumer Privacy Act), and other applicable data protection laws. We implement strict data handling procedures to protect customer information.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Consumer Protection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We adhere to consumer protection regulations designed to ensure fair treatment, transparent disclosure, and appropriate safeguards for retail customers. This includes clear terms of service, comprehensive risk disclosures, and accessible dispute resolution mechanisms.
                  </p>
                </div>
              </div>
            </section>

            {/* Operational Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Operational Compliance</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Know Your Customer (KYC)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our KYC program ensures proper customer identification and verification:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Identity verification using government-issued documents</li>
                    <li>• Address verification through utility bills or bank statements</li>
                    <li>• Biometric verification including liveness detection</li>
                    <li>• Enhanced due diligence for high-risk customers</li>
                    <li>• Ongoing monitoring and periodic re-verification</li>
                  </ul>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Transaction Monitoring</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We employ advanced transaction monitoring systems that analyze customer activities in real-time to detect suspicious patterns, unusual behaviors, and potential compliance violations. Automated alerts trigger manual reviews by our compliance team.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Sanctions Screening</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All customers and transactions are screened against international sanctions lists, including UN, OFAC, EU, and other relevant sanctions programs. We perform continuous screening to ensure ongoing compliance with sanctions requirements.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Record Keeping</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain comprehensive records of all customer data, transactions, and compliance activities for periods exceeding regulatory minimums. Our record-keeping systems ensure data integrity, accessibility, and security for audit and regulatory purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Security and Technology */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Security and Technology Compliance</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cybersecurity Standards</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our cybersecurity framework aligns with industry standards including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ISO 27001 Information Security Management</li>
                    <li>• SOC 2 Type II certification</li>
                    <li>• PCI DSS for payment processing</li>
                    <li>• Regular penetration testing and security audits</li>
                    <li>• 24/7 security monitoring and incident response</li>
                  </ul>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Asset Security</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Customer assets are protected through multi-layered security measures including cold storage for the majority of digital assets, multi-signature wallets, hardware security modules (HSMs), and comprehensive insurance coverage for digital assets held in custody.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Technology Infrastructure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our technology infrastructure is designed for reliability, scalability, and security. We employ redundant systems, disaster recovery procedures, and business continuity planning to ensure continuous operations and protect customer interests.
                  </p>
                </div>
              </div>
            </section>

            {/* Market Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Market Conduct and Integrity</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Fair Trading Practices</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain fair and orderly markets through robust surveillance systems that detect and prevent market manipulation, insider trading, and other abusive practices. Our trading rules and market structure promote transparency and equal treatment of all participants.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Conflict of Interest Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We have implemented policies and procedures to identify and manage conflicts of interest, including information barriers, trading restrictions for employees, and disclosure requirements. These measures ensure that customer interests are prioritized.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Best Execution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to providing best execution for customer orders through advanced order routing technology, continuous monitoring of execution quality, and transparent fee structures. Our systems are designed to achieve optimal outcomes for customers.
                  </p>
                </div>
              </div>
            </section>

            {/* Reporting and Transparency */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Reporting and Transparency</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Regulatory Reporting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We submit regular reports to regulatory authorities as required, including transaction reports, large transaction reports, suspicious activity reports, and periodic compliance certifications. Our reporting processes ensure accuracy, timeliness, and completeness.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Customer Reporting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Customers receive detailed transaction confirmations, account statements, and tax reporting documents as applicable. We provide transparent information about fees, trading activity, and account balances through our platform interface.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Public Disclosure</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain transparent public disclosure of our terms of service, fee schedules, risk disclosures, and regulatory status. Material changes to our operations or policies are communicated to customers in a timely manner.
                  </p>
                </div>
              </div>
            </section>

            {/* Training and Culture */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Compliance Culture and Training</h2>
              
              <div className="bg-card/30 border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We foster a culture of compliance throughout our organization:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive compliance training for all employees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular updates on regulatory developments and requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Clear escalation procedures for compliance concerns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Whistleblower protections and reporting channels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Performance evaluations that include compliance responsibilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zero tolerance for compliance violations</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Governance */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Governance Structure</h2>
              
              <div className="space-y-6">
                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Compliance Committee</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Compliance Committee, composed of senior management and compliance professionals, oversees the implementation and effectiveness of our compliance program. The committee meets regularly to review compliance matters, assess risks, and ensure adequate resources are allocated to compliance functions.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Chief Compliance Officer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Chief Compliance Officer (CCO) has direct access to the board of directors and is responsible for overseeing all compliance activities, maintaining relationships with regulatory authorities, and ensuring the organization meets its compliance obligations.
                  </p>
                </div>

                <div className="bg-card/30 border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Independent Audits</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We engage independent third parties to conduct regular audits of our compliance program, risk management practices, and internal controls. Audit findings are reported to senior management and the board, with action plans developed to address any identified deficiencies.
                  </p>
                </div>
              </div>
            </section>

            {/* Partnerships */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Industry Partnerships</h2>
              
              <div className="bg-card/30 border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  BitradeX actively participates in industry organizations and initiatives to promote best practices and regulatory compliance:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Member of leading digital asset industry associations</li>
                  <li>• Participation in self-regulatory organization initiatives</li>
                  <li>• Collaboration with regulatory authorities on policy development</li>
                  <li>• Engagement with law enforcement on combating financial crime</li>
                  <li>• Contributions to industry standards and best practices</li>
                </ul>
              </div>
            </section>

            {/* Commitment */}
            <section className="bg-gradient-primary/10 border-2 border-primary rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BitradeX is committed to maintaining the highest standards of regulatory compliance and ethical conduct. We recognize that compliance is not just a regulatory requirement but a fundamental component of building trust with our customers, partners, and the broader community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We continuously invest in our compliance infrastructure, people, and technology to ensure we meet evolving regulatory expectations and maintain our position as a trusted and compliant digital asset trading platform.
              </p>
            </section>

            {/* Contact */}
            <section className="text-center bg-card/30 border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Compliance Inquiries</h2>
              <p className="text-muted-foreground mb-6">
                For questions about our compliance program or regulatory matters, please contact our compliance team.
              </p>
              <div className="space-y-2">
                <div className="text-primary font-medium">
                  Email: compliance@bitradex.app
                </div>
                <div className="text-muted-foreground text-sm">
                  We respond to all compliance inquiries within 48 hours
                </div>
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

export default Compliance;
