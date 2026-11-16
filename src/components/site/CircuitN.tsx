// Recreation of the NAIN circuit "N" mark from the poster.
export function CircuitN({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 110" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path className="circuit-draw" d="M14 14 V58" />
        <path className="circuit-draw" style={{ animationDelay: "0.2s" }} d="M14 58 L58 96" />
        <path className="circuit-draw" style={{ animationDelay: "0.4s" }} d="M58 14 V54" />
        <path className="circuit-draw" style={{ animationDelay: "0.3s" }} d="M28 40 V96" />
        <path className="circuit-draw" style={{ animationDelay: "0.5s" }} d="M72 50 V96" />
      </g>
      <circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="58" cy="10" r="5" fill="currentColor" />
      <circle cx="28" cy="100" r="4" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="72" cy="100" r="4" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}
