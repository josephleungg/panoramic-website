export function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "open" | "closed";
}) {
  const toneClasses: Record<string, string> = {
    neutral: "bg-charcoal/5 text-charcoal",
    accent: "bg-accent/15 text-accent",
    open: "bg-emerald-100 text-emerald-700",
    closed: "bg-cream/10 text-cream/60",
  };

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneClasses[tone]}`}>
      {children}
    </span>
  );
}
