import { describe, expect, it } from "vitest";
import { EVENT, getTimeLeft } from "@/lib/event";

describe("INVENTRON event facts", () => {
  it("starts on 21 Nov 2026 at 09:30 IST", () => {
    expect(EVENT.startsAt.toISOString()).toBe("2026-11-21T04:00:00.000Z");
  });

  it("counts down 5 days from 16 Nov 09:30 IST", () => {
    const t = getTimeLeft(EVENT.startsAt, new Date("2026-11-16T09:30:00+05:30"));
    expect(t).toEqual({ days: 5, hours: 0, minutes: 0, seconds: 0, done: false });
  });

  it("stops at zero once the event has started", () => {
    const t = getTimeLeft(EVENT.startsAt, new Date("2026-11-22T00:00:00+05:30"));
    expect(t.done).toBe(true);
    expect(t.days).toBe(0);
  });
});
