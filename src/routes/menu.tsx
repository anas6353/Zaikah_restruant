import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { menu } from "@/data/menu";

import menuHeader from "@/assets/menu-header.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Zaikah Restaurant, Lahore" },
      {
        name: "description",
        content:
          "Full Zaikah menu — Pakistani karahi, BBQ, biryani, sajji, Chinese, fast food and tandoor. Prices in PKR.",
      },
      { property: "og:title", content: "Zaikah Menu — BBQ, Karahi, Chinese & More" },
      {
        property: "og:description",
        content: "Signature dishes and full prices from Zaikah's kitchen on Ferozepur Road.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>(menu[0].id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    menu.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <Layout>
      {/* Header */}
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <div className="absolute inset-0">
          <img
            src={menuHeader}
            alt="Zaikah menu spread"
            className="h-full w-full object-cover"
            width={1920}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal" />
        </div>
        <div className="relative container-x py-20 md:py-28">
          <div className="eyebrow">Our menu</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl max-w-3xl">
            Every plate we're proud to send out of the kitchen.
          </h1>
          <p className="mt-5 max-w-xl text-cream/70">
            Karahi, kababs, biryani, chargha, Chinese, tandoor — one long menu, one
            honest kitchen. All prices in PKR.
          </p>
        </div>
      </section>

      {/* Sticky category bar */}
      <div className="sticky top-[57px] md:top-[89px] z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container-x">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-none">
            {menu.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.14em] font-semibold transition ${
                  active === c.id
                    ? "bg-ember text-charcoal border-ember"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {c.title.replace(/^Zaikah? Special /, "")}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container-x py-16 md:py-20 space-y-20">
        {menu.map((cat) => (
          <section id={cat.id} key={cat.id} className="scroll-mt-40">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
                <div>
                  <div className="eyebrow">Category</div>
                  <h2 className="mt-2 font-display text-3xl md:text-4xl">{cat.title}</h2>
                  {cat.subtitle && (
                    <p className="mt-2 text-sm text-muted-foreground">{cat.subtitle}</p>
                  )}
                </div>
                {cat.columns && (
                  <div className="hidden sm:flex gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground pb-2">
                    {cat.columns.map((c) => (
                      <span key={c} className="w-16 text-right">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>

            <ul className="mt-4 divide-y divide-border">
              {cat.items.map((it) => (
                <li key={it.name} className="py-4 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground">{it.name}</div>
                    {it.note && (
                      <div className="text-xs text-muted-foreground mt-1">{it.note}</div>
                    )}
                  </div>
                  {it.prices ? (
                    <div className="flex gap-8 text-right">
                      {it.prices.map((p) => (
                        <div key={p.label} className="w-16">
                          <div className="sm:hidden text-[10px] uppercase tracking-wider text-muted-foreground">
                            {p.label}
                          </div>
                          <div className="text-ember font-semibold tabular-nums">{p.value}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-ember font-semibold tabular-nums w-20 text-right">
                      {it.price}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Footer note */}
        <div className="rounded-2xl bg-wood-dark text-cream p-8 md:p-10">
          <h3 className="font-display text-2xl">A quick note on pricing</h3>
          <p className="mt-3 text-cream/70 leading-relaxed max-w-2xl text-sm">
            All prices are in Pakistani Rupees and may change from time to time as our
            ingredients change with the season. For bulk and catering orders under
            <em className="not-italic text-ember"> Pakwan Special</em>, please message us
            directly on WhatsApp so we can plan the order properly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://wa.me/923104443734" className="btn-primary">
              <MessageCircle className="h-4 w-4" /> WhatsApp for catering
            </a>
            <a href="tel:031044437343" className="inline-flex items-center gap-2 text-cream hover:text-ember font-semibold">
              <Phone className="h-4 w-4" /> 0310-4443734
            </a>
            <Link to="/location" className="inline-flex items-center gap-2 text-cream hover:text-ember font-semibold">
              Find us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
