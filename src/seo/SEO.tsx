import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { seoLocales, seoLangs, SITE_URL, BRAND, type SeoLang } from "./keywords";

interface SEOProps {
  /** Override page path used for the lookup. Defaults to current pathname. */
  pathKey?: string;
  /** Override the title for this specific page. */
  title?: string;
  /** Override the description for this specific page. */
  description?: string;
  /** Extra keywords to merge with the locale defaults. */
  extraKeywords?: string[];
  /** Optional Open Graph image. */
  image?: string;
  /** Open Graph type. Use "article" for blog posts. */
  ogType?: "website" | "article";
  /** Article metadata (blog posts only). */
  article?: {
    /** ISO date, e.g. 2026-07-15 */
    publishedTime: string;
    modifiedTime?: string;
    section?: string;
    author?: string;
  };
  /** Extra breadcrumb trail (Home is prepended automatically). */
  breadcrumbs?: { name: string; path: string }[];
  /** Any additional JSON-LD nodes to emit for this page. */
  jsonLd?: Record<string, unknown>[];
}

const DEFAULT_IMAGE = "https://bitradex.app/assets/bitradex-logo-CS93K5c3.png";


/**
 * Renders SEO meta tags scoped to the current i18n language.
 * Each language only exposes its own keyword set so search engines see
 * locale-specific content (e.g. PT keywords only when language is pt).
 */
const SEO = ({
  pathKey,
  title,
  description,
  extraKeywords,
  image,
  ogType = "website",
  article,
  breadcrumbs,
  jsonLd,
}: SEOProps) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const lang = (seoLangs as string[]).includes(i18n.language)
    ? (i18n.language as SeoLang)
    : "en";
  const locale = seoLocales[lang];

  const rawPath = pathKey ?? location.pathname ?? "/";
  // Strip language prefix (e.g. "/pt/spot" -> "/spot") for page lookup
  const langPrefixRegex = /^\/(en|pt|es|de|id|th|ko|ru|ja|ms|zh)(?=\/|$)/;
  const path = rawPath.replace(langPrefixRegex, "") || "/";
  // Prefer the locale-specific entry; fall back to the English entry so every
  // route keeps a unique title/description instead of reusing the site default.
  const page =
    locale.pages[path] ??
    seoLocales.en.pages[path] ?? {
      title: locale.defaultTitle,
      description: locale.defaultDescription,
    };


  const finalTitle = title ?? page.title;
  const finalDescription = description ?? page.description;
  const finalKeywords = [
    ...locale.keywords,
    ...(extraKeywords ?? []),
  ].join(", ");
  const langPrefix = lang === "en" ? "" : `/${lang}`;
  const canonical = `${SITE_URL}${langPrefix}${path === "/" ? (langPrefix ? "" : "/") : path}`;

  const ogImage = image ?? DEFAULT_IMAGE;

  // JSON-LD structured data
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    legalName: "BITRADEX FINTECH LIMITED",
    url: SITE_URL,
    logo: ogImage,
    sameAs: [
      "https://twitter.com/Bitradexen",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contact@bitradex.app",
        telephone: "+55 12 98251-9116",
        availableLanguage: ["Portuguese", "English", "Spanish"],
        url: `${SITE_URL}/contact`,
      },
    ],
  };


  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: SITE_URL,
    inLanguage: locale.htmlLang,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // BreadcrumbList — helps Google render breadcrumb rich results
  const trail = [{ name: "Home", path: "/" }, ...(breadcrumbs ?? [])];
  const breadcrumbJsonLd =
    trail.length > 1
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${langPrefix}${item.path === "/" ? "" : item.path}` || SITE_URL,
          })),
        }
      : null;

  const articleJsonLd =
    ogType === "article" && article
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: finalTitle,
          description: finalDescription,
          image: ogImage,
          inLanguage: locale.htmlLang,
          datePublished: article.publishedTime,
          dateModified: article.modifiedTime ?? article.publishedTime,
          articleSection: article.section,
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          author: {
            "@type": "Organization",
            name: article.author ?? BRAND,
            url: SITE_URL,
          },
          publisher: {
            "@type": "Organization",
            name: BRAND,
            logo: { "@type": "ImageObject", url: ogImage },
          },
        }
      : null;

  const extraNodes = [breadcrumbJsonLd, articleJsonLd, ...(jsonLd ?? [])].filter(
    Boolean,
  ) as Record<string, unknown>[];

  return (
    <Helmet>
      <html lang={locale.htmlLang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={BRAND} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />

      <link rel="canonical" href={canonical} />

      {/* Hreflang alternates for each supported language (path-prefixed URLs) */}
      {seoLangs.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={seoLocales[l].htmlLang}
          href={`${SITE_URL}${l === "en" ? "" : `/${l}`}${path === "/" ? "" : path}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path === "/" ? "" : path}`} />


      {/* Open Graph */}
      <meta property="og:site_name" content={locale.siteName} />
      <meta property="og:locale" content={locale.ogLocale} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={finalTitle} />
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article && (
        <meta
          property="article:modified_time"
          content={article.modifiedTime ?? article.publishedTime}
        />
      )}
      {article?.section && <meta property="article:section" content={article.section} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Bitradexen" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={finalTitle} />

      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      {extraNodes.map((node, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(node)}
        </script>
      ))}
    </Helmet>
  );
};


export default SEO;
