import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ProcessSection } from "@/components/portfolio/ProcessSection";
import { TechStackSection } from "@/components/portfolio/TechStackSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AicaDev | AI Automation & Marketing Ops Portfolio" },
      {
        name: "description",
        content:
          "AicaDev builds AI-powered automation for marketing operations — n8n workflows, OCR document processing, API integrations, and reliable data pipelines.",
      },
      { property: "og:title", content: "AicaDev | AI Automation & Marketing Ops Portfolio" },
      {
        property: "og:description",
        content:
          "AI Automation Specialist and Marketing Operations professional building workflow automation with n8n, Python, APIs, and OCR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://angelica-workflows.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://angelica-workflows.lovable.app/" }],
  }),
});


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ProcessSection />
        <TechStackSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
