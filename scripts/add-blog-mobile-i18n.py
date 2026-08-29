#!/usr/bin/env python3
"""Inject mobileApp + blog i18n blocks into en.json (English) and pt.json (Portuguese)."""
import json, os

ROOT = os.path.join(os.path.dirname(__file__), "..", "src", "i18n", "locales")

EN = {
    "mobileApp": {
        "hero": {
            "title": "Bitradex App for Android and iOS",
            "subtitle": "Trade spot, futures and the AI Bot from anywhere, with professional charts, real-time alerts and institutional-grade security.",
            "ctaPrimary": "Create account and download",
            "ctaSecondary": "See features",
        },
        "featuresTitle": "Everything you do on desktop, in the palm of your hand",
        "features": {
            "charts": {"title": "TradingView charts", "desc": "Candles, over 100 indicators and advanced drawing tools right on your phone."},
            "bot": {"title": "AI Bot in your pocket", "desc": "Start, pause and track automated strategies with a single tap."},
            "alerts": {"title": "Price alerts", "desc": "Instant push notifications for prices, fills and liquidations."},
            "biometrics": {"title": "Biometric login", "desc": "Face ID and fingerprint, with mandatory 2FA on withdrawals."},
            "deposits": {"title": "Fast local deposits", "desc": "Deposits and withdrawals in local currency approved within minutes."},
            "languages": {"title": "10 languages", "desc": "Full interface in English, Portuguese, Spanish and seven more languages."},
        },
        "specsTitle": "Specifications",
        "specs": {
            "android": {"label": "Android", "value": "8.0 or higher · 85 MB"},
            "ios": {"label": "iOS", "value": "14.0 or higher · 112 MB"},
            "languages": {"label": "Languages", "value": "10 languages including English"},
            "darkMode": {"label": "Dark mode", "value": "Native, with optional light theme"},
            "updates": {"label": "Updates", "value": "Two-week release cycle"},
            "support": {"label": "Support", "value": "24/7 in-app chat"},
        },
        "stepsTitle": "Get started in 4 steps",
        "steps": {
            "download": {"title": "Download the app", "desc": "Use the QR code on the home page or download directly from your device's store."},
            "account": {"title": "Create your account", "desc": "Sign up in under 2 minutes with your email or phone number."},
            "kyc": {"title": "Verify your identity", "desc": "KYC with a selfie and ID document, usually approved within minutes."},
            "trade": {"title": "Deposit and trade", "desc": "Fund your account with crypto or local currency and start trading spot, futures or the AI Bot."},
        },
        "securityTitle": "Security in the app",
        "security": {
            "twofa": "Mandatory 2FA for withdrawals and changes to sensitive data",
            "whitelist": "Withdrawal address whitelist synced with the app",
            "device": "New device detection with email confirmation",
            "tls": "Encrypted sessions with TLS 1.3 and certificate pinning",
            "lock": "Automatic app lock after inactivity",
        },
        "faqTitle": "Frequently asked questions",
        "faqs": {
            "free": {"q": "Is the Bitradex app free?", "a": "Yes. Downloading and using the app is free. You only pay the platform's standard trading fees."},
            "sameAccount": {"q": "Can I use the same account on the app and the website?", "a": "Yes. It is a single account: balances, orders, positions and security settings sync in real time."},
            "botClosed": {"q": "Does the AI Bot keep trading when the app is closed?", "a": "Yes. Strategies run on Bitradex servers, so they stay active even with your phone turned off."},
            "safe": {"q": "Is it safe to trade from my phone?", "a": "Yes. The app uses biometrics, 2FA, TLS 1.3 encryption and withdrawal whitelists — the same standards as the web version."},
        },
    },
    "blog": {
        "badge": "Insights, Analysis and Strategies",
        "titlePrefix": "Bitradex",
        "titleHighlight": "Blog",
        "subtitle": "Premium content about crypto trading, AI, market analysis and the latest news from the crypto world.",
        "home": "Home",
        "blog": "Blog",
        "all": "All",
        "featured": "Featured",
        "readFull": "Read the full article",
        "latest": "Latest Articles",
        "related": "Recommended articles",
        "back": "Back to Blog",
        "inThisArticle": "In this article",
        "topic": "Topic",
        "authorName": "Bitradex Research Desk",
        "authorRole": "Market analysts and AI specialists",
        "highlightLabel": "Highlight:",
        "highlightText": "Bitradex combines institutional execution, audited security and the ARK Trading AI Bot in a single platform.",
        "ctaTitle": "Ready to start trading?",
        "ctaText": "Join millions of traders on Bitradex and activate the AI Bot in seconds.",
        "ctaButton": "Create Free Account",
        "categories": {
            "guide": "Guide",
            "aiTrading": "AI Trading",
            "education": "Education",
            "security": "Security",
            "analysis": "Analysis",
            "benefits": "Benefits",
        },
        "posts": {
            "como-comecar-trading-cripto-2026": {
                "title": "How to Start Crypto Trading in 2026: The Complete Guide",
                "excerpt": "A definitive step-by-step guide for beginners who want to enter the crypto market with safety, strategy and the support of the Bitradex AI Bot.",
                "date": "15 Jul 2026",
                "readTime": "8 min",
                "sections": [
                    {"heading": "Why invest in crypto in 2026?", "body": "The crypto market reached historic milestones in 2026, with large-scale institutional adoption, established ETFs and integration with traditional financial systems. Bitcoin, Ethereum and assets such as Solana and XRP are now part of diversified portfolios worldwide. Starting now means joining one of the biggest financial shifts of our era."},
                    {"heading": "Step 1: Choose a reliable exchange", "body": "Bitradex offers registration in seconds, fast KYC, more than 500 trading pairs and competitive fees. Its infrastructure supports billions in daily volume and relies on cold storage, insurance and regulatory compliance across multiple jurisdictions."},
                    {"heading": "Step 2: Begin with spot trading", "body": "For beginners, the spot market is the best starting point: you buy and sell crypto at the current price, without leverage. Start with small amounts, learn the interface and master basic analysis before moving to leveraged products."},
                    {"heading": "Step 3: Diversify with a strategy", "body": "Never put everything into a single asset. A balanced allocation may include 50% Bitcoin, 30% Ethereum and 20% selected altcoins. Rebalance monthly to keep your strategy on track."},
                    {"heading": "Step 4: Automate with the Bitradex AI Bot", "body": "The Bitradex AI Bot uses the ARK Trading model to run strategies 24/7, capturing opportunities humans cannot monitor. With a single click you put institutional-grade intelligence to work for you."},
                    {"heading": "Step 5: Keep learning", "body": "Markets move fast. Follow our blog, join the community and test strategies in simulated environments before risking real capital. Trading success comes from continuous education."},
                ],
            },
            "ai-bot-bitradex-como-funciona": {
                "title": "Bitradex AI Bot: How Artificial Intelligence Transforms Trading",
                "excerpt": "Discover how the ARK Trading model analyses trillions of parameters to run profitable trades 24/7 in the crypto market.",
                "date": "12 Jul 2026",
                "readTime": "10 min",
                "sections": [
                    {"heading": "What is the Bitradex AI Bot?", "body": "It is an automated trading system powered by the ARK Trading model, with more than a trillion parameters analysing market data in real time. It identifies patterns, executes optimised entries and exits and manages risk automatically."},
                    {"heading": "How does the ARK Trading architecture work?", "body": "ARK combines deep neural networks with reinforcement learning, trained on decades of market data. It evaluates market sentiment, volume, volatility, cross-asset correlations and more than 200 technical indicators at the same time."},
                    {"heading": "Advantages of automated AI trading", "body": "1) 24/7 operation without fatigue. 2) No emotional bias. 3) Millisecond execution speed. 4) Continuous backtesting. 5) Adaptive risk management. 6) Full transparency on every trade."},
                    {"heading": "How to start in 3 steps", "body": "1) Create your Bitradex account. 2) Choose a strategy (conservative, moderate or aggressive). 3) Activate the bot with one click. It starts trading immediately and you follow results in real time on the dashboard."},
                    {"heading": "Security and transparency", "body": "Every trade is recorded and visible in your dashboard. The bot never takes custody of your funds — it operates exclusively through the API inside your own account."},
                ],
            },
            "spot-vs-futures-qual-escolher": {
                "title": "Spot vs Futures: Which Should You Choose on Bitradex?",
                "excerpt": "Understand the differences between spot trading and perpetual futures, when to use each one and how to maximise your results.",
                "date": "08 Jul 2026",
                "readTime": "6 min",
                "sections": [
                    {"heading": "What is spot trading?", "body": "In the spot market you buy and sell crypto at the current price and become the owner of the asset. It is the simplest and safest way to trade, ideal for long-term holders and beginners."},
                    {"heading": "What are perpetual futures?", "body": "Derivative contracts that let you trade with leverage of up to 125x, both long and short. They have no expiry date, which makes them very popular in the crypto market."},
                    {"heading": "When to use spot", "body": "Ideal for long-term accumulation, dollar cost averaging, portfolio diversification and anyone who prefers lower risk. You can never lose more than you invested."},
                    {"heading": "When to use futures", "body": "Ideal for hedging positions, short-term speculation, riding strong trends with leverage, and experienced traders who know how to manage risk."},
                    {"heading": "Bitradex recommendation", "body": "Beginners should start 100% in spot. Once you master technical analysis and risk management, allocate at most 10-20% of your capital to futures with low leverage (2x-5x)."},
                ],
            },
            "seguranca-carteira-cripto": {
                "title": "Crypto Security: How to Protect Your Digital Assets",
                "excerpt": "Security best practices, two-factor authentication, cold storage and how Bitradex protects billions in assets.",
                "date": "03 Jul 2026",
                "readTime": "7 min",
                "sections": [
                    {"heading": "Enable 2FA everywhere", "body": "Use apps such as Google Authenticator or Authy — never SMS. 2FA cuts the risk of unauthorised access to your account by more than 99%."},
                    {"heading": "Strong, unique passwords", "body": "Use a password manager (1Password, Bitwarden) to generate unique 20+ character passwords for every service. Never reuse passwords."},
                    {"heading": "Cold storage for large amounts", "body": "Assets you will not touch for months belong in hardware wallets (Ledger, Trezor). Bitradex keeps 95% of funds in institutional cold storage."},
                    {"heading": "Watch out for phishing", "body": "Always check the URL (bitradex.app). Never click links in suspicious emails. Bitradex will never ask for your password or seed phrase."},
                    {"heading": "Withdrawal address whitelist", "body": "Turn this on in your settings so withdrawals can only go to pre-approved addresses, with a security delay."},
                ],
            },
            "analise-tecnica-basico-cripto": {
                "title": "Technical Analysis for Crypto: From Zero to Advanced",
                "excerpt": "Learn to read candles, support and resistance, RSI, MACD and other essential indicators in crypto trading.",
                "date": "28 Jun 2026",
                "readTime": "12 min",
                "sections": [
                    {"heading": "Candlesticks: the language of the market", "body": "Each candle shows the open, close, high and low of a period. Patterns such as Doji, Hammer, Engulfing and Morning Star signal reversals and continuations."},
                    {"heading": "Support and resistance", "body": "Levels where price has historically paused. Support is the floor; resistance is the ceiling. Breakouts on volume usually confirm directional moves."},
                    {"heading": "RSI (Relative Strength Index)", "body": "A momentum indicator between 0 and 100. Above 70 is overbought; below 30 is oversold. Divergences between RSI and price are powerful signals."},
                    {"heading": "MACD (Moving Average Convergence Divergence)", "body": "Shows the relationship between two moving averages. Crossovers of the MACD line and its signal line generate buy and sell signals; the histogram shows momentum strength."},
                    {"heading": "Fibonacci retracement", "body": "A tool to identify correction levels (23.6%, 38.2%, 50%, 61.8%, 78.6%) within trends. Widely used to plan entries on pullbacks."},
                    {"heading": "Volume: the fuel of every move", "body": "Moves without volume tend to fail. Always confirm breakouts and reversals with a significant increase in volume."},
                ],
            },
            "programa-vip-referral-bitradex": {
                "title": "Bitradex VIP and Referral Programs: Maximise Your Benefits",
                "excerpt": "Learn about the VIP tiers, referral commissions and how to scale your earnings on the Bitradex platform.",
                "date": "22 Jun 2026",
                "readTime": "5 min",
                "sections": [
                    {"heading": "An 8-tier VIP program", "body": "From VIP 1 to VIP 8, the higher your trading volume, the lower your fees and the greater your benefits: a dedicated manager, priority withdrawals, premium APIs and early access to new products."},
                    {"heading": "Referral program", "body": "Earn up to 40% lifetime commission on the trading fees of the users you refer. There is no cap on referrals and no minimum commission amount."},
                    {"heading": "How to scale your earnings", "body": "Combine your own trading (using the AI Bot) with a network of referrals. Many Bitradex partners earn five to six figures per month in commissions alone."},
                    {"heading": "Get started now", "body": "Create your account using the invite link and start with a welcome bonus and reduced fees for the first 30 days."},
                ],
            },
        },
    },
}

