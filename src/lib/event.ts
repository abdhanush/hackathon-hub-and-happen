// Single source of truth for INVENTRON event facts (from the official poster).
export const EVENT = {
  name: "INVENTRON",
  tagline: "Intra College Hackathon",
  theme: "Technology for a Better Tomorrow",
  organizer: "New Age Innovation Network (NAIN 2.0)",
  institute: "BGS Institute of Technology",
  university: "Adichunchanagiri University",
  dateLabel: "21 November 2026",
  dateShort: "21.11.2026",
  timeLabel: "09:30 AM",
  venue: "BGSIT Seminar Hall",
  // 21 Nov 2026, 09:30 IST (UTC+5:30)
  startsAt: new Date("2026-11-21T09:30:00+05:30"),
  // Paste the registration form link here once available.
  registerUrl: "",
  partners: ["NAIN", "K-tech", "Startup Karnataka", "IIIT-B Innovation Centre"],
} as const;

export type TimeLeft = { days: number; hours: number; minutes: number; seconds: number; done: boolean };

export function getTimeLeft(target: Date, now: Date = new Date()): TimeLeft {
  const diff = Math.max(0, target.getTime() - now.getTime());
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: diff === 0,
  };
}
