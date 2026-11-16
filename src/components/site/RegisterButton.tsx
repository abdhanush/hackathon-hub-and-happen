import { ExternalLink, Zap } from "lucide-react";
import { EVENT } from "@/lib/event";

// Opens the registration form when a link is set; otherwise jumps to the registration section.
export function RegisterButton({ label = "Register Now", icon = "zap" }: { label?: string; icon?: "zap" | "external" }) {
  const Icon = icon === "zap" ? Zap : ExternalLink;
  if (EVENT.registerUrl) {
    return (
      <a href={EVENT.registerUrl} target="_blank" rel="noreferrer" className="btn-primary">
        <Icon className="h-4 w-4" /> {label}
      </a>
    );
  }
  return (
    <a href="#register" className="btn-primary">
      <Icon className="h-4 w-4" /> {label}
    </a>
  );
}