PT = {
    "mobileApp": {
        "hero": {
            "title": "App Bitradex para Android e iOS",
            "subtitle": "Negocie spot, futuros e AI Bot de qualquer lugar, com gráficos profissionais, alertas em tempo real e segurança de nível institucional.",
            "ctaPrimary": "Criar conta e baixar",
            "ctaSecondary": "Ver recursos",
        },
        "featuresTitle": "Tudo que você faz no desktop, na palma da mão",
        "features": {
            "charts": {"title": "Gráficos TradingView", "desc": "Candles, mais de 100 indicadores e desenhos avançados direto no celular."},
            "bot": {"title": "AI Bot no bolso", "desc": "Ative, pause e acompanhe estratégias automatizadas com um toque."},
            "alerts": {"title": "Alertas de preço", "desc": "Notificações push instantâneas de preço, execuções e liquidações."},
            "biometrics": {"title": "Login biométrico", "desc": "Face ID e impressão digital com 2FA obrigatório em saques."},
            "deposits": {"title": "Depósito em BRL via Pix", "desc": "Depósitos e saques em reais aprovados em minutos."},
            "languages": {"title": "10 idiomas", "desc": "Interface completa em português, inglês, espanhol e mais sete idiomas."},
        },
        "specsTitle": "Especificações",
        "specs": {
            "android": {"label": "Android", "value": "8.0 ou superior · 85 MB"},
            "ios": {"label": "iOS", "value": "14.0 ou superior · 112 MB"},
            "languages": {"label": "Idiomas", "value": "10 idiomas incluindo PT-BR"},
            "darkMode": {"label": "Modo escuro", "value": "Nativo, com tema claro opcional"},
            "updates": {"label": "Atualizações", "value": "Ciclo de duas semanas"},
            "support": {"label": "Suporte", "value": "Chat 24/7 dentro do app"},
        },
        "stepsTitle": "Como começar em 4 passos",
        "steps": {
            "download": {"title": "Baixe o app", "desc": "Use o QR Code da página inicial ou baixe direto na loja do seu dispositivo."},
            "account": {"title": "Crie sua conta", "desc": "Cadastro em menos de 2 minutos com e-mail ou número de telefone."},
            "kyc": {"title": "Verifique sua identidade", "desc": "KYC com selfie e documento, aprovado normalmente em poucos minutos."},
            "trade": {"title": "Deposite e opere", "desc": "Aporte via Pix ou cripto e comece a operar spot, futuros ou AI Bot."},
        },
        "securityTitle": "Segurança no aplicativo",
        "security": {
            "twofa": "2FA obrigatório para saques e alteração de dados sensíveis",
            "whitelist": "Whitelist de endereços de retirada sincronizada com o app",
            "device": "Detecção de dispositivo novo com confirmação por e-mail",
            "tls": "Sessões criptografadas com TLS 1.3 e certificate pinning",
            "lock": "Bloqueio automático do app por inatividade",
        },
        "faqTitle": "Perguntas frequentes",
        "faqs": {
            "free": {"q": "O aplicativo Bitradex é gratuito?", "a": "Sim. O download e o uso do app são gratuitos. Você paga apenas as taxas de negociação padrão da plataforma."},
            "sameAccount": {"q": "Consigo usar a mesma conta no app e no site?", "a": "Sim. A conta é única: saldos, ordens, posições e configurações de segurança são sincronizados em tempo real."},
            "botClosed": {"q": "O AI Bot continua operando com o app fechado?", "a": "Sim. As estratégias rodam nos servidores da Bitradex, portanto seguem ativas mesmo com o celular desligado."},
            "safe": {"q": "É seguro operar pelo celular?", "a": "Sim. O app usa biometria, 2FA, criptografia TLS 1.3 e whitelist de saques, os mesmos padrões da versão web."},
        },
    },
    "blog": {
        "badge": "Insights, Análises e Estratégias",
        "titlePrefix": "Bitradex",
        "titleHighlight": "Blog",
        "subtitle": "Conteúdo premium sobre trading de criptomoedas, IA, análise de mercado e as últimas novidades do mundo cripto.",
        "home": "Home",
        "blog": "Blog",
        "all": "Todos",
        "featured": "Destaque",
        "readFull": "Ler artigo completo",
        "latest": "Últimos Artigos",
        "related": "Artigos recomendados",
        "back": "Voltar ao Blog",
        "inThisArticle": "Neste artigo",
        "topic": "Tópico",
        "authorName": "Bitradex Research Desk",
        "authorRole": "Analistas de mercado e especialistas em IA",
        "highlightLabel": "Destaque:",
        "highlightText": "a Bitradex combina execução institucional, segurança auditada e o AI Bot ARK Trading em uma única plataforma.",
        "ctaTitle": "Pronto para começar a operar?",
        "ctaText": "Junte-se a milhões de traders na Bitradex e ative o AI Bot em segundos.",
        "ctaButton": "Criar Conta Grátis",
        "categories": {
            "guide": "Guia",
            "aiTrading": "AI Trading",
            "education": "Educação",
            "security": "Segurança",
            "analysis": "Análise",
            "benefits": "Benefícios",
        },
        "posts": {
            "como-comecar-trading-cripto-2026": {
                "title": "Como Começar no Trading de Criptomoedas em 2026: Guia Completo",
                "excerpt": "Um passo a passo definitivo para iniciantes que querem entrar no mercado cripto com segurança, estratégia e o suporte do AI Bot da Bitradex.",
                "date": "15 Jul 2026",
                "readTime": "8 min",
                "sections": [
                    {"heading": "Por que investir em criptomoedas em 2026?", "body": "O mercado cripto atingiu marcos históricos em 2026, com adoção institucional em larga escala, ETFs consolidados e integração com sistemas financeiros tradicionais. Bitcoin, Ethereum e ativos como Solana e XRP se tornaram parte de portfólios diversificados globalmente. Começar agora é entrar em uma das maiores revoluções financeiras de nossa era."},
                    {"heading": "Passo 1: Escolha uma corretora confiável", "body": "A Bitradex oferece registro em segundos, KYC ágil, mais de 500 pares de negociação e taxas competitivas. Sua infraestrutura suporta bilhões em volume diário e conta com cold storage, seguros e conformidade regulatória em múltiplas jurisdições."},
                    {"heading": "Passo 2: Comece pelo Spot Trading", "body": "Para iniciantes, o mercado Spot é o mais recomendado: você compra e vende cripto pelo preço à vista, sem alavancagem. Comece com valores pequenos, aprenda a interface e domine a análise básica antes de partir para produtos alavancados."},
                    {"heading": "Passo 3: Diversifique com estratégia", "body": "Nunca coloque tudo em um único ativo. Uma alocação equilibrada pode incluir 50% em Bitcoin, 30% em Ethereum e 20% em altcoins selecionadas. Rebalanceie mensalmente para manter sua estratégia alinhada."},
                    {"heading": "Passo 4: Automatize com o AI Bot da Bitradex", "body": "O Bitradex AI Bot usa o modelo ARK Trading para executar estratégias 24/7, aproveitando oportunidades que humanos não conseguem monitorar. Com apenas um clique, você ativa uma inteligência de nível institucional para trabalhar por você."},
                    {"heading": "Passo 5: Aprenda continuamente", "body": "Mercados evoluem rápido. Acompanhe nosso blog, participe da comunidade e teste estratégias em ambientes de simulação antes de usar capital real. O sucesso no trading vem da educação constante."},
                ],
            },
            "ai-bot-bitradex-como-funciona": {
                "title": "Bitradex AI Bot: Como a Inteligência Artificial Revoluciona o Trading",
                "excerpt": "Descubra como o modelo ARK Trading analisa trilhões de parâmetros para executar operações lucrativas 24/7 no mercado de criptomoedas.",
                "date": "12 Jul 2026",
                "readTime": "10 min",
                "sections": [
                    {"heading": "O que é o Bitradex AI Bot?", "body": "É um sistema de trading automatizado alimentado pelo modelo ARK Trading, com mais de um trilhão de parâmetros analisando dados de mercado em tempo real. Ele identifica padrões, executa entradas e saídas otimizadas e gerencia risco automaticamente."},
                    {"heading": "Como funciona a arquitetura ARK Trading?", "body": "O ARK combina redes neurais profundas com aprendizado por reforço, treinado em décadas de dados de mercado. Ele avalia sentimento de mercado, volume, volatilidade, correlações entre ativos e mais de 200 indicadores técnicos simultaneamente."},
                    {"heading": "Vantagens do trading automatizado com IA", "body": "1) Operação 24/7 sem fadiga. 2) Ausência de vieses emocionais. 3) Velocidade de execução em milissegundos. 4) Backtesting contínuo. 5) Gestão de risco adaptativa. 6) Transparência total nas operações."},
                    {"heading": "Como começar em 3 passos", "body": "1) Crie sua conta na Bitradex. 2) Escolha uma estratégia (conservadora, moderada ou agressiva). 3) Ative o bot com um clique. Ele começa a operar imediatamente e você acompanha resultados em tempo real no dashboard."},
                    {"heading": "Segurança e transparência", "body": "Todas as operações são registradas e visíveis no seu painel. O bot nunca tem custódia dos seus fundos — ele opera exclusivamente via API dentro da sua conta."},
                ],
            },
            "spot-vs-futures-qual-escolher": {
                "title": "Spot vs Futures: Qual Modalidade Escolher na Bitradex?",
                "excerpt": "Entenda as diferenças entre Spot Trading e Futuros Perpétuos, quando usar cada uma e como maximizar seus resultados.",
                "date": "08 Jul 2026",
                "readTime": "6 min",
                "sections": [
                    {"heading": "O que é Spot Trading?", "body": "No mercado Spot você compra e vende criptomoedas pelo preço atual, tornando-se dono do ativo. É a forma mais simples e segura de operar, ideal para holders de longo prazo e iniciantes."},
                    {"heading": "O que são Futuros Perpétuos?", "body": "Contratos derivativos que permitem operar com alavancagem de até 125x, tanto comprado quanto vendido. Não têm data de vencimento, o que os torna muito populares no mercado cripto."},
                    {"heading": "Quando usar Spot", "body": "Ideal para: acumulação de longo prazo, DCA (dollar cost averaging), diversificação de portfólio e para quem prefere menor risco. Você nunca pode perder mais do que investiu."},
                    {"heading": "Quando usar Futures", "body": "Ideal para: hedge de posições, especulação de curto prazo, aproveitamento de tendências fortes com alavancagem e traders experientes que sabem gerenciar risco."},
                    {"heading": "Recomendação Bitradex", "body": "Iniciantes devem começar 100% no Spot. Após dominar análise técnica e gestão de risco, alocar no máximo 10-20% do capital para Futures com alavancagem baixa (2x-5x)."},
                ],
            },
            "seguranca-carteira-cripto": {
                "title": "Segurança em Cripto: Como Proteger Seus Ativos Digitais",
                "excerpt": "Melhores práticas de segurança, autenticação em dois fatores, cold storage e como a Bitradex protege bilhões em ativos.",
                "date": "03 Jul 2026",
                "readTime": "7 min",
                "sections": [
                    {"heading": "Ative 2FA em tudo", "body": "Use aplicativos como Google Authenticator ou Authy — nunca SMS. O 2FA reduz em mais de 99% o risco de acesso não autorizado à sua conta."},
                    {"heading": "Senhas fortes e únicas", "body": "Use um gerenciador de senhas (1Password, Bitwarden) para gerar senhas únicas de 20+ caracteres para cada serviço. Nunca reutilize senhas."},
                    {"heading": "Cold storage para grandes valores", "body": "Ativos que você não vai mexer por meses devem estar em hardware wallets (Ledger, Trezor). A Bitradex mantém 95% dos fundos em cold storage institucional."},
                    {"heading": "Cuidado com phishing", "body": "Sempre verifique a URL (bitradex.app). Nunca clique em links de emails suspeitos. A Bitradex nunca pede sua senha ou seed phrase."},
                    {"heading": "Whitelist de endereços de saque", "body": "Ative essa funcionalidade nas configurações para que saques só possam ser feitos para endereços pré-aprovados, com delay de segurança."},
                ],
            },
            "analise-tecnica-basico-cripto": {
                "title": "Análise Técnica para Cripto: Do Zero ao Avançado",
                "excerpt": "Aprenda a interpretar candles, suportes, resistências, RSI, MACD e outros indicadores essenciais no trading de criptomoedas.",
                "date": "28 Jun 2026",
                "readTime": "12 min",
                "sections": [
                    {"heading": "Candlesticks: a linguagem do mercado", "body": "Cada candle mostra abertura, fechamento, máxima e mínima em um período. Padrões como Doji, Hammer, Engulfing e Morning Star sinalizam reversões e continuações."},
                    {"heading": "Suportes e Resistências", "body": "Níveis onde o preço historicamente pausa. Suporte = piso; Resistência = teto. Rompimentos com volume geralmente confirmam movimentos direcionais."},
                    {"heading": "RSI (Relative Strength Index)", "body": "Indicador de momentum entre 0-100. Acima de 70 = sobrecomprado; abaixo de 30 = sobrevendido. Divergências entre RSI e preço são sinais poderosos."},
                    {"heading": "MACD (Moving Average Convergence Divergence)", "body": "Mostra a relação entre duas médias móveis. Cruzamentos da linha MACD com sua sinal geram sinais de compra/venda; o histograma mostra a força do momentum."},
                    {"heading": "Fibonacci Retracement", "body": "Ferramenta para identificar níveis de correção (23.6%, 38.2%, 50%, 61.8%, 78.6%) em tendências. Muito usado para definir entradas em pullbacks."},
                    {"heading": "Volume: o combustível dos movimentos", "body": "Movimentos sem volume tendem a falhar. Sempre confirme rompimentos e reversões com aumento significativo de volume."},
                ],
            },
            "programa-vip-referral-bitradex": {
                "title": "Programa VIP e Referral Bitradex: Maximize seus Benefícios",
                "excerpt": "Conheça os níveis VIP, comissões de indicação e como escalar seus ganhos na plataforma Bitradex.",
                "date": "22 Jun 2026",
                "readTime": "5 min",
                "sections": [
                    {"heading": "Programa VIP em 8 níveis", "body": "Do VIP 1 ao VIP 8, quanto maior seu volume de trading, menores as taxas e maiores os benefícios: gerente dedicado, saques prioritários, APIs premium e acesso antecipado a novos produtos."},
                    {"heading": "Programa de Indicação", "body": "Ganhe até 40% de comissão vitalícia sobre as taxas de trading dos usuários que você indicar. Não há limite de indicados nem valor mínimo de comissão."},
                    {"heading": "Como escalar seus ganhos", "body": "Combine seu próprio trading (usando o AI Bot) com uma rede de indicados. Muitos parceiros Bitradex ganham 5-6 dígitos mensais apenas em comissões."},
                    {"heading": "Comece agora", "body": "Crie sua conta usando o link de convite e já entre com bônus de boas-vindas e taxas reduzidas nos primeiros 30 dias."},
                ],
            },
        },
    },
}

