import { createFileRoute } from "@tanstack/react-router";
import { Countdown } from "@/components/site/Countdown";
import { EVENT } from "@/lib/event";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register for INVENTRON — BGSIT Hackathon" },
      {
        name: "description",
        content: "Register for INVENTRON, the intra college hackathon on 21 Nov 2026 at 9:30 AM, BGSIT Seminar Hall.",
      },
      { property: "og:title", content: "Register for INVENTRON" },
      { property: "og:description", content: "Secure your team's spot at INVENTRON — 21 Nov 2026, BGSIT Seminar Hall." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Register,
});

function Register() {
  return (
    <div className="bg-grid">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="label-mono text-secondary">Registration</p>
          <h1 className="mt-3 text-5xl font-semibold leading-tight sm:text-6xl">
            Save your spot at <span className="text-primary">INVENTRON</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Open to all students of {EVENT.institute}. Bring your ideas — we'll bring the prizes and goodies.
          </p>
          <div className="mt-8">
            {EVENT.registerUrl ? (
              <a href={EVENT.registerUrl} target="_blank" rel="noreferrer" className="btn-primary">
                Open registration form <span aria-hidden>→</span>
              </a>
            ) : (
              <div className="inline-block rounded-2xl border border-dashed border-foreground/40 bg-card px-5 py-4">
                <p className="font-semibold">Registration link opening soon</p>
                <p className="text-sm text-muted-foreground">Contact your NAIN coordinator for details.</p>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-3xl border-[1.5px] border-foreground bg-card p-8 shadow-pop">
          <p className="label-mono text-muted-foreground">Starts in</p>
          <div className="mt-4">
            <Countdown />
          </div>
          <dl className="mt-8 divide-y divide-border">
            {[
              ["Date", EVENT.dateLabel],
              ["Time", EVENT.timeLabel],
              ["Venue", EVENT.venue],
              ["Theme", EVENT.theme],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 py-3">
                <dt className="label-mono pt-1 text-muted-foreground">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
