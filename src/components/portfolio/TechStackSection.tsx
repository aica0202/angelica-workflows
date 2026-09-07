import { motion } from "motion/react";
import { techGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SectionHoverDot } from "./SectionHoverDot";

export function TechStackSection() {
  return (
    <section id="tech" className="group relative py-24 md:py-32 overflow-hidden">
      <SectionHoverDot label="Tech Stack" sectionId="tech" />
      <div className="absolute inset-0 bg-radial-section" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tools and Technologies"
          title="Technologies I Use to Build and Improve Workflows"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {techGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover group relative rounded-2xl border border-border bg-card/70 p-6 backdrop-blur"
            >
              <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                {g.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg border border-border bg-card-elevated/70 px-3 py-1.5 text-xs font-medium text-foreground/85 transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
