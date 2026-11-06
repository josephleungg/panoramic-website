import { RevealText } from "@/components/RevealText";
import { FadeIn } from "@/components/FadeIn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <FadeIn>
          <p className={`text-eyebrow ${isDark ? "text-accent-soft" : "text-accent"}`}>{eyebrow}</p>
        </FadeIn>
      )}
      <RevealText as="h2" className={`text-display-sm mt-2 block ${isDark ? "text-cream" : "text-charcoal"}`}>
        {title}
      </RevealText>
      {description && (
        <FadeIn delay={0.15}>
          <p className={`mt-4 text-base ${isDark ? "text-cream/70" : "text-charcoal/70"}`}>{description}</p>
        </FadeIn>
      )}
    </div>
  );
}
