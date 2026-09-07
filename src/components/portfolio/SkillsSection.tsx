import { motion } from "motion/react";
import { Workflow, Sparkles, Plug, Database, Mailbox, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Sparkles,
  Plug,
  Database,
  Mailbox,
};

import { SectionHoverDot } from "./SectionHoverDot";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <SectionHoverDot label="Skills" sectionId="skills" />
      <div className="absolute inset-0 bg-radial-section" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Capabilities"
          title="Skills Built Around Real Business Workflows"
          description="Grouped by how they actually get used — no percentage bars, just the toolkit and the context it applies to."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Workflow;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover group relative rounded-2xl border border-border bg-card/70 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-card-elevated/70 px-3 py-1 text-[11px] font-medium text-foreground/85 transition-colors group-hover:border-accent/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
