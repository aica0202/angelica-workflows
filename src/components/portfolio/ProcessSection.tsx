import { motion } from "motion/react";
import {
  Search,
  GitBranch,
  Wrench,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { processSteps } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Search,
  GitBranch,
  Wrench,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
};

import { SectionHoverDot } from "./SectionHoverDot";

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-section overflow-hidden">
      <SectionHoverDot label="Process" sectionId="process" />
      <div className="absolute inset-0 bg-radial-section" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Process"
          title="How I Build Reliable Automations"
          description="A repeatable six-step approach — from mapping the real workflow to monitoring what actually happens after launch."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Search;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover group relative rounded-2xl border border-border bg-card/70 p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-bright/40 to-transparent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
