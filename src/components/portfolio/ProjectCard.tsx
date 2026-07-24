import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";
import { StatusBadge } from "./StatusBadge";
import { GradientButton } from "./GradientButton";

export function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      className="card-hover animated-border group relative rounded-3xl border border-border bg-card/70 p-6 md:p-8 backdrop-blur"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Project {String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-2 text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Business Problem</h4>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solution</h4>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{project.solution}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Workflow</h4>
        <ol className="mt-3 flex flex-wrap gap-2">
          {project.workflow.map((step, i) => (
            <li
              key={step}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card-elevated/70 px-2.5 py-1 text-[11px] text-foreground/85"
            >
              <span className="text-accent font-mono">{String(i + 1).padStart(2, "0")}</span>
              {step}
              {i < project.workflow.length - 1 && <ArrowRight className="h-3 w-3 text-muted-foreground/60" />}
            </li>
          ))}
        </ol>
      </div>

      {project.categories && (
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Categories</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.categories.map((c) => (
              <span key={c} className="rounded-full bg-primary/15 text-cyan-100 border border-primary/30 px-2.5 py-0.5 text-[11px]">
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tools Used</h4>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tools.map((t) => (
              <span key={t} className="rounded-md bg-card-elevated/80 border border-border px-2 py-0.5 text-[11px] text-foreground/85">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Skills Demonstrated</h4>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.skills.map((s) => (
              <span key={s} className="rounded-md border border-accent/25 bg-accent/10 px-2 py-0.5 text-[11px] text-cyan-100">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {project.note && (
        <p className="mt-5 rounded-xl border border-border bg-background/40 px-4 py-3 text-xs italic leading-relaxed text-muted-foreground">
          Note: {project.note}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <GradientButton variant="secondary" icon={<Github className="h-4 w-4" />} className="py-2 px-4 text-xs">
              GitHub
            </GradientButton>
          </a>
        )}
        {project.caseStudyUrl && (
          <a href={project.caseStudyUrl}>
            <GradientButton icon={<ExternalLink className="h-4 w-4" />} className="py-2 px-4 text-xs">
              Case Study
            </GradientButton>
          </a>
        )}
      </div>
    </motion.article>
  );
}
