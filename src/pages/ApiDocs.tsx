import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Button } from "@/components/ui/button";
import { Code2, Terminal, Webhook, KeyRound, Gauge, ShieldCheck, Braces, Zap } from "lucide-react";

const INVITE = "https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W";

const features = [
  { icon: Zap, title: "Latência < 5ms", desc: "Motor de matching colocalizado com endpoints REST e WebSocket otimizados para HFT." },
  { icon: KeyRound, title: "Chaves com Permissões", desc: "Escopos granulares: leitura, spot, futuros e saques — com whitelist de IP obrigatória." },
  { icon: Webhook, title: "WebSocket em Tempo Real", desc: "Streams de order book, trades, candles, posições e execuções com reconexão automática." },
  { icon: Gauge, title: "Rate Limits Generosos", desc: "1.200 req/min no público, 6.000 req/min para contas VIP e market makers." },
  { icon: ShieldCheck, title: "Assinatura HMAC SHA-256", desc: "Todas as chamadas privadas assinadas, com timestamp e janela anti-replay." },
  { icon: Braces, title: "SDKs Oficiais", desc: "Bibliotecas em Python, Node.js, Go e Java, além de coleção Postman pronta para uso." },
];

const endpoints = [
  { method: "GET", path: "/api/v1/market/tickers", desc: "Preço, variação 24h e volume de todos os pares", auth: "Público" },
  { method: "GET", path: "/api/v1/market/depth", desc: "Livro de ofertas agregado até 500 níveis", auth: "Público" },
  { method: "GET", path: "/api/v1/market/klines", desc: "Candles de 1m a 1M para backtesting", auth: "Público" },
  { method: "GET", path: "/api/v1/account/balance", desc: "Saldos disponíveis, bloqueados e em posição", auth: "Assinado" },
  { method: "POST", path: "/api/v1/order", desc: "Cria ordem limit, market, stop ou OCO", auth: "Assinado" },
  { method: "DELETE", path: "/api/v1/order", desc: "Cancela ordem individual ou em lote", auth: "Assinado" },
  { method: "GET", path: "/api/v1/futures/positions", desc: "Posições abertas, alavancagem e PnL não realizado", auth: "Assinado" },
  { method: "WS", path: "/stream?topic=trade", desc: "Stream de execuções em tempo real", auth: "Público" },
];

const codeSample = `import time, hmac, hashlib, requests

API_KEY    = "sua_api_key"
API_SECRET = b"seu_api_secret"
BASE       = "https://api.bitradex.app"

def signed_get(path, params=None):
    params = params or {}
    params["timestamp"] = int(time.time() * 1000)
    query = "&".join(f"{k}={v}" for k, v in sorted(params.items()))
    sign  = hmac.new(API_SECRET, query.encode(), hashlib.sha256).hexdigest()
    r = requests.get(
        f"{BASE}{path}?{query}&signature={sign}",
        headers={"X-BTX-APIKEY": API_KEY},
        timeout=10,
    )
    r.raise_for_status()
    return r.json()

print(signed_get("/api/v1/account/balance"))`;

const steps = [
  { n: "01", title: "Crie sua conta", desc: "Registre-se e conclua a verificação KYC para liberar o acesso à API." },
  { n: "02", title: "Gere a chave de API", desc: "Em Configurações → API, crie a chave definindo permissões e whitelist de IP." },
  { n: "03", title: "Assine as requisições", desc: "Use HMAC SHA-256 sobre a query string ordenada, incluindo o timestamp." },
  { n: "04", title: "Vá para produção", desc: "Teste no ambiente sandbox e migre para produção quando estiver estável." },
];

const errors = [
  { code: "401", meaning: "Assinatura inválida ou chave inexistente" },
  { code: "403", meaning: "IP fora da whitelist ou permissão ausente" },
  { code: "418", meaning: "Rate limit excedido — aplique backoff exponencial" },
  { code: "422", meaning: "Parâmetros inválidos (quantidade, preço ou par)" },
  { code: "503", meaning: "Manutenção programada do endpoint" },
];

const methodColor = (m: string) =>
  m === "GET" ? "text-primary" : m === "POST" ? "text-emerald-400" : m === "DELETE" ? "text-red-400" : "text-yellow-400";

const ApiDocs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "API Documentation", path: "/api-docs" }]} />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 text-center">
            <Code2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Documentação da API Bitradex</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
              Integre bots, sistemas de gestão de risco e estratégias algorítmicas à infraestrutura de
              negociação da Bitradex com REST e WebSocket de alta performance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="gradient" asChild>
                <a href={INVITE} target="_blank" rel="noopener noreferrer">Gerar chave de API</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#endpoints">Ver endpoints</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 py-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Recursos para desenvolvedores</h2>
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

        <section id="endpoints" className="container mx-auto px-4 lg:px-8 pb-16 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Principais endpoints</h2>
          <div className="overflow-x-auto rounded-3xl border border-border bg-card/30">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">Método</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">Endpoint</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">Descrição</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">Acesso</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((e, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className={`px-6 py-4 font-mono text-sm font-semibold ${methodColor(e.method)}`}>{e.method}</td>
                    <td className="px-6 py-4 font-mono text-sm text-foreground whitespace-nowrap">{e.path}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground font-light">{e.desc}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground font-light">{e.auth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 pb-16 max-w-6xl grid lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-border bg-card/30">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Exemplo em Python</h2>
            </div>
            <pre className="overflow-x-auto rounded-2xl border border-border bg-background/70 p-5 text-[0.8rem] leading-relaxed">
              <code className="font-mono text-muted-foreground">{codeSample}</code>
            </pre>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl border border-border bg-card/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">Como começar</h2>
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

            <div className="p-8 rounded-3xl border border-border bg-card/30">
              <h2 className="text-2xl font-bold text-foreground mb-6">Códigos de erro</h2>
              <ul className="space-y-3">
                {errors.map((e) => (
                  <li key={e.code} className="flex gap-4 text-sm">
                    <span className="font-mono text-primary font-semibold w-10 shrink-0">{e.code}</span>
                    <span className="text-muted-foreground font-light">{e.meaning}</span>
                  </li>
                ))}
              </ul>
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

export default ApiDocs;
