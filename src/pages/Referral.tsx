import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Users, Share2, DollarSign, TrendingUp, Gift, Award } from "lucide-react";

const INVITE_URL = "https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W";

const steps = [
  { icon: Share2, title: "1. Compartilhe seu link", desc: "Copie seu link único de indicação e compartilhe com amigos, redes sociais ou sua comunidade." },
  { icon: Users, title: "2. Amigos se cadastram", desc: "Cada pessoa que se registrar usando seu link será vinculada à sua conta permanentemente." },
  { icon: DollarSign, title: "3. Você ganha comissão", desc: "Receba até 40% das taxas de trading dos seus indicados — para sempre, sem limites." },
];

const tiers = [
  { level: "Bronze", volume: "0 - $10K", commission: "20%", color: "from-orange-500/20" },
  { level: "Prata", volume: "$10K - $100K", commission: "25%", color: "from-slate-400/20" },
  { level: "Ouro", volume: "$100K - $1M", commission: "30%", color: "from-yellow-500/20" },
  { level: "Platina", volume: "$1M - $10M", commission: "35%", color: "from-cyan-400/20" },
  { level: "Diamante", volume: "$10M+", commission: "40%", color: "from-primary/30" },
];

const Referral = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 text-center">
            <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Programa de Indicação</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-8">
              Ganhe até <span className="text-primary font-semibold">40% de comissão vitalícia</span> a cada amigo que operar na Bitradex.
            </p>
            <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:shadow-button transition-all">
              Começar a Indicar
            </a>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {steps.map((s, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-card/30 text-center">
                <s.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Níveis de Comissão</h2>
          <div className="grid md:grid-cols-5 gap-4 mb-16">
            {tiers.map((t, i) => (
              <div key={i} className={`relative overflow-hidden p-6 rounded-2xl border border-border bg-gradient-to-br ${t.color} to-transparent text-center`}>
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-foreground mb-1">{t.level}</div>
                <div className="text-xs text-muted-foreground mb-3">{t.volume}</div>
                <div className="text-3xl font-bold text-primary">{t.commission}</div>
              </div>
            ))}
          </div>

          <div className="p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-3">Sem limite de ganhos</h2>
                <p className="text-muted-foreground font-light">Parceiros top da Bitradex faturam mais de 6 dígitos por mês apenas em comissões. Você recebe em stablecoins todos os dias, direto na sua conta.</p>
              </div>
              <div className="text-center">
                <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:shadow-button transition-all text-lg">
                  Criar Conta e Começar
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Referral;
