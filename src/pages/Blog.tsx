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

const categories = ["Todos", ...Array.from(new Set(posts.map((p) => p.category)))];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--gradient-halo)]" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-24 text-center">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex justify-center mb-8">
              <ol className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/40 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-border">/</li>
                <li className="text-foreground font-medium">Blog</li>
              </ol>
            </nav>

            <div className="badge-premium mb-6">
              <TrendingUp className="w-4 h-4" />
              Insights, Análises e Estratégias
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Bitradex <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Conteúdo premium sobre trading de criptomoedas, IA, análise de mercado e as últimas novidades do mundo
              cripto.
            </p>

            {/* Categories */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {categories.map((c, i) => (
                <span key={c} className="chip-category" data-active={i === 0}>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        {/* Featured Post */}
        <section className="container mx-auto px-4 lg:px-8 py-14">
          <Link to={`/blog/${featured.slug}`} className="group premium-card hairline-top block overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-50`} />
            <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center">
                <span className="badge-gold w-fit mb-5 px-3 py-1 rounded-full text-sm font-semibold">
                  {featured.category} · Destaque
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-6 text-[0.95rem] text-muted-foreground mb-7">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              <div className="relative aspect-video lg:aspect-auto rounded-2xl overflow-hidden border border-border/60 bg-gradient-to-br from-primary/25 to-transparent flex items-center justify-center">
                <TrendingUp className="w-28 h-28 text-primary/40" />
              </div>
            </div>
          </Link>
        </section>

        {/* Grid */}
        <section className="container mx-auto px-4 lg:px-8 pb-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground">Últimos Artigos</h3>
            <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group premium-card overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-30 group-hover:opacity-60 transition-opacity`}
                />
                <div className="relative p-7 flex flex-col h-full">
                  <span className="badge-premium mb-5 w-fit">{post.category}</span>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-[0.975rem] text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                  <hr className="divider-premium mt-auto mb-4" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {post.readTime}
                    </span>
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

