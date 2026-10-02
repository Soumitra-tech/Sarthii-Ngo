import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/content';

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      {/* Pulse ring */}
      <span className="absolute inset-0 -z-10 rounded-full bg-green-500 opacity-40 animate-ping" />
    </a>
  );
}
