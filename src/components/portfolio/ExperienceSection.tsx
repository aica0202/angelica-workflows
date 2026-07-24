import { motion } from "motion/react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-section overflow-hidden">
      <div className="absolute inset-0 bg-radial-section" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Business Operations Experience Enhanced by Automation"
        />

        <div className="relative">
          <div
            className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent"
            aria-hidden
          />
          <ul className="space-y-10">
            {experience.map((item, idx) => (
              <motion.li
                key={item.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                <span className="absolute left-0 md:left-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full gradient-primary text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.7)]">
                  <Briefcase className="h-4 w-4" />
                </span>

                <div className="card-hover group rounded-2xl border border-border bg-card/70 p-6 md:p-8 backdrop-blur">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.company}</p>
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">{item.summary}</p>

                  <ul className="mt-6 grid gap-3">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
