import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl text-charcoal sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-charcoal/70">{description}</p>}
    </Reveal>
  );
}