ALT_EN = {
    "aiBot": {
        "features": {
            "oneClick": {"alt": "Icon of a mouse cursor clicking a button, representing one-click subscription to the AI Bot"},
            "strategy": {"alt": "Icon of a brain connected to circuits, representing AI-driven trading strategy"},
            "transparent": {"alt": "Icon of a transparent shield with a checkmark, representing fully transparent trading"},
            "risk": {"alt": "Icon of a gauge with a warning sign, representing real-time risk control"},
        }
    }
}

ALT_PT = {
    "aiBot": {
        "features": {
            "oneClick": {"alt": "Ícone de cursor clicando em um botão, representando a assinatura do AI Bot com um clique"},
            "strategy": {"alt": "Ícone de cérebro conectado a circuitos, representando a estratégia de trading conduzida por IA"},
            "transparent": {"alt": "Ícone de escudo transparente com marca de verificação, representando operações totalmente transparentes"},
            "risk": {"alt": "Ícone de medidor com sinal de alerta, representando o controle de risco em tempo real"},
        }
    }
}


def deep_merge(base, overlay):
    for k, v in overlay.items():
        if k in base and isinstance(base[k], dict) and isinstance(v, dict):
            deep_merge(base[k], v)
        else:
            base[k] = v
    return base


def apply(name, *blocks):
    path = os.path.join(ROOT, name)
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    for b in blocks:
        deep_merge(data, b)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("updated", name)


apply("en.json", EN, ALT_EN)
apply("pt.json", PT, ALT_PT)

# Other locales: ensure the new keys exist so nothing renders as raw Portuguese;
# fall back to the English copy (i18next fallbackLng already does this at runtime,
# but keeping the keys present makes the fallback explicit and lint-friendly).
for loc in ["es", "de", "id", "th", "ko", "ru", "ja", "ms", "zh"]:
    path = os.path.join(ROOT, loc + ".json")
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    merged = deep_merge(json.loads(json.dumps({**EN, **{}})), data.get("__none__", {}))
    for key, block in list(EN.items()) + list(ALT_EN.items()):
        existing = data.get(key)
        if isinstance(existing, dict):
            data[key] = deep_merge(json.loads(json.dumps(block)), existing)
        else:
            data[key] = json.loads(json.dumps(block))
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("updated", loc)
