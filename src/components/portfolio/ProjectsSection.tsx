import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { SectionHoverDot } from "./SectionHoverDot";

export function ProjectsSection() {
  return (
    <section id="projects" className="group relative py-24 md:py-32 overflow-hidden">
      <SectionHoverDot label="Projects" sectionId="projects" />
      <div className="absolute inset-0 bg-radial-section" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Practical Automations for Real Operational Problems"
          description="Each project describes a real workflow, the manual bottleneck it addressed, and the tools and validation logic used to make it reliable."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
