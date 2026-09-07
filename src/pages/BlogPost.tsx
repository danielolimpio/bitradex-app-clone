import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Calendar, Clock, ArrowLeft, ArrowRight, TrendingUp, BadgeCheck, Sparkles } from "lucide-react";

const INVITE_URL = "https://www.bitradex.ai/pt-br/account/register?inviteCode=7UII2W";

interface PostMeta {
  slug: string;
  isoDate: string;
  categoryKey: string;
}

const postMeta: PostMeta[] = [
  { slug: "como-comecar-trading-cripto-2026", isoDate: "2026-07-15", categoryKey: "guide" },
  { slug: "ai-bot-bitradex-como-funciona", isoDate: "2026-07-12", categoryKey: "aiTrading" },
  { slug: "spot-vs-futures-qual-escolher", isoDate: "2026-07-08", categoryKey: "education" },
  { slug: "seguranca-carteira-cripto", isoDate: "2026-07-03", categoryKey: "security" },
  { slug: "analise-tecnica-basico-cripto", isoDate: "2026-06-28", categoryKey: "analysis" },
  { slug: "programa-vip-referral-bitradex", isoDate: "2026-06-22", categoryKey: "benefits" },
];

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const meta = postMeta.find((p) => p.slug === slug);
  if (!meta) return <Navigate to="/blog" replace />;

  const text = (field: string) => t(`blog.posts.${meta.slug}.${field}`);
  const sections = (t(`blog.posts.${meta.slug}.sections`, { returnObjects: true }) as
    | { heading: string; body: string }[]
    | string) as { heading: string; body: string }[];
  const content = Array.isArray(sections) ? sections : [];
  const category = t(`blog.categories.${meta.categoryKey}`);
  const title = text("title");
  const excerpt = text("excerpt");

  const related = postMeta.filter((p) => p.slug !== meta.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${title} | Bitradex Blog`}
        description={excerpt}
        ogType="article"
        article={{
          publishedTime: meta.isoDate,
          section: category,
          author: t("blog.authorName"),
        }}
        breadcrumbs={[
          { name: "Blog", path: "/blog" },
          { name: title, path: `/blog/${meta.slug}` },
        ]}
      />
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--gradient-halo)]" />
          <div className="relative container mx-auto px-4 lg:px-8 py-14 lg:py-20 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/40 text-sm max-w-full overflow-hidden">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("blog.home")}
                  </Link>
                </li>
                <li className="text-border">/</li>
                <li>
                  <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    {t("blog.blog")}
                  </Link>
                </li>
                <li className="text-border">/</li>
                <li className="text-foreground font-medium truncate max-w-[16rem]">{category}</li>
              </ol>
            </nav>

            <span className="badge-premium mb-5">{category}</span>
            <h1 className="font-display text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.15]">{title}</h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">{excerpt}</p>

            <div className="premium-panel hairline-top relative p-5 flex flex-wrap items-center gap-5">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center font-display text-xl font-bold text-primary-foreground">
                  B
                </div>
                <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background border border-primary/50 flex items-center justify-center">
                  <BadgeCheck className="w-4 h-4 text-primary" aria-hidden="true" />
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-display text-base font-semibold text-foreground">{t("blog.authorName")}</p>
                <p className="text-sm text-muted-foreground">{t("blog.authorRole")}</p>
              </div>
              <div className="flex items-center gap-5 text-sm text-muted-foreground ml-auto">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
                  {text("date")}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                  {text("readTime")}
                </span>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        <article className="container mx-auto px-4 lg:px-8 py-14 max-w-3xl">
          <div className="premium-panel p-6 mb-12">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" /> {t("blog.inThisArticle")}
            </h2>
            <table className="table-premium !mt-0 !mb-0">
              <thead>
                <tr>
                  <th className="w-16">#</th>
                  <th>{t("blog.topic")}</th>
                </tr>
              </thead>
              <tbody>
                {content.map((sec, i) => (
                  <tr key={i}>
                    <td className="text-primary font-semibold">{String(i + 1).padStart(2, "0")}</td>
                    <td>{sec.heading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose-premium">
            {content.map((sec, i) => (
              <section key={i}>
                <h2>{sec.heading}</h2>
                <p>{sec.body}</p>
                {i === 0 && (
                  <div className="callout-premium">
                    <p className="!mb-0">
                      <strong className="mark-premium">{t("blog.highlightLabel")}</strong> {t("blog.highlightText")}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          <div className="premium-panel hairline-top relative mt-16 p-9 text-center border-primary/25">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">{t("blog.ctaTitle")}</h2>
            <p className="text-muted-foreground mb-7">{t("blog.ctaText")}</p>
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-button hover:-translate-y-0.5 transition-all"
            >
              {t("blog.ctaButton")} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </article>

        {/* Related articles */}
        <section className="container mx-auto px-4 lg:px-8 pb-24 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground">{t("blog.related")}</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group premium-card p-7 flex flex-col">
                <span className="badge-premium mb-5 w-fit">{t(`blog.categories.${p.categoryKey}`)}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {t(`blog.posts.${p.slug}.title`)}
                </h3>
                <p className="text-[0.95rem] text-muted-foreground line-clamp-3 mb-6">
                  {t(`blog.posts.${p.slug}.excerpt`)}
                </p>
                <hr className="divider-premium mt-auto mb-4" />
                <span className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    {t(`blog.posts.${p.slug}.date`)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    {t(`blog.posts.${p.slug}.readTime`)}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> {t("blog.back")}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default BlogPost;
