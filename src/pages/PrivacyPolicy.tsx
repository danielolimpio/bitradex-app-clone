import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/seo/SEO";
import LegalLanguageNotice from "@/components/LegalLanguageNotice";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <Header />
      <main className="container mx-auto px-4 lg:px-8 py-16 max-w-4xl">
        <LegalLanguageNotice /><h1 className="text-4xl md:text-5xl font-bold mb-8">BitradeX Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Effective Date: January 2025</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Thank you for visiting bitradex.app. This Privacy Policy is issued by the relevant BitradeX entity acting as the data controller and outlines how we collect, store, use, disclose, and otherwise process your personal data.
            </p>
            <p className="mb-4">
              By accessing or using the BitradeX website, mobile application, APIs, or any related services (collectively, the "BitradeX Platform" or "Services"), you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>(a) confirm that you have the right, authority, and capacity to accept this Privacy Policy;</li>
              <li>(b) acknowledge that you have read and understood this Privacy Policy; and</li>
              <li>(c) agree to be bound by the practices described herein.</li>
            </ul>
            <p className="mb-4">This Privacy Policy explains:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>What personal data we collect and why;</li>
              <li>How we use, store, and protect it;</li>
              <li>With whom we may share it;</li>
              <li>Your rights regarding your personal data; and</li>
              <li>How to contact us with privacy-related inquiries.</li>
            </ul>
            <p>
              If you do not agree with how we handle your personal data as described in this policy, please refrain from using the BitradeX Platform or any of its Services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <p className="mb-4"><strong>Data Protection Officer (DPO):</strong> The BitradeX representative responsible for overseeing data protection compliance.</p>
            <p className="mb-4"><strong>Digital Assets:</strong> Digitally represented value based on cryptographic protocols—whether centralized or decentralized, open or closed source—that may function as a medium of exchange and/or store of value. This includes cryptocurrencies, virtual currencies, digital tokens, and similar instruments (e.g., Bitcoin, Ether).</p>
            <p className="mb-4"><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person ("data subject"). This includes data that can directly or indirectly identify an individual—such as name, email, phone number, government ID, IP address, device identifiers, geolocation, biometric data, or other attributes reflecting physical, physiological, economic, cultural, or social identity. De-identified or anonymized data is not considered Personal Data.</p>
            <p><strong>Sensitive Information:</strong> A subset of Personal Data that reveals or relates to an individual's racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic or biometric data, health status (physical or mental), sexual orientation, or criminal record.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Personal Data We Collect and How We Collect It</h2>
            <p className="mb-4">
              We collect and process Personal Data when you use our Services, interact with us, or provide consent. This may occur through:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Account registration or onboarding (completed, partial, or abandoned);</li>
              <li>Customer support communications (via email, phone, chat, etc.);</li>
              <li>Transactions conducted on the Platform;</li>
              <li>Subscription to marketing communications;</li>
              <li>Use of our website or mobile app (including automatic data collection).</li>
            </ul>
            <p className="mb-4">Types of Personal Data we may collect include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Identity & Contact Information:</strong> Name, email, phone number, date of birth, nationality, residential address, and government-issued identification (e.g., passport, national ID).</li>
              <li><strong>Organizational Details:</strong> If you represent a business—company name, registration number, business address, beneficial ownership information, and proof of legal existence.</li>
              <li><strong>Financial Data:</strong> Bank account details, payment card information, and transaction history.</li>
              <li><strong>Device & Technical Data:</strong> IP address, MAC address, device fingerprint, browser type, operating system, and geolocation.</li>
              <li><strong>Communications:</strong> Records of your interactions with our support team, survey responses, or feedback.</li>
              <li><strong>Regulatory Information:</strong> Data required to comply with anti-money laundering (AML), know-your-customer (KYC), sanctions screening, and other legal obligations.</li>
            </ul>
            <p className="mb-4">
              We may also obtain Personal Data from third parties, such as identity verification providers, credit bureaus, marketing partners, or liquidity providers. In such cases, we ensure these parties comply with applicable privacy laws.
            </p>
            <p className="mb-4">
              We do not collect Sensitive Information unless you provide explicit consent or where permitted by law (e.g., to prevent fraud, comply with legal obligations, or investigate suspected illegal activity).
            </p>
            <p className="mb-4">
              If you withhold requested Personal Data, we may be unable to provide certain Services or fulfill regulatory requirements. Anonymous or pseudonymous use of the BitradeX Platform is not supported.
            </p>
            <p>
              We operate globally and comply with data protection laws in all relevant jurisdictions. Where local laws impose additional requirements, we adhere to those standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Unsolicited Personal Data</h2>
            <p>
              If we receive Personal Data about you that we did not request, we will either delete it or de-identify it—unless it is relevant to the purposes outlined in this Privacy Policy. If such data becomes necessary for our Services or legal compliance, we may retain and process it as if it were collected directly from you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Categories of Individuals Whose Data We Collect</h2>
            <p>We may collect Personal Data from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Current, prospective, or former users of the BitradeX Platform;</li>
              <li>Service providers, vendors, or business partners;</li>
              <li>Employees, contractors, and job applicants;</li>
              <li>Other third parties with whom we interact in the course of business.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. How We Use Your Personal Data</h2>
            <p className="mb-4">We process your Personal Data to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide, maintain, and improve our Services;</li>
              <li>Verify your identity and comply with KYC/AML and other regulatory obligations;</li>
              <li>Process transactions and manage your account;</li>
              <li>Detect, prevent, and investigate fraud, security breaches, or illegal activity;</li>
              <li>Offer customer support and respond to inquiries;</li>
              <li>Personalize your experience and develop new features;</li>
              <li>Communicate service updates, policy changes, and operational notices;</li>
              <li>Conduct marketing (with your consent or as permitted by law—see Section 11);</li>
              <li>Fulfill legal, tax, or audit requirements.</li>
            </ul>
            <p className="mb-4"><strong>Legal Bases for Processing (without consent):</strong></p>
            <p className="mb-4">We may process your data without explicit consent when necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Perform a contract with you (e.g., providing trading services);</li>
              <li>Comply with legal or regulatory obligations;</li>
              <li>Protect your vital interests or those of others;</li>
              <li>Pursue legitimate business interests (e.g., fraud prevention, service improvement);</li>
              <li>Serve the public interest (e.g., cooperating with law enforcement).</li>
            </ul>
            <p>
              Sensitive Information is only used for the purpose it was provided—or a directly related secondary purpose—with your consent or as authorized by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Disclosure of Personal Data</h2>
            <p className="mb-4">We may share your Personal Data with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Affiliates:</strong> Companies within the BitradeX group, including subsidiaries and parent entities.</li>
              <li><strong>Service Providers:</strong> Third parties that assist with payment processing, IT infrastructure, data analytics, customer support, compliance, and security. These providers are contractually obligated to protect your data and use it only as instructed.</li>
              <li><strong>Regulatory & Government Authorities:</strong> To comply with laws, court orders, subpoenas, or requests from law enforcement, tax authorities, or financial regulators.</li>
              <li><strong>Professional Advisors:</strong> Legal, accounting, or auditing firms supporting our compliance efforts.</li>
              <li><strong>Corporate Transaction Parties:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.</li>
            </ul>
            <p>
              We do not sell your Personal Data. Any third-party links on our Platform are governed by their own privacy policies; BitradeX is not responsible for their practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
            <p className="mb-4">We retain your Personal Data only as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide our Services;</li>
              <li>Fulfill legal, tax, or regulatory obligations (e.g., AML laws may require retention for 5+ years after account closure);</li>
              <li>Resolve disputes or enforce agreements.</li>
            </ul>
            <p>Upon account closure, we securely archive or delete data in accordance with applicable laws.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="mb-4">
              BitradeX operates globally. Your Personal Data may be transferred to, stored in, or processed in countries outside your jurisdiction—including countries with different data protection standards.
            </p>
            <p>
              We implement appropriate safeguards (e.g., standard contractual clauses, binding corporate rules) to ensure your data remains protected in accordance with this Privacy Policy and applicable laws. By using our Services, you consent to such international transfers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">10. Your Rights</h2>
            <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Access a copy of your Personal Data;</li>
              <li>Request correction of inaccurate or incomplete data;</li>
              <li>Request deletion of your data (subject to legal or operational exceptions);</li>
              <li>Restrict or object to certain processing activities;</li>
              <li>Withdraw consent (where processing is consent-based);</li>
              <li>Receive your data in a portable format (where applicable).</li>
            </ul>
            <p>
              To exercise these rights, email us at <strong>privacy@bitradex.app</strong> with the subject line "Data Subject Request." We may verify your identity before fulfilling your request. We aim to respond within 30 days. In rare cases (e.g., excessive or repetitive requests), we may charge a reasonable fee or decline the request as permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">11. Marketing Communications</h2>
            <p className="mb-4">
              We may use your Personal Data to send promotional messages about BitradeX products, services, or partner offers—unless you opt out. You can unsubscribe at any time by clicking the link in marketing emails or contacting support.
            </p>
            <p className="mb-4">
              Note: You cannot opt out of essential service communications (e.g., security alerts, policy updates, or transaction confirmations).
            </p>
            <p>
              If we obtain your data from third parties for marketing, we will only contact you if you've consented or if permitted by law—and we'll always provide a clear opt-out mechanism.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">12. Use of Cookies and Tracking Technologies</h2>
            <p className="mb-4">When you visit bitradex.app, we use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Recognize your device and remember preferences;</li>
              <li>Analyze site traffic and user behavior;</li>
              <li>Enhance security and detect fraudulent activity;</li>
              <li>Support AML and compliance monitoring.</li>
            </ul>
            <p className="mb-4">
              You can manage cookie preferences through your browser settings. Disabling cookies may limit certain Platform functionalities.
            </p>
            <p className="mb-4">We use both:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Session cookies (deleted when you close your browser);</li>
              <li>Persistent cookies (remain until expiration or manual deletion).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">13. Information Security</h2>
            <p className="mb-4">We implement robust technical and organizational measures to protect your Personal Data, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>End-to-end encryption for data in transit and at rest;</li>
              <li>Mandatory two-factor authentication (2FA);</li>
              <li>Regular security audits and vulnerability assessments;</li>
              <li>Strict access controls and confidentiality agreements for employees and vendors.</li>
            </ul>
            <p>
              While no system is 100% secure, we continuously monitor and improve our defenses. If you suspect a security issue, please report it immediately to <strong>security@bitradex.app</strong> with the subject line "Security Incident Report."
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
            <p>
              For questions, concerns, or requests regarding this Privacy Policy or your Personal Data, please contact our Data Protection Officer at:<br />
              Email: <strong>privacy@bitradex.app</strong><br />
              Subject Line: "Privacy Inquiry"
            </p>
            <p className="mt-4">We take all privacy requests seriously and will respond promptly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">15. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or Services. The revised policy will be posted on bitradex.app with an updated "Effective Date."
            </p>
            <p>
              Your continued use of the BitradeX Platform after such changes constitutes acceptance of the updated terms. We encourage you to review this policy regularly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">16. Governing Language</h2>
            <p>
              This Privacy Policy is available in multiple languages for convenience. In the event of any discrepancy, the English version shall prevail.
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

export default PrivacyPolicy;