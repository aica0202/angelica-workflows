import { motion } from "motion/react";
import { GraduationCap, Compass } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SectionHoverDot } from "./SectionHoverDot";

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 md:py-32 bg-section overflow-hidden">
      <SectionHoverDot label="Education" sectionId="education" />
      <div className="absolute inset-0 bg-radial-section" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Technical Foundation and Continuous Learning"
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-hover group rounded-2xl border border-border bg-card/70 p-8 backdrop-blur"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)]">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.university} · {education.year}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{education.summary}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-hover group rounded-2xl border border-border bg-card/70 p-8 backdrop-blur"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)]">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              Currently Exploring
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {education.exploring.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-border bg-card-elevated/70 px-3 py-1 text-xs text-foreground/85"
                >
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
