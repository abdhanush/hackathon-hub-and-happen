import { createFileRoute } from "@tanstack/react-router";
import { EVENT } from "@/lib/event";
import campus from "@/assets/bgsit-campus.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About INVENTRON — NAIN 2.0 × BGSIT" },
      {
        name: "description",
        content:
          "INVENTRON is an intra college hackathon organised by NAIN 2.0 at BGS Institute of Technology, Adichunchanagiri University.",
      },
      { property: "og:title", content: "About INVENTRON — NAIN 2.0 × BGSIT" },
      {
        property: "og:description",
        content: "Who organises INVENTRON, the theme, and our partners K-tech, Startup Karnataka and IIIT-B Innovation Centre.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16">
      <p className="label-mono text-secondary">About the event</p>
      <h1 className="mt-3 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
        A day of ideas, code and <em className="text-primary">invention</em>.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        INVENTRON is the intra college hackathon organised by the {EVENT.organizer} at {EVENT.institute},{" "}
        {EVENT.university}. Students come together to design solutions around one theme —{" "}
        <span className="font-semibold text-foreground">{EVENT.theme}</span>.
      </p>

      <img
        src={campus.url}
        alt="BGS Institute of Technology campus"
        className="mt-12 aspect-[21/9] w-full rounded-3xl border border-border object-cover"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8">
          <p className="label-mono text-primary">Organiser</p>
          <h2 className="mt-3 text-3xl font-semibold">NAIN 2.0</h2>
          <p className="mt-3 text-muted-foreground">
            The New Age Innovation Network nurtures student innovation and entrepreneurship, backed by K-tech and
            Startup Karnataka.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8">
          <p className="label-mono text-primary">Host</p>
          <h2 className="mt-3 text-3xl font-semibold">BGS Institute of Technology</h2>
          <p className="mt-3 text-muted-foreground">
            Part of {EVENT.university}, accredited with an A+ grade by NAAC.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <p className="label-mono text-secondary">Partners</p>
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
          {EVENT.partners.map((p) => (
            <div
              key={p}
              className="flex h-28 items-center justify-center rounded-2xl border border-border bg-card px-4 text-center font-display text-xl"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
