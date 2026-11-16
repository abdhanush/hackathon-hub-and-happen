import { Link } from "@tanstack/react-router";
import { EVENT } from "@/lib/event";

export function RegisterButton({ label = "Register here" }: { label?: string }) {
  if (EVENT.registerUrl) {
    return (
      <a href={EVENT.registerUrl} target="_blank" rel="noreferrer" className="btn-primary">
        {label} <span aria-hidden>→</span>
      </a>
    );
  }
  return (
    <Link to="/register" className="btn-primary">
      {label} <span aria-hidden>→</span>
    </Link>
  );
}
