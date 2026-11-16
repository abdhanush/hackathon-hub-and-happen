import { useEffect, useState } from "react";
import { EVENT, getTimeLeft, type TimeLeft } from "@/lib/event";

export function Countdown() {
  const [t, setT] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setT(getTimeLeft(EVENT.startsAt));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (t?.done) {
    return <p className="text-2xl font-bold text-primary">The hackathon is live!</p>;
  }

  const cells: [string, number | undefined][] = [
    ["Days", t?.days],
    ["Hours", t?.hours],
    ["Minutes", t?.minutes],
    ["Seconds", t?.seconds],
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-6">
      {cells.map(([label, v]) => (
        <div key={label} className="flex flex-col items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-primary/40 bg-card shadow-glow-soft sm:h-20 sm:w-[6.75rem]">
            <span className="font-mono text-3xl font-extrabold tabular-nums text-primary sm:text-5xl">
              {v === undefined ? "--" : String(v).padStart(2, "0")}
            </span>
          </div>
          <span className="label-mono text-xs text-muted-foreground sm:text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
