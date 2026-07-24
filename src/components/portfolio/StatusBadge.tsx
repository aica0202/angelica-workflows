import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  "Working Prototype": "from-blue-500/20 to-cyan-500/20 text-cyan-200 border-cyan-400/30",
  "Tested Prototype": "from-blue-500/20 to-emerald-500/15 text-cyan-100 border-blue-400/30",
  "In Development": "from-amber-400/15 to-blue-500/15 text-amber-100 border-amber-400/30",
  "Operational Data Project": "from-blue-600/20 to-indigo-500/20 text-blue-100 border-blue-400/30",
  "Portfolio Project": "from-slate-500/15 to-blue-500/15 text-slate-100 border-slate-400/30",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border bg-gradient-to-r px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
        styles[status] ?? "from-blue-500/15 to-cyan-500/15 text-cyan-100 border-blue-400/30",
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
      {status}
    </span>
  );
}
