import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { LifeBuoy, User, Wallet, Shield, ArrowRightLeft, Bot, Search, MessageCircle } from "lucide-react";

const categories = [
  { icon: User, title: "Conta e Verificação", desc: "Cadastro, KYC, redefinição de senha e configurações de perfil." },
  { icon: Wallet, title: "Depósitos e Saques", desc: "Como depositar, sacar, taxas, tempo de processamento e limites." },
  { icon: ArrowRightLeft, title: "Trading", desc: "Spot, Futures, ordens, alavancagem, funding e liquidação." },
  { icon: Bot, title: "AI Bot", desc: "Como ativar, escolher estratégias e acompanhar resultados." },
  { icon: Shield, title: "Segurança", desc: "2FA, whitelist de endereços, phishing e proteção da conta." },
  { icon: LifeBuoy, title: "Suporte Geral", desc: "Contatar equipe, abrir tickets, política de reembolso." },
];

const HelpCenter = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Help Center", path: "/help-center" }]} />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 text-center">
            <LifeBuoy className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Central de Ajuda</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-8">
              Encontre respostas para as perguntas mais comuns e obtenha suporte especializado.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="O que você precisa? Ex: como sacar, ativar 2FA..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card/50 border border-border focus:border-primary focus:outline-none text-foreground"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-border bg-card/30 hover:border-primary/50 hover:-translate-y-1 transition-all">
                <c.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">Não encontrou o que procurava?</h2>
            <p className="text-muted-foreground mb-6 font-light">Nossa equipe de suporte responde em minutos, 24/7.</p>
            <Link to="/contact" className="inline-block px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:shadow-button transition-all">
              Falar com Suporte
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default HelpCenter;
