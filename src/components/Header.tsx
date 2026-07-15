import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/bitradex-logo.png";
import LanguageSelector from "@/components/LanguageSelector";

const SUPPORTED_LANGS = ["pt", "es", "de", "id", "th", "ko", "ru", "ja", "ms", "zh"];

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

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Bitradex" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-white hover:bg-transparent"
              onClick={() => window.open('https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W', '_blank')}
            >
              {t("nav.login")}
            </Button>
            <Button
              className="bg-gradient-primary hover:shadow-button transition-all duration-300"
              onClick={() => window.open('https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W', '_blank')}
            >
              {t("nav.signup")}
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <LanguageSelector />
                <Button
                  variant="ghost"
                  className="justify-start text-muted-foreground hover:text-white hover:bg-transparent"
                  onClick={() => window.open('https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W', '_blank')}
                >
                  {t("nav.login")}
                </Button>
                <Button
                  className="bg-gradient-primary justify-start w-full"
                  onClick={() => window.open('https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W', '_blank')}
                >
                  {t("nav.signup")}
                </Button>

              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;