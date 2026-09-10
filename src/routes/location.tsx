import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Instagram, Truck, Clock, ArrowRight } from "lucide-react";

import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

import exterior from "@/assets/location-exterior.jpg";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location & Contact — Zaikah Restaurant, Lahore" },
      {
        name: "description",
        content:
          "Zaikah is on Main Ferozepur Road, near Ring Road Interchange, Lahore. Open daily 12 PM – 12 AM. Call 0310-4443734 or WhatsApp.",
      },
      { property: "og:title", content: "Find Zaikah — Ferozepur Road, Lahore" },
      {
        property: "og:description",
        content: "Address, phone, WhatsApp and directions to Zaikah restaurant.",
      },
    ],
  }),
  component: Location,
});

const hours = [
  { d: "Monday – Thursday", h: "12:00 PM — 12:00 AM" },
  { d: "Friday", h: "2:00 PM — 1:00 AM" },
  { d: "Saturday – Sunday", h: "12:00 PM — 1:00 AM" },
];

function Location() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <div className="absolute inset-0">
          <img
            src={exterior}
            alt="Zaikah exterior at dusk"
            className="h-full w-full object-cover"
            width={1920}
            height={1100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal" />
        </div>
        <div className="relative container-x py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="eyebrow">Come visit</div>
            <h1 className="mt-4 font-display text-5xl md:text-6xl">
              Main Ferozepur Road, near Ring Road Interchange.
            </h1>
            <p className="mt-5 text-cream/70 text-lg">
              Look for the warm glow on your left as you head south. If you hit the
              interchange, you've gone one signal too far.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Zaikah+Ferozepur+Road+Gajju+Matah+Lahore"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary"
              >
                Get Directions <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:03104443734" className="btn-outline">
                <Phone className="h-4 w-4" /> 0310-4443734
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content grid */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3 rounded-3xl overflow-hidden border border-border">
            <iframe
              title="Zaikah location map"
              src="https://www.google.com/maps?q=Zaikah+Ferozepur+Road+Gajju+Matah+Lahore&output=embed"
              className="w-full h-[420px] md:h-[560px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal className="lg:col-span-2 space-y-6" delay={100}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-ember shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-xl">Address</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    Main Feroze Pur Road,<br />
                    Near Ring Road Interchange,<br />
                    Lahore, Punjab, Pakistan.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-3 items-start">
                <Clock className="h-5 w-5 text-ember shrink-0 mt-1" />
                <div className="w-full">
                  <h2 className="font-display text-xl">Opening hours</h2>
                  <ul className="mt-3 space-y-2 text-sm">
                    {hours.map((h) => (
                      <li key={h.d} className="flex justify-between gap-4 border-b border-border last:border-b-0 pb-2 last:pb-0">
                        <span className="text-muted-foreground">{h.d}</span>
                        <span className="font-medium">{h.h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-wood-dark text-cream p-6">
              <h2 className="font-display text-xl">Reach us</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 text-ember mt-0.5 shrink-0" />
                  <a href="tel:03104443734" className="hover:text-ember">0310-4443734</a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-4 w-4 text-ember mt-0.5 shrink-0" />
                  <a href="https://wa.me/923104443734" className="hover:text-ember">
                    WhatsApp: 0310-4443734
                  </a>
                </li>
                <li className="flex gap-3">
                  <Instagram className="h-4 w-4 text-ember mt-0.5 shrink-0" />
                  <a href="https://instagram.com/zaikah.offical" className="hover:text-ember">
                    @zaikah.offical
                  </a>
                </li>
                <li className="flex gap-3">
                  <Truck className="h-4 w-4 text-ember mt-0.5 shrink-0" />
                  <span>We deliver in and around Ferozepur Road.</span>
                </li>
              </ul>
              <a href="https://wa.me/923104443734" className="btn-primary mt-6 w-full">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
