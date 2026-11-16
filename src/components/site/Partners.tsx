import { EVENT } from "@/lib/event";

export function Partners() {
  const items = [...EVENT.partners, ...EVENT.partners, ...EVENT.partners, ...EVENT.partners];
  return (
    <section className="border-y border-border bg-card py-6">
      <p className="label-mono mb-4 text-center text-muted-foreground">In association with</p>
      <div className="overflow-hidden">
        <div className="marquee flex w-max gap-14 whitespace-nowrap">
          {items.map((p, i) => (
            <span key={i} className="font-display text-2xl text-foreground/70 sm:text-3xl">
              {p}
              <span className="ml-14 text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
