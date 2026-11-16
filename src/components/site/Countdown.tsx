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
    return <p className="font-display text-2xl text-primary">The hackathon is live!</p>;
  }

  const cells: [string, number | undefined][] = [
    ["Days", t?.days],
    ["Hours", t?.hours],
    ["Mins", t?.minutes],
    ["Secs", t?.seconds],
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {cells.map(([label, v]) => (
        <div key={label} className="rounded-xl border border-foreground/80 bg-card px-2 py-3 text-center sm:px-4">
          <div className="font-mono text-2xl font-semibold tabular-nums sm:text-4xl">
            {v === undefined ? "--" : String(v).padStart(2, "0")}
          </div>
          <div className="label-mono mt-1 text-muted-foreground">{label}</div>
        </div>
      ))}
    </div>
  );
}
