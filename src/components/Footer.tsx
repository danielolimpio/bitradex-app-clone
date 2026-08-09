import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, ShieldCheck } from "lucide-react";
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
        { text: t("footer.links.apiDocs"), href: "/api-docs" },
        { text: t("footer.links.mobileApp"), href: "/mobile-app" },
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
    <footer className="relative overflow-hidden bg-bitradx-darker">
      {/* premium top hairline + halo */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[320px] rounded-full bg-primary/[0.07] blur-[120px]" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="py-16 grid lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 space-y-7">
            <img src={logo} alt="Bitradex" className="h-9 w-auto" />

            <p className="text-muted-foreground leading-relaxed max-w-md">{t("footer.tagline")}</p>

            <div className="premium-panel p-5 space-y-4">
              <h4 className="font-display text-lg text-foreground font-semibold">{t("footer.stayUpdated")}</h4>
              <div className="flex gap-2">
                <Input
                  placeholder={t("footer.emailPlaceholder")}
                  className="h-11 bg-background/60 border-border rounded-xl text-base placeholder:text-muted-foreground"
                />
                <Button variant="gradient" size="icon" aria-label={t("footer.stayUpdated")}>
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>CertiK audited · ISO 27001</span>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[0.95rem] text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span>20 Rue de Penthièvre, Paris, 75008, FR</span>
              </li>
              <li className="flex items-center gap-3 text-[0.95rem] text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+55 1298251-9116</span>
              </li>
              <li className="flex items-center gap-3 text-[0.95rem] text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>contact@bitradex.app</span>
              </li>
            </ul>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-5">
              <h4 className="font-display text-base font-semibold text-foreground tracking-wide uppercase">
                <span className="inline-block pb-2 border-b-2 border-primary/60">{section.title}</span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="group inline-flex items-center gap-2 text-[0.95rem] text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3" />
                        {link.text}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-[0.95rem] text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3" />
                        {link.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="divider-premium" />

        <div className="py-6">
          <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {legalLinks.map((link, idx) => (
              <span key={idx} className="flex items-center gap-3">
                {idx > 0 && <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />}
                <Link
                  to={link.href}
                  className="text-[0.95rem] text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.text}
                </Link>
              </span>
            ))}
          </nav>
        </div>

        <hr className="divider-premium" />

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="text-[0.95rem] text-muted-foreground text-center md:text-left">
            © 2025 Bitradex | {t("footer.allRights")} | {t("footer.developedBy")}{" "}
            <a
              href="https://danielolimpio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4"
            >
              DanielOlimpio
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="group w-11 h-11 rounded-xl border border-border bg-gradient-card flex items-center justify-center hover:border-primary/60 hover:-translate-y-0.5 transition-all duration-300"
              >
                <social.icon className="w-[18px] h-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
