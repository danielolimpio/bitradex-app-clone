// SEO keywords by language. Each language gets ONLY its own keyword set.
// Brand keyword "Bitradex" is global priority across all locales.

export type SeoLang = "en" | "pt" | "es" | "de" | "id" | "th" | "ko" | "ru" | "ja" | "ms" | "zh";

export const SITE_URL = "https://bitradex.app";
export const BRAND = "Bitradex";

interface SeoLocale {
  htmlLang: string;
  ogLocale: string;
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  keywords: string[];
  pages: Record<string, { title: string; description: string }>;
}

const brandCore = [
  // Primary brand
  "Bitradex", "bitradex", "BITRADEX", "Bitradex.com", "Bitradex.app", "Bitradex.ai",
  "Bitradex login", "Bitradex sign in", "Bitradex log in", "Bitradex register", "Bitradex sign up",
  "Bitradex app", "Bitradex mobile app", "Bitradex iOS app", "Bitradex Android app",
  "Bitradex app download", "Bitradex download", "Bitradex official site",
  // Secondary brand
  "Bitradex exchange", "Bitradex crypto exchange", "Bitradex platform", "Bitradex trading platform",
  "Bitradex AI", "Bitradex AI bot", "Bitradex AI trading", "Bitradex AI trading bot",
  "Bitradex automated trading", "Bitradex quant trading", "Bitradex algorithmic trading",
  "Bitradex ARK model", "Bitradex ARK trading model", "Bitradex ARK AI", "ARK trading model",
  "Bitradex futures", "Bitradex perpetual", "Bitradex futures trading", "Bitradex derivatives",
  "Bitradex spot", "Bitradex spot trading", "Bitradex margin", "Bitradex margin trading",
  "Bitradex staking", "Bitradex earn", "Bitradex savings", "Bitradex launchpad",
  "Bitradex token", "BTX token", "BTX coin", "Bitradex BTX", "BTX crypto",
  "BTX coinmarketcap", "BTX coingecko", "Bitradex coinmarketcap", "Bitradex coingecko",
  "Bitradex certik", "Bitradex CertiK audit", "Bitradex security audit",
  "Bitradex proof of reserves", "Bitradex POR", "Bitradex audit report",
  "Bitradex card", "BTX card", "Bitradex BTX card", "Bitradex Visa card", "Bitradex crypto card",
  "Bitradex UK", "Bitradex UK registration", "Bitradex MSB", "Bitradex MSB registration",
  "BITRADEX FINTECH LIMITED", "Bitradex Fintech", "Bitradex company",
  // Long-tail and trust
  "Bitradex review", "Bitradex reviews", "Bitradex review 2025", "Bitradex review 2026",
  "Bitradex legit", "Bitradex legitimate", "Bitradex scam", "Bitradex fraud",
  "Bitradex safe", "Bitradex safety", "Bitradex trustworthy", "Bitradex reliable",
  "Bitradex testimonials", "Bitradex feedback", "Bitradex user reviews", "Bitradex ratings",
  "is Bitradex safe", "is Bitradex legit", "is Bitradex a scam", "is Bitradex trustworthy",
  // Onboarding
  "Bitradex invite code", "Bitradex referral code", "Bitradex referral", "Bitradex referral program",
  "Bitradex bonus", "Bitradex welcome bonus", "Bitradex signup bonus", "Bitradex referral bonus",
  "Bitradex promo code", "Bitradex coupon",
  // Operations
  "Bitradex how to withdraw", "Bitradex how to deposit", "Bitradex withdrawal", "Bitradex deposit",
  "Bitradex withdrawal limits", "Bitradex deposit limits", "Bitradex fees", "Bitradex trading fees",
  "Bitradex withdrawal fees", "Bitradex KYC", "Bitradex verification", "Bitradex tutorial",
  "Bitradex guide", "Bitradex how to use", "Bitradex how to trade", "Bitradex demo",
  // Earnings
  "Bitradex ROI", "Bitradex passive income", "Bitradex yield", "Bitradex investment",
  "Bitradex returns", "Bitradex profit", "Bitradex daily income", "Bitradex monthly income",
  "Bitradex earnings", "Bitradex APY", "Bitradex APR",
  // Comparisons
  "Bitradex vs Binance", "Bitradex vs OKX", "Bitradex vs Bybit", "Bitradex vs Coinbase",
  "Bitradex vs Kraken", "Bitradex vs KuCoin", "Bitradex vs MEXC", "Bitradex vs Gate.io",
  "Bitradex vs Bitget", "Bitradex alternative", "Bitradex competitors",
  "best AI crypto exchange", "best AI crypto trading bot", "best automated crypto exchange",
  // Security & compliance
  "Bitradex security", "Bitradex 2FA", "Bitradex cold storage", "Bitradex insurance",
  "Bitradex regulation", "Bitradex regulated", "Bitradex license", "Bitradex compliance",
  "Bitradex AML", "Bitradex KYC verification", "Bitradex Singapore", "Bitradex Europe",
  "Bitradex Asia", "Bitradex global",
];

