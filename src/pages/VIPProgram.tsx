import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Crown, Zap, Shield, Headphones, Percent, Gift, TrendingUp, Star } from "lucide-react";

const INVITE_URL = "https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W";

const tiers = [
  { name: "VIP 1", volume: "$50K", spotFee: "0.090%", futuresFee: "0.036%" },
  { name: "VIP 2", volume: "$500K", spotFee: "0.080%", futuresFee: "0.032%" },
  { name: "VIP 3", volume: "$2M", spotFee: "0.070%", futuresFee: "0.028%" },
  { name: "VIP 4", volume: "$10M", spotFee: "0.060%", futuresFee: "0.024%" },
  { name: "VIP 5", volume: "$50M", spotFee: "0.050%", futuresFee: "0.020%" },
  { name: "VIP 6", volume: "$100M", spotFee: "0.040%", futuresFee: "0.016%" },
  { name: "VIP 7", volume: "$500M", spotFee: "0.030%", futuresFee: "0.012%" },
  { name: "VIP 8", volume: "$1B+", spotFee: "0.020%", futuresFee: "0.008%" },
];

const perks = [
  { icon: Percent, title: "Taxas Reduzidas", desc: "Até 80% de desconto nas taxas Spot e Futures conforme seu nível." },
  { icon: Headphones, title: "Gerente Dedicado", desc: "Atendimento exclusivo com gerente pessoal para VIPs 3+." },
  { icon: Zap, title: "APIs Premium", desc: "Rate limits ampliados, WebSocket dedicado e latência otimizada." },
  { icon: Shield, title: "Saques Prioritários", desc: "Processamento acelerado e limites elevados de retirada." },
  { icon: Gift, title: "Airdrops e Eventos", desc: "Acesso antecipado a listagens, IEOs e eventos privados." },
  { icon: TrendingUp, title: "Insights Exclusivos", desc: "Análises institucionais, research reports e alertas de mercado." },
];

const VIPProgram = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "VIP Program", path: "/vip" }]} />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 text-center">
            <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Programa VIP</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Benefícios exclusivos, taxas reduzidas e atendimento premium para traders de alto volume.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Benefícios VIP</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {perks.map((p, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-card/30 hover:border-yellow-500/50 transition-all">
                <p.icon className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{p.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Níveis VIP e Taxas</h2>
          <div className="rounded-2xl border border-border bg-card/30 overflow-hidden mb-16">
            <div className="grid grid-cols-4 px-6 py-4 border-b border-border text-sm text-muted-foreground font-medium">
              <div>Nível</div>
              <div>Volume 30d</div>
              <div>Taxa Spot</div>
              <div>Taxa Futures</div>
            </div>
            {tiers.map((t, i) => (
              <div key={i} className={`grid grid-cols-4 px-6 py-4 items-center ${i !== tiers.length - 1 ? "border-b border-border" : ""} hover:bg-card/50 transition-colors`}>
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Star className="w-4 h-4 text-yellow-500" />{t.name}
                </div>
                <div className="text-muted-foreground">{t.volume}</div>
                <div className="text-primary font-medium">{t.spotFee}</div>
                <div className="text-primary font-medium">{t.futuresFee}</div>
              </div>
            ))}
          </div>

          <div className="p-10 rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent text-center">
            <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-3">Torne-se VIP hoje</h2>
            <p className="text-muted-foreground mb-6 font-light">Crie sua conta e comece a acumular volume para desbloquear seu nível VIP.</p>
            <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:shadow-button transition-all">
              Criar Conta VIP
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default VIPProgram;
