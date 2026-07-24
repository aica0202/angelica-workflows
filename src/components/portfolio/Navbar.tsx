import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { GradientButton } from "./GradientButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg gradient-primary text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.7)]">
              {profile.initials}
            </span>
            <span className="text-sm font-semibold tracking-wide text-foreground group-hover:text-accent transition-colors">
              {profile.fullName}
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-active={active === l.href.replace("#", "")}
                  className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors data-[active=true]:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex">
            <GradientButton
              onClick={() => window.open(profile.resumeUrl, "_blank")}
              icon={<Download className="h-4 w-4" />}
              className="px-5 py-2.5"
            >
              View Resume
            </GradientButton>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-2 animate-in fade-in slide-in-from-top-4 duration-300">
            <ul className="flex flex-col gap-1 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <GradientButton
                  onClick={() => {
                    setOpen(false);
                    window.open(profile.resumeUrl, "_blank");
                  }}
                  icon={<Download className="h-4 w-4" />}
                  className="w-full"
                >
                  View Resume
                </GradientButton>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
