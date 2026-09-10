import { Link } from "@tanstack/react-router";
import { Phone, Menu as MenuIcon, X, Instagram, Facebook, Truck } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/our-story", label: "Our Story" },
  { to: "/location", label: "Location" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-charcoal/90 backdrop-blur-md border-b border-white/5">
      {/* Top strip */}
      <div className="hidden md:block border-b border-white/5">
        <div className="container-x flex items-center justify-between py-1.5 text-xs text-cream/70">
          <div className="flex items-center gap-2">
            <Truck className="h-3.5 w-3.5 text-ember" />
            <span className="uppercase tracking-[0.2em] text-[10px]">We Deliver </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/zaikah.offical"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="hover:text-ember transition"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="hover:text-ember transition"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex items-center justify-between py-3 md:py-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium tracking-wide text-cream/80 hover:text-ember transition"
              activeProps={{ className: "text-ember" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:03104443734"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-cream/90 hover:text-ember transition"
          >
            <Phone className="h-4 w-4 text-ember" />
            <span className="font-semibold">0310-4443734</span>
          </a>
          <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ember">
            <Truck className="h-3 w-3" /> We Deliver
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 text-cream"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-charcoal">
          <nav className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-cream/90 text-base border-b border-white/5 last:border-b-0"
                activeProps={{ className: "text-ember" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:03104443734"
              className="mt-3 inline-flex items-center gap-2 text-ember font-semibold"
            >
              <Phone className="h-4 w-4" /> 03104443734
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
