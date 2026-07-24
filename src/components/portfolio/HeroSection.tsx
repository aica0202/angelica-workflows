import { motion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { credibility, profile } from "@/data/portfolio";
import { GradientButton } from "./GradientButton";
import { SocialLinks } from "./SocialLinks";
import { WorkflowDiagram } from "./WorkflowDiagram";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-radial-hero" />
      <div className="absolute inset-0 grid-lines opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              AI Automation Specialist • Marketing Operations
            </div>

            <p className="mt-6 text-sm md:text-base text-muted-foreground">Hi, I&apos;m Angelica Unclara.</p>

            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold leading-[1.05] tracking-tight text-gradient">
              I build intelligent workflows that turn repetitive operations into reliable automated systems.
            </h1>

            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              I combine hands-on marketing operations experience with workflow automation, AI tools, APIs, OCR, and data
              processing to streamline email, document, spreadsheet, CRM, database, and team communication workflows.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects">
                <GradientButton icon={<ArrowRight className="h-4 w-4" />}>
                  Explore My Automation Projects
                </GradientButton>
              </a>
              <a href={profile.resumeUrl}>
                <GradientButton variant="secondary" icon={<Download className="h-4 w-4" />}>
                  Download Resume
                </GradientButton>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <SocialLinks />
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {profile.location}
                <span className="mx-1 opacity-40">·</span>
                {profile.availability}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <WorkflowDiagram />
          </motion.div>
        </div>

        {/* Credibility cards */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {credibility.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover relative rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm"
            >
              <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
