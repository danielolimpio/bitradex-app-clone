import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Shield, Lock, Snowflake, KeyRound, Fingerprint, FileCheck, Server, AlertTriangle } from "lucide-react";

const layers = [
  { icon: Snowflake, title: "95% em Cold Storage", desc: "A maioria absoluta dos ativos permanece offline em hardware wallets institucionais com multi-assinatura." },
  { icon: Shield, title: "Multi-Assinatura (MPC)", desc: "Nenhuma transação de fundos ocorre sem múltiplas aprovações criptográficas independentes." },
  { icon: FileCheck, title: "Auditorias Contínuas", desc: "ISO 27001, SOC 2 Type II, PCI DSS e pentests trimestrais por firmas de segurança independentes." },
  { icon: Fingerprint, title: "Verificação Biométrica", desc: "KYC com liveness detection, reconhecimento facial e validação documental automatizada." },
  { icon: KeyRound, title: "2FA Obrigatório em Saques", desc: "Autenticação em dois fatores via app, whitelist de endereços e delay de segurança configurável." },
  { icon: Server, title: "Infraestrutura Redundante", desc: "Data centers em múltiplas regiões, DDoS protection L3-L7 e failover automático." },
];

const userTips = [
  "Ative 2FA com aplicativo (Google Authenticator/Authy) — nunca use SMS.",
  "Crie senhas únicas de 20+ caracteres em um gerenciador confiável.",
  "Ative whitelist de endereços de saque.",
  "Nunca compartilhe códigos 2FA, senhas ou seed phrases com ninguém.",
  "Verifique sempre se a URL é bitradex.app antes de fazer login.",
  "Habilite notificações por e-mail para todas as atividades sensíveis.",
];

const Security = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Security", path: "/security" }]} />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Segurança</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Camadas de proteção institucional para bilhões em ativos digitais e milhões de usuários.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Proteção Multi-Camadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {layers.map((l, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-card/30 hover:border-primary/50 transition-all">
                <l.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{l.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{l.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-10 rounded-3xl border border-border bg-card/30">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Como proteger sua conta</h2>
            </div>
            <ul className="space-y-3">
              {userTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground font-light">
                  <span className="text-primary mt-1">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Alerta contra Phishing</h3>
              <p className="text-sm text-muted-foreground font-light">
                A Bitradex NUNCA solicita sua senha, código 2FA ou seed phrase por e-mail, telefone, WhatsApp ou redes sociais. Desconfie de qualquer contato pedindo essas informações.
              </p>
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

export default Security;
