import { Link } from "@tanstack/react-router";
import { CircuitN } from "./CircuitN";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/register", label: "Register" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <CircuitN className="h-8 w-6 text-secondary" />
          <span className="hidden font-display text-xl sm:inline font-semibold tracking-tight text-primary">INVENTRON</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-accent data-[status=active]:text-accent-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
