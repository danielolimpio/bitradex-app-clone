import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Calendar, Clock, ArrowLeft, TrendingUp } from "lucide-react";

const INVITE_URL = "https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W";

interface Post {
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: { heading: string; body: string }[];
}

const posts: Record<string, Post> = {
  "como-comecar-trading-cripto-2026": {
    title: "Como Começar no Trading de Criptomoedas em 2026: Guia Completo",
    date: "15 Jul 2026",
    readTime: "8 min",
    category: "Guia",
    excerpt: "Um passo a passo definitivo para iniciantes que querem entrar no mercado cripto com segurança, estratégia e o suporte do AI Bot da Bitradex.",
    content: [
      { heading: "Por que investir em criptomoedas em 2026?", body: "O mercado cripto atingiu marcos históricos em 2026, com adoção institucional em larga escala, ETFs consolidados e integração com sistemas financeiros tradicionais. Bitcoin, Ethereum e ativos como Solana e XRP se tornaram parte de portfólios diversificados globalmente. Começar agora é entrar em uma das maiores revoluções financeiras de nossa era." },
      { heading: "Passo 1: Escolha uma corretora confiável", body: "A Bitradex oferece registro em segundos, KYC ágil, mais de 500 pares de negociação e taxas competitivas. Sua infraestrutura suporta bilhões em volume diário e conta com cold storage, seguros e conformidade regulatória em múltiplas jurisdições." },
      { heading: "Passo 2: Comece pelo Spot Trading", body: "Para iniciantes, o mercado Spot é o mais recomendado: você compra e vende cripto pelo preço à vista, sem alavancagem. Comece com valores pequenos, aprenda a interface e domine a análise básica antes de partir para produtos alavancados." },
      { heading: "Passo 3: Diversifique com estratégia", body: "Nunca coloque tudo em um único ativo. Uma alocação equilibrada pode incluir 50% em Bitcoin, 30% em Ethereum e 20% em altcoins selecionadas. Rebalanceie mensalmente para manter sua estratégia alinhada." },
      { heading: "Passo 4: Automatize com o AI Bot da Bitradex", body: "O Bitradex AI Bot usa o modelo ARK Trading para executar estratégias 24/7, aproveitando oportunidades que humanos não conseguem monitorar. Com apenas um clique, você ativa uma inteligência de nível institucional para trabalhar por você." },
      { heading: "Passo 5: Aprenda continuamente", body: "Mercados evoluem rápido. Acompanhe nosso blog, participe da comunidade e teste estratégias em ambientes de simulação antes de usar capital real. O sucesso no trading vem da educação constante." },
    ],
  },
  "ai-bot-bitradex-como-funciona": {
    title: "Bitradex AI Bot: Como a Inteligência Artificial Revoluciona o Trading",
    date: "12 Jul 2026",
    readTime: "10 min",
    category: "AI Trading",
    excerpt: "Descubra como o modelo ARK Trading analisa trilhões de parâmetros para executar operações lucrativas 24/7 no mercado de criptomoedas.",
    content: [
      { heading: "O que é o Bitradex AI Bot?", body: "É um sistema de trading automatizado alimentado pelo modelo ARK Trading, com mais de um trilhão de parâmetros analisando dados de mercado em tempo real. Ele identifica padrões, executa entradas e saídas otimizadas e gerencia risco automaticamente." },
      { heading: "Como funciona a arquitetura ARK Trading?", body: "O ARK combina redes neurais profundas com aprendizado por reforço, treinado em décadas de dados de mercado. Ele avalia sentimento de mercado, volume, volatilidade, correlações entre ativos e mais de 200 indicadores técnicos simultaneamente." },
      { heading: "Vantagens do trading automatizado com IA", body: "1) Operação 24/7 sem fadiga. 2) Ausência de vieses emocionais. 3) Velocidade de execução em milissegundos. 4) Backtesting contínuo. 5) Gestão de risco adaptativa. 6) Transparência total nas operações." },
      { heading: "Como começar em 3 passos", body: "1) Crie sua conta na Bitradex. 2) Escolha uma estratégia (conservadora, moderada ou agressiva). 3) Ative o bot com um clique. Ele começa a operar imediatamente e você acompanha resultados em tempo real no dashboard." },
      { heading: "Segurança e transparência", body: "Todas as operações são registradas na blockchain e visíveis no seu painel. O bot nunca tem custódia dos seus fundos — ele opera exclusivamente via API dentro da sua conta." },
    ],
  },
  "spot-vs-futures-qual-escolher": {
    title: "Spot vs Futures: Qual Modalidade Escolher na Bitradex?",
    date: "08 Jul 2026",
    readTime: "6 min",
    category: "Educação",
    excerpt: "Entenda as diferenças entre Spot Trading e Futuros Perpétuos, quando usar cada uma e como maximizar seus resultados.",
    content: [
      { heading: "O que é Spot Trading?", body: "No mercado Spot você compra e vende criptomoedas pelo preço atual, tornando-se dono do ativo. É a forma mais simples e segura de operar, ideal para holders de longo prazo e iniciantes." },
      { heading: "O que são Futuros Perpétuos?", body: "Contratos derivativos que permitem operar com alavancagem de até 125x, tanto comprado quanto vendido. Não têm data de vencimento, o que os torna muito populares no mercado cripto." },
      { heading: "Quando usar Spot", body: "Ideal para: acumulação de longo prazo, DCA (dollar cost averaging), diversificação de portfólio e para quem prefere menor risco. Você nunca pode perder mais do que investiu." },
      { heading: "Quando usar Futures", body: "Ideal para: hedge de posições, especulação de curto prazo, aproveitamento de tendências fortes com alavancagem e traders experientes que sabem gerenciar risco." },
      { heading: "Recomendação Bitradex", body: "Iniciantes devem começar 100% no Spot. Após dominar análise técnica e gestão de risco, alocar no máximo 10-20% do capital para Futures com alavancagem baixa (2x-5x)." },
    ],
  },
  "seguranca-carteira-cripto": {
    title: "Segurança em Cripto: Como Proteger Seus Ativos Digitais",
    date: "03 Jul 2026",
    readTime: "7 min",
    category: "Segurança",
    excerpt: "Melhores práticas de segurança, autenticação em dois fatores, cold storage e como a Bitradex protege bilhões em ativos.",
    content: [
      { heading: "Ative 2FA em tudo", body: "Use aplicativos como Google Authenticator ou Authy — nunca SMS. O 2FA reduz em mais de 99% o risco de acesso não autorizado à sua conta." },
      { heading: "Senhas fortes e únicas", body: "Use um gerenciador de senhas (1Password, Bitwarden) para gerar senhas únicas de 20+ caracteres para cada serviço. Nunca reutilize senhas." },
      { heading: "Cold storage para grandes valores", body: "Ativos que você não vai mexer por meses devem estar em hardware wallets (Ledger, Trezor). A Bitradex mantém 95% dos fundos em cold storage institucional." },
      { heading: "Cuidado com phishing", body: "Sempre verifique a URL (bitradex.app). Nunca clique em links de emails suspeitos. A Bitradex nunca pede sua senha ou seed phrase." },
      { heading: "Whitelist de endereços de saque", body: "Ative essa funcionalidade nas configurações para que saques só possam ser feitos para endereços pré-aprovados, com delay de segurança." },
    ],
  },
  "analise-tecnica-basico-cripto": {
    title: "Análise Técnica para Cripto: Do Zero ao Avançado",
    date: "28 Jun 2026",
    readTime: "12 min",
    category: "Análise",
    excerpt: "Aprenda a interpretar candles, suportes, resistências, RSI, MACD e outros indicadores essenciais no trading de criptomoedas.",
    content: [
      { heading: "Candlesticks: a linguagem do mercado", body: "Cada candle mostra abertura, fechamento, máxima e mínima em um período. Padrões como Doji, Hammer, Engulfing e Morning Star sinalizam reversões e continuações." },
      { heading: "Suportes e Resistências", body: "Níveis onde o preço historicamente pausa. Suporte = piso; Resistência = teto. Rompimentos com volume geralmente confirmam movimentos direcionais." },
      { heading: "RSI (Relative Strength Index)", body: "Indicador de momentum entre 0-100. Acima de 70 = sobrecomprado; abaixo de 30 = sobrevendido. Divergências entre RSI e preço são sinais poderosos." },
      { heading: "MACD (Moving Average Convergence Divergence)", body: "Mostra a relação entre duas médias móveis. Cruzamentos da linha MACD com sua sinal geram sinais de compra/venda; o histograma mostra a força do momentum." },
      { heading: "Fibonacci Retracement", body: "Ferramenta para identificar níveis de correção (23.6%, 38.2%, 50%, 61.8%, 78.6%) em tendências. Muito usado para definir entradas em pullbacks." },
      { heading: "Volume: o combustível dos movimentos", body: "Movimentos sem volume tendem a falhar. Sempre confirme rompimentos e reversões com aumento significativo de volume." },
    ],
  },
  "programa-vip-referral-bitradex": {
    title: "Programa VIP e Referral Bitradex: Maximize seus Benefícios",
    date: "22 Jun 2026",
    readTime: "5 min",
    category: "Benefícios",
    excerpt: "Conheça os níveis VIP, comissões de indicação e como escalar seus ganhos na plataforma Bitradex.",
    content: [
      { heading: "Programa VIP em 8 níveis", body: "Do VIP 1 ao VIP 8, quanto maior seu volume de trading, menores as taxas e maiores os benefícios: gerente dedicado, saques prioritários, APIs premium e acesso antecipado a novos produtos." },
      { heading: "Programa de Indicação", body: "Ganhe até 40% de comissão vitalícia sobre as taxas de trading dos usuários que você indicar. Não há limite de indicados nem valor mínimo de comissão." },
      { heading: "Como escalar seus ganhos", body: "Combine seu próprio trading (usando o AI Bot) com uma rede de indicados. Muitos parceiros Bitradex ganham 5-6 dígitos mensais apenas em comissões." },
      { heading: "Comece agora", body: "Crie sua conta usando o link de convite e já entre com bônus de boas-vindas e taxas reduzidas nos primeiros 30 dias." },
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const post = slug ? posts[slug] : undefined;
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`${post.title} | Bitradex Blog`} description={post.excerpt} />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-20 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
            </Link>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">{post.title}</h1>
            <p className="text-lg text-muted-foreground font-light mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-4 lg:px-8 py-16 max-w-3xl">
          {post.content.map((sec, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{sec.heading}</h2>
              <p className="text-muted-foreground leading-relaxed font-light text-lg">{sec.body}</p>
            </section>
          ))}

          <div className="mt-16 p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent text-center">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Pronto para começar a operar?</h3>
            <p className="text-muted-foreground mb-6 font-light">Junte-se a milhões de traders na Bitradex e ative o AI Bot em segundos.</p>
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:shadow-button transition-all"
            >
              Criar Conta Grátis
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default BlogPost;
