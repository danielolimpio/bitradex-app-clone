import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/bitradex-logo.png";

const Footer = () => {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t("footer.sections.about"),
      links: [
        { text: t("footer.links.aboutUs"), href: "/about-us" },
        { text: t("footer.links.ourTeam"), href: "/our-team" },
        { text: t("footer.links.careers"), href: "/careers" },
        { text: t("footer.links.pressMedia"), href: "/press-media" },
        { text: t("footer.links.contactUs"), href: "/contact" },
      ],
    },
    {
      title: t("footer.sections.products"),
      links: [
        { text: t("footer.links.spotTrading"), href: "/spot" },
        { text: t("footer.links.futuresTrading"), href: "/futures" },
        { text: "AI Bot", href: "/#ai-bot" },
        { text: t("footer.links.apiDocs"), href: "#" },
        { text: t("footer.links.mobileApp"), href: "#" },
      ],
    },
    {
      title: t("footer.sections.services"),
      links: [
        { text: t("footer.links.institutional"), href: "/institutional" },
        { text: "VIP Program", href: "/vip" },
        { text: "Referral Program", href: "/referral" },
        { text: "Security", href: "/security" },
        { text: "Support Center", href: "/support-center" },
      ],
    },
    {
      title: t("footer.sections.support"),
      links: [
        { text: "Help Center", href: "/help-center" },
        { text: t("footer.links.faq"), href: "/faq" },
        { text: "Trading Guide", href: "/trading-guide" },
        { text: "Blog", href: "/blog" },
        { text: "System Status", href: "/system-status" },
      ],
    },
  ];

  const legalLinks = [
    { text: t("footer.links.termsOfService"), href: "/terms-of-service" },
    { text: t("footer.links.privacyPolicy"), href: "/privacy-policy" },
    { text: t("footer.links.riskDisclosure"), href: "/risk-disclosure" },
    { text: t("footer.links.amlPolicy"), href: "/aml-policy" },
    { text: t("footer.links.compliance"), href: "/compliance" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-bitradx-darker border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-16 grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Bitradex" className="h-8 w-auto" />
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t("footer.tagline")}
            </p>

            <div className="space-y-4">
              <h4 className="text-lg text-foreground font-normal">{t("footer.stayUpdated")}</h4>
              <div className="flex gap-2">
                <Input placeholder={t("footer.emailPlaceholder")} className="bg-background/50 border-border" />
                <Button className="bg-gradient-primary hover:shadow-button">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>20 Rue de Penthièvre, Paris, 75008, FR</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+55 1298251-9116</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@bitradex.app</span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg text-foreground font-medium">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith("/") ? (
                      <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                        {link.text}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
                        {link.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-border">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {legalLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 Bitradex | {t("footer.allRights")} | {t("footer.developedBy")}{" "}
              <a href="https://danielolimpio.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                DanielOlimpio
              </a>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-gradient-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group">
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