export const seoLocales: Record<SeoLang, SeoLocale> = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | AI-Powered Crypto Exchange & Trading Platform",
    defaultDescription:
      "Trusted AI-powered crypto exchange. Trade BTC, ETH, BNB & SOL on spot and futures with the Bitradex AI bot and earn with BTX token.",
    keywords: [
      ...brandCore,
      "Bitradex review",
      "Bitradex legit",
      "Bitradex scam",
      "Bitradex trustworthy",
      "Bitradex reliable",
      "Bitradex fraud",
      "Bitradex register",
      "Bitradex sign up",
      "Bitradex invite code",
      "Bitradex referral code",
      "Bitradex bonus",
      "Bitradex welcome bonus",
      "Bitradex signup bonus",
      "Bitradex referral bonus",
      "Bitradex how to withdraw",
      "Bitradex how to deposit",
      "Bitradex withdrawal",
      "Bitradex deposit",
      "Bitradex fees",
      "Bitradex KYC",
      "Bitradex tutorial",
      "Bitradex app download",
      "Bitradex mobile app",
      "Bitradex iOS",
      "Bitradex Android",
      "Bitradex play store",
      "Bitradex app store",
      "Bitradex ROI",
      "Bitradex passive income",
      "Bitradex yield",
      "Bitradex investment",
      "Bitradex returns",
      "Bitradex profit",
      "Bitradex daily income",
      "Bitradex vs binance",
      "Bitradex vs OKX",
      "Bitradex vs bybit",
      "Bitradex alternative",
      "Bitradex security",
      "Bitradex regulation",
      "Bitradex MSB registration",
      "Bitradex Singapore",
      "AI crypto trading bot",
      "automated crypto trading platform",
      "best AI crypto exchange",
    ],
    pages: {
      "/": {
        title: "Bitradex | AI-Powered Crypto Exchange & Trading Platform",
        description:
          "Trade crypto with confidence on Bitradex. AI trading bot, spot & futures markets, BTX token, CertiK audited security and global compliance.",
      },
      "/about-us": {
        title: "About Bitradex | Mission, Team & Company Information",
        description:
          "Learn about Bitradex, BITRADEX FINTECH LIMITED, our mission, team and our vision for AI-powered crypto trading worldwide.",
      },
      "/markets": {
        title: "Bitradex Markets | Live Crypto Prices BTC, ETH, BNB, SOL",
        description:
          "Live crypto market prices on Bitradex. Track BTC, ETH, BNB, SOL and the BTX token in real time across spot and futures markets.",
      },
      "/spot": {
        title: "Bitradex Spot Trading | Buy & Sell Crypto Instantly",
        description:
          "Trade crypto on Bitradex Spot with low fees, deep liquidity and TradingView charts for BTC, ETH, BNB, SOL and BTX.",
      },
      "/futures": {
        title: "Bitradex Futures | Leveraged Crypto Derivatives Trading",
        description:
          "Trade Bitradex Futures with up to high leverage, advanced risk tools and AI-powered automation on a CertiK audited platform.",
      },
      "/institutional": {
        title: "Bitradex Institutional | OTC, Custody & API Trading",
        description:
          "Bitradex institutional services: OTC desk, secure custody, API access, deep liquidity and dedicated support for funds and corporates.",
      },
      "/contact": {
        title: "Contact Bitradex | Customer Support & Help Center",
        description:
          "Contact the Bitradex team for support with login, withdrawals, deposits, KYC, AI bot and account questions.",
      },
      "/our-team": {
        title: "Our Team | Bitradex Leadership & Engineers",
        description:
          "Meet the Bitradex leadership team behind our AI-powered crypto exchange and the BTX token ecosystem.",
      },
      "/careers": {
        title: "Careers at Bitradex | Join the Crypto & AI Revolution",
        description:
          "Open roles at Bitradex. Build the future of AI-powered crypto trading with a global team in engineering, compliance and product.",
      },
      "/press-media": {
        title: "Bitradex Press & Media | News, Brand Assets & Releases",
        description:
          "Bitradex press releases, media kit, brand assets and official statements about the BTX token, partnerships and milestones.",
      },
      "/terms-of-service": {
        title: "Terms of Service | Bitradex",
        description:
          "Read the Bitradex Terms of Service governing use of the platform, accounts, trading, fees and the BTX token.",
      },
      "/privacy-policy": {
        title: "Privacy Policy | Bitradex",
        description:
          "How Bitradex collects, uses and protects your personal data, KYC information and account activity.",
      },
      "/risk-disclosure": {
        title: "Risk Disclosure | Bitradex Crypto Trading Risks",
        description:
          "Important risk disclosure for trading crypto, futures and derivatives on Bitradex, including volatility and leverage risks.",
      },
      "/aml-policy": {
        title: "AML Policy | Bitradex Anti-Money Laundering",
        description:
          "Bitradex AML policy, KYC requirements and our commitment to fighting money laundering and terrorist financing.",
      },
      "/compliance": {
        title: "Compliance | Bitradex Global Regulatory Standards",
        description:
          "Bitradex compliance program: UK registration, MSB registration, sanctions screening and regulatory cooperation worldwide.",
      },
      "/faq": {
        title: "Bitradex FAQ | Help Center, Support & Trading Questions",
        description:
          "Bitradex FAQ: answers about sign up, login, KYC, deposits, withdrawals, fees, AI trading bot, BTX token, security and how to start trading crypto.",
      },
      "/disclaimer": {
        title: "Disclaimer | Bitradex Legal Notice & Liability",
        description:
          "Bitradex legal disclaimer covering platform information, third-party content, market data accuracy and limitation of liability.",
      },
      "/user-agreement": {
        title: "User Agreement | Bitradex Account & Platform Terms",
        description:
          "Bitradex user agreement defining account rules, trading conduct, eligibility, prohibited activities and platform responsibilities.",
      },
      "/blog": {
        title: "Bitradex Blog | Crypto Trading Guides, AI Bot & Market News",
        description:
          "Tutorials, AI bot strategies, market analysis and platform updates from the Bitradex team — practical guides for spot and futures traders.",
      },
      "/help-center": {
        title: "Bitradex Help Center | Account, Deposits & Trading Support",
        description:
          "Step-by-step help for Bitradex accounts: verification, deposits, withdrawals, security settings, AI bot setup and troubleshooting.",
      },
      "/trading-guide": {
        title: "Crypto Trading Guide | Learn Spot & Futures on Bitradex",
        description:
          "Learn crypto trading from zero: order types, leverage, risk management, technical analysis and how to automate trades with the Bitradex AI bot.",
      },
      "/system-status": {
        title: "Bitradex System Status | Platform Uptime & Incidents",
        description:
          "Live status of Bitradex trading engine, deposits, withdrawals, API and AI bot services, plus incident history and maintenance windows.",
      },
      "/support-center": {
        title: "Bitradex Support Center | Contact 24/7 Customer Service",
        description:
          "Reach Bitradex support 24/7 via live chat, WhatsApp, email or ticket, with response times and guidance for account and trading issues.",
      },
      "/security": {
        title: "Bitradex Security | CertiK Audit, Cold Storage & 2FA",
        description:
          "How Bitradex protects funds: CertiK audit, cold storage, multi-signature wallets, 2FA, withdrawal whitelists and continuous monitoring.",
      },
      "/referral": {
        title: "Bitradex Referral Program | Invite Code & Commissions",
        description:
          "Earn lifetime commissions with the Bitradex referral program: share your invite code, track rewards and unlock higher commission tiers.",
      },
      "/vip": {
        title: "Bitradex VIP Program | Fee Discounts & Priority Support",
        description:
          "Bitradex VIP tiers explained: lower trading fees, higher withdrawal limits, dedicated account managers and priority 24/7 support.",
      },
    },
  },


  pt: {
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | Exchange de Criptomoedas com IA e Bot de Trading",
    defaultDescription:
      "A Bitradex é uma corretora de criptomoedas com inteligência artificial. Negocie BTC, ETH, BNB e SOL no spot e futuros, use o bot de IA e ganhe com o token BTX.",
    keywords: [
      ...brandCore,
      "Bitradex é confiável",
      "Bitradex é golpe",
      "Bitradex seguro",
      "Bitradex reclame aqui",
      "Bitradex é uma corretora",
      "Bitradex funciona",
      "Bitradex depoimentos",
      "Bitradex opiniões",
      "Bitradex reclamações",
      "Bitradex vale a pena",
      "Bitradex como ganhar dinheiro",
      "Bitradex cadastro",
      "Bitradex criação de conta",
      "Bitradex login",
      "Bitradex saque",
      "Bitradex depósito",
      "Bitradex como usar",
      "Bitradex tutorial",
      "Bitradex taxas",
      "Bitradex KYC",
      "Bitradex bônus",
      "Bitradex código de convite",
      "Bitradex código de indicação",
      "Bitradex bot de IA",
      "Bitradex trading automatizado",
      "Bitradex futuros",
      "Bitradex spot",
      "Bitradex staking",
      "Bitradex token",
      "Bitradex BTX",
      "Bitradex coinmarketcap",
      "Bitradex certik",
      "Bitradex auditoria de segurança",
      "Bitradex cartão",
      "Bitradex registro UK",
      "Bitradex vs binance",
      "Bitradex alternativa",
      "Bitradex renda passiva",
      "Bitradex investimento",
      "Bitradex lucro",
      "corretora de criptomoedas com IA",
      "melhor exchange de criptomoedas",
      "bot de trading de criptomoedas",
    ],
    pages: {
      "/": {
        title: "Bitradex | Exchange de Criptomoedas com IA e Bot de Trading",
        description:
          "Negocie cripto com confiança na Bitradex. Bot de IA, spot e futuros, token BTX, segurança auditada pela CertiK e compliance global.",
      },
      "/about-us": {
        title: "Sobre a Bitradex | Missão, Equipe e Empresa",
        description:
          "Conheça a Bitradex (BITRADEX FINTECH LIMITED), nossa missão, equipe e visão para o trading de cripto com IA em todo o mundo.",
      },
      "/markets": {
        title: "Mercados Bitradex | Cotações ao Vivo BTC, ETH, BNB, SOL",
        description:
          "Cotações de criptomoedas ao vivo na Bitradex. Acompanhe BTC, ETH, BNB, SOL e o token BTX em tempo real no spot e futuros.",
      },
      "/spot": {
        title: "Bitradex Spot | Compre e Venda Cripto na Hora",
        description:
          "Negocie cripto no Spot da Bitradex com taxas baixas, alta liquidez e gráficos TradingView de BTC, ETH, BNB, SOL e BTX.",
      },
      "/futures": {
        title: "Bitradex Futuros | Trading com Alavancagem em Cripto",
        description:
          "Negocie Bitradex Futuros com alavancagem, ferramentas de risco avançadas e automação de IA em uma plataforma auditada pela CertiK.",
      },
      "/institutional": {
        title: "Bitradex Institucional | OTC, Custódia e API",
        description:
          "Serviços institucionais da Bitradex: mesa OTC, custódia segura, acesso por API, alta liquidez e suporte dedicado para fundos e empresas.",
      },
      "/contact": {
        title: "Contato Bitradex | Suporte ao Cliente e Central de Ajuda",
        description:
          "Entre em contato com a equipe Bitradex para suporte com login, saque, depósito, KYC, bot de IA e dúvidas da sua conta.",
      },
      "/our-team": {
        title: "Nossa Equipe | Liderança e Engenheiros da Bitradex",
        description:
          "Conheça a liderança da Bitradex por trás da nossa exchange de criptomoedas com IA e do ecossistema do token BTX.",
      },
      "/careers": {
        title: "Carreiras na Bitradex | Junte-se à Revolução de IA e Cripto",
        description:
          "Vagas abertas na Bitradex. Construa o futuro do trading de cripto com IA em uma equipe global de engenharia, compliance e produto.",
      },
      "/press-media": {
        title: "Imprensa e Mídia Bitradex | Notícias e Releases Oficiais",
        description:
          "Releases, kit de imprensa, ativos de marca e comunicados oficiais da Bitradex sobre o token BTX, parcerias e marcos.",
      },
      "/terms-of-service": {
        title: "Termos de Serviço | Bitradex",
        description:
          "Leia os Termos de Serviço da Bitradex que regem o uso da plataforma, contas, trading, taxas e o token BTX.",
      },
      "/privacy-policy": {
        title: "Política de Privacidade | Bitradex",
        description:
          "Como a Bitradex coleta, utiliza e protege seus dados pessoais, informações de KYC e atividade da conta.",
      },
      "/risk-disclosure": {
        title: "Divulgação de Riscos | Riscos do Trading na Bitradex",
        description:
          "Divulgação de riscos para negociação de cripto, futuros e derivativos na Bitradex, incluindo volatilidade e alavancagem.",
      },
      "/aml-policy": {
        title: "Política AML | Prevenção à Lavagem de Dinheiro Bitradex",
        description:
          "Política AML da Bitradex, requisitos de KYC e nosso compromisso no combate à lavagem de dinheiro e ao financiamento do terrorismo.",
      },
      "/compliance": {
        title: "Compliance | Padrões Regulatórios Globais da Bitradex",
        description:
          "Programa de compliance da Bitradex: registro no Reino Unido, MSB, screening de sanções e cooperação regulatória.",
      },
      "/faq": {
        title: "FAQ Bitradex | Central de Ajuda, Suporte e Dúvidas",
        description:
          "FAQ da Bitradex: cadastro, login, KYC, depósitos, saques, taxas, bot de IA, token BTX, segurança e como começar a negociar cripto.",
      },
      "/disclaimer": {
        title: "Aviso Legal | Bitradex Termos de Isenção",
        description:
          "Aviso legal da Bitradex sobre informações da plataforma, conteúdo de terceiros, dados de mercado e limitação de responsabilidade.",
      },
      "/user-agreement": {
        title: "Acordo do Usuário | Termos de Conta Bitradex",
        description:
          "Acordo do usuário Bitradex: regras da conta, conduta de trading, elegibilidade, atividades proibidas e responsabilidades da plataforma.",
      },
    },
  },

  es: {
    htmlLang: "es",
    ogLocale: "es_ES",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | Exchange de Criptomonedas con IA y Bot de Trading",
    defaultDescription:
      "Bitradex es un exchange de criptomonedas con inteligencia artificial. Opera BTC, ETH, BNB y SOL en spot y futuros, usa el bot de IA y gana con el token BTX.",
    keywords: [
      ...brandCore,
      "Bitradex es confiable",
      "Bitradex estafa",
      "Bitradex opiniones",
      "Bitradex funciona",
      "Bitradex seguro",
      "Bitradex reseña",
      "Bitradex registro",
      "Bitradex iniciar sesión",
      "Bitradex retiro",
      "Bitradex depósito",
      "Bitradex comisiones",
      "Bitradex KYC",
      "Bitradex tutorial",
      "Bitradex cómo usar",
      "Bitradex bono",
      "Bitradex código de invitación",
      "Bitradex código de referido",
      "Bitradex bot IA",
      "Bitradex trading automatizado",
      "Bitradex futuros",
      "Bitradex spot",
      "Bitradex staking",
      "Bitradex token BTX",
      "Bitradex coinmarketcap",
      "Bitradex certik",
      "Bitradex tarjeta",
      "Bitradex vs binance",
      "Bitradex alternativa",
      "Bitradex ingresos pasivos",
      "Bitradex inversión",
      "exchange de criptomonedas con IA",
    ],
    pages: {
      "/": {
        title: "Bitradex | Exchange de Criptomonedas con IA y Bot de Trading",
        description:
          "Opera cripto con confianza en Bitradex. Bot de IA, spot y futuros, token BTX, seguridad auditada por CertiK y cumplimiento global.",
      },
      "/about-us": {
        title: "Acerca de Bitradex | Misión, Equipo y Empresa",
        description:
          "Conoce Bitradex (BITRADEX FINTECH LIMITED), nuestra misión, equipo y visión para el trading de cripto con IA en todo el mundo.",
      },
      "/markets": {
        title: "Mercados Bitradex | Precios en Vivo BTC, ETH, BNB, SOL",
        description:
          "Precios de cripto en vivo en Bitradex. Sigue BTC, ETH, BNB, SOL y el token BTX en tiempo real en spot y futuros.",
      },
      "/spot": {
        title: "Bitradex Spot | Compra y Vende Cripto al Instante",
        description:
          "Opera cripto en Spot de Bitradex con comisiones bajas, gran liquidez y gráficos TradingView para BTC, ETH, BNB, SOL y BTX.",
      },
      "/futures": {
        title: "Bitradex Futuros | Trading con Apalancamiento en Cripto",
        description:
          "Opera Bitradex Futuros con apalancamiento, herramientas de riesgo avanzadas y automatización IA en plataforma auditada por CertiK.",
      },
      "/institutional": {
        title: "Bitradex Institucional | OTC, Custodia y API",
        description:
          "Servicios institucionales Bitradex: mesa OTC, custodia segura, acceso API, liquidez profunda y soporte dedicado para fondos.",
      },
      "/contact": {
        title: "Contacto Bitradex | Soporte al Cliente y Ayuda",
        description:
          "Contacta al equipo Bitradex para soporte con login, retiros, depósitos, KYC, bot de IA y consultas de cuenta.",
      },
      "/our-team": {
        title: "Nuestro Equipo | Liderazgo e Ingenieros Bitradex",
        description:
          "Conoce al equipo de liderazgo de Bitradex detrás de nuestro exchange con IA y del ecosistema del token BTX.",
      },
      "/careers": {
        title: "Carreras en Bitradex | Únete a la Revolución IA y Cripto",
        description:
          "Vacantes abiertas en Bitradex. Construye el futuro del trading cripto con IA en un equipo global de ingeniería y producto.",
      },
      "/press-media": {
        title: "Prensa y Medios Bitradex | Noticias y Comunicados",
        description:
          "Comunicados, kit de prensa, activos de marca y declaraciones oficiales de Bitradex sobre el token BTX y alianzas.",
      },
      "/terms-of-service": {
        title: "Términos de Servicio | Bitradex",
        description:
          "Lee los Términos de Servicio de Bitradex que rigen el uso de la plataforma, cuentas, trading, comisiones y el token BTX.",
      },
      "/privacy-policy": {
        title: "Política de Privacidad | Bitradex",
        description:
          "Cómo Bitradex recopila, usa y protege tus datos personales, información de KYC y actividad de la cuenta.",
      },
      "/risk-disclosure": {
        title: "Divulgación de Riesgos | Trading Cripto Bitradex",
        description:
          "Divulgación de riesgos para operar cripto, futuros y derivados en Bitradex, incluida volatilidad y apalancamiento.",
      },
      "/aml-policy": {
        title: "Política AML | Antilavado de Dinero Bitradex",
        description:
          "Política AML de Bitradex, requisitos KYC y compromiso en la lucha contra el lavado de dinero y financiamiento del terrorismo.",
      },
      "/compliance": {
        title: "Cumplimiento | Estándares Regulatorios Globales Bitradex",
        description:
          "Programa de cumplimiento Bitradex: registro en Reino Unido, MSB, screening de sanciones y cooperación regulatoria.",
      },
      "/faq": {
        title: "FAQ Bitradex | Centro de Ayuda y Soporte",
        description:
          "FAQ de Bitradex: registro, login, KYC, depósitos, retiros, comisiones, bot de IA, token BTX y cómo empezar a operar cripto.",
      },
      "/disclaimer": {
        title: "Aviso Legal | Bitradex Exención de Responsabilidad",
        description:
          "Aviso legal de Bitradex sobre información de la plataforma, contenido de terceros, datos de mercado y limitación de responsabilidad.",
      },
      "/user-agreement": {
        title: "Acuerdo de Usuario | Términos de Cuenta Bitradex",
        description:
          "Acuerdo de usuario Bitradex: reglas de cuenta, conducta de trading, elegibilidad, actividades prohibidas y responsabilidades.",
      },
    },
  },

  de: {
    htmlLang: "de",
    ogLocale: "de_DE",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | KI-Krypto-Börse und Trading-Plattform",
    defaultDescription:
      "Bitradex ist eine vertrauenswürdige KI-Krypto-Börse. Handeln Sie BTC, ETH, BNB und SOL auf Spot- und Futures-Märkten mit dem Bitradex KI-Bot.",
    keywords: [
      ...brandCore,
      "Bitradex Erfahrungen",
      "Bitradex seriös",
      "Bitradex Betrug",
      "Bitradex Test",
      "Bitradex Anmeldung",
      "Bitradex Auszahlung",
      "Bitradex Einzahlung",
      "Bitradex Gebühren",
      "Bitradex KYC",
      "Bitradex Tutorial",
      "Bitradex KI-Bot",
      "Bitradex Futures",
      "Bitradex Spot",
      "Bitradex Staking",
      "Bitradex Token BTX",
      "Bitradex CertiK",
      "Bitradex Karte",
      "Bitradex vs Binance",
      "KI-Krypto-Börse",
      "Krypto Trading Bot",
    ],
    pages: {
      "/": {
        title: "Bitradex | KI-Krypto-Börse und Trading-Plattform",
        description:
          "Handeln Sie Krypto sicher auf Bitradex. KI-Bot, Spot & Futures, BTX-Token, von CertiK geprüfte Sicherheit und globale Compliance.",
      },
      "/about-us": {
        title: "Über Bitradex | Mission, Team und Unternehmen",
        description:
          "Erfahren Sie mehr über Bitradex (BITRADEX FINTECH LIMITED), unsere Mission, unser Team und unsere Vision für KI-Krypto-Trading.",
      },
      "/markets": {
        title: "Bitradex Märkte | Live Krypto-Kurse BTC, ETH, BNB, SOL",
        description:
          "Live Krypto-Kurse auf Bitradex. Verfolgen Sie BTC, ETH, BNB, SOL und den BTX-Token in Echtzeit auf Spot- und Futures-Märkten.",
      },
      "/spot": {
        title: "Bitradex Spot | Krypto sofort kaufen und verkaufen",
        description:
          "Handeln Sie Krypto auf Bitradex Spot mit niedrigen Gebühren, hoher Liquidität und TradingView-Charts für BTC, ETH, BNB, SOL und BTX.",
      },
      "/futures": {
        title: "Bitradex Futures | Krypto-Derivate mit Hebel",
        description:
          "Handeln Sie Bitradex Futures mit Hebel, fortschrittlichen Risiko-Tools und KI-Automatisierung auf einer CertiK-geprüften Plattform.",
      },
      "/institutional": {
        title: "Bitradex Institutional | OTC, Custody und API",
        description:
          "Bitradex institutionelle Services: OTC-Desk, sichere Custody, API-Zugang, tiefe Liquidität und dedizierter Support für Fonds.",
      },
      "/contact": {
        title: "Kontakt Bitradex | Kundensupport und Hilfecenter",
        description:
          "Kontaktieren Sie das Bitradex-Team für Support bei Login, Auszahlungen, Einzahlungen, KYC, KI-Bot und Konto-Fragen.",
      },
      "/our-team": {
        title: "Unser Team | Bitradex Führung und Entwickler",
        description:
          "Lernen Sie das Führungsteam von Bitradex hinter unserer KI-Krypto-Börse und dem BTX-Token-Ökosystem kennen.",
      },
      "/careers": {
        title: "Karriere bei Bitradex | Werden Sie Teil der KI-Revolution",
        description:
          "Offene Stellen bei Bitradex. Gestalten Sie die Zukunft des KI-Krypto-Tradings in einem globalen Team aus Engineering und Produkt.",
      },
      "/press-media": {
        title: "Bitradex Presse & Medien | News und Pressemitteilungen",
        description:
          "Bitradex Pressemitteilungen, Media-Kit, Markenmaterial und offizielle Statements zum BTX-Token, Partnerschaften und Meilensteinen.",
      },
      "/terms-of-service": {
        title: "Nutzungsbedingungen | Bitradex",
        description:
          "Lesen Sie die Bitradex Nutzungsbedingungen für Plattform, Konten, Trading, Gebühren und den BTX-Token.",
      },
      "/privacy-policy": {
        title: "Datenschutzerklärung | Bitradex",
        description:
          "Wie Bitradex Ihre persönlichen Daten, KYC-Informationen und Kontoaktivitäten erhebt, verwendet und schützt.",
      },
      "/risk-disclosure": {
        title: "Risikohinweis | Krypto-Trading-Risiken Bitradex",
        description:
          "Wichtiger Risikohinweis für den Handel mit Krypto, Futures und Derivaten auf Bitradex, inklusive Volatilität und Hebelrisiken.",
      },
      "/aml-policy": {
        title: "AML-Richtlinie | Bitradex Geldwäscheprävention",
        description:
          "Bitradex AML-Richtlinie, KYC-Anforderungen und unser Engagement gegen Geldwäsche und Terrorismusfinanzierung.",
      },
      "/compliance": {
        title: "Compliance | Bitradex Globale Regulierungsstandards",
        description:
          "Bitradex Compliance-Programm: UK-Registrierung, MSB, Sanktionsprüfung und regulatorische Zusammenarbeit weltweit.",
      },
      "/faq": {
        title: "Bitradex FAQ | Hilfecenter, Support und Fragen",
        description:
          "Bitradex FAQ: Antworten zu Registrierung, Login, KYC, Einzahlungen, Auszahlungen, Gebühren, KI-Bot, BTX-Token und Sicherheit.",
      },
      "/disclaimer": {
        title: "Haftungsausschluss | Bitradex Rechtlicher Hinweis",
        description:
          "Bitradex Haftungsausschluss zu Plattforminformationen, Inhalten Dritter, Marktdaten und Haftungsbeschränkungen.",
      },
      "/user-agreement": {
        title: "Nutzervereinbarung | Bitradex Konto- und Plattformregeln",
        description:
          "Bitradex Nutzervereinbarung: Kontoregeln, Trading-Verhalten, Eignung, verbotene Aktivitäten und Plattformverantwortung.",
      },
    },
  },

  id: {
    htmlLang: "id",
    ogLocale: "id_ID",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | Exchange Kripto AI & Platform Trading",
    defaultDescription:
      "Bitradex adalah exchange cryptocurrency berbasis AI. Trading BTC, ETH, BNB, dan SOL di spot dan futures, gunakan bot AI, dan dapatkan dengan token BTX.",
    keywords: [
      ...brandCore,
      "Bitradex aman",
      "Bitradex penipuan",
      "Bitradex review",
      "Bitradex daftar",
      "Bitradex masuk",
      "Bitradex penarikan",
      "Bitradex deposit",
      "Bitradex biaya",
      "Bitradex KYC",
      "Bitradex tutorial",
      "Bitradex bot AI",
      "Bitradex futures",
      "Bitradex spot",
      "Bitradex staking",
      "Bitradex token BTX",
      "Bitradex CertiK",
      "Bitradex kartu",
      "Bitradex vs binance",
      "exchange kripto AI",
      "bot trading kripto",
    ],
    pages: {
      "/": {
        title: "Bitradex | Exchange Kripto AI & Platform Trading",
        description:
          "Trading kripto dengan percaya diri di Bitradex. Bot AI, pasar spot & futures, token BTX, keamanan diaudit CertiK, dan kepatuhan global.",
      },
      "/about-us": {
        title: "Tentang Bitradex | Misi, Tim & Informasi Perusahaan",
        description:
          "Pelajari tentang Bitradex (BITRADEX FINTECH LIMITED), misi, tim, dan visi kami untuk trading kripto berbasis AI di seluruh dunia.",
      },
      "/markets": {
        title: "Pasar Bitradex | Harga Kripto Live BTC, ETH, BNB, SOL",
        description:
          "Harga kripto live di Bitradex. Pantau BTC, ETH, BNB, SOL, dan token BTX secara real-time di pasar spot dan futures.",
      },
      "/spot": {
        title: "Bitradex Spot | Beli & Jual Kripto Secara Instan",
        description:
          "Trading kripto di Bitradex Spot dengan biaya rendah, likuiditas tinggi, dan grafik TradingView untuk BTC, ETH, BNB, SOL, dan BTX.",
      },
      "/futures": {
        title: "Bitradex Futures | Trading Derivatif Kripto dengan Leverage",
        description:
          "Trading Bitradex Futures dengan leverage tinggi, alat manajemen risiko, dan otomatisasi AI pada platform yang diaudit CertiK.",
      },
      "/institutional": {
        title: "Bitradex Institutional | OTC, Custody & API",
        description:
          "Layanan institusional Bitradex: OTC desk, custody aman, akses API, likuiditas dalam, dan dukungan khusus untuk dana dan korporasi.",
      },
      "/contact": {
        title: "Kontak Bitradex | Dukungan Pelanggan & Pusat Bantuan",
        description:
          "Hubungi tim Bitradex untuk dukungan terkait login, penarikan, deposit, KYC, bot AI, dan pertanyaan akun.",
      },
      "/our-team": {
        title: "Tim Kami | Kepemimpinan & Insinyur Bitradex",
        description:
          "Temui tim kepemimpinan Bitradex di balik exchange kripto berbasis AI dan ekosistem token BTX.",
      },
      "/careers": {
        title: "Karier di Bitradex | Bergabunglah dengan Revolusi AI Kripto",
        description:
          "Lowongan terbuka di Bitradex. Bangun masa depan trading kripto AI bersama tim global di engineering, compliance, dan produk.",
      },
      "/press-media": {
        title: "Pers & Media Bitradex | Berita, Aset Merek & Rilis",
        description:
          "Rilis pers, media kit, aset merek, dan pernyataan resmi Bitradex tentang token BTX, kemitraan, dan pencapaian.",
      },
      "/terms-of-service": {
        title: "Ketentuan Layanan | Bitradex",
        description:
          "Baca Ketentuan Layanan Bitradex yang mengatur penggunaan platform, akun, trading, biaya, dan token BTX.",
      },
      "/privacy-policy": {
        title: "Kebijakan Privasi | Bitradex",
        description:
          "Bagaimana Bitradex mengumpulkan, menggunakan, dan melindungi data pribadi, informasi KYC, dan aktivitas akun Anda.",
      },
      "/risk-disclosure": {
        title: "Pengungkapan Risiko | Risiko Trading Kripto Bitradex",
        description:
          "Pengungkapan risiko penting untuk trading kripto, futures, dan derivatif di Bitradex, termasuk volatilitas dan risiko leverage.",
      },
      "/aml-policy": {
        title: "Kebijakan AML | Anti Pencucian Uang Bitradex",
        description:
          "Kebijakan AML Bitradex, persyaratan KYC, dan komitmen kami melawan pencucian uang serta pendanaan terorisme.",
      },
      "/compliance": {
        title: "Compliance | Standar Regulasi Global Bitradex",
        description:
          "Program compliance Bitradex: registrasi UK, MSB, skrining sanksi, dan kerja sama regulasi di seluruh dunia.",
      },
      "/faq": {
        title: "FAQ Bitradex | Pusat Bantuan, Dukungan & Trading",
        description:
          "FAQ Bitradex: jawaban tentang pendaftaran, login, KYC, deposit, penarikan, biaya, bot AI, token BTX, dan keamanan.",
      },
      "/disclaimer": {
        title: "Penafian | Pemberitahuan Hukum Bitradex",
        description:
          "Penafian hukum Bitradex mencakup informasi platform, konten pihak ketiga, akurasi data pasar, dan batasan tanggung jawab.",
      },
      "/user-agreement": {
        title: "Perjanjian Pengguna | Ketentuan Akun Bitradex",
        description:
          "Perjanjian pengguna Bitradex: aturan akun, perilaku trading, kelayakan, aktivitas terlarang, dan tanggung jawab platform.",
      },
    },
  },

  th: {
    htmlLang: "th",
    ogLocale: "th_TH",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | กระดานเทรดคริปโต AI และแพลตฟอร์มเทรด",
    defaultDescription:
      "Bitradex คือกระดานเทรดคริปโตที่ขับเคลื่อนด้วย AI เทรด BTC ETH BNB และ SOL ในตลาด spot และ futures พร้อมบอท AI และเหรียญ BTX",
    keywords: [
      ...brandCore,
      "Bitradex ปลอดภัยไหม",
      "Bitradex หลอกลวง",
      "Bitradex รีวิว",
      "Bitradex สมัคร",
      "Bitradex เข้าสู่ระบบ",
      "Bitradex ถอนเงิน",
      "Bitradex ฝากเงิน",
      "Bitradex ค่าธรรมเนียม",
      "Bitradex KYC",
      "Bitradex สอนใช้",
      "Bitradex บอท AI",
      "Bitradex futures",
      "Bitradex spot",
      "Bitradex staking",
      "Bitradex token BTX",
      "Bitradex CertiK",
      "Bitradex บัตร",
      "กระดานเทรดคริปโต AI",
      "บอทเทรดคริปโต",
    ],
    pages: {
      "/": {
        title: "Bitradex | กระดานเทรดคริปโต AI และแพลตฟอร์มเทรด",
        description:
          "เทรดคริปโตอย่างมั่นใจบน Bitradex บอท AI ตลาด spot และ futures เหรียญ BTX ความปลอดภัยตรวจสอบโดย CertiK และการปฏิบัติตามกฎระดับโลก",
      },
      "/about-us": {
        title: "เกี่ยวกับ Bitradex | พันธกิจ ทีมงาน และบริษัท",
        description:
          "เรียนรู้เกี่ยวกับ Bitradex (BITRADEX FINTECH LIMITED) พันธกิจ ทีมงาน และวิสัยทัศน์ของเราสำหรับการเทรดคริปโตด้วย AI ทั่วโลก",
      },
      "/markets": {
        title: "ตลาด Bitradex | ราคาคริปโตสด BTC ETH BNB SOL",
        description:
          "ราคาคริปโตสดบน Bitradex ติดตาม BTC ETH BNB SOL และเหรียญ BTX แบบเรียลไทม์ทั้งตลาด spot และ futures",
      },
      "/spot": {
        title: "Bitradex Spot | ซื้อขายคริปโตทันที",
        description:
          "เทรดคริปโตบน Bitradex Spot ด้วยค่าธรรมเนียมต่ำ สภาพคล่องสูง และกราฟ TradingView สำหรับ BTC ETH BNB SOL และ BTX",
      },
      "/futures": {
        title: "Bitradex Futures | เทรดอนุพันธ์คริปโตด้วยเลเวอเรจ",
        description:
          "เทรด Bitradex Futures ด้วยเลเวอเรจสูง เครื่องมือบริหารความเสี่ยง และระบบ AI อัตโนมัติบนแพลตฟอร์มที่ตรวจสอบโดย CertiK",
      },
      "/institutional": {
        title: "Bitradex Institutional | OTC, Custody และ API",
        description:
          "บริการสถาบันของ Bitradex: OTC desk, custody ปลอดภัย, การเข้าถึง API, สภาพคล่องลึก และการสนับสนุนเฉพาะสำหรับกองทุน",
      },
      "/contact": {
        title: "ติดต่อ Bitradex | ฝ่ายสนับสนุนลูกค้าและศูนย์ช่วยเหลือ",
        description:
          "ติดต่อทีม Bitradex สำหรับการสนับสนุนเรื่อง login, ถอนเงิน, ฝากเงิน, KYC, บอท AI และคำถามเกี่ยวกับบัญชี",
      },
      "/our-team": {
        title: "ทีมของเรา | ผู้นำและวิศวกรของ Bitradex",
        description:
          "พบกับทีมผู้นำของ Bitradex ที่อยู่เบื้องหลังกระดานเทรดคริปโต AI และระบบนิเวศของเหรียญ BTX",
      },
      "/careers": {
        title: "ร่วมงานกับ Bitradex | เข้าร่วมการปฏิวัติ AI และคริปโต",
        description:
          "ตำแหน่งงานเปิดที่ Bitradex สร้างอนาคตของการเทรดคริปโต AI กับทีมระดับโลกด้านวิศวกรรม การปฏิบัติตามกฎ และผลิตภัณฑ์",
      },
      "/press-media": {
        title: "ข่าวประชาสัมพันธ์และสื่อ Bitradex | ข่าวสารและสื่อ",
        description:
          "ข่าวประชาสัมพันธ์ ชุดสื่อ ทรัพย์สินแบรนด์ และแถลงการณ์อย่างเป็นทางการของ Bitradex เกี่ยวกับเหรียญ BTX และความร่วมมือ",
      },
      "/terms-of-service": {
        title: "ข้อกำหนดในการให้บริการ | Bitradex",
        description:
          "อ่านข้อกำหนดในการให้บริการของ Bitradex ที่ควบคุมการใช้แพลตฟอร์ม บัญชี การเทรด ค่าธรรมเนียม และเหรียญ BTX",
      },
      "/privacy-policy": {
        title: "นโยบายความเป็นส่วนตัว | Bitradex",
        description:
          "วิธีที่ Bitradex รวบรวม ใช้งาน และปกป้องข้อมูลส่วนบุคคล ข้อมูล KYC และกิจกรรมบัญชีของคุณ",
      },
      "/risk-disclosure": {
        title: "การเปิดเผยความเสี่ยง | ความเสี่ยงการเทรดคริปโต Bitradex",
        description:
          "การเปิดเผยความเสี่ยงสำหรับการเทรดคริปโต futures และอนุพันธ์บน Bitradex รวมถึงความผันผวนและความเสี่ยงจากเลเวอเรจ",
      },
      "/aml-policy": {
        title: "นโยบาย AML | การป้องกันการฟอกเงินของ Bitradex",
        description:
          "นโยบาย AML ของ Bitradex ข้อกำหนด KYC และความมุ่งมั่นของเราในการต่อต้านการฟอกเงินและการสนับสนุนการก่อการร้าย",
      },
      "/compliance": {
        title: "การปฏิบัติตามกฎ | มาตรฐานกำกับดูแลระดับโลก Bitradex",
        description:
          "โปรแกรมการปฏิบัติตามกฎของ Bitradex: การจดทะเบียน UK, MSB, การคัดกรองคว่ำบาตร และความร่วมมือด้านกฎระเบียบทั่วโลก",
      },
      "/faq": {
        title: "FAQ Bitradex | ศูนย์ช่วยเหลือและคำถามเกี่ยวกับการเทรด",
        description:
          "FAQ ของ Bitradex: คำตอบเกี่ยวกับการสมัคร login KYC ฝากเงิน ถอนเงิน ค่าธรรมเนียม บอท AI เหรียญ BTX และความปลอดภัย",
      },
      "/disclaimer": {
        title: "ข้อจำกัดความรับผิดชอบ | ประกาศทางกฎหมาย Bitradex",
        description:
          "ข้อจำกัดความรับผิดชอบทางกฎหมายของ Bitradex ครอบคลุมข้อมูลแพลตฟอร์ม เนื้อหาบุคคลที่สาม ข้อมูลตลาด และขอบเขตความรับผิด",
      },
      "/user-agreement": {
        title: "ข้อตกลงผู้ใช้ | ข้อกำหนดบัญชี Bitradex",
        description:
          "ข้อตกลงผู้ใช้ Bitradex: กฎบัญชี การปฏิบัติในการเทรด คุณสมบัติ กิจกรรมต้องห้าม และความรับผิดชอบของแพลตฟอร์ม",
      },
    },
  },

  ko: {
    htmlLang: "ko",
    ogLocale: "ko_KR",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | AI 암호화폐 거래소 및 트레이딩 플랫폼",
    defaultDescription:
      "Bitradex는 AI 기반 암호화폐 거래소입니다. BTC, ETH, BNB, SOL을 현물 및 선물 시장에서 거래하고 AI 봇과 BTX 토큰을 활용하세요.",
    keywords: [
      ...brandCore,
      "Bitradex 후기",
      "Bitradex 사기",
      "Bitradex 안전",
      "Bitradex 가입",
      "Bitradex 로그인",
      "Bitradex 출금",
      "Bitradex 입금",
      "Bitradex 수수료",
      "Bitradex KYC",
      "Bitradex 사용법",
      "Bitradex AI 봇",
      "Bitradex 선물",
      "Bitradex 현물",
      "Bitradex 스테이킹",
      "Bitradex BTX 토큰",
      "Bitradex CertiK",
      "Bitradex 카드",
      "AI 암호화폐 거래소",
      "암호화폐 자동매매 봇",
    ],
    pages: {
      "/": {
        title: "Bitradex | AI 암호화폐 거래소 및 트레이딩 플랫폼",
        description:
          "Bitradex에서 자신 있게 암호화폐를 거래하세요. AI 봇, 현물 및 선물, BTX 토큰, CertiK 감사 보안과 글로벌 컴플라이언스.",
      },
      "/about-us": {
        title: "Bitradex 소개 | 미션, 팀, 회사 정보",
        description:
          "Bitradex(BITRADEX FINTECH LIMITED), 우리의 미션, 팀, 그리고 전 세계 AI 기반 암호화폐 거래의 비전을 알아보세요.",
      },
      "/markets": {
        title: "Bitradex 마켓 | 실시간 BTC, ETH, BNB, SOL 시세",
        description:
          "Bitradex의 실시간 암호화폐 시세. 현물 및 선물 시장에서 BTC, ETH, BNB, SOL 및 BTX 토큰을 실시간으로 확인하세요.",
      },
      "/spot": {
        title: "Bitradex 현물 | 즉시 암호화폐 매수·매도",
        description:
          "낮은 수수료, 풍부한 유동성, BTC·ETH·BNB·SOL·BTX용 TradingView 차트로 Bitradex 현물에서 거래하세요.",
      },
      "/futures": {
        title: "Bitradex 선물 | 레버리지 암호화폐 파생상품 거래",
        description:
          "높은 레버리지, 고급 리스크 도구, AI 자동화를 갖춘 CertiK 감사 플랫폼에서 Bitradex 선물을 거래하세요.",
      },
      "/institutional": {
        title: "Bitradex 기관 | OTC, 커스터디 및 API",
        description:
          "Bitradex 기관 서비스: OTC 데스크, 안전한 커스터디, API 액세스, 깊은 유동성, 펀드 및 기업을 위한 전담 지원.",
      },
      "/contact": {
        title: "Bitradex 문의 | 고객 지원 및 도움말 센터",
        description:
          "로그인, 출금, 입금, KYC, AI 봇, 계정 관련 문의는 Bitradex 팀에 연락해 주세요.",
      },
      "/our-team": {
        title: "팀 소개 | Bitradex 리더십 및 엔지니어",
        description:
          "AI 기반 암호화폐 거래소와 BTX 토큰 생태계를 이끄는 Bitradex 리더십 팀을 만나보세요.",
      },
      "/careers": {
        title: "Bitradex 채용 | AI·암호화폐 혁명에 합류하세요",
        description:
          "Bitradex의 채용 공고. 엔지니어링, 컴플라이언스, 제품 분야의 글로벌 팀과 함께 AI 암호화폐 거래의 미래를 만드세요.",
      },
      "/press-media": {
        title: "Bitradex 보도 자료 및 미디어 | 뉴스 및 브랜드 자료",
        description:
          "Bitradex 보도 자료, 미디어 키트, 브랜드 자산, BTX 토큰·파트너십·주요 성과에 대한 공식 발표.",
      },
      "/terms-of-service": {
        title: "서비스 약관 | Bitradex",
        description:
          "플랫폼, 계정, 거래, 수수료 및 BTX 토큰 사용을 규정하는 Bitradex 서비스 약관을 확인하세요.",
      },
      "/privacy-policy": {
        title: "개인정보 처리방침 | Bitradex",
        description:
          "Bitradex가 회원의 개인정보, KYC 정보 및 계정 활동을 수집·이용·보호하는 방법을 안내합니다.",
      },
      "/risk-disclosure": {
        title: "위험 고지 | Bitradex 암호화폐 거래 위험",
        description:
          "변동성 및 레버리지 위험 등 Bitradex에서의 암호화폐, 선물, 파생상품 거래에 대한 중요한 위험 고지.",
      },
      "/aml-policy": {
        title: "AML 정책 | Bitradex 자금세탁 방지",
        description:
          "Bitradex의 AML 정책, KYC 요건, 자금세탁 및 테러자금 조달 방지에 대한 우리의 약속.",
      },
      "/compliance": {
        title: "컴플라이언스 | Bitradex 글로벌 규제 표준",
        description:
          "Bitradex 컴플라이언스 프로그램: 영국 등록, MSB 등록, 제재 스크리닝 및 글로벌 규제 협력.",
      },
      "/faq": {
        title: "Bitradex FAQ | 도움말 센터 및 거래 관련 질문",
        description:
          "Bitradex FAQ: 가입, 로그인, KYC, 입출금, 수수료, AI 봇, BTX 토큰, 보안 및 거래 시작 방법에 대한 답변.",
      },
      "/disclaimer": {
        title: "면책 조항 | Bitradex 법적 고지",
        description:
          "플랫폼 정보, 제3자 콘텐츠, 시장 데이터 정확성 및 책임 제한에 관한 Bitradex 법적 면책 조항.",
      },
      "/user-agreement": {
        title: "이용자 약관 | Bitradex 계정 및 플랫폼 규정",
        description:
          "Bitradex 이용자 약관: 계정 규정, 거래 행위, 자격, 금지 활동 및 플랫폼 책임을 정의합니다.",
      },
    },
  },

  ru: {
    htmlLang: "ru",
    ogLocale: "ru_RU",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | Криптобиржа с ИИ и торговая платформа",
    defaultDescription:
      "Bitradex — криптобиржа с искусственным интеллектом. Торгуйте BTC, ETH, BNB и SOL на спот и фьючерсах, используйте ИИ-бота и токен BTX.",
    keywords: [
      ...brandCore,
      "Bitradex отзывы",
      "Bitradex развод",
      "Bitradex надежность",
      "Bitradex регистрация",
      "Bitradex вход",
      "Bitradex вывод",
      "Bitradex депозит",
      "Bitradex комиссии",
      "Bitradex KYC",
      "Bitradex как пользоваться",
      "Bitradex ИИ-бот",
      "Bitradex фьючерсы",
      "Bitradex спот",
      "Bitradex стейкинг",
      "Bitradex токен BTX",
      "Bitradex CertiK",
      "Bitradex карта",
      "криптобиржа с ИИ",
      "бот для торговли криптовалютой",
    ],
    pages: {
      "/": {
        title: "Bitradex | Криптобиржа с ИИ и торговая платформа",
        description:
          "Торгуйте криптой уверенно на Bitradex. ИИ-бот, спот и фьючерсы, токен BTX, безопасность с аудитом CertiK и глобальный комплаенс.",
      },
      "/about-us": {
        title: "О Bitradex | Миссия, команда и компания",
        description:
          "Узнайте больше о Bitradex (BITRADEX FINTECH LIMITED), нашей миссии, команде и видении торговли криптой с ИИ по всему миру.",
      },
      "/markets": {
        title: "Рынки Bitradex | Цены крипты в реальном времени",
        description:
          "Цены крипты в реальном времени на Bitradex. Отслеживайте BTC, ETH, BNB, SOL и токен BTX на спот и фьючерсных рынках.",
      },
      "/spot": {
        title: "Bitradex Spot | Покупка и продажа крипты мгновенно",
        description:
          "Торгуйте криптой на Bitradex Spot с низкими комиссиями, высокой ликвидностью и графиками TradingView для BTC, ETH, BNB, SOL и BTX.",
      },
      "/futures": {
        title: "Bitradex Futures | Торговля деривативами с плечом",
        description:
          "Торгуйте Bitradex Futures с плечом, продвинутыми инструментами риск-менеджмента и ИИ-автоматизацией на платформе с аудитом CertiK.",
      },
      "/institutional": {
        title: "Bitradex Institutional | OTC, кастоди и API",
        description:
          "Институциональные услуги Bitradex: OTC-деск, безопасное кастоди, API-доступ, глубокая ликвидность и поддержка для фондов.",
      },
      "/contact": {
        title: "Контакты Bitradex | Поддержка клиентов и помощь",
        description:
          "Свяжитесь с командой Bitradex для поддержки по входу, выводу, депозитам, KYC, ИИ-боту и вопросам по аккаунту.",
      },
      "/our-team": {
        title: "Наша команда | Руководство и инженеры Bitradex",
        description:
          "Познакомьтесь с командой руководителей Bitradex, стоящих за криптобиржей с ИИ и экосистемой токена BTX.",
      },
      "/careers": {
        title: "Карьера в Bitradex | Присоединяйтесь к революции ИИ-крипты",
        description:
          "Открытые вакансии в Bitradex. Стройте будущее ИИ-крипто-торговли с глобальной командой в инжиниринге и продукте.",
      },
      "/press-media": {
        title: "Пресса и медиа Bitradex | Новости и пресс-релизы",
        description:
          "Пресс-релизы Bitradex, медиа-кит, бренд-активы и официальные заявления о токене BTX, партнерствах и достижениях.",
      },
      "/terms-of-service": {
        title: "Условия обслуживания | Bitradex",
        description:
          "Прочитайте Условия обслуживания Bitradex, регулирующие использование платформы, аккаунтов, торговли, комиссий и токена BTX.",
      },
      "/privacy-policy": {
        title: "Политика конфиденциальности | Bitradex",
        description:
          "Как Bitradex собирает, использует и защищает ваши персональные данные, информацию KYC и активность аккаунта.",
      },
      "/risk-disclosure": {
        title: "Раскрытие рисков | Риски торговли криптой Bitradex",
        description:
          "Важное раскрытие рисков для торговли криптой, фьючерсами и деривативами на Bitradex, включая волатильность и плечо.",
      },
      "/aml-policy": {
        title: "Политика AML | Противодействие отмыванию Bitradex",
        description:
          "Политика AML Bitradex, требования KYC и наша приверженность борьбе с отмыванием денег и финансированием терроризма.",
      },
      "/compliance": {
        title: "Комплаенс | Глобальные регуляторные стандарты Bitradex",
        description:
          "Программа комплаенса Bitradex: регистрация в Великобритании, MSB, скрининг санкций и регуляторное сотрудничество.",
      },
      "/faq": {
        title: "FAQ Bitradex | Центр помощи и вопросы по торговле",
        description:
          "FAQ Bitradex: ответы о регистрации, входе, KYC, депозитах, выводе, комиссиях, ИИ-боте, токене BTX и безопасности.",
      },
      "/disclaimer": {
        title: "Отказ от ответственности | Правовое уведомление Bitradex",
        description:
          "Правовой отказ Bitradex по информации платформы, контенту третьих лиц, рыночным данным и ограничению ответственности.",
      },
      "/user-agreement": {
        title: "Пользовательское соглашение | Условия аккаунта Bitradex",
        description:
          "Пользовательское соглашение Bitradex: правила аккаунта, поведение в торговле, право на участие и запрещенные действия.",
      },
    },
  },

  ja: {
    htmlLang: "ja",
    ogLocale: "ja_JP",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | AI暗号資産取引所・トレーディングプラットフォーム",
    defaultDescription:
      "Bitradexは英国登録のAI搭載暗号資産取引所。BTC・ETH・BNB・SOLを現物と先物で取引、AI BotとBTXトークンで収益を獲得。",
    keywords: [
      ...brandCore,
      "Bitradex 取引所", "Bitradex ログイン", "Bitradex 登録", "Bitradex 入金", "Bitradex 出金",
      "Bitradex 手数料", "Bitradex 評判", "Bitradex 信頼できる", "Bitradex 詐欺", "Bitradex 使い方",
      "Bitradex AI ボット", "Bitradex 自動売買", "Bitradex 先物", "Bitradex スポット", "Bitradex BTX トークン",
      "Bitradex ステーキング", "Bitradex 招待コード", "Bitradex 紹介コード", "Bitradex ボーナス", "Bitradex 日本",
      "Bitradex アプリ", "Bitradex iOS", "Bitradex Android", "Bitradex CertiK", "Bitradex セキュリティ監査",
      "Bitradex vs バイナンス", "Bitradex vs Bybit", "Bitradex 代替", "Bitradex KYC", "Bitradex カード",
      "AI 暗号資産取引ボット", "ベスト暗号通貨取引所", "暗号通貨自動売買", "AI トレーディング 日本",
      "Bitradex とは", "Bitradex 評価", "Bitradex 安全", "ビットラデックス", "ビットラデックス 取引所",
    ],
    pages: {
      "/": { title: "Bitradex | AI暗号資産取引所・トレーディングプラットフォーム", description: "BitradexでAI Botを使い、BTC・ETH・BNB・SOLを安全に取引。CertiK監査済み、英国登録の信頼できる取引所。" },
      "/about-us": { title: "Bitradexについて | 会社情報・チーム・ミッション", description: "BITRADEX FINTECH LIMITEDの企業情報、チーム、AI暗号資産取引のビジョンをご紹介します。" },
      "/markets": { title: "Bitradexマーケット | BTC・ETH・BNB・SOLのライブ価格", description: "Bitradexで暗号資産のリアルタイム価格を確認。BTC・ETH・BNB・SOL・BTXトークンの市場データ。" },
      "/spot": { title: "Bitradex 現物取引 | 暗号資産を瞬時に売買", description: "BitradexのSpotで低手数料・高流動性。BTC・ETH・BNB・SOL・BTXをTradingViewチャートで取引。" },
      "/futures": { title: "Bitradex 先物 | レバレッジ暗号資産デリバティブ取引", description: "Bitradex先物で高レバレッジ取引。高度なリスク管理ツールとAI自動化、CertiK監査済み。" },
      "/institutional": { title: "Bitradex 機関投資家 | OTC・カストディ・API取引", description: "Bitradex機関向けサービス:OTCデスク、安全なカストディ、API、ディープ流動性、専任サポート。" },
      "/contact": { title: "Bitradexお問い合わせ | カスタマーサポート", description: "Bitradexサポート:ログイン、入出金、KYC、AI Bot、アカウントに関するご質問はこちら。" },
      "/our-team": { title: "Bitradexチーム | リーダーシップ・エンジニア", description: "AI暗号資産取引所Bitradexを支えるリーダーシップチームをご紹介します。" },
      "/careers": { title: "Bitradex採用 | AI暗号資産業界で働く", description: "Bitradexの求人情報。グローバルチームでAI暗号資産取引の未来を構築しましょう。" },
      "/press-media": { title: "Bitradexプレス・メディア | ニュース・ブランド資料", description: "Bitradexプレスリリース、メディアキット、ブランド資料、公式声明。" },
      "/terms-of-service": { title: "利用規約 | Bitradex", description: "Bitradexプラットフォーム、アカウント、取引、手数料、BTXトークンに関する利用規約。" },
      "/privacy-policy": { title: "プライバシーポリシー | Bitradex", description: "Bitradexによる個人データ、KYC情報、アカウント活動の収集・利用・保護に関する方針。" },
      "/risk-disclosure": { title: "リスク開示 | Bitradex 暗号資産取引リスク", description: "Bitradexで暗号資産・先物・デリバティブを取引する際の重要なリスク情報。" },
      "/aml-policy": { title: "AMLポリシー | Bitradex マネーロンダリング対策", description: "BitradexのAMLポリシー、KYC要件、マネーロンダリングおよびテロ資金供与対策へのコミットメント。" },
      "/compliance": { title: "コンプライアンス | Bitradex グローバル規制基準", description: "Bitradexコンプライアンスプログラム:英国登録、MSB登録、制裁スクリーニング、世界各国の規制協力。" },
      "/faq": { title: "Bitradex FAQ | ヘルプセンター・サポート", description: "Bitradex FAQ:登録、ログイン、KYC、入出金、手数料、AI Bot、BTXトークン、セキュリティに関する回答。" },
      "/disclaimer": { title: "免責事項 | Bitradex 法的通知", description: "Bitradexの法的免責事項。プラットフォーム情報、第三者コンテンツ、市場データの正確性、責任制限。" },
      "/user-agreement": { title: "ユーザー規約 | Bitradex アカウント規約", description: "Bitradexユーザー規約:アカウントルール、取引行動、適格性、禁止行為、プラットフォーム責任。" },
    },
  },

  ms: {
    htmlLang: "ms",
    ogLocale: "ms_MY",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | Pertukaran Kripto AI & Platform Dagangan",
    defaultDescription:
      "Bitradex ialah bursa kripto berkuasa AI yang dipercayai. Dagangkan BTC, ETH, BNB & SOL di spot dan futures dengan AI Bot dan token BTX.",
    keywords: [
      ...brandCore,
      "Bitradex Malaysia", "Bitradex log masuk", "Bitradex daftar", "Bitradex deposit", "Bitradex pengeluaran",
      "Bitradex yuran", "Bitradex sah", "Bitradex selamat", "Bitradex penipuan", "Bitradex ulasan",
      "Bitradex AI bot", "Bitradex dagangan automatik", "Bitradex futures", "Bitradex spot", "Bitradex BTX",
      "Bitradex staking", "Bitradex kod jemputan", "Bitradex bonus", "Bitradex aplikasi", "Bitradex iOS",
      "Bitradex Android", "Bitradex KYC", "Bitradex CertiK", "Bitradex vs Binance", "Bitradex alternatif",
      "bot dagangan kripto AI", "bursa kripto terbaik Malaysia", "platform dagangan kripto Malaysia",
      "pelaburan kripto AI", "pendapatan pasif kripto", "cara dagang kripto Malaysia",
      "Bitradex halal", "Bitradex syariah", "Bitradex pendapatan harian",
    ],
    pages: {
      "/": { title: "Bitradex | Pertukaran Kripto AI & Platform Dagangan", description: "Dagangkan kripto dengan yakin di Bitradex. AI bot, spot & futures, token BTX, diaudit CertiK." },
      "/about-us": { title: "Tentang Bitradex | Misi, Pasukan & Syarikat", description: "Ketahui tentang BITRADEX FINTECH LIMITED, misi kami dan visi dagangan kripto berkuasa AI." },
      "/markets": { title: "Pasaran Bitradex | Harga Kripto Langsung BTC, ETH, BNB, SOL", description: "Harga pasaran kripto langsung di Bitradex. Pantau BTC, ETH, BNB, SOL dan token BTX." },
      "/spot": { title: "Bitradex Spot | Beli & Jual Kripto Serta-merta", description: "Dagangkan kripto di Bitradex Spot dengan yuran rendah dan kecairan mendalam." },
      "/futures": { title: "Bitradex Futures | Dagangan Derivatif Kripto Berleveraj", description: "Dagangkan Bitradex Futures dengan leveraj tinggi dan automasi AI pada platform diaudit CertiK." },
      "/institutional": { title: "Bitradex Institusi | OTC, Kustodi & Dagangan API", description: "Perkhidmatan institusi Bitradex: OTC, kustodi selamat, API, kecairan mendalam dan sokongan khusus." },
      "/contact": { title: "Hubungi Bitradex | Pusat Sokongan Pelanggan", description: "Hubungi Bitradex untuk sokongan log masuk, pengeluaran, deposit, KYC dan AI bot." },
      "/our-team": { title: "Pasukan Bitradex | Kepimpinan & Jurutera", description: "Temui pasukan kepimpinan di sebalik bursa kripto AI Bitradex dan ekosistem BTX." },
      "/careers": { title: "Kerjaya di Bitradex | Sertai Revolusi Kripto & AI", description: "Jawatan kosong di Bitradex. Bina masa depan dagangan kripto AI bersama pasukan global." },
      "/press-media": { title: "Bitradex Akhbar & Media | Berita & Aset Jenama", description: "Siaran akhbar Bitradex, kit media, aset jenama dan kenyataan rasmi." },
      "/terms-of-service": { title: "Terma Perkhidmatan | Bitradex", description: "Baca Terma Perkhidmatan Bitradex untuk akaun, dagangan, yuran dan token BTX." },
      "/privacy-policy": { title: "Dasar Privasi | Bitradex", description: "Bagaimana Bitradex mengumpul, menggunakan dan melindungi data peribadi dan aktiviti akaun anda." },
      "/risk-disclosure": { title: "Pendedahan Risiko | Bitradex", description: "Pendedahan risiko penting untuk dagangan kripto, futures dan derivatif di Bitradex." },
      "/aml-policy": { title: "Dasar AML | Bitradex Anti Pengubahan Wang Haram", description: "Dasar AML Bitradex, keperluan KYC dan komitmen melawan pengubahan wang haram." },
      "/compliance": { title: "Pematuhan | Bitradex Piawaian Pengawal Selia Global", description: "Program pematuhan Bitradex: pendaftaran UK, MSB, saringan sekatan dan kerjasama pengawal selia." },
      "/faq": { title: "Bitradex Soalan Lazim | Pusat Bantuan & Sokongan", description: "FAQ Bitradex: jawapan tentang pendaftaran, log masuk, KYC, deposit, pengeluaran, yuran, AI bot." },
      "/disclaimer": { title: "Penafian | Bitradex Notis Undang-undang", description: "Penafian undang-undang Bitradex meliputi maklumat platform, kandungan pihak ketiga dan had liabiliti." },
      "/user-agreement": { title: "Perjanjian Pengguna | Bitradex", description: "Perjanjian pengguna Bitradex: peraturan akaun, tingkah laku dagangan, aktiviti terlarang." },
    },
  },

  zh: {
    htmlLang: "zh-CN",
    ogLocale: "zh_CN",
    siteName: "Bitradex",
    defaultTitle: "Bitradex | AI 加密货币交易所与交易平台",
    defaultDescription:
      "Bitradex 是受信任的 AI 驱动加密货币交易所。在现货和合约市场交易 BTC、ETH、BNB 和 SOL,使用 AI Bot 和 BTX 代币获得收益。",
    keywords: [
      ...brandCore,
      "Bitradex 交易所", "Bitradex 登录", "Bitradex 注册", "Bitradex 充值", "Bitradex 提现",
      "Bitradex 手续费", "Bitradex 安全吗", "Bitradex 可靠吗", "Bitradex 骗局", "Bitradex 评价",
      "Bitradex AI 机器人", "Bitradex 量化交易", "Bitradex 合约", "Bitradex 现货", "Bitradex BTX 代币",
      "Bitradex 质押", "Bitradex 邀请码", "Bitradex 返佣", "Bitradex 推荐码", "Bitradex 奖励",
      "Bitradex App 下载", "Bitradex 苹果", "Bitradex 安卓", "Bitradex KYC", "Bitradex CertiK 审计",
      "Bitradex vs 币安", "Bitradex vs Bybit", "Bitradex 替代", "Bitradex 卡", "Bitradex 中国",
      "AI 加密货币交易机器人", "最佳加密货币交易所", "自动加密货币交易平台", "AI 量化交易",
      "比特拉迪克斯", "Bitradex 教程", "Bitradex 收益", "Bitradex 被动收入", "Bitradex 投资",
      "Bitradex 出入金", "Bitradex 合约交易", "Bitradex 现货交易",
    ],
    pages: {
      "/": { title: "Bitradex | AI 加密货币交易所与交易平台", description: "在 Bitradex 自信交易加密货币。AI 机器人、现货与合约、BTX 代币、CertiK 审计安全和全球合规。" },
      "/about-us": { title: "关于 Bitradex | 使命、团队与公司信息", description: "了解 Bitradex(BITRADEX FINTECH LIMITED)、我们的使命、团队以及 AI 加密货币交易的愿景。" },
      "/markets": { title: "Bitradex 行情 | BTC、ETH、BNB、SOL 实时价格", description: "Bitradex 上的实时加密货币行情。跟踪 BTC、ETH、BNB、SOL 和 BTX 代币的现货与合约价格。" },
      "/spot": { title: "Bitradex 现货交易 | 即时买卖加密货币", description: "在 Bitradex 现货以低费率、深度流动性交易,支持 BTC、ETH、BNB、SOL 和 BTX 的 TradingView 图表。" },
      "/futures": { title: "Bitradex 合约 | 加密货币杠杆衍生品交易", description: "在 Bitradex 合约使用高杠杆、先进风控工具和 AI 自动化,平台经 CertiK 审计。" },
      "/institutional": { title: "Bitradex 机构服务 | OTC、托管与 API 交易", description: "Bitradex 机构服务:OTC 交易台、安全托管、API 接入、深度流动性、专属支持。" },
      "/contact": { title: "联系 Bitradex | 客户支持与帮助中心", description: "联系 Bitradex 团队获取登录、提现、充值、KYC、AI 机器人和账户问题的支持。" },
      "/our-team": { title: "我们的团队 | Bitradex 领导层与工程师", description: "认识 Bitradex 背后的领导团队和 BTX 代币生态系统。" },
      "/careers": { title: "Bitradex 招聘 | 加入加密货币与 AI 革命", description: "Bitradex 招聘职位。与全球团队一起构建 AI 加密货币交易的未来。" },
      "/press-media": { title: "Bitradex 新闻与媒体 | 新闻稿与品牌资产", description: "Bitradex 新闻稿、媒体资源包、品牌资产和有关 BTX 代币、合作伙伴的官方声明。" },
      "/terms-of-service": { title: "服务条款 | Bitradex", description: "阅读 Bitradex 服务条款,涵盖平台使用、账户、交易、费用和 BTX 代币。" },
      "/privacy-policy": { title: "隐私政策 | Bitradex", description: "Bitradex 如何收集、使用和保护您的个人数据、KYC 信息和账户活动。" },
      "/risk-disclosure": { title: "风险披露 | Bitradex 加密货币交易风险", description: "Bitradex 上交易加密货币、合约和衍生品的重要风险披露,包括波动性和杠杆风险。" },
      "/aml-policy": { title: "反洗钱政策 | Bitradex AML", description: "Bitradex 反洗钱政策、KYC 要求,以及我们打击洗钱和恐怖融资的承诺。" },
      "/compliance": { title: "合规 | Bitradex 全球监管标准", description: "Bitradex 合规计划:英国注册、MSB 注册、制裁筛查和全球监管合作。" },
      "/faq": { title: "Bitradex 常见问题 | 帮助中心与支持", description: "Bitradex 常见问题:关于注册、登录、KYC、充值、提现、费用、AI 机器人、BTX 代币和安全的答案。" },
      "/disclaimer": { title: "免责声明 | Bitradex 法律声明", description: "Bitradex 法律免责声明,涵盖平台信息、第三方内容、市场数据准确性和责任限制。" },
      "/user-agreement": { title: "用户协议 | Bitradex 账户与平台条款", description: "Bitradex 用户协议:账户规则、交易行为、资格、禁止活动和平台责任。" },
    },
  },
};

export const seoLangs: SeoLang[] = [
  "en",
  "pt",
  "es",
  "de",
  "id",
  "th",
  "ko",
  "ru",
  "ja",
  "ms",
  "zh",
];

