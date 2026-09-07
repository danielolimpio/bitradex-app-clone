import { useEffect, useState } from "react";
import { X, ShieldCheck, Lock, Sparkles } from "lucide-react";
import cinematicBg from "@/assets/exit-popup/cinematic-bg.jpg";
import binanceMark from "@/assets/exit-popup/binance.png";
import bybitMark from "@/assets/exit-popup/bybit.png";
import bitgetMark from "@/assets/exit-popup/bitget.png";
import whatsappLogo from "@/assets/whatsapp-logo.svg";

const WHATSAPP_URL =
  "https://wa.me/5512982519116?text=" +
  encodeURIComponent("Quero saber mais sobre o sistema que opera na Binance");

const STORAGE_KEY = "exitIntentShown";

const exchanges = [
  { name: "Binance", logo: binanceMark, glow: "42 92% 50%" },
  { name: "Bybit", logo: bybitMark, glow: "38 96% 50%" },
  { name: "BitGet", logo: bitgetMark, glow: "178 100% 50%" },
];

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const open = () => {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setIsOpen(true);
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) open();
    };
    const handleBlur = () => open();

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("blur", handleBlur);
    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Antes de sair, veja!"
    >
      <div
        className="absolute inset-0 bg-background/85 backdrop-blur-md animate-in fade-in duration-300"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-primary/25 shadow-elevated animate-in fade-in zoom-in-95 duration-400">
        {/* Cinematic background */}
        <img
          src={cinematicBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background/95" />
        <div
          className="absolute inset-0 opacity-70"
          style={{ background: "var(--gradient-halo)" }}
        />
        <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        <button
          onClick={() => setIsOpen(false)}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-10 rounded-full border border-border/60 bg-background/60 p-2 text-muted-foreground backdrop-blur transition-colors hover:text-foreground hover:border-primary/50"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative px-6 py-10 text-center sm:px-12 sm:py-14">
          <span className="badge-premium badge-gold mx-auto">
            <Sparkles className="h-4 w-4" />
            Oportunidade exclusiva
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-5xl">
            Antes de sair, <span className="text-gradient">veja!</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Conheça o sistema que opera dentro da sua conta na{" "}
            <strong className="text-foreground">Binance</strong>,{" "}
            <strong className="text-foreground">Bybit</strong> e{" "}
            <strong className="text-foreground">BitGet</strong> — seu capital{" "}
            <strong className="text-foreground">100% no seu controle</strong>!
          </p>

          {/* Exchange logos */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {exchanges.map((ex) => (
              <div
                key={ex.name}
                className="group flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
                style={{ boxShadow: `0 12px 30px -20px hsl(${ex.glow} / 0.9)` }}
              >
                <img
                  src={ex.logo}
                  alt={`Logo ${ex.name}`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-7 w-7 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] sm:h-8 sm:w-8"
                />
                <span className="text-sm font-semibold tracking-tight sm:text-base">
                  {ex.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="group relative mt-9 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-bold text-[#052e16] shadow-[0_18px_45px_-18px_rgba(37,211,102,0.85)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#1fbe5a] sm:w-auto sm:px-14 sm:text-xl"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"
              style={{ background: "var(--gradient-sheen)" }}
            />
            <img
              src={whatsappLogo}
              alt="WhatsApp"
              loading="lazy"
              className="h-7 w-7"
            />
            Saber Mais
          </a>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" /> Capital na sua conta
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Sem custódia de terceiros
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
