import aiPortrait from "@/assets/aicadev-ai.png.asset.json";

const portraitUrl = "/aicadev-profile.png";

export function HeroPortrait() {
  return (
    <div className="group relative mx-auto w-full max-w-[420px]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,color-mix(in_oklab,var(--accent)_28%,transparent),transparent_70%)] opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-border bg-card/60 backdrop-blur-sm transition-all duration-700 group-hover:border-accent/50 group-hover:shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--accent)_60%,transparent)]">
        {/* Backdrop behind the cut-out portrait */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,color-mix(in_oklab,var(--primary)_30%,transparent),transparent_65%)] transition-opacity duration-700 group-hover:opacity-0" />

        {/* Base portrait */}

        <img
          src={portrait.url}
          alt="AicaDev — AI Automation Specialist and Marketing Operations professional"
          className="absolute inset-0 h-full w-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-0"
          loading="eager"
          width={1024}
          height={1024}
        />

        {/* Cybernetic portrait */}
        <img
          src={aiPortrait.url}
          alt="Futuristic AI-enhanced portrait of AicaDev"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-top opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
          loading="lazy"
          width={1024}
          height={1024}
        />

        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-0 transition-opacity duration-700 group-hover:opacity-40" />

        {/* Scan line sweep */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 -translate-y-full bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--accent)_45%,transparent),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-scan-sweep" />

        {/* Corner brackets */}
        <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-accent/0 transition-all duration-500 group-hover:border-accent/80" />
        <span className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-accent/0 transition-all duration-500 group-hover:border-accent/80" />
        <span className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-accent/0 transition-all duration-500 group-hover:border-accent/80" />
        <span className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-accent/0 transition-all duration-500 group-hover:border-accent/80" />

        {/* Bottom fade + status */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-background/70 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground backdrop-blur transition-colors duration-500 group-hover:border-accent/50 group-hover:text-accent">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
          <span className="group-hover:hidden">AicaDev</span>
          <span className="hidden group-hover:inline">AI Mode Engaged</span>
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
        Hover to activate AI mode
      </p>
    </div>
  );
}
