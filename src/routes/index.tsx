import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Leaf,
  ChefHat,
  Sparkles,
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle,
  CalendarDays,
  UtensilsCrossed,
  Star,
} from "lucide-react";

import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

import heroImg from "@/assets/hero-bbq.jpg";
import interiorImg from "@/assets/interior.jpg";
import dishBbq from "@/assets/dish-bbq-platter.jpg";
import dishHandi from "@/assets/dish-handi.jpg";
import dishFish from "@/assets/dish-fish.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishChargha from "@/assets/dish-chargha.jpg";
import dishSajji from "@/assets/dish-sajji.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zaikah — Flavor That Feels Like Home | Lahore" },
      {
        name: "description",
        content:
          "A family kitchen on Ferozepur Road serving Pakistani BBQ, karahi, Chinese and fast food. Grand Opening Sunday, 26 July 2026.",
      },
      { property: "og:title", content: "Zaikah — Flavor That Feels Like Home" },
      {
        property: "og:description",
        content:
          "Real Lahori flavours — BBQ, karahi, Chinese and fast food, cooked over live coals and served warm.",
      },
    ],
  }),
  component: Home,
});

const signatureDishes = [
  { name: "Special BBQ Platter", price: "4,800", img: dishBbq },
  { name: "Chicken Boneless Handi", price: "1,599", img: dishHandi },
  { name: "Rahoo Grilled Fish", price: "1,700", img: dishFish },
  { name: "Chicken Biryani", price: "510", img: dishBiryani },
  { name: "Daigi Chargha (Full)", price: "2,200", img: dishChargha },
  { name: "Special Sajji Full", price: "2,200", img: dishSajji },
];

const pillars = [
  {
    icon: Leaf,
    title: "Fresh Every Morning",
    body: "Meat, produce and herbs sourced daily from trusted vendors we've known for years.",
  },
  {
    icon: ChefHat,
    title: "Chefs From The Kitchen",
    body: "Cooks who spent decades over karahis and tandoors — no shortcuts, no premixed masalas.",
  },
  {
    icon: Sparkles,
    title: "Clean, Open Kitchen",
    body: "Hygiene you can see. Prep counters, oil and grill kept spotless through every shift.",
  },
  {
    icon: Flame,
    title: "Charcoal & Tandoor",
    body: "BBQ over real lump coal, naan slapped fresh into the tandoor. That's where the flavour lives.",
  },
];

