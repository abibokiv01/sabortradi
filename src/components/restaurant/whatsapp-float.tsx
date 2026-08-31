import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  phone: string;
  message?: string;
}

export function WhatsAppFloat({ phone, message }: WhatsAppFloatProps) {
  const text = message ?? "Olá! Gostaria de fazer um pedido.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-restaurant-whatsapp text-white shadow-lg transition-transform hover:scale-110 hover:bg-restaurant-whatsapp-hover"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
    </a>
  );
}
