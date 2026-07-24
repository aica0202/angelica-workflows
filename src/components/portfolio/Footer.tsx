import { Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

const primaryLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg gradient-primary text-sm font-bold text-white">
                {profile.initials}
              </span>
              <span className="text-sm font-semibold text-foreground">{profile.fullName}</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Designed around real workflows, reliable data, and practical automation.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {primaryLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Connect</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={profile.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href={profile.github} className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-foreground transition-colors">Email</a>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  className="inline-flex items-center gap-1.5 text-accent hover:text-cyan-bright transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© 2026 Angelica Unclara. All rights reserved.</p>
          <p>{profile.location} · {profile.availability}</p>
        </div>
      </div>
    </footer>
  );
}
