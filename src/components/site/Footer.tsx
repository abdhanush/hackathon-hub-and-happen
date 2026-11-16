import { EVENT } from "@/lib/event";
import { CircuitN } from "./CircuitN";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <p className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
          {EVENT.name} {EVENT.year}
          <CircuitN className="h-7 w-5 text-gold" />
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          {EVENT.organizer}
          <br />
          {EVENT.institute} ({EVENT.instituteShort}), {EVENT.university}
        </p>
        <p className="mt-4 text-xs text-muted-foreground/80">
          © 2026 {EVENT.name}. All rights reserved. · ॥ Jai Sri Gurudev ॥
        </p>
      </div>
    </footer>
  );
}
