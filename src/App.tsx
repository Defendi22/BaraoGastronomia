import { useEffect, useState } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconStar = ({ filled = true }: { filled?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconMapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconWhatsapp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const IconChevronDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const menuItems = [
  {
    category: "Entradas",
    items: [
      { name: "Carpaccio de Filé", desc: "Filé mignon fatiado finíssimo, rúcula selvagem, parmesão e azeite trufado", price: "R$ 68" },
      { name: "Bruschetta ao Vinho", desc: "Pão artesanal grelhado, tomate confit, manjericão e redução de vinho tinto", price: "R$ 42" },
      { name: "Ostras Frescas", desc: "Meia dúzia de ostras especiais com molho mignonette e limão siciliano", price: "R$ 98" },
    ],
  },
  {
    category: "Pratos Principais",
    items: [
      { name: "Filé ao Molho Barão", desc: "Medalhão de filé mignon grelhado, molho de vinho Malbec, purê trufado e aspargos", price: "R$ 148" },
      { name: "Risoto de Camarão", desc: "Arroz arbóreo cremoso, camarões salteados, açafrão e parmesão 24 meses", price: "R$ 128" },
      { name: "Peixe do Dia", desc: "Peixe fresco da temporada, legumes da estação e beurre blanc ao champagne", price: "R$ 118" },
    ],
  },
  {
    category: "Sobremesas",
    items: [
      { name: "Crème Brûlée", desc: "Clássico francês com crocante de açúcar caramelizado e fava de baunilha", price: "R$ 48" },
      { name: "Chocolate Noir", desc: "Mousse de chocolate belga 70%, coulis de framboesa e sorvete de baunilha", price: "R$ 52" },
      { name: "Petit Gâteau", desc: "Bolo quente de chocolate com coração derretido, servido com sorvete artesanal", price: "R$ 46" },
    ],
  },
];

const testimonials = [
  {
    name: "Fernanda Oliveira",
    text: "Uma experiência gastronômica verdadeiramente inesquecível. O filé ao molho Barão é simplesmente divino. O ambiente, o serviço e a comida se complementam perfeitamente.",
    stars: 5,
  },
  {
    name: "Ricardo Mendes",
    text: "Visitei em comemoração ao nosso aniversário de casamento e superou todas as expectativas. Cada detalhe foi pensado com muito cuidado. Voltaremos com certeza!",
    stars: 5,
  },
  {
    name: "Camila Rocha",
    text: "O melhor restaurante da cidade, sem dúvida. A carta de vinhos é excepcional e o sommelier fez recomendações perfeitas. Ambiente sofisticado e acolhedor.",
    stars: 5,
  },
];

const fullLogo = "/images/logo-barao-completa-branco.png";
const WHATSAPP_NUMBER = "5511954775288";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const INSTAGRAM_URL = "https://www.instagram.com/baraogastronomiaafabo/";
const MAPS_QUERY = "1 Av. Comendador Hermes Traldi, Jundiaí, São Paulo";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
const navigationLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Reservas", href: "#reservas" },
  { label: "Contato", href: "#contato" },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const observeRevealElements = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        if (!el.classList.contains("visible")) {
          obs.observe(el);
        }
      });
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver(() => {
      observeRevealElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      obs.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "rgba(74, 16, 32, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background-color 0.4s ease, backdrop-filter 0.4s ease",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center justify-center leading-none" aria-label="Barão Gastronomia">
          <img
            src={fullLogo}
            alt="Barão Gastronomia"
            className="h-12 md:h-14 w-auto object-contain"
            style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.18))" }}
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navigationLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link text-sm font-light tracking-widest uppercase"
                style={{ color: "#F8F3EE" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Reserve button */}
        <a
          href="#reservas"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300"
          style={{ border: "1px solid #C9A84C", color: "#C9A84C", letterSpacing: "0.15em" }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "#C9A84C";
            (e.target as HTMLElement).style.color = "#4A1020";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = "transparent";
            (e.target as HTMLElement).style.color = "#C9A84C";
          }}
        >
          Reservar Mesa
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "#F8F3EE" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          backgroundColor: "rgba(74, 16, 32, 0.98)",
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <ul className="flex flex-col px-6 pb-6 gap-4">
          {navigationLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm tracking-widest uppercase font-light"
                style={{ color: "#F8F3EE" }}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#reservas"
              className="inline-block px-5 py-2 rounded-full text-xs tracking-widest uppercase"
              style={{ border: "1px solid #C9A84C", color: "#C9A84C" }}
              onClick={() => setOpen(false)}
            >
              Reservar Mesa
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero16x9.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="animate-fade-in-up text-xs tracking-[0.4em] uppercase mb-6 font-light"
          style={{ color: "#C9A84C", animationDelay: "0.2s", opacity: 0 }}
        >
          Restaurante familiar desde 2012
        </p>

        <h1
          className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#F8F3EE",
            lineHeight: 1.1,
            animationDelay: "0.4s",
            opacity: 0,
          }}
        >
          Barão<br />
          <em style={{ color: "#C9A84C", fontStyle: "italic", fontWeight: 500 }}>Gastronomia</em>
        </h1>

        <p
          className="animate-fade-in-up text-lg md:text-xl font-light mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(248,243,238,0.85)", animationDelay: "0.6s", opacity: 0 }}
        >
          Um lugar para receber bem, comer bem e aproveitar bons momentos ao lado de quem a gente gosta.
        </p>

        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <a
            href="#reservas"
            className="px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: "#6B1A2A",
              color: "#F8F3EE",
              border: "2px solid #6B1A2A",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#8B2A3E";
              (e.target as HTMLElement).style.borderColor = "#8B2A3E";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#6B1A2A";
              (e.target as HTMLElement).style.borderColor = "#6B1A2A";
            }}
          >
            Fazer Reserva
          </a>
          <a
            href="#cardapio"
            className="px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300"
            style={{
              border: "2px solid rgba(248,243,238,0.6)",
              color: "#F8F3EE",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor = "#C9A84C";
              (e.target as HTMLElement).style.color = "#C9A84C";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor = "rgba(248,243,238,0.6)";
              (e.target as HTMLElement).style.color = "#F8F3EE";
            }}
          >
            Ver Cardápio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ color: "rgba(248,243,238,0.5)", animationDelay: "1.2s", opacity: 0 }}
      >
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <div style={{ animation: "bounce 1.8s infinite" }}>
          <IconChevronDown />
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" style={{ backgroundColor: "#F8F3EE" }} className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="reveal relative">
          <div
            className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
            style={{ border: "2px solid #C9A84C", zIndex: 0 }}
          />
          <img
            src="/images/chef.jpg"
            alt="Chef Barão Gastronomia"
            className="relative z-10 w-full h-[480px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Text */}
        <div className="reveal" style={{ transitionDelay: "0.2s" }}>
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: "#C9A84C" }}>
            Nossa História
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#4A1020" }}
          >
            Sabor de casa<br />
            <em style={{ fontStyle: "italic", color: "#6B1A2A" }}>com toque especial</em>
          </h2>

          <div className="divider-ornament mb-8" style={{ justifyContent: "flex-start" }}>
            <div style={{ width: 80, height: 1, backgroundColor: "#C9A84C" }} />
          </div>

          <p className="text-base leading-relaxed mb-5" style={{ color: "#5a3a3a", fontWeight: 300 }}>
            Fundado em 2012, o Barão nasceu para reunir o melhor da comida de qualidade com o acolhimento de um restaurante de família. Aqui, o cuidado com os ingredientes e a atenção ao cliente fazem toda a diferença.
          </p>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#5a3a3a", fontWeight: 300 }}>
            Nosso ambiente é descontraído, acolhedor e cheio de personalidade. A comida é saborosa, bem preparada e servida com calor humano, criando momentos simples, especiais e memoráveis para todos.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { num: "12+", label: "Anos de história" },
              { num: "40k+", label: "Clientes satisfeitos" },
              { num: "5★", label: "Avaliação média" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#6B1A2A" }}>
                  {num}
                </p>
                <p className="text-xs tracking-wide uppercase mt-1" style={{ color: "#8a6060", fontWeight: 300 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="cardapio" style={{ backgroundColor: "#4A1020" }} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: "#C9A84C" }}>
            Sabores que lembram casa
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3EE" }}
          >
            Nosso Cardápio
          </h2>
          <div className="divider-ornament">
            <span style={{ color: "#C9A84C", fontSize: "1.2rem" }}>✦</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap reveal">
          {menuItems.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(i)}
              className="px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                backgroundColor: activeTab === i ? "#C9A84C" : "transparent",
                color: activeTab === i ? "#4A1020" : "#F8F3EE",
                border: "1px solid",
                borderColor: activeTab === i ? "#C9A84C" : "rgba(248,243,238,0.3)",
                fontWeight: activeTab === i ? 600 : 300,
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="space-y-1">
          {menuItems[activeTab].items.map((item, i) => (
            <div
              key={item.name}
              className="menu-card rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 reveal"
              style={{
                backgroundColor: "rgba(248,243,238,0.05)",
                border: "1px solid rgba(201,168,76,0.2)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="flex-1">
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3EE" }}
                >
                  {item.name}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(248,243,238,0.6)" }}>
                  {item.desc}
                </p>
              </div>
              <span
                className="text-xl font-bold whitespace-nowrap"
                style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C" }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center reveal">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("navigate-to-menu"))}
            className="px-8 py-4 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300"
            style={{
              backgroundColor: "#C9A84C",
              color: "#4A1020",
              border: "2px solid #C9A84C",
            }}
          >
            Cardápio Completo
          </button>
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-sm font-light" style={{ color: "rgba(248,243,238,0.5)" }}>
            * Cardápio sujeito à sazonalidade dos ingredientes
          </p>
        </div>
      </div>
    </section>
  );
}

function MenuPage({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ backgroundColor: "#F8F3EE", minHeight: "100vh" }}>
      <header style={{ backgroundColor: "rgba(74, 16, 32, 0.97)" }} className="sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <img src={fullLogo} alt="Barão Gastronomia" className="h-12 md:h-14 w-auto object-contain" />
          <button
            type="button"
            onClick={onBack}
            className="px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium"
            style={{ border: "1px solid #C9A84C", color: "#C9A84C", backgroundColor: "transparent" }}
          >
            Voltar ao Site
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: "#C9A84C" }}>
            Cardápio Completo
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#4A1020" }}
          >
            Sabores do Barão
          </h1>
          <div className="divider-ornament mt-6">
            <span style={{ color: "#C9A84C", fontSize: "1.2rem" }}>✦</span>
          </div>
        </div>

        <div className="space-y-10">
          {menuItems.map((category) => (
            <section key={category.category} className="rounded-3xl overflow-hidden shadow-lg" style={{ backgroundColor: "#fff", border: "1px solid rgba(107,26,42,0.1)" }}>
              <div className="px-6 py-5 md:px-8" style={{ backgroundColor: "#4A1020" }}>
                <h2
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3EE" }}
                >
                  {category.category}
                </h2>
              </div>

              <div className="p-5 md:p-8 space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="rounded-2xl p-5 md:p-6" style={{ backgroundColor: "#F8F3EE", border: "1px solid rgba(107,26,42,0.08)" }}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: "#4A1020" }}>
                          {item.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed" style={{ color: "#5a3a3a", fontWeight: 300 }}>
                          {item.desc}
                        </p>
                      </div>
                      <span className="text-2xl font-bold whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif", color: "#6B1A2A" }}>
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

function Gallery() {
  const images = [
    { src: "https://images.pexels.com/photos/37968303/pexels-photo-37968303.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", alt: "Mesa elegante com velas" },
    { src: "/images/galeria/dish1.jpg", alt: "Prato principal" },
    { src: "https://images.pexels.com/photos/10075346/pexels-photo-10075346.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", alt: "Vinho sendo servido" },
    { src: "/images/galeria/dish2.jpg", alt: "Entrada especial" },
    { src: "https://images.pexels.com/photos/1872889/pexels-photo-1872889.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200", alt: "Ambiente do restaurante" },
    { src: "/images/galeria/dish3.jpg", alt: "Sobremesa especial" },
  ];

  return (
    <section id="galeria" style={{ backgroundColor: "#F8F3EE" }} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: "#C9A84C" }}>
            Momentos Especiais
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#4A1020" }}
          >
            Galeria
          </h2>
          <div className="divider-ornament mt-6">
            <span style={{ color: "#C9A84C", fontSize: "1.2rem" }}>✦</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="reveal overflow-hidden rounded-xl group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-56 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden py-24 px-6" style={{ backgroundColor: "#6B1A2A" }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/guardachuvas.png')",
          opacity: 0.18,
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(74, 16, 32, 0.08) 0%, rgba(74, 16, 32, 0.66) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: "#C9A84C" }}>
            O que dizem nossos clientes
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3EE" }}
          >
            Depoimentos
          </h2>
          <div className="divider-ornament mt-6">
            <span style={{ color: "#C9A84C", fontSize: "1.2rem" }}>✦</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal rounded-2xl p-8 flex flex-col"
              style={{
                backgroundColor: "rgba(248,243,238,0.07)",
                border: "1px solid rgba(201,168,76,0.25)",
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5" style={{ color: "#C9A84C" }}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <IconStar key={j} />
                ))}
              </div>

              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "rgba(248,243,238,0.8)", fontWeight: 300 }}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: "#C9A84C", color: "#4A1020" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#F8F3EE" }}>{t.name}</p>
                  <p className="text-xs font-light" style={{ color: "rgba(248,243,238,0.5)" }}>Cliente fiel</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reservation() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "2", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const reservationMessage = [
    "Olá! Gostaria de solicitar uma reserva:",
    `Nome: ${form.name}`,
    `E-mail: ${form.email}`,
    `Telefone: ${form.phone || "Não informado"}`,
    `Data: ${form.date}`,
    `Horário: ${form.time}`,
    `Pessoas: ${form.guests}`,
    `Observações: ${form.message || "Nenhuma"}`,
  ].join("\n");
  const reservationWhatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(reservationMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(reservationWhatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const inputStyle = {
    backgroundColor: "rgba(248,243,238,0.07)",
    border: "1px solid rgba(201,168,76,0.3)",
    color: "#F8F3EE",
    borderRadius: "0.5rem",
    padding: "0.75rem 1rem",
    width: "100%",
    outline: "none",
    fontSize: "0.875rem",
    fontFamily: "'Lato', sans-serif",
  };

  return (
    <section id="reservas" style={{ backgroundColor: "#4A1020" }} className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-xs tracking-[0.35em] uppercase mb-4 font-medium" style={{ color: "#C9A84C" }}>
            Reserve sua experiência
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3EE" }}
          >
            Faça sua Reserva
          </h2>
          <div className="divider-ornament mt-6">
            <span style={{ color: "#C9A84C", fontSize: "1.2rem" }}>✦</span>
          </div>
        </div>

        {submitted ? (
          <div
            className="reveal text-center py-16 rounded-2xl"
            style={{ backgroundColor: "rgba(248,243,238,0.07)", border: "1px solid rgba(201,168,76,0.3)" }}
          >
            <div className="text-5xl mb-4">🥂</div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: "#F8F3EE" }}
            >
              Solicitação pronta!
            </h3>
            <p style={{ color: "rgba(248,243,238,0.7)", fontWeight: 300 }}>
              Obrigado, {form.name}! Envie a mensagem pelo WhatsApp para concluir sua solicitação.
            </p>
            <a
              href={reservationWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 rounded-full text-sm tracking-widest uppercase font-semibold"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              Abrir WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 font-light" style={{ color: "#C9A84C" }}>Nome completo</label>
                <input required style={inputStyle} type="text" placeholder="Seu nome" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 font-light" style={{ color: "#C9A84C" }}>E-mail</label>
                <input style={inputStyle} type="email" placeholder="seu@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 font-light" style={{ color: "#C9A84C" }}>Telefone / WhatsApp</label>
                <input style={inputStyle} type="tel" placeholder="(11) 99999-9999" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 font-light" style={{ color: "#C9A84C" }}>Nº de Pessoas</label>
                <select style={{ ...inputStyle }} value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n} style={{ backgroundColor: "#4A1020" }}>{n} {n === 1 ? "pessoa" : "pessoas"}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 font-light" style={{ color: "#C9A84C" }}>Data</label>
                <input required style={{ ...inputStyle, colorScheme: "dark" }} type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2 font-light" style={{ color: "#C9A84C" }}>Horário</label>
                <select style={{ ...inputStyle }} value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}>
                  <option value="" style={{ backgroundColor: "#4A1020" }}>Selecione</option>
                  {["12:00", "12:30", "13:00", "13:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"].map(t => (
                    <option key={t} value={t} style={{ backgroundColor: "#4A1020" }}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 font-light" style={{ color: "#C9A84C" }}>Observações</label>
              <textarea
                style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
                placeholder="Alergias, ocasião especial, preferências..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: "#C9A84C", color: "#4A1020" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = "#dbb95a"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = "#C9A84C"; }}
            >
              Confirmar Reserva
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" style={{ backgroundColor: "#F8F3EE" }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-4" style={{ color: "#6B1A2A" }}>
            <IconMapPin />
            <p className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: "#C9A84C" }}>
              Encontre a gente
            </p>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#4A1020" }}
          >
            Visite o Barão
          </h2>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg bg-white" aria-label="Abrir endereço no Google Maps">
            <iframe
              title="Localização do Barão Gastronomia no Google Maps"
              src={MAPS_EMBED_URL}
              className="w-full aspect-[4/3] md:aspect-[5/4] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-medium hover:underline" style={{ color: "#6B1A2A" }}>
            1 Av. Comendador Hermes Traldi, Jundiaí, São Paulo
          </a>
        </div>

        <div className="reveal" style={{ transitionDelay: "0.15s" }}>
          <p className="text-xs tracking-[0.3em] uppercase font-medium mb-4" style={{ color: "#C9A84C" }}>
            Fale com a gente
          </p>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
            >
              <IconWhatsapp />
              WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "#6B1A2A", color: "#F8F3EE" }}
            >
              <IconInstagram />
              Instagram
            </a>
          </div>

          <div className="mt-10 pt-7" style={{ borderTop: "1px solid rgba(107,26,42,0.18)" }}>
            <div className="flex items-center gap-3 mb-5" style={{ color: "#6B1A2A" }}>
              <IconClock />
              <h3 className="text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: "#4A1020" }}>
                Horário de funcionamento
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#8a6060" }}>Almoço</p>
                <p className="text-lg font-medium" style={{ color: "#4A1020" }}>11:30 às 15:00</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#8a6060" }}>Jantar</p>
                <p className="text-lg font-medium" style={{ color: "#4A1020" }}>17:30 às 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2a0a12" }} className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <img
              src={fullLogo}
              alt="Barão Gastronomia"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Links */}
          <div className="flex gap-6 flex-wrap justify-center">
            {navigationLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-xs tracking-widest uppercase font-light hover:opacity-100 transition-opacity"
                style={{ color: "rgba(248,243,238,0.5)" }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {[ 
              { icon: <IconInstagram />, label: "Instagram" },
              { icon: <IconWhatsapp />, label: "WhatsApp", href: WHATSAPP_URL },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href={label === "WhatsApp" ? WHATSAPP_URL : "#"}
                aria-label={label}
                target={label === "WhatsApp" ? "_blank" : undefined}
                rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#C9A84C";
                  (e.currentTarget as HTMLElement).style.color = "#4A1020";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center text-xs font-light"
          style={{ borderTop: "1px solid rgba(201,168,76,0.15)", color: "rgba(248,243,238,0.3)" }}
        >
          © {new Date().getFullYear()} Barão Gastronomia. Todos os direitos reservados. <br className="sm:hidden" />
          Feito com paixão pela gastronomia.
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp Float Button ────────────────────────────────────────────────────
function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: "#25D366", color: "#fff" }}
      aria-label="WhatsApp"
    >
      <IconWhatsapp />
    </a>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [showMenuPage, setShowMenuPage] = useState(false);

  useEffect(() => {
    const handler = () => setShowMenuPage(true);
    window.addEventListener("navigate-to-menu", handler);
    return () => window.removeEventListener("navigate-to-menu", handler);
  }, []);

  useScrollReveal();

  if (showMenuPage) {
    return <MenuPage onBack={() => setShowMenuPage(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
