import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

const posts = [
  {
    slug: "como-comecar-trading-cripto-2026",
    title: "Como Começar no Trading de Criptomoedas em 2026: Guia Completo",
    excerpt: "Um passo a passo definitivo para iniciantes que querem entrar no mercado cripto com segurança, estratégia e o suporte do AI Bot da Bitradex.",
    date: "15 Jul 2026",
    readTime: "8 min",
    category: "Guia",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    slug: "ai-bot-bitradex-como-funciona",
    title: "Bitradex AI Bot: Como a Inteligência Artificial Revoluciona o Trading",
    excerpt: "Descubra como o modelo ARK Trading analisa trilhões de parâmetros para executar operações lucrativas 24/7 no mercado de criptomoedas.",
    date: "12 Jul 2026",
    readTime: "10 min",
    category: "AI Trading",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
  {
    slug: "spot-vs-futures-qual-escolher",
    title: "Spot vs Futures: Qual Modalidade Escolher na Bitradex?",
    excerpt: "Entenda as diferenças entre Spot Trading e Futuros Perpétuos, quando usar cada uma e como maximizar seus resultados.",
    date: "08 Jul 2026",
    readTime: "6 min",
    category: "Educação",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "seguranca-carteira-cripto",
    title: "Segurança em Cripto: Como Proteger Seus Ativos Digitais",
    excerpt: "Melhores práticas de segurança, autenticação em dois fatores, cold storage e como a Bitradex protege bilhões em ativos.",
    date: "03 Jul 2026",
    readTime: "7 min",
    category: "Segurança",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
  },
  {
    slug: "analise-tecnica-basico-cripto",
    title: "Análise Técnica para Cripto: Do Zero ao Avançado",
    excerpt: "Aprenda a interpretar candles, suportes, resistências, RSI, MACD e outros indicadores essenciais no trading de criptomoedas.",
    date: "28 Jun 2026",
    readTime: "12 min",
    category: "Análise",
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
  },
  {
    slug: "programa-vip-referral-bitradex",
    title: "Programa VIP e Referral Bitradex: Maximize seus Benefícios",
    excerpt: "Conheça os níveis VIP, comissões de indicação e como escalar seus ganhos na plataforma Bitradex.",
    date: "22 Jun 2026",
    readTime: "5 min",
    category: "Benefícios",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-28 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-6">
              <TrendingUp className="w-4 h-4" />
              Insights, Análises e Estratégias
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Bitradex <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Conteúdo premium sobre trading de criptomoedas, IA, análise de mercado e as últimas novidades do mundo cripto.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <Link
            to={`/blog/${posts[0].slug}`}
            className="group block relative overflow-hidden rounded-3xl border border-border bg-card/30 hover:border-primary/50 transition-all duration-500"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${posts[0].gradient} opacity-60`} />
            <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
                  {posts[0].category} · Destaque
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 font-light">{posts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{posts[0].date}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{posts[0].readTime}</span>
                </div>
                <div className="inline-flex items-center gap-2 text-primary font-medium">
                  Ler artigo completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </Link>
        </section>

        {/* Grid */}
        <section className="container mx-auto px-4 lg:px-8 pb-24">
          <h3 className="text-2xl font-bold text-foreground mb-8">Últimos Artigos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-40 group-hover:opacity-70 transition-opacity`} />
                <div className="relative p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
                    {post.category}
                  </span>
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground font-light mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </Link>
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

export default Blog;
