import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, Share, MoreVertical, Wifi, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/instalar")({
  head: () => ({
    meta: [
      { title: "Instalar a App | Sabor & Tradição" },
      {
        name: "description",
        content:
          "Guia rápido para instalar a app do Sabor & Tradição no ecrã principal do seu telemóvel e usar o cardápio mesmo sem internet.",
      },
      { property: "og:title", content: "Instalar a App | Sabor & Tradição" },
      {
        property: "og:description",
        content:
          "Instale o cardápio do Sabor & Tradição no ecrã principal e consulte-o offline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#e63946" },
    ],
  }),
  component: InstallGuide,
});

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-restaurant-primary text-sm font-bold text-white">
        {n}
      </span>
      <span className="text-foreground">{children}</span>
    </li>
  );
}

function InstallGuide() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-restaurant-dark px-5 py-12 text-center text-white">
        <Smartphone className="mx-auto h-9 w-9" />
        <h1 className="mt-3 text-3xl font-extrabold">Instalar no Ecrã Principal</h1>
        <p className="mx-auto mt-3 max-w-xl opacity-90">
          Adicione o Sabor & Tradição ao seu telemóvel e consulte o cardápio mesmo sem
          internet.
        </p>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-12">
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <MoreVertical className="h-5 w-5 text-restaurant-primary" />
            Android (Chrome)
          </h2>
          <ol className="mt-4 space-y-3">
            <Step n={1}>Abra o site no Chrome.</Step>
            <Step n={2}>
              Toque no menu <strong>⋮</strong> no canto superior direito.
            </Step>
            <Step n={3}>
              Escolha <strong>Instalar app</strong> ou{" "}
              <strong>Adicionar ao ecrã principal</strong>.
            </Step>
            <Step n={4}>
              Confirme em <strong>Instalar</strong>. O ícone aparece junto às outras apps.
            </Step>
          </ol>
        </section>

        <section className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Share className="h-5 w-5 text-restaurant-primary" />
            iPhone / iPad (Safari)
          </h2>
          <ol className="mt-4 space-y-3">
            <Step n={1}>Abra o site no Safari.</Step>
            <Step n={2}>
              Toque no botão <strong>Partilhar</strong> (quadrado com seta para cima).
            </Step>
            <Step n={3}>
              Deslize e escolha <strong>Adicionar ao Ecrã Principal</strong>.
            </Step>
            <Step n={4}>
              Toque em <strong>Adicionar</strong> no canto superior direito.
            </Step>
          </ol>
        </section>

        <section className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Wifi className="h-5 w-5 text-restaurant-primary" />
            Funciona sem internet
          </h2>
          <p className="mt-3 text-muted-foreground">
            Depois da primeira visita, o cardápio, as imagens e as informações ficam
            guardadas no telemóvel. Se ficar sem rede, a app continua a abrir com o último
            conteúdo. Os pedidos por WhatsApp precisam de ligação à internet.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Nota: o modo offline só funciona no site publicado, não na pré-visualização.
          </p>
        </section>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-restaurant-primary px-7 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-restaurant-primary-hover"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Cardápio
          </Link>
        </div>
      </main>
    </div>
  );
}
