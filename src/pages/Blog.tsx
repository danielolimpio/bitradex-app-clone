import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

export const postMeta = [
  {
    slug: "como-comecar-trading-cripto-2026",
    categoryKey: "guide",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    slug: "ai-bot-bitradex-como-funciona",
    categoryKey: "aiTrading",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
  {
    slug: "spot-vs-futures-qual-escolher",
    categoryKey: "education",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "seguranca-carteira-cripto",
    categoryKey: "security",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
  },
  {
    slug: "analise-tecnica-basico-cripto",
    categoryKey: "analysis",
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
  },
  {
    slug: "programa-vip-referral-bitradex",
    categoryKey: "benefits",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
  },
];

const Blog = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = postMeta.map((m) => ({
    ...m,
    title: t(`blog.posts.${m.slug}.title`),
    excerpt: t(`blog.posts.${m.slug}.excerpt`),
    date: t(`blog.posts.${m.slug}.date`),
    readTime: t(`blog.posts.${m.slug}.readTime`),
    category: t(`blog.categories.${m.categoryKey}`),
  }));

  const [featured, ...rest] = posts;
  const categories = [t("blog.all"), ...postMeta.map((m) => t(`blog.categories.${m.categoryKey}`))];

  return (
    <div className="min-h-screen bg-background">
      <SEO breadcrumbs={[{ name: "Blog", path: "/blog" }]} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--gradient-halo)]" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-24 text-center">
            <nav aria-label="Breadcrumb" className="flex justify-center mb-8">
              <ol className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/40 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("blog.home")}
                  </Link>
                </li>
                <li className="text-border">/</li>
                <li className="text-foreground font-medium">{t("blog.blog")}</li>
              </ol>
            </nav>

            <div className="badge-premium mb-6">
              <TrendingUp className="w-4 h-4" aria-hidden="true" />
              {t("blog.badge")}
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              {t("blog.titlePrefix")} <span className="text-gradient">{t("blog.titleHighlight")}</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">{t("blog.subtitle")}</p>

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
                  {featured.category} · {t("blog.featured")}
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-6 text-[0.95rem] text-muted-foreground mb-7">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  {t("blog.readFull")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </div>
              <div className="relative aspect-video lg:aspect-auto rounded-2xl overflow-hidden border border-border/60 bg-gradient-to-br from-primary/25 to-transparent flex items-center justify-center">
                <TrendingUp className="w-28 h-28 text-primary/40" aria-hidden="true" />
              </div>
            </div>
          </Link>
        </section>

        {/* Grid */}
        <section className="container mx-auto px-4 lg:px-8 pb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground">{t("blog.latest")}</h2>
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
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[0.975rem] text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                  <hr className="divider-premium mt-auto mb-4" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
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
