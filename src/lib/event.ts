// Single source of truth for INVENTRON event facts (from the official poster).
export const EVENT = {
  name: "INVENTRON",
  year: "'26",
  tagline: "Intra College Hackathon",
  theme: "Technology for a Better Tomorrow",
  organizer: "New Age Innovation Network (NAIN 2.0)",
  organizerShort: "NAIN 2.0",
  institute: "BGS Institute of Technology",
  instituteShort: "BGSIT",
  university: "Adichunchanagiri University",
  dateLabel: "23 November 2026",
  dateShort: "23 Nov",
  dayLabel: "Monday",
  timeLabel: "09:30 AM",
  venue: "BGSIT Seminar Hall",
  venueShort: "Seminar Hall",
  address:
    "Seminar Hall, Bengaluru – Hassan National Highway (NH-75), Nagamangala Taluk, Mandya District, B.G Nagara, Karnataka 571448",
  town: "B.G. Nagara, Karnataka",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.5!2d76.7275756!3d12.9643084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafeed69801ae53%3A0xa9dd86aab57869ad!2sBGS%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1",
  directionsUrl: "https://maps.app.goo.gl/YD6ffcjR44C88ti27",
  // 23 Nov 2026, 09:30 IST (UTC+5:30)
  startsAt: new Date("2026-11-23T09:30:00+05:30"),
  // Paste the registration form link here once available.
  registerUrl: "",
  partners: ["NAIN", "K-tech", "Startup Karnataka", "IIIT-B Innovation Centre"],
  // Add coordinators here, e.g. { role: "Faculty Coordinator", name: "...", phone: "..." }.
  contacts: [] as { role: string; name: string; phone: string }[],
};

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
