import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Activity, CheckCircle2, AlertCircle } from "lucide-react";

const services = [
  { name: "Spot Trading Engine", status: "operational", uptime: "99.99%" },
  { name: "Futures Trading Engine", status: "operational", uptime: "99.98%" },
  { name: "AI Bot Service", status: "operational", uptime: "99.97%" },
  { name: "Wallet & Deposits", status: "operational", uptime: "99.99%" },
  { name: "Withdrawals", status: "operational", uptime: "99.95%" },
  { name: "API Gateway", status: "operational", uptime: "99.99%" },
  { name: "WebSocket Feeds", status: "operational", uptime: "99.98%" },
  { name: "Website & Mobile App", status: "operational", uptime: "99.99%" },
  { name: "KYC / Verification", status: "operational", uptime: "99.94%" },
  { name: "Customer Support", status: "operational", uptime: "99.96%" },
];

const incidents = [
  { date: "12 Jul 2026", title: "Latência elevada em WebSocket (resolvido)", desc: "Latência intermitente por 12 minutos afetou 3% dos usuários. Causa: pico de tráfego durante evento macro. Mitigação: capacidade ampliada." },
  { date: "28 Jun 2026", title: "Manutenção programada da API", desc: "Janela de 45 min para atualização de nós de produção. Trading não foi afetado." },
];

const SystemStatus = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "System Status", path: "/system-status" }]} />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-16 text-center">
            <Activity className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Status do Sistema</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mb-6">
              Monitoramento em tempo real dos serviços da Bitradex.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 font-medium">Todos os sistemas operacionais</span>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 py-16 max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Serviços</h2>
          <div className="rounded-2xl border border-border bg-card/30 overflow-hidden">
            {services.map((s, i) => (
              <div key={i} className={`flex items-center justify-between px-6 py-4 ${i !== services.length - 1 ? "border-b border-border" : ""}`}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-foreground font-medium">{s.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-sm text-muted-foreground">Uptime (90d): <span className="text-emerald-500 font-medium">{s.uptime}</span></span>
                  <span className="text-sm text-emerald-500">Operacional</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-16 mb-6">Histórico de Incidentes</h2>
          <div className="space-y-4">
            {incidents.map((inc, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-card/30">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">{inc.date}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{inc.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{inc.desc}</p>
                  </div>
                </div>
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

export default SystemStatus;
