import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Button } from "@/components/ui/button";
import { Smartphone, Bell, Fingerprint, LineChart, Bot, Wallet, Download, Languages, Cpu, ShieldCheck } from "lucide-react";

const INVITE = "https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W";

const features = [
  { icon: LineChart, title: "Gráficos TradingView", desc: "Candles, mais de 100 indicadores e desenhos avançados direto no celular." },
  { icon: Bot, title: "AI Bot no bolso", desc: "Ative, pause e acompanhe estratégias automatizadas com um toque." },
  { icon: Bell, title: "Alertas de preço", desc: "Notificações push instantâneas de preço, execuções e liquidações." },
  { icon: Fingerprint, title: "Login biométrico", desc: "Face ID e impressão digital com 2FA obrigatório em saques." },
  { icon: Wallet, title: "Depósito em BRL via Pix", desc: "Depósitos e saques em reais aprovados em minutos." },
  { icon: Languages, title: "10 idiomas", desc: "Interface completa em português, inglês, espanhol e mais sete idiomas." },
];

const specs = [
  { label: "Android", value: "8.0 ou superior · 85 MB" },
  { label: "iOS", value: "14.0 ou superior · 112 MB" },
  { label: "Idiomas", value: "10 idiomas incluindo PT-BR" },
  { label: "Modo escuro", value: "Nativo, com tema claro opcional" },
  { label: "Atualizações", value: "Ciclo de duas semanas" },
  { label: "Suporte", value: "Chat 24/7 dentro do app" },
];

const steps = [
  { n: "01", title: "Baixe o app", desc: "Use o QR Code da página inicial ou baixe direto na loja do seu dispositivo." },
  { n: "02", title: "Crie sua conta", desc: "Cadastro em menos de 2 minutos com e-mail ou número de telefone." },
  { n: "03", title: "Verifique sua identidade", desc: "KYC com selfie e documento, aprovado normalmente em poucos minutos." },
  { n: "04", title: "Deposite e opere", desc: "Aporte via Pix ou cripto e comece a operar spot, futuros ou AI Bot." },
];

const security = [
  "2FA obrigatório para saques e alteração de dados sensíveis",
  "Whitelist de endereços de retirada sincronizada com o app",
  "Detecção de dispositivo novo com confirmação por e-mail",
  "Sessões criptografadas com TLS 1.3 e certificate pinning",
  "Bloqueio automático do app por inatividade",
];

const faqs = [
  {
    q: "O aplicativo Bitradex é gratuito?",
    a: "Sim. O download e o uso do app são gratuitos. Você paga apenas as taxas de negociação padrão da plataforma.",
  },
  {
    q: "Consigo usar a mesma conta no app e no site?",
    a: "Sim. A conta é única: saldos, ordens, posições e configurações de segurança são sincronizados em tempo real.",
  },
  {
    q: "O AI Bot continua operando com o app fechado?",
    a: "Sim. As estratégias rodam nos servidores da Bitradex, portanto seguem ativas mesmo com o celular desligado.",
  },
  {
    q: "É seguro operar pelo celular?",
    a: "Sim. O app usa biometria, 2FA, criptografia TLS 1.3 e whitelist de saques, os mesmos padrões da versão web.",
  },
];

const MobileApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 text-center">
            <Smartphone className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">App Bitradex para Android e iOS</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Negocie spot, futuros e AI Bot de qualquer lugar, com gráficos profissionais, alertas em
              tempo real e segurança de nível institucional.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="gradient" asChild>
                <a href={INVITE} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" /> Criar conta e baixar
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#recursos">Ver recursos</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="recursos" className="container mx-auto px-4 lg:px-8 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Tudo que você faz no desktop, na palma da mão</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-card/30 hover:border-primary/50 transition-all">
                <f.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 pb-16 max-w-6xl grid lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-border bg-card/30">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Especificações</h2>
            </div>
            <ul className="divide-y divide-border/60">
              {specs.map((s) => (
                <li key={s.label} className="flex flex-wrap justify-between gap-2 py-3 text-sm">
                  <span className="text-foreground font-semibold">{s.label}</span>
                  <span className="text-muted-foreground font-light">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-border bg-card/30">
            <h2 className="text-2xl font-bold text-foreground mb-6">Como começar em 4 passos</h2>
            <ol className="space-y-5">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-mono text-primary font-semibold">{s.n}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 pb-16 max-w-6xl">
          <div className="p-10 rounded-3xl border border-border bg-card/30">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Segurança no aplicativo</h2>
            </div>
            <ul className="space-y-3">
              {security.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground font-light">
                  <span className="text-primary mt-1">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 pb-20 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-card/30">
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground font-light">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default MobileApp;
