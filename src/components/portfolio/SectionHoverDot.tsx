import { useState } from "react";
import { Link2 } from "lucide-react";

interface SectionHoverDotProps {
  label: string;
  sectionId: string;
}

export function SectionHoverDot({ label, sectionId }: SectionHoverDotProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.hash = sectionId;
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group/indicator absolute left-4 top-24 z-10 hidden items-center gap-3 lg:left-8 lg:flex"
      aria-label={`Copy link to ${label} section`}
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40 opacity-0 group-hover/indicator:opacity-100 transition-opacity duration-500" />
        <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-accent/30 bg-background transition-all duration-300 group-hover/indicator:border-accent group-hover/indicator:bg-accent group-hover/indicator:shadow-[0_0_16px_var(--accent)]" />
      </span>

      <span className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
        <span className="h-px w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover/indicator:w-8" />
        <span className="translate-x-2 opacity-0 transition-all duration-500 group-hover/indicator:translate-x-0 group-hover/indicator:opacity-100">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            {copied ? "Link copied" : label}
          </span>
          <Link2 className="ml-2 inline-block h-3 w-3 text-accent opacity-0 transition-opacity duration-300 group-hover/indicator:opacity-100" />
        </span>
      </span>
    </button>
  );
}
