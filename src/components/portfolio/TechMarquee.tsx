import { useState } from "react";
import { motion } from "motion/react";


type Tech = { name: string; slug?: string };

const tech: Tech[] = [
  { name: "n8n", slug: "n8n" },
  { name: "Zapier", slug: "zapier" },
  { name: "Make", slug: "make" },
  { name: "Python", slug: "python" },
  { name: "JavaScript", slug: "javascript" },
  { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css" },
  { name: "SQLite", slug: "sqlite" },
  { name: "Google Sheets", slug: "googlesheets" },
  { name: "AWS", slug: "amazonwebservices" },
  { name: "Asana", slug: "asana" },
  { name: "Slack", slug: "slack" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "ElevenLabs", slug: "elevenlabs" },
  { name: "Claude", slug: "claude" },
  { name: "Vapi", slug: "vapi" },
  { name: "Excel", slug: "microsoftexcel" },
  { name: "Gmail", slug: "gmail" },
  { name: "Outlook", slug: "microsoftoutlook" },
  { name: "Monday.com", slug: "mondaydotcom" },
  { name: "Pipedrive", slug: "pipedrive" },
];

function TechChip({ item, index }: { item: Tech; index: number }) {
  const [failed, setFailed] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="group mx-2 flex shrink-0 items-center gap-2.5 rounded-xl border border-border bg-card/70 px-4 py-2.5 backdrop-blur transition-colors hover:border-accent/50"
    >
      <motion.span
        className="inline-flex h-5 w-5 items-center justify-center"
        animate={{ y: [0, -4, 0], rotate: [0, 4, 0, -4, 0] }}
        transition={{
          duration: 4 + (index % 5) * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: (index % 7) * 0.25,
        }}
      >
        {item.slug && !failed ? (
          <img
            src={`https://cdn.simpleicons.org/${item.slug}`}
            alt={`${item.name} logo`}
            loading="lazy"
            width={20}
            height={20}
            className="h-5 w-5 opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-md gradient-primary text-[10px] font-bold text-primary-foreground">
            {item.name.charAt(0)}
          </span>
        )}
      </motion.span>
      <span className="whitespace-nowrap text-sm font-medium text-foreground/85 transition-colors group-hover:text-accent">
        {item.name}
      </span>
    </motion.div>
  );
}

function MarqueeRow({ direction = 1, duration = 40 }: { direction?: 1 | -1; duration?: number }) {
  return (
    <motion.div
      className="flex w-max"
      animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {[0, 1].map((dup) => (
        <div key={dup} className="flex" aria-hidden={dup === 1}>
          {tech.map((t, i) => (
            <TechChip key={`${dup}-${t.name}`} item={t} index={i} />
          ))}
        </div>
      ))}
    </motion.div>
  );
}

export function TechMarquee() {
  return (
    <div className="relative space-y-3 overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <MarqueeRow direction={1} duration={42} />
      <MarqueeRow direction={-1} duration={52} />
    </div>
  );
}

