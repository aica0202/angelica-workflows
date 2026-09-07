import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send, CheckCircle2, Linkedin, Github, Clock } from "lucide-react";
import { profile, projectTypes } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { GradientButton } from "./GradientButton";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder submission handler — connect to email / Formspree / Supabase / EmailJS / webhook / n8n later.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
  };

  const contactItems = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Linkedin, label: "LinkedIn", value: profile.linkedin, href: profile.linkedin },
    { Icon: Github, label: "GitHub", value: profile.github, href: profile.github },
    { Icon: MapPin, label: "Location", value: profile.location },
    { Icon: Clock, label: "Availability", value: profile.availability },
  ];

import { SectionHoverDot } from "./SectionHoverDot";

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <SectionHoverDot label="Contact" sectionId="contact" />
      <div className="absolute inset-0 bg-radial-contact" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Automate Work That Shouldn't Stay Manual"
          description="I am open to opportunities involving AI automation, n8n development, workflow automation, marketing technology, operations automation, document processing, and data workflows."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card/70 p-8 backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-foreground">Direct channels</h3>
            <ul className="mt-6 space-y-4">
              {contactItems.map(({ Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15 text-accent border border-border">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                      <p className="mt-0.5 text-sm text-foreground break-all">{value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="block rounded-lg p-2 -m-2 transition-colors hover:bg-white/5">
                        {content}
                      </a>
                    ) : (
                      <div className="p-2 -m-2">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="animated-border relative rounded-2xl border border-border bg-card/80 p-8 backdrop-blur"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full gradient-primary text-white shadow-[0_15px_40px_-12px_rgba(37,99,235,0.7)]">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">Message received</h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible with next steps.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required placeholder="Your full name" />
                  <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
                </div>
                <Field label="Company" name="company" placeholder="Company or organization (optional)" />

                <div>
                  <label htmlFor="projectType" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-card">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the workflow you'd like to improve..."
                    className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>

                <GradientButton
                  type="submit"
                  disabled={submitting}
                  icon={<Send className="h-4 w-4" />}
                  className="mt-2 w-full sm:w-auto"
                >
                  {submitting ? "Sending..." : "Start a Conversation"}
                </GradientButton>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
