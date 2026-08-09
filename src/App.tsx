import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import UserAgreement from "./pages/UserAgreement";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import Markets from "./pages/Markets";
import Futures from "./pages/Futures";
import Spot from "./pages/Spot";
import Institutional from "./pages/Institutional";
import RiskDisclosure from "./pages/RiskDisclosure";
import AMLPolicy from "./pages/AMLPolicy";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import Careers from "./pages/Careers";
import PressMedia from "./pages/PressMedia";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import HelpCenter from "./pages/HelpCenter";
import TradingGuide from "./pages/TradingGuide";
import SystemStatus from "./pages/SystemStatus";
import SupportCenter from "./pages/SupportCenter";
import Security from "./pages/Security";
import Referral from "./pages/Referral";
import VIPProgram from "./pages/VIPProgram";
import ApiDocs from "./pages/ApiDocs";
import MobileApp from "./pages/MobileApp";

const queryClient = new QueryClient();
const SUPPORTED_LANGS = ["pt", "es", "de", "id", "th", "ko", "ru", "ja", "ms", "zh"];

const LangSync = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  useEffect(() => {
    const target = lang && SUPPORTED_LANGS.includes(lang) ? lang : "en";
    if (i18n.language !== target) {
      i18n.changeLanguage(target);
      localStorage.setItem("language", target);
    }
  }, [lang, i18n]);
  return <>{children}</>;
};

const pageRoutes: { path: string; element: JSX.Element }[] = [
  { path: "", element: <Index /> },
  { path: "about-us", element: <AboutUs /> },
  { path: "markets", element: <Markets /> },
  { path: "futures", element: <Futures /> },
  { path: "spot", element: <Spot /> },
  { path: "institutional", element: <Institutional /> },
  { path: "privacy-policy", element: <PrivacyPolicy /> },
  { path: "disclaimer", element: <Disclaimer /> },
  { path: "user-agreement", element: <UserAgreement /> },
  { path: "terms-of-service", element: <TermsOfService /> },
  { path: "risk-disclosure", element: <RiskDisclosure /> },
  { path: "aml-policy", element: <AMLPolicy /> },
  { path: "compliance", element: <Compliance /> },
  { path: "contact", element: <Contact /> },
  { path: "our-team", element: <OurTeam /> },
  { path: "careers", element: <Careers /> },
  { path: "press-media", element: <PressMedia /> },
  { path: "faq", element: <FAQ /> },
  { path: "blog", element: <Blog /> },
  { path: "blog/:slug", element: <BlogPost /> },
  { path: "help-center", element: <HelpCenter /> },
  { path: "trading-guide", element: <TradingGuide /> },
  { path: "system-status", element: <SystemStatus /> },
  { path: "support-center", element: <SupportCenter /> },
  { path: "security", element: <Security /> },
  { path: "referral", element: <Referral /> },
  { path: "vip", element: <VIPProgram /> },
  { path: "api-docs", element: <ApiDocs /> },
  { path: "mobile-app", element: <MobileApp /> },
];

const AppRoutes = () => (
  <Routes>
    {pageRoutes.map((r) => (
      <Route
        key={`root-${r.path}`}
        path={`/${r.path}`}
        element={<LangSync>{r.element}</LangSync>}
      />
    ))}
    {pageRoutes.map((r) => (
      <Route
        key={`lang-${r.path}`}
        path={`/:lang${r.path ? `/${r.path}` : ""}`}
        element={<LangSync>{r.element}</LangSync>}
      />
    ))}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
