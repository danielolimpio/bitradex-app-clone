import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/seo/SEO";
import { Headphones, MessageCircle, Mail, Ticket, Clock, Globe } from "lucide-react";

const channels = [
  { icon: MessageCircle, title: "Chat 24/7", desc: "Suporte ao vivo em português. Resposta média: 2 minutos.", action: "Abrir Chat" },
  { icon: Mail, title: "E-mail", desc: "contact@bitradex.app — resposta em até 4 horas úteis.", action: "Enviar E-mail" },
  { icon: Ticket, title: "Sistema de Tickets", desc: "Para questões complexas, técnicas ou financeiras.", action: "Abrir Ticket" },
];

const SupportCenter = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative container mx-auto px-4 lg:px-8 py-20 text-center">
            <Headphones className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Centro de Suporte</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Atendimento premium, humano, multilíngue e 24 horas por dia, 7 dias por semana.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 lg:px-8 py-16 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {channels.map((c, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-card/30 hover:border-primary/50 transition-all text-center">
                <c.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground font-light mb-6">{c.desc}</p>
                <Link to="/contact" className="inline-block px-6 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:shadow-button transition-all">
                  {c.action}
                </Link>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-card/30">
              <Clock className="w-8 h-8 text-primary mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground font-light">Disponibilidade contínua</div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card/30">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">11 Idiomas</div>
              <div className="text-sm text-muted-foreground font-light">Suporte multilíngue global</div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card/30">
              <MessageCircle className="w-8 h-8 text-primary mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">&lt; 2 min</div>
              <div className="text-sm text-muted-foreground font-light">Tempo médio de resposta</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default SupportCenter;
