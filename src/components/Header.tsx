import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/bitradex-logo.png";
import LanguageSelector from "@/components/LanguageSelector";

const SUPPORTED_LANGS = ["pt", "es", "de", "id", "th", "ko", "ru", "ja", "ms", "zh"];
const INVITE_URL = "https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W";

const Header = () => {
  const location = useLocation();
  const first = location.pathname.split("/")[1];
  const langPrefix = SUPPORTED_LANGS.includes(first) ? `/${first}` : "";
  const withLang = (p: string) => (p === "/" ? langPrefix || "/" : `${langPrefix}${p}`);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.aboutUs"), href: "/about-us" },
    { label: t("nav.market"), href: "/markets" },
    { label: t("nav.futures"), href: "/futures" },
    { label: t("nav.spot"), href: "/spot" },
    { label: t("nav.institutional"), href: "/institutional" },
    { label: t("nav.faq"), href: "/faq" },
    { label: t("nav.contactUs"), href: "/contact" },
  ];

  const isActive = (href: string) => withLang(href) === location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to={withLang("/")} className="flex items-center" aria-label="Bitradex">
            <img src={logo} alt="Bitradex" className="h-9 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={withLang(item.href)}
                data-active={isActive(item.href)}
                className="nav-link text-[0.975rem] font-medium text-muted-foreground hover:text-foreground data-[active=true]:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSelector />
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-primary"
              onClick={() => window.open(INVITE_URL, "_blank")}
            >
              {t("nav.login")}
            </Button>
            <Button variant="gradient" onClick={() => window.open(INVITE_URL, "_blank")}>
              {t("nav.signup")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-secondary/40 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 pt-2">
            <nav className="premium-panel p-4 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={withLang(item.href)}
                  data-active={isActive(item.href)}
                  className="py-3 px-3 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/60 data-[active=true]:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="divider-premium my-4" />
              <div className="flex flex-col gap-3">
                <LanguageSelector />
                <Button variant="outline" onClick={() => window.open(INVITE_URL, "_blank")}>
                  {t("nav.login")}
                </Button>
                <Button variant="gradient" className="w-full" onClick={() => window.open(INVITE_URL, "_blank")}>
                  {t("nav.signup")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </header>
  );
};

export default Header;
