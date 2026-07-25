import { createFileRoute } from "@tanstack/react-router";
import { Flame, Users, Sprout, CalendarDays } from "lucide-react";

import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

import tandoor from "@/assets/story-tandoor.jpg";
import kabab from "@/assets/story-kabab.jpg";
import family from "@/assets/story-family.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Zaikah Restaurant, Lahore" },
      {
        name: "description",
        content:
          "Zaikah — a family kitchen born on Ferozepur Road. Recipes passed down, cooked over live coals, opening 26 July 2026.",
      },
      { property: "og:title", content: "Our Story — Zaikah" },
      {
        property: "og:description",
        content: "How a family kitchen on Ferozepur Road became Zaikah — flavor that feels like home.",
      },
    ],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <div className="absolute inset-0">
          <img
            src={tandoor}
            alt="Chef at the tandoor"
            className="h-full w-full object-cover"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
        </div>
        <div className="relative container-x py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="eyebrow">Our story</div>
            <h1 className="mt-4 font-display text-5xl md:text-6xl">
              A kitchen that started long before the sign went up.
            </h1>
            <p className="mt-6 text-cream/70 text-lg leading-relaxed">
              Zaikah — <em className="not-italic text-ember">zaiqah</em>, taste, the thing
              you remember about food long after the plate is cleared. That's the word we
              chose because that's the promise we mean to keep.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 — Founder voice */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="eyebrow">Where it began</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Ferozepur Road, a family kitchen, a very loud aunt.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I grew up a few kilometres from where Zaikah now stands. Sunday mornings
                in our house meant one of the elders in the kitchen from ten till two —
                usually my <em className="not-italic">phupho</em>, wooden spoon in one hand,
                opinion in the other. If the karahi wasn't reduced enough she'd send it back
                to the flame herself.
              </p>
              <p>
                Those meals fed cousins, neighbours, and whoever wandered in. Nobody left
                without eating twice. That's the kind of place I wanted to open — not a
                showpiece restaurant, but a family kitchen that happens to have a proper
                dining room attached to it.
              </p>
              <p>
                Zaikah is that idea, finally standing on its own feet, on the same road I
                grew up on.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <img
                src={kabab}
                alt="Hands preparing kababs"
                loading="lazy"
                width={1600}
                height={1100}
                className="rounded-3xl object-cover w-full"
              />
              <div className="absolute -bottom-6 -left-6 hidden md:block bg-wood text-cream rounded-2xl p-5 max-w-[240px] shadow-xl">
                <Flame className="h-5 w-5 text-ember" />
                <p className="mt-3 text-sm font-display leading-snug">
                  "If the karahi isn't sizzling when it hits the table, send it back."
                </p>
                <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-cream/60">
                  Kitchen rule #1
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — Philosophy (alt layout) */}
      <section className="py-20 md:py-28 bg-wood-dark text-cream grain">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={family}
                alt="Family style dining table"
                loading="lazy"
                width={1600}
                height={1100}
                className="rounded-3xl object-cover w-full"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={80}>
            <div className="eyebrow text-ember">The kitchen rules</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Fresh, slow, and cooked over real fire.
            </h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  icon: Sprout,
                  title: "Sourced daily",
                  body: "Meat comes in every morning from vendors we've worked with for years. If a spice batch isn't right, we don't serve it that day.",
                },
                {
                  icon: Flame,
                  title: "Coal and clay",
                  body: "Our BBQ runs over lump coal. Our naan hits the wall of a real tandoor. No gas grills, no shortcuts — that's where the smoke comes from.",
                },
                {
                  icon: Users,
                  title: "Feeds a family",
                  body: "Portions built for sharing. Half plates that can actually feed two people. Bulk orders for weddings, iftars and mehndis, done properly.",
                },
              ].map((r) => (
                <div key={r.title} className="flex gap-4">
                  <div className="shrink-0 grid h-11 w-11 place-items-center rounded-xl bg-ember/15 text-ember">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{r.title}</h3>
                    <p className="mt-1.5 text-cream/70 text-sm leading-relaxed">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Milestones / opening */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <div className="eyebrow">The road to opening day</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              A few years in the making.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { y: "2023", t: "The idea", b: "A conversation on a rooftop iftar. Someone said the neighbourhood needed a proper family place. Nobody disagreed." },
              { y: "2024", t: "The kitchen team", b: "We brought in cooks who trained on karahis and tandoors long before we ever put a menu together." },
              { y: "2025", t: "The recipes", b: "Nine months of tasting. Some dishes cut. The masala for the biryani got remade four times." },
              { y: "2026", t: "Grand Opening", b: "Doors open Friday, 26 July 2026 on Main Ferozepur Road, near the Ring Road Interchange." },
            ].map((m, i) => (
              <Reveal key={m.y} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-3xl text-ember">{m.y}</div>
                  <h3 className="mt-4 font-display text-lg">{m.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing band */}
      <section className="py-20 md:py-24 bg-charcoal text-cream">
        <div className="container-x text-center max-w-3xl mx-auto">
          <CalendarDays className="mx-auto h-8 w-8 text-ember" />
          <h2 className="mt-6 font-display text-4xl md:text-5xl">
            Come eat with us on the 24th.
          </h2>
          <p className="mt-5 text-cream/70 leading-relaxed">
            Zaikah isn't trying to be a fine-dining monument. It's a family kitchen with
            a good dining room, on the road we grew up on, cooking food that tastes the
            way it used to at home. That's the whole idea.
          </p>
          <p className="mt-8 font-display text-2xl text-ember">
            Flavor that feels like home.
          </p>
        </div>
      </section>
    </Layout>
  );
}
