export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-2xl border border-line bg-white/60 p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
