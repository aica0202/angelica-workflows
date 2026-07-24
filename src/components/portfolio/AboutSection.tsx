import { motion } from "motion/react";
import { Layers, ShieldCheck, Users, TrendingUp } from "lucide-react";
import { principles } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const icons = [Layers, ShieldCheck, Users, TrendingUp];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-section overflow-hidden">
      <div className="absolute inset-0 bg-radial-section" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Operations Experience Meets Intelligent Automation"
              className="mb-0"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I am a Marketing Operations professional transitioning deeper into AI and workflow automation. My
                experience managing direct-mail operations, customer data, database processing, quality assurance, email
                workflows, spreadsheets, file validation, and team communications gives me a strong understanding of how
                business processes work behind the scenes.
              </p>
              <p>
                Instead of automating tasks without understanding the process, I first study the complete workflow,
                identify bottlenecks, document requirements, define validation rules, and build reliable automation
                with human-review checkpoints where necessary.
              </p>
              <p className="text-foreground/90">
                My goal is to create automation that is practical, maintainable, accurate, and aligned with the people
                who use it.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-hover group relative rounded-2xl border border-border bg-card/70 p-6 backdrop-blur"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-primary text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
