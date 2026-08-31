import { Phone } from "lucide-react";

interface MenuCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  phone: string;
}

export function MenuCard({ image, title, price, description, phone }: MenuCardProps) {
  const handleOrder = () => {
    const text = `Olá! Gostaria de fazer o pedido do prato: *${title}* (${price}).`;
    const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(href, "_blank");
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-card text-card-foreground shadow-sm transition-transform hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="h-[180px] w-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-grow flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <span className="whitespace-nowrap text-base font-extrabold text-restaurant-primary">
            {price}
          </span>
        </div>
        <p className="mb-5 flex-grow text-sm text-muted-foreground">{description}</p>
        <button
          onClick={handleOrder}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-restaurant-dark px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-restaurant-primary"
        >
          <Phone className="h-4 w-4" />
          Pedir via WhatsApp
        </button>
      </div>
    </article>
  );
}
