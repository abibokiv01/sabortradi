import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, UtensilsCrossed } from "lucide-react";

import { WhatsAppFloat } from "@/components/restaurant/whatsapp-float";
import { MenuCard } from "@/components/restaurant/menu-card";
import { InfoCard } from "@/components/restaurant/info-card";

const PHONE = "258824230379";

const CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "principais", label: "Principais" },
  { id: "lanches", label: "Lanches" },
  { id: "bebidas", label: "Bebidas" },
] as const;

type Category = (typeof CATEGORIES)[number]["id"];

const MENU_ITEMS = [
  {
    id: "bife-casa",
    category: "principais",
    title: "Bife à Casa",
    price: "550 MT",
    description:
      "Suculento bife de novilho grelhado, acompanhado de batatas fritas crocantes e salada.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "hamburguer-gourmet",
    category: "lanches",
    title: "Hambúrguer Gourmet",
    price: "400 MT",
    description:
      "Hambúrguer artesanal 180g, queijo cheddar fundido, bacon e molho especial no pão brioche.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "pizza-pepperoni",
    category: "principais",
    title: "Pizza Pepperoni",
    price: "650 MT",
    description:
      "Massa artesanal fina, molho de tomate caseiro, bastante mozarela e rodelas de pepperoni.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "sumo-natural",
    category: "bebidas",
    title: "Sumo Natural 500ml",
    price: "150 MT",
    description:
      "Sumo natural feito na hora. Opções: Laranja, Ananás com Hortelã ou Fruta da Época.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sabor & Tradição | Restaurante & Delivery",
      },
      {
        name: "description",
        content:
          "A melhor experiência gastronómica da cidade entregue na sua porta. Peça pelo WhatsApp — Sabor & Tradição, Maputo.",
      },
      {
        property: "og:title",
        content: "Sabor & Tradição | Restaurante & Delivery",
      },
      {
        property: "og:description",
        content:
          "A melhor experiência gastronómica da cidade entregue na sua porta. Peça pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#e63946" },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");

  const filteredItems =
    activeCategory === "todos"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <header
        className="relative flex flex-col items-center justify-center bg-cover bg-center px-5 py-24 text-center text-white md:py-28"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <h1 className="text-4xl font-extrabold md:text-5xl">Sabor & Tradição</h1>
        <p className="mt-4 max-w-xl text-lg opacity-90">
          A melhor experiência gastronómica da cidade entregue na sua porta
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            hash="cardapio"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-restaurant-primary px-7 py-3 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-restaurant-primary-hover"
          >
            <UtensilsCrossed className="h-4 w-4" />
            Ver Cardápio
          </Link>
          <a
            href={`https://wa.me/${PHONE}?text=Olá!%20Quero%20fazer%20um%20pedido.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-restaurant-whatsapp px-7 py-3 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-restaurant-whatsapp-hover"
          >
            <Phone className="h-4 w-4" />
            Fazer Pedido Direto
          </a>
        </div>
      </header>

      {/* Menu */}
      <main className="mx-auto max-w-5xl px-5 py-14" id="cardapio">
        <h2 className="relative mb-10 text-center text-3xl font-bold text-foreground">
          Nosso Cardápio
          <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-restaurant-primary" />
        </h2>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeCategory === cat.id
                  ? "bg-restaurant-dark text-white"
                  : "bg-secondary text-foreground hover:bg-restaurant-dark hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              phone={PHONE}
            />
          ))}
        </div>

        {/* Info */}
        <section className="mt-14 grid gap-5 sm:grid-cols-2">
          <InfoCard
            title={
              <>
                <MapPin className="mb-1 inline h-5 w-5" /> Localização
              </>
            }
          >
            <p>Av. Principal, nº 1234</p>
            <p>Bairro Central — Maputo</p>
            <p className="mt-2 font-bold text-restaurant-primary">
              Próximo ao Jardim Tunduru
            </p>
          </InfoCard>
          <InfoCard
            title={
              <>
                <Clock className="mb-1 inline h-5 w-5" /> Horário de Funcionamento
              </>
            }
          >
            <p>
              <strong>Terça a Sexta:</strong> 11h00 – 22h00
            </p>
            <p>
              <strong>Sábado e Domingo:</strong> 11h00 – 23h00
            </p>
            <p className="text-muted-foreground">Segunda-feira: Fechado</p>
          </InfoCard>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-restaurant-dark py-7 text-center text-sm text-white">
        <p>
          <Link to="/instalar" className="font-semibold underline underline-offset-4">
            Instalar a app no ecrã principal
          </Link>
        </p>
        <p className="mt-3">&copy; 2026 Restaurante Sabor & Tradição — Todos os direitos reservados.</p>
        <p className="mt-1 opacity-80">
          Desenvolvido por <strong className="text-restaurant-primary">Abibo Atumane</strong>
        </p>
      </footer>

      <WhatsAppFloat phone={PHONE} message="Olá! Gostaria de fazer um pedido." />
    </>
  );
}
