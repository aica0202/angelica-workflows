import { useState } from "react";

const portraitUrl = "/aicadev-profile.png";
const aiPortraitUrl = "/aicadev-profile-ai.png";

export function HeroPortrait() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`group relative mx-auto w-full max-w-[420px] ${active ? "is-active" : ""}`}
      onPointerDown={() => setActive((v) => !v)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_70%)] blur-2xl transition-opacity duration-700"
        style={{ opacity: active ? 1 : 0.6 }}
      />

      <div
        className="relative aspect-square overflow-hidden rounded-[1.75rem] border bg-card/60 backdrop-blur-sm transition-all duration-700 ease-out"
        style={{
          transform: active ? "translateY(-6px) scale(1.015)" : "none",
          borderColor: active
            ? "color-mix(in oklab, var(--accent) 50%, transparent)"
            : "var(--border)",
          boxShadow: active
            ? "0 30px 80px -30px color-mix(in oklab, var(--accent) 60%, transparent)"
            : "none",
        }}
      >
        {/* Backdrop behind the portrait */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,color-mix(in_oklab,var(--primary)_30%,transparent),transparent_65%)] transition-opacity duration-700"
          style={{ opacity: active ? 0 : 1 }}
        />

        {/* Base portrait */}
        <img
          src={portraitUrl}
          alt="AicaDev — AI Automation Specialist and Marketing Operations professional"
          className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-out"
          style={{ opacity: active ? 0 : 1, transform: active ? "scale(1.03)" : "none" }}
          loading="eager"
          width={1024}
          height={1024}
        />

        {/* AI futuristic portrait */}
        <img
          src={aiPortraitUrl}
          alt="Futuristic AI-enhanced portrait of AicaDev"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-out"
          style={{ opacity: active ? 1 : 0, transform: active ? "scale(1)" : "scale(1.05)" }}
          loading="lazy"
          width={1024}
          height={1024}
        />

        {/* Grid overlay */}
        <div
          className="grid-lines pointer-events-none absolute inset-0 transition-opacity duration-700"
          style={{ opacity: active ? 0.4 : 0 }}
        />

        {/* Scan line sweep */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-24 -translate-y-full bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--accent)_45%,transparent),transparent)] transition-opacity duration-500 ${
            active ? "animate-scan-sweep opacity-100" : "opacity-0"
          }`}
        />

        {/* Corner brackets */}
        {[
          "left-4 top-4 border-l-2 border-t-2",
          "right-4 top-4 border-r-2 border-t-2",
          "bottom-4 left-4 border-b-2 border-l-2",
          "bottom-4 right-4 border-b-2 border-r-2",
        ].map((cls) => (
          <span
            key={cls}
            className={`pointer-events-none absolute h-8 w-8 transition-all duration-500 ${cls}`}
            style={{
              borderColor: active
                ? "color-mix(in oklab, var(--accent) 80%, transparent)"
                : "transparent",
            }}
          />
        ))}

        {/* Bottom fade + status */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/90 to-transparent" />
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border bg-background/70 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur transition-colors duration-500"
          style={{
            borderColor: active
              ? "color-mix(in oklab, var(--accent) 50%, transparent)"
              : "var(--border)",
            color: active ? "var(--accent)" : "var(--muted-foreground)",
          }}
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
          {active ? "AI Mode Engaged" : "AicaDev"}
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
        Hover to activate AI mode
      </p>
    </div>
  );
}
