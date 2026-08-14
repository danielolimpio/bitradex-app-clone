// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
// Covers every public route in src/App.tsx, in all supported languages, with hreflang alternates.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://bitradex.app";

const LANGS = ["pt", "es", "de", "id", "th", "ko", "ru", "ja", "ms", "zh"] as const;
const HREFLANG: Record<string, string> = {
  en: "en",
  pt: "pt-BR",
  es: "es",
  de: "de",
  id: "id",
  th: "th",
  ko: "ko",
  ru: "ru",
  ja: "ja",
  ms: "ms",
  zh: "zh-CN",
};

interface Entry {
  path: string; // without language prefix, starts with "/" ("/" for home)
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const blogSlugs = [
  "como-comecar-trading-cripto-2026",
  "ai-bot-bitradex-como-funciona",
  "spot-vs-futures-qual-escolher",
  "seguranca-carteira-cripto",
  "analise-tecnica-basico-cripto",
  "programa-vip-referral-bitradex",
];

const entries: Entry[] = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/markets", changefreq: "daily", priority: "0.9" },
  { path: "/spot", changefreq: "daily", priority: "0.9" },
  { path: "/futures", changefreq: "daily", priority: "0.9" },
  { path: "/blog", changefreq: "daily", priority: "0.9" },
  ...blogSlugs.map((slug): Entry => ({ path: `/blog/${slug}`, changefreq: "monthly", priority: "0.8" })),
  { path: "/about-us", changefreq: "monthly", priority: "0.8" },
  { path: "/faq", changefreq: "weekly", priority: "0.8" },
  { path: "/help-center", changefreq: "weekly", priority: "0.8" },
  { path: "/trading-guide", changefreq: "weekly", priority: "0.8" },
  { path: "/support-center", changefreq: "monthly", priority: "0.7" },
  { path: "/security", changefreq: "monthly", priority: "0.7" },
  { path: "/referral", changefreq: "monthly", priority: "0.7" },
  { path: "/vip", changefreq: "monthly", priority: "0.7" },
  { path: "/api-docs", changefreq: "monthly", priority: "0.7" },
  { path: "/mobile-app", changefreq: "monthly", priority: "0.7" },
  { path: "/institutional", changefreq: "monthly", priority: "0.7" },
  { path: "/system-status", changefreq: "daily", priority: "0.5" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/our-team", changefreq: "monthly", priority: "0.5" },
  { path: "/careers", changefreq: "weekly", priority: "0.6" },
  { path: "/press-media", changefreq: "weekly", priority: "0.6" },
  { path: "/terms-of-service", changefreq: "yearly", priority: "0.3" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/risk-disclosure", changefreq: "yearly", priority: "0.3" },
  { path: "/aml-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/compliance", changefreq: "yearly", priority: "0.3" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
  { path: "/user-agreement", changefreq: "yearly", priority: "0.3" },
];

const url = (lang: string, path: string) => {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const p = path === "/" ? (prefix ? "" : "/") : path;
  return `${BASE_URL}${prefix}${p}`;
};


function generateSitemap() {
  const blocks: string[] = [];

  for (const entry of entries) {
    for (const lang of ["en", ...LANGS]) {
      const alternates = ["en", ...LANGS]
        .map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${url(l, entry.path)}"/>`,
        )
        .concat(
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${url("en", entry.path)}"/>`,
        );

      blocks.push(
        [
          `  <url>`,
          `    <loc>${url(lang, entry.path)}</loc>`,
          entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
          entry.priority ? `    <priority>${entry.priority}</priority>` : null,
          ...alternates,
          `  </url>`,
        ]
          .filter(Boolean)
          .join("\n"),
      );
    }
  }

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...blocks,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap());
console.log(`sitemap.xml written (${entries.length * (LANGS.length + 1)} urls)`);
