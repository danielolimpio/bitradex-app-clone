import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { BookOpen, TrendingUp, BarChart3, Target, Zap, Brain } from "lucide-react";

const INVITE_URL = "https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W";

const sections = [
  { icon: BookOpen, title: "Fundamentos do Mercado Cripto", body: "Entenda o que são criptomoedas, blockchain, wallets, corretoras centralizadas (CEX) e descentralizadas (DEX), e como o mercado 24/7 funciona. Base essencial para qualquer trader." },
  { icon: TrendingUp, title: "Spot Trading: Compra e Venda", body: "Aprenda a executar ordens a mercado, limitadas, stop-loss e take-profit. Entenda o order book, spread, slippage e como calcular seu preço médio de entrada." },
  { icon: Zap, title: "Futuros Perpétuos e Alavancagem", body: "Domine posições long/short, alavancagem, margem, funding rate, liquidação e como gerenciar risco em operações alavancadas. Alavancagem multiplica ganhos — e perdas." },
  { icon: BarChart3, title: "Análise Técnica", body: "Interpretação de gráficos, candles, suportes, resistências, tendências, médias móveis, RSI, MACD, Bandas de Bollinger, Fibonacci e teoria de Elliott Wave." },
  { icon: Brain, title: "Análise Fundamentalista", body: "Como avaliar projetos cripto: tokenomics, whitepaper, equipe, roadmap, adoção, TVL, receitas, competidores e catalisadores de curto e longo prazo." },
  { icon: Target, title: "Gestão de Risco e Psicologia", body: "Regra do 1-2% por operação, stop-loss disciplinado, tamanho de posição, diversificação, controle emocional e como evitar FOMO, revenge trading e overtrading." },
];

const TradingGuide = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 text-center">
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Guia de Trading</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Do zero ao trader profissional: conteúdo completo, prático e atualizado para dominar o mercado cripto.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 py-16 max-w-5xl">
          <div className="space-y-6">
            {sections.map((s, i) => (
              <div key={i} className="group flex gap-6 p-8 rounded-2xl border border-border bg-card/30 hover:border-primary/50 transition-all">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-primary font-medium mb-1">MÓDULO {String(i + 1).padStart(2, "0")}</div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed font-light">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent text-center">
            <h2 className="text-3xl font-bold text-foreground mb-3">Coloque em prática agora</h2>
            <p className="text-muted-foreground mb-6 font-light">Crie sua conta e comece a operar com o AI Bot da Bitradex.</p>
            <a href={INVITE_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:shadow-button transition-all">
              Começar Agora
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

export default TradingGuide;
