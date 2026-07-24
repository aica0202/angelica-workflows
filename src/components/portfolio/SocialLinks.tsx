import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const links = [
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  ];
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card-elevated/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-accent hover:border-accent/50 hover:shadow-[0_10px_30px_-14px_rgba(34,211,238,0.6)]"
        >
          <Icon className={cn("h-4 w-4", iconClassName)} />
        </a>
      ))}
    </div>
  );
}
