import { business } from "@/config/business";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";

export default function GiftCardBanner() {
  const { giftCardPromo } = business;
  return (
    <section className="bg-charcoal py-20 text-cream">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-6 text-center">
        <RevealText as="h2" className="text-display-sm block">
          {giftCardPromo.headline}
        </RevealText>
        <FadeIn delay={0.15} className="flex flex-col items-center gap-3">
          <p className="max-w-xl text-sm text-cream/70">{giftCardPromo.body}</p>
          <p className="mt-2 text-sm font-medium text-accent-soft">{giftCardPromo.ctaLabel}</p>
        </FadeIn>
      </div>
    </section>
  );
}
