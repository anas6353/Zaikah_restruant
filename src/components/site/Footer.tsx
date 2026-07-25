import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Instagram, Facebook, CalendarDays } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 mt-24">
      <div className="border-t border-b border-ember/30 bg-wood-dark">
        <div className="container-x py-3 flex flex-wrap items-center justify-center gap-3 text-sm">
          <CalendarDays className="h-4 w-4 text-ember" />
          <span className="uppercase tracking-[0.22em] text-xs text-cream/90">
            Grand Opening · Friday, 26 July 2026
          </span>
        </div>
      </div>
      <div className="container-x pt-14 pb-10 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/60">
            A family kitchen on Ferozepur Road where Pakistani BBQ, karahi, Chinese and
            fast food share one warm, well-lit table. Cooked from scratch, served the way
            you'd feed your own people.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://instagram.com/zaikah.offical"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-ember hover:text-ember transition"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 hover:border-ember hover:text-ember transition"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-cream text-sm uppercase tracking-[0.22em] mb-4">Visit</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-ember shrink-0 mt-0.5" />
              <span>Main Feroze Pur Road, near Ring Road Interchange, Lahore</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 text-ember shrink-0 mt-0.5" />
              <a href="tel:03104443734" className="hover:text-ember">0310-4443734</a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="h-4 w-4 text-ember shrink-0 mt-0.5" />
              <a href="https://wa.me/923104443734" className="hover:text-ember">
                WhatsApp: 0310-4443734
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-sm uppercase tracking-[0.22em] mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-ember">Home</Link></li>
            <li><Link to="/menu" className="hover:text-ember">Menu</Link></li>
            <li><Link to="/our-story" className="hover:text-ember">Our Story</Link></li>
            <li><Link to="/location" className="hover:text-ember">Location</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-5 text-xs text-cream/40 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} Zaikah Restaurant. All rights reserved.</span>
          <span>Flavor That Feels Like Home.</span>
        </div>
      </div>
    </footer>
  );
}