const testimonials = [
  {
    quote:
      "The Special BBQ Platter tasted like the small dhabas my father used to take us to — but plated properly. That's rare.",
    name: "Hassaan A.",
    role: "Model Town",
  },
  {
    quote:
      "Ordered a biryani daig for a family iftar. Rice was long, chicken was tender, everyone asked where it came from.",
    name: "Ayesha K.",
    role: "DHA Phase 5",
  },
  {
    quote:
      "Chargha and chargha alone brought me here. Skin crisp, spice deep. Will be back with the whole office.",
    name: "Bilal R.",
    role: "Gulberg",
  },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Zaikah signature BBQ platter"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>

        <div className="relative container-x pt-20 pb-28 md:pt-32 md:pb-40 min-h-[640px] md:min-h-[720px] flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="eyebrow text-ember">Family Restaurant · Lahore</div>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-cream">
              Flavors that bring the <em className="not-italic text-ember">whole family</em> to one table.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-cream/70 leading-relaxed">
              Zaikah is a home for real Pakistani, BBQ, Chinese and fast food flavours
              on Main Ferozepur Road — cooked over coal, served warm, priced the way a
              family meal should be.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="btn-primary">
                View Menu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/location" className="btn-outline">
                <MapPin className="h-4 w-4" /> Find Us
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "Cuisines", v: "4" },
                { k: "Menu items", v: "100+" },
                { k: "Opening", v: "26 Jul" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-3xl text-ember">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-cream/50 mt-1">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRAND OPENING STRIP */}
      <section className="bg-wood text-cream border-y border-ember/20">
        <div className="container-x py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:justify-between">
          <div className="flex items-center gap-5">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ember/15 text-ember">
              <CalendarDays className="h-7 w-7" />
            </div>
            <div>
              <div className="eyebrow">Save the date</div>
              <div className="font-display text-2xl md:text-3xl mt-1">
                Grand Opening · Sunday, 26 July 2026
              </div>
            </div>
          </div>
          <p className="max-w-md text-cream/70 text-sm md:text-base">
            Doors open at noon. First plate of chargha on the house for the earliest fifty
            families through the door. Bring everyone.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <div className="eyebrow">Why Zaikah</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground">
              Four things we won't compromise on.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition hover:border-ember/40 hover:shadow-[0_20px_50px_-24px_oklch(0.68_0.17_45/0.4)]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-ember/10 text-ember">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-20 md:py-28 bg-wood-dark text-cream grain">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Reveal className="max-w-xl">
              <div className="eyebrow">From the kitchen</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Six plates worth the drive.</h2>
            </Reveal>
            <Link to="/menu" className="btn-primary self-start md:self-auto">
              See Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatureDishes.map((d, i) => (
              <Reveal key={d.name} delay={i * 60}>
                <div className="group overflow-hidden rounded-2xl bg-charcoal/60 border border-white/5">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      width={900}
                      height={900}
                      className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-4 p-5">
                    <h3 className="font-display text-lg leading-tight">{d.name}</h3>
                    <div className="shrink-0 text-ember font-semibold tracking-wide">
                      Rs. {d.price}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIANCE */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="eyebrow">The room</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              A dining room built for long evenings.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Warm wood panels, low pendant lights, tables large enough for a
              proper family. We designed the room the way we wanted our own
              cousins and elders to sit — comfortable, unhurried, close enough
              to pass a plate of naan without stretching.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Come in for a lazy Friday dinner. Bring the kids. Order too much
              food. We'll happily pack the leftovers.
            </p>
            <div className="mt-8">
              <Link to="/our-story" className="inline-flex items-center gap-2 text-ember font-semibold">
                Read our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={100}>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={interiorImg}
                alt="Zaikah dining room"
                loading="lazy"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-24 bg-muted">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <div className="eyebrow">What guests say</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Three tables. Three verdicts.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="h-full rounded-2xl bg-card p-7 border border-border">
                  <div className="flex gap-1 text-ember">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-foreground/90 leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-muted-foreground"> · {t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION TEASER */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-stretch">
          <Reveal className="rounded-3xl overflow-hidden">
            <iframe
              title="Zaikah on the map"
              src="https://www.google.com/maps?q=Zaikah+Ferozepur+Road+Gajju+Matah+Lahore&output=embed"
              className="h-80 lg:h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="eyebrow">Come see us</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Main Ferozepur Road, near the interchange.
            </h2>
            <ul className="mt-8 space-y-4 text-foreground">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-ember mt-0.5 shrink-0" />
                <span>Main Feroze Pur Road, near Ring Road Interchange, Lahore</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-ember mt-0.5 shrink-0" />
                <a href="tel:03104443734" className="hover:text-ember">0310-4443734</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-ember mt-0.5 shrink-0" />
                <a href="https://wa.me/923104443734" className="hover:text-ember">WhatsApp 0310-4443734</a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Zaikah+Ferozepur+Road+Gajju+Matah+Lahore"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary"
              >
                Get Directions <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/location" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-ember">
                Full location page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(600px circle at 20% 30%, oklch(0.68 0.17 45 / 0.5), transparent 60%), radial-gradient(700px circle at 80% 70%, oklch(0.78 0.15 60 / 0.35), transparent 60%)",
          }}
        />
        <div className="relative container-x py-20 md:py-28 text-center">
          <UtensilsCrossed className="mx-auto h-8 w-8 text-ember" />
          <h2 className="mt-6 font-display text-4xl md:text-6xl">
            Hungry already? Order or reserve your table.
          </h2>
          <p className="mt-5 text-cream/70 max-w-xl mx-auto">
            Give us a call for reservations, or send a quick message on WhatsApp
            to place a family order.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <a href="tel:03104443734" className="btn-primary">
              <Phone className="h-4 w-4" /> Call 0310-4443734
            </a>
            <a href="https://wa.me/923104443734" className="btn-outline">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
