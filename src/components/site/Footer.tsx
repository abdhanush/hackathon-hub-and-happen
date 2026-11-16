import { EVENT } from "@/lib/event";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-gold">INVENTRON</p>
          <p className="mt-2 text-sm opacity-75">{EVENT.tagline} · {EVENT.theme}</p>
        </div>
        <div className="text-sm opacity-85">
          <p className="label-mono text-gold">Organised by</p>
          <p className="mt-2">{EVENT.organizer}</p>
          <p>{EVENT.institute}</p>
          <p>{EVENT.university}</p>
        </div>
        <div className="text-sm opacity-85">
          <p className="label-mono text-gold">When & where</p>
          <p className="mt-2">{EVENT.dateLabel} · {EVENT.timeLabel}</p>
          <p>{EVENT.venue}</p>
        </div>
      </div>
      <div className="border-t border-ink-foreground/15 py-4 text-center text-xs opacity-60">
        ॥ Jai Sri Gurudev ॥
      </div>
    </footer>
  );
}
