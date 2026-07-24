import { motion } from "motion/react";
import {
  Mail,
  MessageSquare,
  FileSpreadsheet,
  FolderOpen,
  ScanLine,
  Plug,
  Database,
  Workflow,
  Inbox,
} from "lucide-react";

const nodes = [
  { id: "outlook", label: "Outlook", Icon: Inbox, x: 8, y: 12 },
  { id: "gmail", label: "Gmail", Icon: Mail, x: 8, y: 50 },
  { id: "slack", label: "Slack", Icon: MessageSquare, x: 8, y: 82 },
  { id: "n8n", label: "n8n", Icon: Workflow, x: 44, y: 45, hero: true },
  { id: "sheets", label: "Google Sheets", Icon: FileSpreadsheet, x: 80, y: 10 },
  { id: "drive", label: "Google Drive", Icon: FolderOpen, x: 80, y: 34 },
  { id: "ocr", label: "OCR", Icon: ScanLine, x: 80, y: 58 },
  { id: "api", label: "API", Icon: Plug, x: 80, y: 78 },
  { id: "db", label: "Database", Icon: Database, x: 44, y: 92 },
];

const connections: Array<[string, string]> = [
  ["outlook", "n8n"],
  ["gmail", "n8n"],
  ["slack", "n8n"],
  ["n8n", "sheets"],
  ["n8n", "drive"],
  ["n8n", "ocr"],
  ["n8n", "api"],
  ["n8n", "db"],
];

export function WorkflowDiagram() {
  const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto">
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl" />
      <div className="relative h-full w-full rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-60" />

        {/* SVG connections */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="connGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.7" />
            </linearGradient>
            <filter id="connGlow">
              <feGaussianBlur stdDeviation="0.4" />
            </filter>
          </defs>
          {connections.map(([from, to], i) => {
            const a = nodeById[from];
            const b = nodeById[to];
            return (
              <g key={`${from}-${to}`}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="url(#connGrad)"
                  strokeWidth="0.4"
                  filter="url(#connGlow)"
                  opacity="0.7"
                />
                <motion.circle
                  r="0.7"
                  fill="#22D3EE"
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [a.x, b.x],
                    cy: [a.y, b.y],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.35,
                    ease: "easeInOut",
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.div
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.06 }}
          >
            <div
              className={`float-slow flex items-center gap-2 rounded-xl border border-border bg-card-elevated/90 backdrop-blur px-3 py-2 shadow-[0_8px_24px_-12px_rgba(37,99,235,0.6)] ${
                n.hero ? "px-4 py-3 pulse-node border-accent/50" : ""
              }`}
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-md ${
                  n.hero ? "gradient-primary text-white" : "bg-primary/15 text-accent"
                }`}
              >
                <n.Icon className={n.hero ? "h-4 w-4" : "h-3.5 w-3.5"} />
              </span>
              <span className={`text-xs font-medium ${n.hero ? "text-foreground" : "text-muted-foreground"}`}>
                {n.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
