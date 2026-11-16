import { createFileRoute, Link } from "@tanstack/react-router";
import { CircuitN } from "@/components/site/CircuitN";
import { Countdown } from "@/components/site/Countdown";
import { Partners } from "@/components/site/Partners";
import { RegisterButton } from "@/components/site/RegisterButton";
import { EVENT } from "@/lib/event";
import campus from "@/assets/bgsit-campus.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INVENTRON — Intra College Hackathon at BGSIT" },
      {
        name: "description",
        content:
          "INVENTRON by NAIN 2.0, BGS Institute of Technology. Theme: Technology for a Better Tomorrow. 21 Nov 2026, 9:30 AM, BGSIT Seminar Hall.",
      },
      { property: "og:title", content: "INVENTRON — Intra College Hackathon" },
      {
        property: "og:description",
        content: "Technology for a Better Tomorrow. 21 Nov 2026 at BGSIT Seminar Hall. Exciting prize pool and goodies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const facts = [
  { k: "Date", v: EVENT.dateLabel },
  { k: "Time", v: EVENT.timeLabel },
  { k: "Venue", v: EVENT.venue },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.25fr_1fr] md:pt-20">
          <div>
            <p className="label-mono rise text-secondary">NAIN 2.0 presents · <br className="sm:hidden" />Intra College Hackathon</p>
            <div className="mt-6 flex items-center gap-4">
              <CircuitN className="h-14 w-10 shrink-0 text-secondary sm:h-28 sm:w-20" />
              <h1
                className="rise font-display text-[13vw] font-bold leading-none text-primary sm:text-7xl lg:text-8xl"
                style={{ animationDelay: "0.1s" }}
              >
                INVENTRON
              </h1>
            </div>
            <p className="rise mt-6 max-w-lg text-lg text-muted-foreground" style={{ animationDelay: "0.2s" }}>
              Theme:{" "}
              <span className="block font-display text-2xl italic text-foreground sm:inline">{EVENT.theme}</span>
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
              <RegisterButton />
              <Link to="/about" className="btn-ghost">
                Learn more
              </Link>
            </div>
          </div>

          <div className="rise relative" style={{ animationDelay: "0.25s" }}>
            <div className="rounded-3xl sm:rotate-2 border-[1.5px] border-foreground bg-card p-3 shadow-pop">
              <img
                src={campus.url}
                alt="Aerial view of the BGS Institute of Technology campus"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <div className="flex items-center justify-between px-2 pt-3">
                <span className="label-mono text-muted-foreground">BGSIT Campus</span>
                <span className="label-mono text-primary">{EVENT.dateShort}</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-4 -rotate-6 rounded-2xl border-[1.5px] border-foreground bg-accent px-5 py-3 shadow-soft">
              <p className="font-display text-lg leading-tight text-accent-foreground">
                Exciting prize pool
                <br />& goodies 🎁
              </p>
            </div>
          </div>
        </div>
      </section>

      <Partners />

      {/* Countdown + facts */}
      <section className="mx-auto max-w-6xl px-5 pt-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="label-mono text-secondary">Countdown</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Ideas go live in</h2>
            <div className="mt-6">
              <Countdown />
            </div>
          </div>
          <div className="grid gap-3">
            {facts.map((f) => (
              <div
                key={f.k}
                className="flex items-baseline justify-between rounded-2xl border border-border bg-card px-6 py-5 shadow-soft"
              >
                <span className="label-mono text-muted-foreground">{f.k}</span>
                <span className="font-display text-2xl">{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <p className="label-mono text-secondary">Why join</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
          Build something that makes <em className="text-primary">tomorrow</em> better.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { n: "01", t: "Innovate", d: "Turn a real-world problem into a working idea with technology at its heart." },
            { n: "02", t: "Collaborate", d: "Team up with fellow BGSIT students and learn by building together." },
            { n: "03", t: "Win", d: "Compete for an exciting prize pool and walk away with goodies." },
          ].map((c) => (
            <div key={c.n} className="group rounded-3xl border border-border bg-card p-7 transition-colors hover:border-foreground">
              <span className="font-mono text-sm text-primary">{c.n}</span>
              <h3 className="mt-6 text-3xl font-semibold">{c.t}</h3>
              <p className="mt-3 text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-secondary px-8 py-14 text-secondary-foreground sm:px-14">
          <CircuitN className="absolute -right-6 -top-6 h-64 w-48 text-secondary-foreground/10" />
          <p className="label-mono text-gold">{EVENT.dateLabel} · {EVENT.venue}</p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold sm:text-5xl">Ready to invent?</h2>
          <p className="mt-3 max-w-md opacity-80">Grab your team and secure your spot at INVENTRON.</p>
          <div className="mt-8">
            <RegisterButton label="Register now" />
          </div>
        </div>
      </section>
    </>
  );
}
