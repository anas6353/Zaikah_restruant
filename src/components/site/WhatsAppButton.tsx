import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923104443734"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition hover:scale-105 hover:bg-[#20bd5b]"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
